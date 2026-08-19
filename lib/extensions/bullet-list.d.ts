import { BulletListOptions as TiptapBulletListOptions } from '@tiptap/extension-bullet-list';
import { GeneralOptions } from '../type';
export interface BulletListOptions extends TiptapBulletListOptions, GeneralOptions<BulletListOptions> {
    /** HTML attributes that should be allowed on bullet list elements */
    allowedAttributes?: string[];
}
export declare const BulletList: import('@tiptap/core').Node<BulletListOptions, any>;
