export default (post, updatedValues) => {
  const { publication, author, counters } = post
  const {
    teaser, metaTitle, description, keywords, addTitle,
    addLogo, createType, content
  } = updatedValues
  return {
    publication: {
      image: updatedValues.image,
      status: publication.status,
      title: publication.title,
      content,
      updated: publication.updated,
      published: publication.published,
      tag: publication.tag
    },
    author: {
      name: author.name,
      photo: author.photo
    },
    counters,
    seo: {
      teaser,
      createType,
      addTitle,
      addLogo,
      preview: updatedValues.preview
    },
    meta: {
      title: metaTitle,
      description,
      keywords: keywords.split(',')
    }
  }
}
