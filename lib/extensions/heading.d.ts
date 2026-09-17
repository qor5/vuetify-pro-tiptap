import { HeadingOptions as TiptapHeadingOptions } from '@tiptap/extension-heading';
import { GeneralOptions } from '../type';
export interface HeadingOptions extends TiptapHeadingOptions, GeneralOptions<HeadingOptions> {
    /** HTML attributes that should be allowed on heading elements */
    allowedAttributes?: string[];
}
export declare const Heading: import('@tiptap/core').Node<HeadingOptions, any>;
