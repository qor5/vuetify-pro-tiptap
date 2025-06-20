import type { GeneralOptions } from "@/type";
import type { LinkOptions as TiptapLinkOptions } from "@tiptap/extension-link";
import type { EditorView } from "@tiptap/pm/view";
import { getMarkRange } from "@tiptap/core";
import { Link as TiptapLink } from "@tiptap/extension-link";
import { Plugin, TextSelection } from "@tiptap/pm/state";

import { addCommonAttributes } from "./attribute-config";
import LinkDialog from "./components/link/LinkDialog.vue";

import LinkActionButton from "./components/LinkActionButton.vue";

/**
 * Represents the interface for link options, extending TiptapLinkOptions and GeneralOptions.
 */
export interface LinkOptions
  extends TiptapLinkOptions,
    GeneralOptions<LinkOptions> {
  /** Component for the link dialog */
  dialogComponent: any;
  hrefRules: string;
  /** HTML attributes that should be allowed on link elements */
  allowedAttributes?: string[];
}

export const Link = /* @__PURE__*/ TiptapLink.extend<LinkOptions>({
  addAttributes() {
    return addCommonAttributes(
      this.parent?.(),
      "link",
      this.options.allowedAttributes,
    );
  },

  addOptions() {
    return {
      ...this.parent?.(),
      openOnClick: false,
      hrefRules:
        '[value => !/^http:\\/\\//.test(value) || "URL should not start with http://"]',
      dialogComponent: () => LinkDialog,
      button: ({ editor, extension, t }) => {
        const { dialogComponent, hrefRules } = extension.options;

        return {
          component: LinkActionButton,
          componentProps: {
            hrefRules,
            isActive: () => editor.isActive("link") || false,
            disabled: !editor.can().setLink({ href: "" }),
            icon: "link",
            tooltip: t("editor.link.tooltip"),
          },
          componentSlots: {
            dialog: dialogComponent(),
          },
        };
      },
    };
  },

  addProseMirrorPlugins() {
    return [
      ...(this.parent?.() || []),
      new Plugin({
        props: {
          handleClick(view: EditorView, pos: number) {
            const { schema, doc, tr } = view.state;

            const range = getMarkRange(doc.resolve(pos), schema.marks.link);

            if (!range) return false;

            const $start = doc.resolve(range.from);
            const $end = doc.resolve(range.to);

            const transaction = tr.setSelection(
              new TextSelection($start, $end),
            );

            view.dispatch(transaction);
            return true;
          },
        },
      }),
    ];
  },
});
