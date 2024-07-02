import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const TextEditor = () => {
  // Initialize state using useState hook
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // Function to handle editor state changes
  const onEditorStateChange = (newState) => {
    setEditorState(newState);
  };

  // Convert the current content state to HTML
  const htmlContent = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  // Log the HTML content to the console (for debugging)
  // console.log(htmlContent);

  return (
    <div>
      {/* Render the WYSIWYG editor */}
      <Editor
        toolbar={{
          options: ['inline', 'list', 'textAlign',  'embedded', 'remove', 'history']
        }}
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
};

export default TextEditor;
