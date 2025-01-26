// export const navigationData = [
//   {
//     title: 'Guides',
//     links: [
//       { title: 'Introduction', href: '/' },
//       { 
//         title: 'Quickstart', 
//         href: '/abc/quickstart' 
//       },
//       { title: 'SDKs', href: '/sdks' },
//     ],
//   },
//   {
//     title: 'Resources',
//     links: [
//       { title: 'Contacts', href: '/contacts' },
//       { title: 'Conversations', href: '/conversations' },
//     ],
//   },
// ]
export default {
  "Getting started": [
    ["Installation", "/"],
  ] as const,
  "Core concepts": [
    ["Styling with utility classes", "/contacts"],
  ] as const,
};
