import { UnderlineOptions as TiptapUnderlineOptions } from '@tiptap/extension-underline';
import { GeneralOptions } from '../type';
export interface UnderlineOptions extends TiptapUnderlineOptions, GeneralOptions<UnderlineOptions> {
    /** HTML attributes that should be allowed on underline elements */
    allowedAttributes?: string[];
}
export declare const Underline: import('@tiptap/core').Mark<UnderlineOptions, any>;
