/**
* <%= name %>
* <%= description %>
*/

import DrupalAttribute from 'drupal-attribute'

import './<%= tag _%>.library.js'
import Template from './<%= tag _%>.twig'

export default {
  title: '<%= title _%>',
  parameters: {
<%_ if (parameters.includes("paddings")) { -%>
    paddings: { disable: true }
<%_ } -%>
  },
<% if (parameters.includes("decorator")) { -%>
  decorators: [story => `<div style="max-width:1200px">${story()}</div>`]
<% } -%>
}

// import sub-components
// ---------------------
// import SubTemplate from '../component/component.twig'
// import { Default as SubStory } from '../component/component.stories.js'
// const SubComponent = () => {
//   return SubTemplate({
//     ...SubStory.args
//   })
// }

const Component = ({ label, ...args }) => {
  return Template({ label, ...args })
}
<%_ if (stories.length) { -%>
<% stories.forEach(function(obj) { %>
// <%= obj.name %>
export const <%= obj.name %> = {
  name: '<%= obj.label _%>',
  render: Component,
  args: {
    label: '<%= obj.label _%>',
    attributes: new DrupalAttribute()
  }
}
<% }) -%>
<%_ } else { %>
export const <%= name %> = {
  render: Component,
  args: {
    label: '<%= label _%>',
    attributes: new DrupalAttribute()
  }
}
<%_ } -%>