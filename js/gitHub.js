function getGitHubLink(username) {
  if (username) {
    return `https://github.com/${username}`;
  }
}
module.exports = getGitHubLink;
