import zeabur from "@zeabur/astro-adapter/serverless";

export default {
  adapter: zeabur(),
  output: "server",
};
