const express = require('express'),
      fileUpload = require('express-fileupload'),
      app = express();

      app.use( fileUpload() );

app.put('/upload', function( req, res ){
    if( !req.files ){
          return res.status( 400 )
          .json({
                ok: false,
                err: {
                      message: 'You did not select any file'
                }
          });

          let _file = req.files._file;

          _file.mv('uploads/filename.jpg', ( err ) => {
                if( err ){
                      return res.status( 500 )
                      .json({
                            ok: true,
                            message: 'Image upload Ok'
                      });
                }
          });
    }
});

module.exports = app;
