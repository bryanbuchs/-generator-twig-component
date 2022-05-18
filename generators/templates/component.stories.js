import DrupalAttribute from 'drupal-attribute'

// include this component's CSS, JS, and HTML
import './<%= tag _%>.library.js'
import Template from './<%= tag _%>.twig'

export default {
  title: '<%= title _%>',
  parameters: {}
}

const Component = ({ label, ...args }) => {
  return Template({ label, ...args })
}

export const Default = Component.bind({})
Default.args = {
  label: '<%= title _%>',
  attributes: new DrupalAttribute(),
  title_attributes: new DrupalAttribute(),
  title_prefix: '',
  title_suffix: '',
}
<% stories.forEach(function(obj) { %>
export const <%= obj.name %> = Component.bind({})
<%= obj.name %>.args = {
  ...Default.args,
  label: '<%= obj.title _%>',
  attributes: new DrupalAttribute(),
  title_attributes: new DrupalAttribute(),
}
<% }) %>