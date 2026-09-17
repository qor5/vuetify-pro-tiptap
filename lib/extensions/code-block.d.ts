import { CodeBlockOptions as TiptapCodeBlockOptions } from '@tiptap/extension-code-block';
import { GeneralOptions } from '../type';
export interface CodeBlockOptions extends TiptapCodeBlockOptions, GeneralOptions<CodeBlockOptions> {
    /** HTML attributes that should be allowed on code block elements */
    allowedAttributes?: string[];
}
export declare const CodeBlock: import('@tiptap/core').Node<CodeBlockOptions, any>;
