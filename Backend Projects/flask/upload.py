from flask import *
app = Flask(__name__)

@app.route('/')
def upload():
   return render_template('upload.html')
	
@app.route('/uploader', methods = ['POST'])
def upload_file():
   if request.method == 'POST':
      f = request.files['file']
      f.save(f.filename)
      return 'file uploaded successfully'
		
if __name__ == '__main__':
   app.run(debug = True)
