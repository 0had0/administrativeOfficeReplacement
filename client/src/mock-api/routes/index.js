const routes = function () {
  this.get("/api/test", () => {
    const result = { name: "Administrative Office Replacement" };
    return {
      result,
      status: 200,
    };
  });
  this.post("/api/login", () => ({
    result: { id: 1 },
    status: 200,
  }));
};

export default routes;
