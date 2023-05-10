import { PostFormTextAreaProps } from "./PostFormTextArea";

export default function PostFormTextArea({ onPostContent, onSetPostContent, placeholder}: 
  PostFormTextAreaProps
): JSX.Element {

  const formTextAreaStyles = {
    width: "calc(100% - 20px)",
    padding: "10px",
    borderColor: "#bbb",
  }

  return (
    <>
      <textarea 
        style={formTextAreaStyles} 
        value={onPostContent}
        onChange={(e) => onSetPostContent(e)}
        placeholder={placeholder}
      />
    </>
  );
}