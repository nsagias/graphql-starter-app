
export default function PostFormTextArea({}) {

  const formTextAreaStyles = {
    width: "calc(100% - 20px)",
    padding: "10px",
    borderColor: "#bbb",
  }

  return (
    <>
      <textarea style={formTextAreaStyles} value={""} placeholder="Create New Post!!" />
    </>
  );
}