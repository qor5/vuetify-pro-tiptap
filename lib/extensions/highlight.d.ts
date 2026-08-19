import { HighlightOptions as TiptapHighlightOptions } from '@tiptap/extension-highlight';
import { GeneralOptions } from '../type';
export interface HighlightOptions extends TiptapHighlightOptions, GeneralOptions<HighlightOptions> {
    /** HTML attributes that should be allowed on highlight elements */
    allowedAttributes?: string[];
}
export declare const Highlight: import('@tiptap/core').Mark<HighlightOptions, any>;
