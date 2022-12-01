const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::iletisim.iletisim",
  ({ strapi }) => ({
    async create(ctx) {
      return await strapi
        .service("api::iletisim.iletisim")
        .create(ctx.request.body);
    },

    // Method 2: Wrapping a core action (leaves core logic in place)
    async find(ctx) {
      const { data, meta } = await super.find(ctx);
      return { data, meta };
    },
    async findOne(ctx) {
      const { data, meta } = await super.findOne(ctx);
      return { data, meta };
    },
  })
);
