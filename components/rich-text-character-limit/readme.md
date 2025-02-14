# Rich Text Character Limit

The Rich Text Character Limit component enables the ability to add content character limits to rich text.



https://user-images.githubusercontent.com/20684594/195820053-dcc05c91-b5bc-45db-aa30-9061a16d0d2e.mp4



`RichTextCharacterLimit` extends `RichText` and can accept all the same props as `RichText` does. Please refer to the [official RichText documentation](https://developer.wordpress.org/block-editor/reference-guides/richtext/).

## Usage

```js
import { RichTextCharacterLimit } from '@10up/block-components';

function BlockEdit(props) {
    const { attributes, setAttributes } = props;
    const { title } = attributes;

    return (
        <RichTextCharacterLimit
            limit={30}
            enforce={true}
            tagName="h2"
            value={title}
            placeholder={ __( 'Enter some text', NAMESPACE ) }
            onChange={(title) => setAttributes({title})}
            allowedFormats={[
                'core/bold',
                'core/link'
            ]}
        />
    )
}
```

## Props

| Name       | Type              | Default  |  Description                                                   |
| ---------- | ----------------- | -------- | -------------------------------------------------------------- |
| `limit` | `number` | `100` | Maximum amount of characters |
| `enforce` | `boolean` | `true` | Enforce the character limit by restricting content |
