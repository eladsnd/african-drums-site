/**
 * Singleton desk structure for Sanity Studio
 */

import {type DocumentDefinition} from 'sanity'
import {type StructureResolver} from 'sanity/structure'

export const singletonPlugin = (types: string[]) => {
  return {
    name: 'singletonPlugin',
    document: {
      newDocumentOptions: (prev, {creationContext}) => {
        if (creationContext.type === 'global') {
          return prev.filter((templateItem) => !types.includes(templateItem.templateId))
        }
        return prev
      },
      actions: (prev, {schemaType}) => {
        if (types.includes(schemaType)) {
          return prev.filter(({action}) => action !== 'duplicate')
        }
        return prev
      },
    },
  }
}

export const pageStructure = (typeDefArray: DocumentDefinition[]): StructureResolver => {
  return (S) => {
    const singletonItems = typeDefArray.map((typeDef) => {
      return S.listItem()
        .title(typeDef.title!)
        .icon(typeDef.icon)
        .child(S.editor().id(typeDef.name).schemaType(typeDef.name).documentId(typeDef.name))
    })

    const defaultListItems = S.documentTypeListItems().filter(
      (listItem) => !typeDefArray.find((singleton) => singleton.name === listItem.getId()),
    )

    return S.list()
      .title('תוכן האתר')
      .items([...singletonItems, S.divider(), ...defaultListItems])
  }
}
