# S3 File Upload

A TypeScript-friendly Node.js library for uploading files to AWS S3 with easy configuration and seamless integration. Version 1.0.0

Features

## Features

- ☁️ Upload files to AWS S3
- 🔒 Secure file handling with AWS SDK
- 📦 Supports multiple file types
- ⚡ Fast and efficient uploads
- 📝 TypeScript support
- 🌍 Environment-based configuration

## Usage

### Step 1. Use In Frontend

In your front-end, you just call this API or Lambda and get the URL back then make a simple PUT request to the endpoint you provided.

The payload have to be your actual file not some kind of multipart data.

Here is a simple React component that does this

```typescript
import React, { useState } from "react";

function S3Uploader() {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    // Get pre-signed URL from backend
    fetch("/upload", {
      method: "POST",
      body: {
        fileName: file.name,
        fileType: file.type,
        folder: "folder-name", // it can be anything like profile, document, ticket etc
      },
    })
      .then((response) => response.json())
      .then(({ url }) => {
        // Upload directly to S3
        return fetch(url, {
          method: "PUT",
          body: file,
          headers: { "Content-Type": file.type },
        });
      })
      .then(() => alert("File uploaded successfully"))
      .catch((error) => console.error("Upload failed:", error));
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
```

This component can be used to upload files to an s3 bucket securely.

### Step 2. Get Object Securely

Object File can be anything it can be .png, .jpg, .pdf etc

```typescript
import React, { useEffect, useState } from "react";

function S3Viewer() {
  const [fileUrl, setFileUrl] = useState("");
  const [fileType, setFileType] = useState("");

  useEffect(() => {
    const fetchFileUrl = async () => {
      try {
        const response = await fetch("/view", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fileName: "example.pdf", // it can be any extension (.pdf, .png, .jpg, .jpeg) etc
            fileType: "pdf", // File type should be accroding to the fileName for example the given file is example.pdf so fileType should be pdf
            folder: "folder-name", // it can be anything like profile, document, ticket etc
          }),
        });

        const { url } = await response.json();
        setFileUrl(url);
        setFileType("application/pdf"); // Replace this dynamically if available in the response
      } catch (error) {
        console.error("Failed to get file URL:", error);
      }
    };

    fetchFileUrl();
  }, []);

  return (
    <div className="p-4">
      {fileUrl ? (
        <div className="mt-4">
          <p>File Preview:</p>
          {fileType.startsWith("image/") ? (
            <img src={fileUrl} alt="File Preview" className="max-w-xs" />
          ) : (
            <iframe
              src={fileUrl}
              title="File Preview"
              className="w-full h-96 border"
            ></iframe>
          )}
        </div>
      ) : (
        <p>Loading file...</p>
      )}
    </div>
  );
}

export default S3Viewer;
```

## Error Handling

The middleware provides standard HTTP status codes for different scenarios:

- 401 Unauthorized: No token or invalid token
- 403 Forbidden: Insufficient role permissions
- 500 Internal Server Error: Server-side errors

## Publishing to NPM

To publish this library to NPM:

1. Make sure you add .npmrc file with our registry Url:

2. Run NPM Command:

```bash
vsts-npm-auth -config
```

3. Run NPM Command For authentication:

```bash
npm install -g vsts-npm-auth
```

4. Publish to NPM:

```bash
npm publish
```
