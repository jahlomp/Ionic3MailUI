module.exports = {
    copyFroalaEditorCss: {
        src: ['{{ROOT}}/node_modules/froala-editor/css/froala_editor.pkgd.min.css', '{{ROOT}}/node_modules/froala-editor/css/froala_style.min.css'],
        dest: '{{BUILD}}'
    },
    copyFroalaEditorJs: {
        src: '{{ROOT}}/node_modules/froala-editor/js/froala_editor.pkgd.min.js',
        dest: '{{WWW}}/assets/froala-editor'
    },
    copyJQueryJs: {
        src: '{{ROOT}}/node_modules/jquery/dist/jquery.min.js',
        dest: '{{WWW}}/assets/jquery'
    },
    copyFontAwesome: {
        src: '{{ROOT}}/node_modules/font-awesome/css/font-awesome.min.css',
        dest: '{{BUILD}}'
    },
    copyFontsAwesomeFonts: {
        src: '{{ROOT}}/node_modules/font-awesome/fonts/*',
        dest: '{{WWW}}/fonts'
    }
}