import { config, collection, fields, singleton } from "@keystatic/core";
import { ColorPicker } from "keystatic-components";

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
    pages: collection({
      label: "Site Pages",
      slugField: "title",
      path: "content/pages/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "public/images/pages",
              publicPath: "/images/pages",
            },
          },
        }),
        cover: fields.object({
          imageSrc: fields.image({
            label: "Cover Image",
            directory: "public/images/pages",
            publicPath: "/images/pages",
          }),
          title: fields.text({
            label: "Title",
            description: "Text to display above the cover element",
          }),
        }),
      },
    }),
  },
  singletons: {
    header: singleton({
      label: "Header",
      path: "content/header",
      schema: {
        logo: fields.object({
          alt: fields.text({ label: "Logo Alt" }),
          url: fields.image({
            label: "Logo Image",
            directory: "public/images/",
            publicPath: "/images/",
          }),
        }),
        pages: fields.array(
          fields.relationship({
            label: "Linked Pages",
            collection: "pages",
            validation: { isRequired: true },
          }),
          {
            label: "Linked Pages",
            itemLabel: (item) => item.value || "Please provide a page",
          }
        ),
        cta: fields.object({
          text: fields.text({ label: "CTA Text" }),
          icon: fields.select({
            label: "CTA Icon",
            options: [
              { label: "File Input", value: "FileInput" },
              { label: "Log in", value: "LogInIcon" },
            ],
            defaultValue: "FileInput",
          }),
          link: fields.text({
            label: "CTA link",
            description: "Can be absolute or relative",
          }),
        }),
      },
    }),
    home: singleton({
      label: "Home content",
      path: "content/home",
      schema: {
        hero: fields.object(
          {
            title: fields.text({ label: "Hero title" }),
            image: fields.image({
              label: "Hero title image",
              directory: "public/images/home",
              publicPath: "/images/home",
            }),
            subtitle: fields.text({ label: "Hero subtitle" }),
            highlights: fields.array(
              fields.object({
                image: fields.image({
                  label: "Highlight cover image",
                  directory: "public/images/home",
                  publicPath: "/images/home",
                }),
                title: fields.text({ label: "Highlight title" }),
                content: fields.markdoc({
                  label: "Highlight Content",
                  options: {
                    image: {
                      directory: "public/images/home",
                      publicPath: "/images/home",
                    },
                  },
                }),
              }),
              {
                label: "Hero cards",
                itemLabel: (props) => props.fields.title.value,
              }
            ),
          },
          {
            label: "Hero section",
          }
        ),
        sections: fields.blocks(
          {
            card: {
              label: "Cards section",
              schema: fields.object({
                title: fields.text({ label: "Section title" }),
                subtitle: fields.text({ label: "Section subtitle" }),
                background: fields.select({
                  label: "Background color",
                  options: [
                    { label: "Primary", value: "#275C26" },
                    { label: "Secondary", value: "#559553" },
                  ],
                  defaultValue: "#275C26",
                }),
                cards: fields.array(
                  fields.object({
                    image: fields.image({
                      label: "Card cover image",
                      directory: "public/images/home",
                      publicPath: "/images/home",
                    }),
                    title: fields.text({ label: "Card title" }),
                    content: fields.markdoc({
                      label: "Card Content",
                      options: {
                        image: {
                          directory: "public/images/home",
                          publicPath: "/images/home",
                        },
                      },
                    }),
                  }),
                  {
                    label: "Section cards",
                    itemLabel: (props) => props.fields.title.value,
                  }
                ),
              }),
            },
          },
          { label: "Content blocks" }
        ),
      },
    }),
  },
});
