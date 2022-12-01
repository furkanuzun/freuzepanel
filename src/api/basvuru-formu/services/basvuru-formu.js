"use strict";

/**
 * basvuru-formu service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::basvuru-formu.basvuru-formu",
  ({ strapi }) => ({
    // Method 1: Creating an entirely custom action

    async create(data) {
      const response = await strapi.entityService.create(
        "api::basvuru-formu.basvuru-formu",
        {
          data: data.data,
        }
      );
      await strapi.plugins["email"].services.email.send({
        to: "freuzecoffee@gmail.com",
        from: "freuzecoffee@gmail.com",
        replyTo: "freuzecoffee@gmail.com",
        subject: "Yeni İş Başvuru Formu",
        text: "Yeni bir iş başvurusu var. Detayları panelden görüntüleyebilirsiniz.",
      });
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
  })
);
