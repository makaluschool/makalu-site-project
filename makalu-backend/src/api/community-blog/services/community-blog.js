'use strict';

/**
 * community-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::community-blog.community-blog');
