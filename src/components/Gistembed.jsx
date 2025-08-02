function GistEmbed({ gistId }) {
  return (
    <div>
      <script src={`https://gist.github.com/${gistId}.js`}></script>
    </div>
  );
}
export default GistEmbed;