import { HistoryOptions as TiptapHistoryOptions } from '@tiptap/extension-history';
import { GeneralOptions } from '../type';
export interface HistoryOptions extends TiptapHistoryOptions, GeneralOptions<HistoryOptions> {
}
export declare const History: import('@tiptap/core').Extension<HistoryOptions, any>;
