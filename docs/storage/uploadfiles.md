# Upload files 

## Dashboard 

1 - Go to the Storage page in the Dashboard.<br>
2 - Click Upload File.<br>
3 - Select the file you want to upload

## Here's an example of how to implement

```dart
File? selectedFile;
String? uploadStatus;

Future<void> selectFile() async {
final result = await backappx.pickFile();
setState(() {
    selectedFile = result;
});
}

Future<void> uploadFile() async {
if (selectedFile == null) {
    return;
}

final projectId = 'your-project-id-here';

setState(() {
    uploadStatus = 'Uploading file...';
});

final response = await backappx.addFile(selectedFile!, projectId);

setState(() {
    uploadStatus = 'File uploaded: ${response.statusCode} ${response.reasonPhrase}';
    selectedFile = null;
});
}
```


