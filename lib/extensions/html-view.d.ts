import { GeneralOptions } from '../type';
import { Extension } from '@tiptap/core';
export interface HtmlViewOptions extends GeneralOptions<HtmlViewOptions> {
    /** Global HTML attributes that can be inherited by other extensions */
    allowedAttributes?: string[];
}
export interface HtmlViewStorage {
    isHtmlMode: boolean;
    editorContent: string;
    htmlContent: string;
    overlayElement: HTMLElement | null;
    isUpdatingFromHTML: boolean;
    disabledExtensions: Record<string, boolean>;
    originalWidth: number;
    originalHeight: number;
    originalScrollHeight: number;
}
declare module "@tiptap/core" {
    interface Storage {
        htmlView: HtmlViewStorage;
    }
}
export declare const HtmlView: Extension<HtmlViewOptions, HtmlViewStorage>;
