const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::iletisim.iletisim", ({ strapi }) => ({
  // Method 1: Creating an entirely custom action

  async create(data) {
    console.log("--data", data);
    const response = await strapi.entityService.create(
      "api::iletisim.iletisim",
      {
        data: data.data,
      }
    );
    await strapi.plugins["email"].services.email.send({
      to: "freuzecoffee@gmail.com",
      from: "freuzecoffee@gmail.com",
      replyTo: "freuzecoffee@gmail.com",
      subject: "Yeni İletişim Formu",
      text: "Yeni bir iletişim formu dolduruldu. Detayları panelden görüntüleyebilirsiniz.",
    });
    console.log("--response", response);
    return response;
  },
  // Method 2: Wrapping a core service (leaves core logic in place)
  async find(...args) {
    const { results, pagination } = await super.find(...args);
    return { results, pagination };
  },

  async findOne(...args) {
    const { results, pagination } = await super.findOne(...args);
    return { results, pagination };
  },
}));
