tinymce.init({
  selector: 'textarea#basic-conf',
  paste_preprocess: function(plugin, args) {
    console.log(args.content);
    args.content = '';
  };
  skin: 'oxide-dark',
  content_css: 'dark'
  theme: 'silver',
  skin:'oxide-dark',
  plugins: [
    'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
    'searchreplace', 'wordcount', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media',
    'table', 'template', 'help'
  ],
  toolbar: 'undo redo | bold italic underline strikethrough styles fontsize| alignleft aligncenter alignright alignjustify  special character| ' +
    ' bullist numlist outdent indent | link image | print preview fullscreen | ' +
    'forecolor backcolor anchor | help',
  fontsize_formats: "8pt 9pt 10pt 11pt 12pt 14pt 18pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",
  menubar: 'file view insert format tools table help',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});