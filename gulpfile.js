//Carrega informações do projeto
var projeto = require('./projeto.json');
var pkg = require('./package.json');
var gulp = require('gulp');
var cp = require('child_process');
var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

const browserSync = require('browser-sync');

const messages = {
    jekyllBuild: 'Compilando arquivos HTML com Jekyll',
    imageMin: 'Minificando imagens $ Imagemin',
    compass: 'Executando compass',
    scripts: 'Carregando scripts',
    minify: 'Minificando scripts',
    sync: 'Sincronizando arquivos'
};

function swallowError(error) {
    console.log(error.toString());
    this.emit('end');
}

gulp.task('imagemin', function() {
    const imagemin = require('gulp-imagemin');
    browserSync.notify(messages.imageMin);
    gulp.src([projeto.assets_dir + '/_img/**/*.*', '!' + projeto.assets_dir + '/_img/sprite/**/*.png'])
        .pipe(imagemin())
        .pipe(gulp.dest(projeto.images_dir))
});

gulp.task('scripts', function() {
    browserSync.notify(messages.scripts);  
    uglify = require('gulp-uglifyjs');
    concat = require('gulp-concat');
    gulp.src(['assets/_js/_material/**/*.js',
              'assets/_js/libs/**/*.js'])
    .pipe(uglify('external.min.js',{
        outSourceMap: true,
        mangle: false, 
        compress: true, 
        output: { 
            beautify: false
        }
    }))
    .pipe(gulp.dest(projeto.dist_dir + '/js'));
});

gulp.task('minify', function() {
    uglify = require('gulp-uglifyjs');
    browserSync.notify(messages.minify);
    gulp.src([projeto.assets_dir + '/_js/geral.js'])
        .pipe(uglify('main.min.js', {
            outSourceMap: true
        }))
        .on('error', swallowError)
        .pipe(gulp.dest(projeto.dist_dir + '/js'));
});

gulp.task('jsSemCompressao', function() {
    browserSync.notify(messages.minify);
    gulp.src([projeto.assets_dir + '/_js/geral.js'])
        .on('error', swallowError)
        .pipe(gulp.dest(projeto.dist_dir + '/js'));
});

gulp.task('compass', function() {
    compass = require('gulp-compass');
    browserSync.notify(messages.compass);
    gulp.src(projeto.sass_dir + '/*.scss')
        .pipe(compass({
            css: projeto.css_dir,
            generated_images_path: projeto.images_dir,
            http_path: projeto.http_path,
            image: projeto.sprite_load_path,
            sass: projeto.sass_dir,
            style: 'compressed',
            sourcemap: true,
            relative: true
        }))
        .on('error', swallowError);
});

var assets = projeto.assets_dir,
    local = projeto.local_dir,
    fontsAssets = projeto.fonts_assets,
    fontsDist = projeto.fonts_dist;
gulp.task('sync', function() {
    browserSync.notify(messages.sync);

    gulp.src(fontsAssets + '/**/*.*', {
            base: fontsAssets
        })
        .pipe(gulp.dest(fontsDist));
});

gulp.task('jekyll-build', function(done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn(jekyll, ['build'], {
            stdio: 'inherit'
        })
        .on('close', done); 
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
    browserSync.reload();
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: '_site'
        },
        port: 3002,
        startPath: projeto.baseUrl,
        ghostMode: true
    });
});

gulp.task('default', ['jekyll-rebuild'], function() {
    var reload = browserSync.reload;
    var watch = require('gulp-watch');

    ambiente = projeto.local_dir;
    gulp.start(['compass', 'scripts', 'jsSemCompressao', 'imagemin', 'sync', 'browser-sync']);

    gulp.watch(projeto.javascripts_dir + '/geral.js', ['jsSemCompressao']);
    gulp.watch(projeto.javascripts_dir + '/**/*.js', ['scripts']);
    gulp.watch(projeto.sass_dir + '/**/*.scss', ['compass']);
    gulp.watch(projeto.assets_dir + '/_img/**/*.jpg', ['imagemin']);
    gulp.watch(projeto.assets_dir + '/_img/**/*.png', ['imagemin']);
    gulp.watch(projeto.assets_dir + '/_img/**/*.gif', ['imagemin']);
    gulp.watch(projeto.assets_dir + '/_img/**/*.svg', ['imagemin']);
    gulp.watch(projeto.sprite_load_path + '/sprite/**/*.png', ['compass']);

    gulp.watch([
        '*.html',
        '_layouts/**/*.html',
        '_includes/**/*.html',
        'dist/js/main.min.js',
        'dist/img/**/*.*',
        'dist/js/external.min.js',
        'dist/css/*.css'
    ], ['jekyll-rebuild']);

});