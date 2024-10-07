export const Photos = {
    slug: 'photos',
    labels: {
        singular:'photo',
        plural: 'photos'
    },
    fields: [
        {
            name:'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media'
        },
        {
            name:'description',
            label: 'Description',
            type: 'textarea',
            
        },

    ]
}