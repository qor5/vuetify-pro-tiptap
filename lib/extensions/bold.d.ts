import { BoldOptions as TiptapImageOptions } from '@tiptap/extension-bold';
import { GeneralOptions } from '../type';
export interface BoldOptions extends TiptapImageOptions, GeneralOptions<BoldOptions> {
    /** HTML attributes that should be allowed on bold elements */
    allowedAttributes?: string[];
}
export declare const Bold: import('@tiptap/core').Mark<BoldOptions, any>;
