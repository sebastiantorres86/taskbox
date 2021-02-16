module.exports = {
  stories: [
    //👇 Location of our stories
    '../src/components/**/*.stories.js'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app'
  ]
}
