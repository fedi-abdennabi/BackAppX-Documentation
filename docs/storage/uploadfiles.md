# Upload files 

## Dashboard 

1 - Go to the Storage page in the Dashboard.<br>
2 - Click Upload File.<br>
3 - Select the file you want to upload

## Here's an example of how to implement

```dart

final selectedFile = await backappx.pickFile();
final projectId = 'your-project-id-here';

final response = await backappx.addFile(selectedFile, projectId);

```


