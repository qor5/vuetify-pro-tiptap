import { VCard as mr, VCardText as mi, VToolbar as gr, VDivider as gi, VSpacer as yi, VThemeProvider as Mf, VInput as g1, VCardTitle as y1, VBtn as yr, VIcon as un, VTooltip as Ef, VMenu as ts, VList as wa, VSheet as b1, VTextField as ka, VListItem as Lf, VListItemTitle as Of, VForm as ns, VFileInput as v1, VCheckbox as rs, VDialog as xa, VTabs as w1, VTab as k1, VWindow as x1, VWindowItem as S1, VCardActions as Sa, VCardSubtitle as C1 } from "vuetify/components";
import { defineComponent as te, markRaw as Hf, h as zn, ref as Y, getCurrentInstance as is, watchEffect as $n, nextTick as Rf, unref as T, onBeforeUnmount as Ca, customRef as A1, provide as Zi, reactive as Jr, render as Vc, computed as W, watch as _t, inject as T1, getCurrentScope as M1, onScopeDispose as E1, onMounted as Aa, withDirectives as Vf, createBlock as U, openBlock as R, withCtx as L, createVNode as H, createElementBlock as de, Fragment as Le, renderList as Ze, resolveDynamicComponent as Xr, mergeProps as er, createSlots as Ta, vShow as Nf, createCommentVNode as $e, useAttrs as L1, onUnmounted as O1, Teleport as H1, normalizeClass as dt, renderSlot as ut, createTextVNode as Dt, toDisplayString as Ae, normalizeProps as Nc, guardReactiveProps as Ic, normalizeStyle as tr, createElementVNode as De, resolveComponent as If, withModifiers as _f } from "vue";
import { useTheme as Ma } from "vuetify";
function xe(t) {
  this.content = t;
}
xe.prototype = {
  constructor: xe,
  find: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === t) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(t) {
    var e = this.find(t);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(t, e, n) {
    var r = n && n != t ? this.remove(n) : this, i = r.find(t), o = r.content.slice();
    return i == -1 ? o.push(n || t, e) : (o[i + 1] = e, n && (o[i] = n)), new xe(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t) {
    var e = this.find(t);
    if (e == -1) return this;
    var n = this.content.slice();
    return n.splice(e, 2), new xe(n);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t, e) {
    return new xe([t, e].concat(this.remove(t).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t, e) {
    var n = this.remove(t).content.slice();
    return n.push(t, e), new xe(n);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t, e, n) {
    var r = this.remove(e), i = r.content.slice(), o = r.find(t);
    return i.splice(o == -1 ? i.length : o, 0, e, n), new xe(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      t(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(t) {
    return t = xe.from(t), t.size ? new xe(t.content.concat(this.subtract(t).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t) {
    return t = xe.from(t), t.size ? new xe(this.subtract(t).content.concat(t.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t) {
    var e = this;
    t = xe.from(t);
    for (var n = 0; n < t.content.length; n += 2)
      e = e.remove(t.content[n]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var t = {};
    return this.forEach(function(e, n) {
      t[e] = n;
    }), t;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
xe.from = function(t) {
  if (t instanceof xe) return t;
  var e = [];
  if (t) for (var n in t) e.push(n, t[n]);
  return new xe(e);
};
function Df(t, e, n) {
  for (let r = 0; ; r++) {
    if (r == t.childCount || r == e.childCount)
      return t.childCount == e.childCount ? null : n;
    let i = t.child(r), o = e.child(r);
    if (i == o) {
      n += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(o))
      return n;
    if (i.isText && i.text != o.text) {
      let s = i.text, l = o.text, a = 0;
      for (; s[a] == l[a]; a++)
        n++;
      return a && a < s.length && a < l.length && $f(s.charCodeAt(a - 1)) && zf(s.charCodeAt(a)) && n--, n;
    }
    if (i.content.size || o.content.size) {
      let s = Df(i.content, o.content, n + 1);
      if (s != null)
        return s;
    }
    n += i.nodeSize;
  }
}
function Pf(t, e, n, r) {
  for (let i = t.childCount, o = e.childCount; ; ) {
    if (i == 0 || o == 0)
      return i == o ? null : { a: n, b: r };
    let s = t.child(--i), l = e.child(--o), a = s.nodeSize;
    if (s == l) {
      n -= a, r -= a;
      continue;
    }
    if (!s.sameMarkup(l))
      return { a: n, b: r };
    if (s.isText && s.text != l.text) {
      let c = s.text, d = l.text, u = c.length, f = d.length;
      for (; u > 0 && f > 0 && c[u - 1] == d[f - 1]; )
        u--, f--, n--, r--;
      return u && f && u < c.length && $f(c.charCodeAt(u - 1)) && zf(c.charCodeAt(u)) && (n++, r++), { a: n, b: r };
    }
    if (s.content.size || l.content.size) {
      let c = Pf(s.content, l.content, n - 1, r - 1);
      if (c)
        return c;
    }
    n -= a, r -= a;
  }
}
function zf(t) {
  return t >= 56320 && t < 57344;
}
function $f(t) {
  return t >= 55296 && t < 56320;
}
class A {
  /**
  @internal
  */
  constructor(e, n) {
    if (this.content = e, this.size = n || 0, n == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, n, r, i = 0, o) {
    for (let s = 0, l = 0; l < n; s++) {
      let a = this.content[s], c = l + a.nodeSize;
      if (c > e && r(a, i + l, o || null, s) !== !1 && a.content.size) {
        let d = l + 1;
        a.nodesBetween(Math.max(0, e - d), Math.min(a.content.size, n - d), r, i + d);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, n, r, i) {
    let o = "", s = !0;
    return this.nodesBetween(e, n, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, n - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (s ? s = !1 : o += r), o += c;
    }, 0), o;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let n = this.lastChild, r = e.firstChild, i = this.content.slice(), o = 0;
    for (n.isText && n.sameMarkup(r) && (i[i.length - 1] = n.withText(n.text + r.text), o = 1); o < e.content.length; o++)
      i.push(e.content[o]);
    return new A(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, n = this.size) {
    if (e == 0 && n == this.size)
      return this;
    let r = [], i = 0;
    if (n > e)
      for (let o = 0, s = 0; s < n; o++) {
        let l = this.content[o], a = s + l.nodeSize;
        a > e && ((s < e || a > n) && (l.isText ? l = l.cut(Math.max(0, e - s), Math.min(l.text.length, n - s)) : l = l.cut(Math.max(0, e - s - 1), Math.min(l.content.size, n - s - 1))), r.push(l), i += l.nodeSize), s = a;
      }
    return new A(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, n) {
    return e == n ? A.empty : e == 0 && n == this.content.length ? this : new A(this.content.slice(e, n));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, n) {
    let r = this.content[e];
    if (r == n)
      return this;
    let i = this.content.slice(), o = this.size + n.nodeSize - r.nodeSize;
    return i[e] = n, new A(i, o);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new A([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new A(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let n = 0; n < this.content.length; n++)
      if (!this.content[n].eq(e.content[n]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let n = this.content[e];
    if (!n)
      throw new RangeError("Index " + e + " out of range for " + this);
    return n;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let n = 0, r = 0; n < this.content.length; n++) {
      let i = this.content[n];
      e(i, r, n), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, n = 0) {
    return Df(this, e, n);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, n = this.size, r = e.size) {
    return Pf(this, e, n, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return Ti(0, e);
    if (e == this.size)
      return Ti(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let n = 0, r = 0; ; n++) {
      let i = this.child(n), o = r + i.nodeSize;
      if (o >= e)
        return o == e ? Ti(n + 1, o) : Ti(n, r);
      r = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return A.empty;
    if (!Array.isArray(n))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return A.fromArray(n.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return A.empty;
    let n, r = 0;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      r += o.nodeSize, i && o.isText && e[i - 1].sameMarkup(o) ? (n || (n = e.slice(0, i)), n[n.length - 1] = o.withText(n[n.length - 1].text + o.text)) : n && n.push(o);
    }
    return new A(n || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return A.empty;
    if (e instanceof A)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new A([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
A.empty = new A([], 0);
const Is = { index: 0, offset: 0 };
function Ti(t, e) {
  return Is.index = t, Is.offset = e, Is;
}
function so(t, e) {
  if (t === e)
    return !0;
  if (!(t && typeof t == "object") || !(e && typeof e == "object"))
    return !1;
  let n = Array.isArray(t);
  if (Array.isArray(e) != n)
    return !1;
  if (n) {
    if (t.length != e.length)
      return !1;
    for (let r = 0; r < t.length; r++)
      if (!so(t[r], e[r]))
        return !1;
  } else {
    for (let r in t)
      if (!(r in e) || !so(t[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in t))
        return !1;
  }
  return !0;
}
let ie = class kl {
  /**
  @internal
  */
  constructor(e, n) {
    this.type = e, this.attrs = n;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let n, r = !1;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      if (this.eq(o))
        return e;
      if (this.type.excludes(o.type))
        n || (n = e.slice(0, i));
      else {
        if (o.type.excludes(this.type))
          return e;
        !r && o.type.rank > this.type.rank && (n || (n = e.slice(0, i)), n.push(this), r = !0), n && n.push(o);
      }
    }
    return n || (n = e.slice()), r || n.push(this), n;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return e.slice(0, n).concat(e.slice(n + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && so(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[n.type];
    if (!r)
      throw new RangeError(`There is no mark type ${n.type} in this schema`);
    let i = r.create(n.attrs);
    return r.checkAttrs(i.attrs), i;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, n) {
    if (e == n)
      return !0;
    if (e.length != n.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(n[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return kl.none;
    if (e instanceof kl)
      return [e];
    let n = e.slice();
    return n.sort((r, i) => r.type.rank - i.type.rank), n;
  }
};
ie.none = [];
class Zr extends Error {
}
class O {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, n, r) {
    this.content = e, this.openStart = n, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, n) {
    let r = Ff(this.content, e + this.openStart, n, this.openStart + 1, this.openEnd + 1);
    return r && new O(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new O(Bf(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return O.empty;
    let r = n.openStart || 0, i = n.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new O(A.fromJSON(e, n.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, n = !0) {
    let r = 0, i = 0;
    for (let o = e.firstChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.firstChild)
      r++;
    for (let o = e.lastChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.lastChild)
      i++;
    return new O(e, r, i);
  }
}
O.empty = new O(A.empty, 0, 0);
function Bf(t, e, n) {
  let { index: r, offset: i } = t.findIndex(e), o = t.maybeChild(r), { index: s, offset: l } = t.findIndex(n);
  if (i == e || o.isText) {
    if (l != n && !t.child(s).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != s)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, o.copy(Bf(o.content, e - i - 1, n - i - 1)));
}
function Ff(t, e, n, r, i, o) {
  let { index: s, offset: l } = t.findIndex(e), a = t.maybeChild(s);
  if (l == e || a.isText)
    return o && r <= 0 && i <= 0 && !o.canReplace(s, s, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
  let c = Ff(a.content, e - l - 1, n, s == 0 ? r - 1 : 0, s == t.childCount - 1 ? i - 1 : 0, a);
  return c && t.replaceChild(s, a.copy(c));
}
function R1(t, e, n) {
  if (n.openStart > t.depth)
    throw new Zr("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new Zr("Inconsistent open depths");
  return Uf(t, e, n, 0);
}
function Uf(t, e, n, r) {
  let i = t.index(r), o = t.node(r);
  if (i == e.index(r) && r < t.depth - n.openStart) {
    let s = Uf(t, e, n, r + 1);
    return o.copy(o.content.replaceChild(i, s));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let s = t.parent, l = s.content;
      return Tn(s, l.cut(0, t.parentOffset).append(n.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: s, end: l } = V1(n, t);
      return Tn(o, jf(t, s, l, e, r));
    }
  else return Tn(o, lo(t, e, r));
}
function Wf(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new Zr("Cannot join " + e.type.name + " onto " + t.type.name);
}
function xl(t, e, n) {
  let r = t.node(n);
  return Wf(r, e.node(n)), r;
}
function An(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
}
function Rr(t, e, n, r) {
  let i = (e || t).node(n), o = 0, s = e ? e.index(n) : i.childCount;
  t && (o = t.index(n), t.depth > n ? o++ : t.textOffset && (An(t.nodeAfter, r), o++));
  for (let l = o; l < s; l++)
    An(i.child(l), r);
  e && e.depth == n && e.textOffset && An(e.nodeBefore, r);
}
function Tn(t, e) {
  if (!t.type.validContent(e))
    throw new Zr("Invalid content for node " + t.type.name);
  return t.copy(e);
}
function jf(t, e, n, r, i) {
  let o = t.depth > i && xl(t, e, i + 1), s = r.depth > i && xl(n, r, i + 1), l = [];
  return Rr(null, t, i, l), o && s && e.index(i) == n.index(i) ? (Wf(o, s), An(Tn(o, jf(t, e, n, r, i + 1)), l)) : (o && An(Tn(o, lo(t, e, i + 1)), l), Rr(e, n, i, l), s && An(Tn(s, lo(n, r, i + 1)), l)), Rr(r, null, i, l), new A(l);
}
function lo(t, e, n) {
  let r = [];
  if (Rr(null, t, n, r), t.depth > n) {
    let i = xl(t, e, n + 1);
    An(Tn(i, lo(t, e, n + 1)), r);
  }
  return Rr(e, null, n, r), new A(r);
}
function V1(t, e) {
  let n = e.depth - t.openStart, i = e.node(n).copy(t.content);
  for (let o = n - 1; o >= 0; o--)
    i = e.node(o).copy(A.from(i));
  return {
    start: i.resolveNoCache(t.openStart + n),
    end: i.resolveNoCache(i.content.size - t.openEnd - n)
  };
}
class Yr {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.path = n, this.parentOffset = r, this.depth = n.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, n = this.index(this.depth);
    if (n == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(n);
    return r ? e.child(n).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), n = this.pos - this.path[this.path.length - 1];
    return n ? this.parent.child(e).cut(0, n) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, n) {
    n = this.resolveDepth(n);
    let r = this.path[n * 3], i = n == 0 ? 0 : this.path[n * 3 - 1] + 1;
    for (let o = 0; o < e; o++)
      i += r.child(o).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, n = this.index();
    if (e.content.size == 0)
      return ie.none;
    if (this.textOffset)
      return e.child(n).marks;
    let r = e.maybeChild(n - 1), i = e.maybeChild(n);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let o = r.marks;
    for (var s = 0; s < o.length; s++)
      o[s].type.spec.inclusive === !1 && (!i || !o[s].isInSet(i.marks)) && (o = o[s--].removeFromSet(o));
    return o;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let n = this.parent.maybeChild(this.index());
    if (!n || !n.isInline)
      return null;
    let r = n.marks, i = e.parent.maybeChild(e.index());
    for (var o = 0; o < r.length; o++)
      r[o].type.spec.inclusive === !1 && (!i || !r[o].isInSet(i.marks)) && (r = r[o--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let n = this.depth; n > 0; n--)
      if (this.start(n) <= e && this.end(n) >= e)
        return n;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, n) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!n || n(this.node(r))))
        return new ao(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let n = 1; n <= this.depth; n++)
      e += (e ? "/" : "") + this.node(n).type.name + "_" + this.index(n - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, n) {
    if (!(n >= 0 && n <= e.content.size))
      throw new RangeError("Position " + n + " out of range");
    let r = [], i = 0, o = n;
    for (let s = e; ; ) {
      let { index: l, offset: a } = s.content.findIndex(o), c = o - a;
      if (r.push(s, l, i + a), !c || (s = s.child(l), s.isText))
        break;
      o = c - 1, i += a + 1;
    }
    return new Yr(n, r, o);
  }
  /**
  @internal
  */
  static resolveCached(e, n) {
    let r = _c.get(e);
    if (r)
      for (let o = 0; o < r.elts.length; o++) {
        let s = r.elts[o];
        if (s.pos == n)
          return s;
      }
    else
      _c.set(e, r = new N1());
    let i = r.elts[r.i] = Yr.resolve(e, n);
    return r.i = (r.i + 1) % I1, i;
  }
}
class N1 {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const I1 = 12, _c = /* @__PURE__ */ new WeakMap();
class ao {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const _1 = /* @__PURE__ */ Object.create(null);
let tn = class Sl {
  /**
  @internal
  */
  constructor(e, n, r, i = ie.none) {
    this.type = e, this.attrs = n, this.marks = i, this.content = r || A.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively overlapping
  the given two positions that are relative to start of this
  node's content. This includes all ancestors of the nodes
  containing the two positions. The callback is invoked with the
  node, its position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, n, r, i = 0) {
    this.content.nodesBetween(e, n, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
  */
  textBetween(e, n, r, i) {
    return this.content.textBetween(e, n, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, n, r) {
    return this.type == e && so(this.attrs, n || e.defaultAttrs || _1) && ie.sameSet(this.marks, r || ie.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Sl(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Sl(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, n = this.content.size) {
    return e == 0 && n == this.content.size ? this : this.copy(this.content.cut(e, n));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, n = this.content.size, r = !1) {
    if (e == n)
      return O.empty;
    let i = this.resolve(e), o = this.resolve(n), s = r ? 0 : i.sharedDepth(n), l = i.start(s), c = i.node(s).content.cut(i.pos - l, o.pos - l);
    return new O(c, i.depth - s, o.depth - s);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, n, r) {
    return R1(this.resolve(e), this.resolve(n), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let n = this; ; ) {
      let { index: r, offset: i } = n.content.findIndex(e);
      if (n = n.maybeChild(r), !n)
        return null;
      if (i == e || n.isText)
        return n;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: n, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(n), index: n, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: n, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(n), index: n, offset: r };
    let i = this.content.child(n - 1);
    return { node: i, index: n - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return Yr.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Yr.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, n, r) {
    let i = !1;
    return n > e && this.nodesBetween(e, n, (o) => (r.isInSet(o.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Kf(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let n = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!n)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return n;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, n, r = A.empty, i = 0, o = r.childCount) {
    let s = this.contentMatchAt(e).matchFragment(r, i, o), l = s && s.matchFragment(this.content, n);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < o; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, n, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let o = this.contentMatchAt(e).matchType(r), s = o && o.matchFragment(this.content, n);
    return s ? s.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = ie.none;
    for (let n = 0; n < this.marks.length; n++) {
      let r = this.marks[n];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!ie.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((n) => n.type.name)}`);
    this.content.forEach((n) => n.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((n) => n.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (n.marks) {
      if (!Array.isArray(n.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = n.marks.map(e.markFromJSON);
    }
    if (n.type == "text") {
      if (typeof n.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(n.text, r);
    }
    let i = A.fromJSON(e, n.content), o = e.nodeType(n.type).create(n.attrs, i, r);
    return o.type.checkAttrs(o.attrs), o;
  }
};
tn.prototype.text = void 0;
class co extends tn {
  /**
  @internal
  */
  constructor(e, n, r, i) {
    if (super(e, n, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Kf(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, n) {
    return this.text.slice(e, n);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new co(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new co(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, n = this.text.length) {
    return e == 0 && n == this.text.length ? this : this.withText(this.text.slice(e, n));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function Kf(t, e) {
  for (let n = t.length - 1; n >= 0; n--)
    e = t[n].type.name + "(" + e + ")";
  return e;
}
class On {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, n) {
    let r = new D1(e, n);
    if (r.next == null)
      return On.empty;
    let i = qf(r);
    r.next && r.err("Unexpected trailing text");
    let o = W1(U1(i));
    return j1(o, r), o;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let n = 0; n < this.next.length; n++)
      if (this.next[n].type == e)
        return this.next[n].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, n = 0, r = e.childCount) {
    let i = this;
    for (let o = n; i && o < r; o++)
      i = i.matchType(e.child(o).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: n } = this.next[e];
      if (!(n.isText || n.hasRequiredAttrs()))
        return n;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let n = 0; n < this.next.length; n++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[n].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, n = !1, r = 0) {
    let i = [this];
    function o(s, l) {
      let a = s.matchFragment(e, r);
      if (a && (!n || a.validEnd))
        return A.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < s.next.length; c++) {
        let { type: d, next: u } = s.next[c];
        if (!(d.isText || d.hasRequiredAttrs()) && i.indexOf(u) == -1) {
          i.push(u);
          let f = o(u, l.concat(d));
          if (f)
            return f;
        }
      }
      return null;
    }
    return o(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let n = this.computeWrapping(e);
    return this.wrapCache.push(e, n), n;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let n = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), o = i.match;
      if (o.matchType(e)) {
        let s = [];
        for (let l = i; l.type; l = l.via)
          s.push(l.type);
        return s.reverse();
      }
      for (let s = 0; s < o.next.length; s++) {
        let { type: l, next: a } = o.next[s];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in n) && (!i.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), n[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function n(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && n(r.next[i].next);
    }
    return n(this), e.map((r, i) => {
      let o = i + (r.validEnd ? "*" : " ") + " ";
      for (let s = 0; s < r.next.length; s++)
        o += (s ? ", " : "") + r.next[s].type.name + "->" + e.indexOf(r.next[s].next);
      return o;
    }).join(`
`);
  }
}
On.empty = new On(!0);
class D1 {
  constructor(e, n) {
    this.string = e, this.nodeTypes = n, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function qf(t) {
  let e = [];
  do
    e.push(P1(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function P1(t) {
  let e = [];
  do
    e.push(z1(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function z1(t) {
  let e = F1(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = $1(t, e);
    else
      break;
  return e;
}
function Dc(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function $1(t, e) {
  let n = Dc(t), r = n;
  return t.eat(",") && (t.next != "}" ? r = Dc(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function B1(t, e) {
  let n = t.nodeTypes, r = n[e];
  if (r)
    return [r];
  let i = [];
  for (let o in n) {
    let s = n[o];
    s.isInGroup(e) && i.push(s);
  }
  return i.length == 0 && t.err("No node type or group '" + e + "' found"), i;
}
function F1(t) {
  if (t.eat("(")) {
    let e = qf(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = B1(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function U1(t) {
  let e = [[]];
  return i(o(t, 0), n()), e;
  function n() {
    return e.push([]) - 1;
  }
  function r(s, l, a) {
    let c = { term: a, to: l };
    return e[s].push(c), c;
  }
  function i(s, l) {
    s.forEach((a) => a.to = l);
  }
  function o(s, l) {
    if (s.type == "choice")
      return s.exprs.reduce((a, c) => a.concat(o(c, l)), []);
    if (s.type == "seq")
      for (let a = 0; ; a++) {
        let c = o(s.exprs[a], l);
        if (a == s.exprs.length - 1)
          return c;
        i(c, l = n());
      }
    else if (s.type == "star") {
      let a = n();
      return r(l, a), i(o(s.expr, a), a), [r(a)];
    } else if (s.type == "plus") {
      let a = n();
      return i(o(s.expr, l), a), i(o(s.expr, a), a), [r(a)];
    } else {
      if (s.type == "opt")
        return [r(l)].concat(o(s.expr, l));
      if (s.type == "range") {
        let a = l;
        for (let c = 0; c < s.min; c++) {
          let d = n();
          i(o(s.expr, a), d), a = d;
        }
        if (s.max == -1)
          i(o(s.expr, a), a);
        else
          for (let c = s.min; c < s.max; c++) {
            let d = n();
            r(a, d), i(o(s.expr, a), d), a = d;
          }
        return [r(a)];
      } else {
        if (s.type == "name")
          return [r(l, void 0, s.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Gf(t, e) {
  return e - t;
}
function Pc(t, e) {
  let n = [];
  return r(e), n.sort(Gf);
  function r(i) {
    let o = t[i];
    if (o.length == 1 && !o[0].term)
      return r(o[0].to);
    n.push(i);
    for (let s = 0; s < o.length; s++) {
      let { term: l, to: a } = o[s];
      !l && n.indexOf(a) == -1 && r(a);
    }
  }
}
function W1(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(Pc(t, 0));
  function n(r) {
    let i = [];
    r.forEach((s) => {
      t[s].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let d = 0; d < i.length; d++)
          i[d][0] == l && (c = i[d][1]);
        Pc(t, a).forEach((d) => {
          c || i.push([l, c = []]), c.indexOf(d) == -1 && c.push(d);
        });
      });
    });
    let o = e[r.join(",")] = new On(r.indexOf(t.length - 1) > -1);
    for (let s = 0; s < i.length; s++) {
      let l = i[s][1].sort(Gf);
      o.next.push({ type: i[s][0], next: e[l.join(",")] || n(l) });
    }
    return o;
  }
}
function j1(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let i = r[n], o = !i.validEnd, s = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      s.push(a.name), o && !(a.isText || a.hasRequiredAttrs()) && (o = !1), r.indexOf(c) == -1 && r.push(c);
    }
    o && e.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Jf(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    if (!r.hasDefault)
      return null;
    e[n] = r.default;
  }
  return e;
}
function Xf(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let r in t) {
    let i = e && e[r];
    if (i === void 0) {
      let o = t[r];
      if (o.hasDefault)
        i = o.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    n[r] = i;
  }
  return n;
}
function Zf(t, e, n, r) {
  for (let i in e)
    if (!(i in t))
      throw new RangeError(`Unsupported attribute ${i} for ${n} of type ${r}`);
  for (let i in t)
    t[i].validate && t[i].validate(e[i]);
}
function Yf(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      n[r] = new q1(t, r, e[r]);
  return n;
}
let zc = class Qf {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = Yf(e, r.attrs), this.defaultAttrs = Jf(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == On.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : Xf(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, n, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new tn(this, this.computeAttrs(e), A.from(n), ie.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, r) {
    return n = A.from(n), this.checkContent(n), new tn(this, this.computeAttrs(e), n, ie.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, n, r) {
    if (e = this.computeAttrs(e), n = A.from(n), n.size) {
      let s = this.contentMatch.fillBefore(n);
      if (!s)
        return null;
      n = s.append(n);
    }
    let i = this.contentMatch.matchFragment(n), o = i && i.fillBefore(A.empty, !0);
    return o ? new tn(this, e, n.append(o), ie.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let n = this.contentMatch.matchFragment(e);
    if (!n || !n.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Zf(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let n = 0; n < e.length; n++)
      if (!this.allowsMarkType(e[n].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let n;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? n && n.push(e[r]) : n || (n = e.slice(0, r));
    return n ? n.length ? n : ie.none : e;
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, s) => r[o] = new Qf(o, n, s));
    let i = n.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let o in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function K1(t, e, n) {
  let r = n.split("|");
  return (i) => {
    let o = i === null ? "null" : typeof i;
    if (r.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${o}`);
  };
}
class q1 {
  constructor(e, n, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? K1(e, n, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class ss {
  /**
  @internal
  */
  constructor(e, n, r, i) {
    this.name = e, this.rank = n, this.schema = r, this.spec = i, this.attrs = Yf(e, i.attrs), this.excluded = null;
    let o = Jf(this.attrs);
    this.instance = o ? new ie(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new ie(this, Xf(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((o, s) => r[o] = new ss(o, i++, n, s)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var n = 0; n < e.length; n++)
      e[n].type == this && (e = e.slice(0, n).concat(e.slice(n + 1)), n--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (e[n].type == this)
        return e[n];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Zf(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class eh {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let i in e)
      n[i] = e[i];
    n.nodes = xe.from(e.nodes), n.marks = xe.from(e.marks || {}), this.nodes = zc.compile(this.spec.nodes, this), this.marks = ss.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let o = this.nodes[i], s = o.spec.content || "", l = o.spec.marks;
      if (o.contentMatch = r[s] || (r[s] = On.parse(s, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = l == "_" ? null : l ? $c(this, l.split(" ")) : l == "" || !o.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let o = this.marks[i], s = o.spec.excludes;
      o.excluded = s == null ? [o] : s == "" ? [] : $c(this, s.split(" "));
    }
    this.nodeFromJSON = (i) => tn.fromJSON(this, i), this.markFromJSON = (i) => ie.fromJSON(this, i), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, n = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof zc) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(n, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, n) {
    let r = this.nodes.text;
    return new co(r, r.defaultAttrs, e, ie.setFrom(n));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, n) {
    return typeof e == "string" && (e = this.marks[e]), e.create(n);
  }
  /**
  @internal
  */
  nodeType(e) {
    let n = this.nodes[e];
    if (!n)
      throw new RangeError("Unknown node type: " + e);
    return n;
  }
}
function $c(t, e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], o = t.marks[i], s = o;
    if (o)
      n.push(o);
    else
      for (let l in t.marks) {
        let a = t.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && n.push(s = a);
      }
    if (!s)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return n;
}
function G1(t) {
  return t.tag != null;
}
function J1(t) {
  return t.style != null;
}
class nn {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, n) {
    this.schema = e, this.rules = n, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    n.forEach((i) => {
      if (G1(i))
        this.tags.push(i);
      else if (J1(i)) {
        let o = /[^=]*/.exec(i.style)[0];
        r.indexOf(o) < 0 && r.push(o), this.styles.push(i);
      }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return !1;
      let o = e.nodes[i.node];
      return o.contentMatch.matchType(o);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, n = {}) {
    let r = new Fc(this, n, !1);
    return r.addAll(e, ie.none, n.from, n.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, n = {}) {
    let r = new Fc(this, n, !0);
    return r.addAll(e, ie.none, n.from, n.to), O.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let o = this.tags[i];
      if (Y1(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || n.matchesContext(o.context))) {
        if (o.getAttrs) {
          let s = o.getAttrs(e);
          if (s === !1)
            continue;
          o.attrs = s || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, n, r, i) {
    for (let o = i ? this.styles.indexOf(i) + 1 : 0; o < this.styles.length; o++) {
      let s = this.styles[o], l = s.style;
      if (!(l.indexOf(e) != 0 || s.context && !r.matchesContext(s.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != n))) {
        if (s.getAttrs) {
          let a = s.getAttrs(n);
          if (a === !1)
            continue;
          s.attrs = a || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let n = [];
    function r(i) {
      let o = i.priority == null ? 50 : i.priority, s = 0;
      for (; s < n.length; s++) {
        let l = n[s];
        if ((l.priority == null ? 50 : l.priority) < o)
          break;
      }
      n.splice(s, 0, i);
    }
    for (let i in e.marks) {
      let o = e.marks[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = Uc(s)), s.mark || s.ignore || s.clearMark || (s.mark = i);
      });
    }
    for (let i in e.nodes) {
      let o = e.nodes[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = Uc(s)), s.node || s.ignore || s.mark || (s.node = i);
      });
    }
    return n;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new nn(e, nn.schemaRules(e)));
  }
}
const th = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  body: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, X1 = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, nh = { ol: !0, ul: !0 }, Qr = 1, Cl = 2, Vr = 4;
function Bc(t, e, n) {
  return e != null ? (e ? Qr : 0) | (e === "full" ? Cl : 0) : t && t.whitespace == "pre" ? Qr | Cl : n & ~Vr;
}
class Mi {
  constructor(e, n, r, i, o, s) {
    this.type = e, this.attrs = n, this.marks = r, this.solid = i, this.options = s, this.content = [], this.activeMarks = ie.none, this.match = o || (s & Vr ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let n = this.type.contentMatch.fillBefore(A.from(e));
      if (n)
        this.match = this.type.contentMatch.matchFragment(n);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & Qr)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let o = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - i[0].length));
      }
    }
    let n = A.from(this.content);
    return !e && this.match && (n = n.append(this.match.fillBefore(A.empty, !0))), this.type ? this.type.create(this.attrs, n, this.marks) : n;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !th.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Fc {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let i = n.topNode, o, s = Bc(null, n.preserveWhitespace, 0) | (r ? Vr : 0);
    i ? o = new Mi(i.type, i.attrs, ie.none, !0, n.topMatch || i.type.contentMatch, s) : r ? o = new Mi(null, null, ie.none, !0, null, s) : o = new Mi(e.schema.topNodeType, null, ie.none, !0, null, s), this.nodes = [o], this.find = n.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, n) {
    e.nodeType == 3 ? this.addTextNode(e, n) : e.nodeType == 1 && this.addElement(e, n);
  }
  addTextNode(e, n) {
    let r = e.nodeValue, i = this.top, o = i.options & Cl ? "full" : this.localPreserveWS || (i.options & Qr) > 0, { schema: s } = this.parser;
    if (o === "full" || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (o)
        if (o === "full")
          r = r.replace(/\r\n?/g, `
`);
        else if (s.linebreakReplacement && /[\r\n]/.test(r) && this.top.findWrapping(s.linebreakReplacement.create())) {
          let l = r.split(/\r?\n|\r/);
          for (let a = 0; a < l.length; a++)
            a && this.insertNode(s.linebreakReplacement.create(), n, !0), l[a] && this.insertNode(s.text(l[a]), n, !/\S/.test(l[a]));
          r = "";
        } else
          r = r.replace(/\r?\n|\r/g, " ");
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let l = i.content[i.content.length - 1], a = e.previousSibling;
        (!l || a && a.nodeName == "BR" || l.isText && /[ \t\r\n\u000c]$/.test(l.text)) && (r = r.slice(1));
      }
      r && this.insertNode(s.text(r), n, !/\S/.test(r)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, n, r) {
    let i = this.localPreserveWS, o = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let s = e.nodeName.toLowerCase(), l;
    nh.hasOwnProperty(s) && this.parser.normalizeLists && Z1(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : X1.hasOwnProperty(s))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, d = this.needsBlock;
      if (th.hasOwnProperty(s))
        o.content.length && o.content[0].isInline && this.open && (this.open--, o = this.top), c = !0, o.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, n);
        break e;
      }
      let u = a && a.skip ? n : this.readStyles(e, n);
      u && this.addAll(e, u), c && this.sync(o), this.needsBlock = d;
    } else {
      let c = this.readStyles(e, n);
      c && this.addElementByRule(e, a, c, a.consuming === !1 ? l : void 0);
    }
    this.localPreserveWS = i;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, n) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), n);
  }
  // Called for ignored nodes
  ignoreFallback(e, n) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), n, !0);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, n) {
    let r = e.style;
    if (r && r.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let o = this.parser.matchedStyles[i], s = r.getPropertyValue(o);
        if (s)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(o, s, this, l);
            if (!a)
              break;
            if (a.ignore)
              return null;
            if (a.clearMark ? n = n.filter((c) => !a.clearMark(c)) : n = n.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1)
              l = a;
            else
              break;
          }
      }
    return n;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, n, r, i) {
    let o, s;
    if (n.node)
      if (s = this.parser.schema.nodes[n.node], s.isLeaf)
        this.insertNode(s.create(n.attrs), r, e.nodeName == "BR") || this.leafFallback(e, r);
      else {
        let a = this.enter(s, n.attrs || null, r, n.preserveWhitespace);
        a && (o = !0, r = a);
      }
    else {
      let a = this.parser.schema.marks[n.mark];
      r = r.concat(a.create(n.attrs));
    }
    let l = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (i)
      this.addElement(e, r, i);
    else if (n.getContent)
      this.findInside(e), n.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, r, !1));
    else {
      let a = e;
      typeof n.contentElement == "string" ? a = e.querySelector(n.contentElement) : typeof n.contentElement == "function" ? a = n.contentElement(e) : n.contentElement && (a = n.contentElement), this.findAround(e, a, !0), this.addAll(a, r), this.findAround(e, a, !1);
    }
    o && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, n, r, i) {
    let o = r || 0;
    for (let s = r ? e.childNodes[r] : e.firstChild, l = i == null ? null : e.childNodes[i]; s != l; s = s.nextSibling, ++o)
      this.findAtPoint(e, o), this.addDOM(s, n);
    this.findAtPoint(e, o);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, n, r) {
    let i, o;
    for (let s = this.open, l = 0; s >= 0; s--) {
      let a = this.nodes[s], c = a.findWrapping(e);
      if (c && (!i || i.length > c.length + l) && (i = c, o = a, !c.length))
        break;
      if (a.solid) {
        if (r)
          break;
        l += 2;
      }
    }
    if (!i)
      return null;
    this.sync(o);
    for (let s = 0; s < i.length; s++)
      n = this.enterInner(i[s], null, n, !1);
    return n;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, n, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let o = this.textblockFromContext();
      o && (n = this.enterInner(o, null, n));
    }
    let i = this.findPlace(e, n, r);
    if (i) {
      this.closeExtra();
      let o = this.top;
      o.match && (o.match = o.match.matchType(e.type));
      let s = ie.none;
      for (let l of i.concat(e.marks))
        (o.type ? o.type.allowsMarkType(l.type) : Wc(l.type, e.type)) && (s = l.addToSet(s));
      return o.content.push(e.mark(s)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, n, r, i) {
    let o = this.findPlace(e.create(n), r, !1);
    return o && (o = this.enterInner(e, n, r, !0, i)), o;
  }
  // Open a node of the given type
  enterInner(e, n, r, i = !1, o) {
    this.closeExtra();
    let s = this.top;
    s.match = s.match && s.match.matchType(e);
    let l = Bc(e, o, s.options);
    s.options & Vr && s.content.length == 0 && (l |= Vr);
    let a = ie.none;
    return r = r.filter((c) => (s.type ? s.type.allowsMarkType(c.type) : Wc(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new Mi(e, n, a, i, null, l)), this.open++, r;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let n = this.nodes.length - 1;
    if (n > this.open) {
      for (; n > this.open; n--)
        this.nodes[n - 1].content.push(this.nodes[n].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let n = this.open; n >= 0; n--) {
      if (this.nodes[n] == e)
        return this.open = n, !0;
      this.localPreserveWS && (this.nodes[n].options |= Qr);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let n = this.open; n >= 0; n--) {
      let r = this.nodes[n].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      n && e++;
    }
    return e;
  }
  findAtPoint(e, n) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == n && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].pos == null && e.nodeType == 1 && e.contains(this.find[n].node) && (this.find[n].pos = this.currentPos);
  }
  findAround(e, n, r) {
    if (e != n && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && n.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].node == e && (this.find[n].pos = this.currentPos - (e.nodeValue.length - this.find[n].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let n = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), o = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), s = (l, a) => {
      for (; l >= 0; l--) {
        let c = n[l];
        if (c == "") {
          if (l == n.length - 1 || l == 0)
            continue;
          for (; a >= o; a--)
            if (s(l - 1, a))
              return !0;
          return !1;
        } else {
          let d = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= o ? r.node(a - o).type : null;
          if (!d || d.name != c && !d.isInGroup(c))
            return !1;
          a--;
        }
      }
      return !0;
    };
    return s(n.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let n = e.depth; n >= 0; n--) {
        let r = e.node(n).contentMatchAt(e.indexAfter(n)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let n in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[n];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
}
function Z1(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && nh.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function Y1(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function Uc(t) {
  let e = {};
  for (let n in t)
    e[n] = t[n];
  return e;
}
function Wc(t, e) {
  let n = e.schema.nodes;
  for (let r in n) {
    let i = n[r];
    if (!i.allowsMarkType(t))
      continue;
    let o = [], s = (l) => {
      o.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: d } = l.edge(a);
        if (c == e || o.indexOf(d) < 0 && s(d))
          return !0;
      }
    };
    if (s(i.contentMatch))
      return !0;
  }
}
class fn {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, n) {
    this.nodes = e, this.marks = n;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, n = {}, r) {
    r || (r = Ei(n).createDocumentFragment());
    let i = r, o = [];
    return e.forEach((s) => {
      if (o.length || s.marks.length) {
        let l = 0, a = 0;
        for (; l < o.length && a < s.marks.length; ) {
          let c = s.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(o[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < o.length; )
          i = o.pop()[1];
        for (; a < s.marks.length; ) {
          let c = s.marks[a++], d = this.serializeMark(c, s.isInline, n);
          d && (o.push([c, i]), i.appendChild(d.dom), i = d.contentDOM || d.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(s, n));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, n) {
    if (e.isText)
      return Ei(n).createTextNode(e.text);
    let { dom: r, contentDOM: i } = Yi(Ei(n), this.nodes[e.type.name](e), null, e.attrs);
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, n, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, n = {}) {
    let r = this.serializeNodeInner(e, n);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let o = this.serializeMark(e.marks[i], e.isInline, n);
      o && ((o.contentDOM || o.dom).appendChild(r), r = o.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, n, r = {}) {
    let i = this.marks[e.type.name];
    return i && Yi(Ei(r), i(e, n), null, e.attrs);
  }
  static renderSpec(e, n, r = null, i) {
    return typeof n == "string" ? { dom: e.createTextNode(n) } : Yi(e, n, r, i);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new fn(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let n = jc(e.nodes);
    return n.text || (n.text = (r) => r.text), n;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return jc(e.marks);
  }
}
function jc(t) {
  let e = {};
  for (let n in t) {
    let r = t[n].spec.toDOM;
    r && (e[n] = r);
  }
  return e;
}
function Ei(t) {
  return t.document || window.document;
}
const Kc = /* @__PURE__ */ new WeakMap();
function Q1(t) {
  let e = Kc.get(t);
  return e === void 0 && Kc.set(t, e = ey(t)), e;
}
function ey(t) {
  let e = null;
  function n(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let i = 0; i < r.length; i++)
            n(r[i]);
      else
        for (let i in r)
          n(r[i]);
  }
  return n(t), e;
}
function Yi(t, e, n, r) {
  if (e.nodeType == 1)
    return { dom: e };
  if (e.dom && e.dom.nodeType == 1)
    return e;
  let i = e[0], o;
  if (typeof i != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (o = Q1(r)) && o.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let s = i.indexOf(" ");
  s > 0 && (n = i.slice(0, s), i = i.slice(s + 1));
  let l, a = n ? t.createElementNS(n, i) : t.createElement(i), c = e[1], d = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    d = 2;
    for (let u in c)
      if (c[u] != null) {
        let f = u.indexOf(" ");
        f > 0 ? a.setAttributeNS(u.slice(0, f), u.slice(f + 1), c[u]) : u == "style" && a.style ? a.style.cssText = c[u] : a.setAttribute(u, c[u]);
      }
  }
  for (let u = d; u < e.length; u++) {
    let f = e[u];
    if (f === 0) {
      if (u < e.length - 1 || u > d)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: a, contentDOM: a };
    } else if (typeof f == "string")
      a.appendChild(t.createTextNode(f));
    else {
      let { dom: h, contentDOM: p } = Yi(t, f, n, r);
      if (a.appendChild(h), p) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = p;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const rh = 65535, ih = Math.pow(2, 16);
function ty(t, e) {
  return t + e * ih;
}
function qc(t) {
  return t & rh;
}
function ny(t) {
  return (t - (t & rh)) / ih;
}
const oh = 1, sh = 2, Qi = 4, lh = 8;
class Al {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.delInfo = n, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & lh) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (oh | Qi)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (sh | Qi)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Qi) > 0;
  }
}
class Be {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, n = !1) {
    if (this.ranges = e, this.inverted = n, !e.length && Be.empty)
      return Be.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let n = 0, r = qc(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        n += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + n + ny(e);
  }
  mapResult(e, n = 1) {
    return this._map(e, n, !1);
  }
  map(e, n = 1) {
    return this._map(e, n, !0);
  }
  /**
  @internal
  */
  _map(e, n, r) {
    let i = 0, o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], d = this.ranges[l + s], u = a + c;
      if (e <= u) {
        let f = c ? e == a ? -1 : e == u ? 1 : n : n, h = a + i + (f < 0 ? 0 : d);
        if (r)
          return h;
        let p = e == (n < 0 ? a : u) ? null : ty(l / 3, e - a), m = e == a ? sh : e == u ? oh : Qi;
        return (n < 0 ? e != a : e != u) && (m |= lh), new Al(h, m, p);
      }
      i += d - c;
    }
    return r ? e + i : new Al(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let r = 0, i = qc(n), o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], d = a + c;
      if (e <= d && l == i * 3)
        return !0;
      r += this.ranges[l + s] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let n = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, o = 0; i < this.ranges.length; i += 3) {
      let s = this.ranges[i], l = s - (this.inverted ? o : 0), a = s + (this.inverted ? 0 : o), c = this.ranges[i + n], d = this.ranges[i + r];
      e(l, l + c, a, a + d), o += d - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new Be(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? Be.empty : new Be(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
Be.empty = new Be([]);
class ei {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e, n, r = 0, i = e ? e.length : 0) {
    this.mirror = n, this.from = r, this.to = i, this._maps = e || [], this.ownData = !(e || n);
  }
  /**
  The step maps in this mapping.
  */
  get maps() {
    return this._maps;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, n = this.maps.length) {
    return new ei(this._maps, this.mirror, e, n);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, n) {
    this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), n != null && this.setMirror(this._maps.length - 1, n);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let n = 0, r = this._maps.length; n < e._maps.length; n++) {
      let i = e.getMirror(n);
      this.appendMap(e._maps[n], i != null && i < n ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let n = 0; n < this.mirror.length; n++)
        if (this.mirror[n] == e)
          return this.mirror[n + (n % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, n) {
    this.mirror || (this.mirror = []), this.mirror.push(e, n);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let n = e.maps.length - 1, r = this._maps.length + e._maps.length; n >= 0; n--) {
      let i = e.getMirror(n);
      this.appendMap(e._maps[n].invert(), i != null && i > n ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new ei();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, n = 1) {
    if (this.mirror)
      return this._map(e, n, !0);
    for (let r = this.from; r < this.to; r++)
      e = this._maps[r].map(e, n);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, n = 1) {
    return this._map(e, n, !1);
  }
  /**
  @internal
  */
  _map(e, n, r) {
    let i = 0;
    for (let o = this.from; o < this.to; o++) {
      let s = this._maps[o], l = s.mapResult(e, n);
      if (l.recover != null) {
        let a = this.getMirror(o);
        if (a != null && a > o && a < this.to) {
          o = a, e = this._maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return r ? e : new Al(e, i, null);
  }
}
const _s = /* @__PURE__ */ Object.create(null);
class Re {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return Be.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, n) {
    if (!n || !n.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = _s[n.stepType];
    if (!r)
      throw new RangeError(`No step type ${n.stepType} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, n) {
    if (e in _s)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return _s[e] = n, n.prototype.jsonID = e, n;
  }
}
class ge {
  /**
  @internal
  */
  constructor(e, n) {
    this.doc = e, this.failed = n;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new ge(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new ge(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, n, r, i) {
    try {
      return ge.ok(e.replace(n, r, i));
    } catch (o) {
      if (o instanceof Zr)
        return ge.fail(o.message);
      throw o;
    }
  }
}
function Ea(t, e, n) {
  let r = [];
  for (let i = 0; i < t.childCount; i++) {
    let o = t.child(i);
    o.content.size && (o = o.copy(Ea(o.content, e, o))), o.isInline && (o = e(o, n, i)), r.push(o);
  }
  return A.fromArray(r);
}
class Qt extends Re {
  /**
  Create a mark step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), o = new O(Ea(n.content, (s, l) => !s.isAtom || !l.type.allowsMarkType(this.mark.type) ? s : s.mark(this.mark.addToSet(s.marks)), i), n.openStart, n.openEnd);
    return ge.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new Qe(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new Qt(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Qt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Qt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new Qt(n.from, n.to, e.markFromJSON(n.mark));
  }
}
Re.jsonID("addMark", Qt);
class Qe extends Re {
  /**
  Create a mark-removing step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = new O(Ea(n.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), n.openStart, n.openEnd);
    return ge.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Qt(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new Qe(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Qe && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Qe(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new Qe(n.from, n.to, e.markFromJSON(n.mark));
  }
}
Re.jsonID("removeMark", Qe);
class en extends Re {
  /**
  Create a node mark step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return ge.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
    return ge.fromReplace(e, this.pos, this.pos + 1, new O(A.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    if (n) {
      let r = this.mark.addToSet(n.marks);
      if (r.length == n.marks.length) {
        for (let i = 0; i < n.marks.length; i++)
          if (!n.marks[i].isInSet(r))
            return new en(this.pos, n.marks[i]);
        return new en(this.pos, this.mark);
      }
    }
    return new Hn(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new en(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new en(n.pos, e.markFromJSON(n.mark));
  }
}
Re.jsonID("addNodeMark", en);
class Hn extends Re {
  /**
  Create a mark-removing step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return ge.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
    return ge.fromReplace(e, this.pos, this.pos + 1, new O(A.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    return !n || !this.mark.isInSet(n.marks) ? this : new en(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new Hn(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new Hn(n.pos, e.markFromJSON(n.mark));
  }
}
Re.jsonID("removeNodeMark", Hn);
class me extends Re {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, n, r, i = !1) {
    super(), this.from = e, this.to = n, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && Tl(e, this.from, this.to) ? ge.fail("Structure replace would overwrite content") : ge.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new Be([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new me(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let n = e.mapResult(this.to, -1), r = this.from == this.to && me.MAP_BIAS < 0 ? n : e.mapResult(this.from, 1);
    return r.deletedAcross && n.deletedAcross ? null : new me(r.pos, Math.max(r.pos, n.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof me) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let n = this.slice.size + e.slice.size == 0 ? O.empty : new O(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new me(this.from, this.to + (e.to - e.from), n, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let n = this.slice.size + e.slice.size == 0 ? O.empty : new O(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new me(e.from, this.to, n, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new me(n.from, n.to, O.fromJSON(e, n.slice), !!n.structure);
  }
}
me.MAP_BIAS = 1;
Re.jsonID("replace", me);
class we extends Re {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, n, r, i, o, s, l = !1) {
    super(), this.from = e, this.to = n, this.gapFrom = r, this.gapTo = i, this.slice = o, this.insert = s, this.structure = l;
  }
  apply(e) {
    if (this.structure && (Tl(e, this.from, this.gapFrom) || Tl(e, this.gapTo, this.to)))
      return ge.fail("Structure gap-replace would overwrite content");
    let n = e.slice(this.gapFrom, this.gapTo);
    if (n.openStart || n.openEnd)
      return ge.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, n.content);
    return r ? ge.fromReplace(e, this.from, this.to, r) : ge.fail("Content does not fit in gap");
  }
  getMap() {
    return new Be([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let n = this.gapTo - this.gapFrom;
    return new we(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return n.deletedAcross && r.deletedAcross || i < n.pos || o > r.pos ? null : new we(n.pos, r.pos, i, o, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number" || typeof n.gapFrom != "number" || typeof n.gapTo != "number" || typeof n.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new we(n.from, n.to, n.gapFrom, n.gapTo, O.fromJSON(e, n.slice), n.insert, !!n.structure);
  }
}
Re.jsonID("replaceAround", we);
function Tl(t, e, n) {
  let r = t.resolve(e), i = n - e, o = r.depth;
  for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
    o--, i--;
  if (i > 0) {
    let s = r.node(o).maybeChild(r.indexAfter(o));
    for (; i > 0; ) {
      if (!s || s.isLeaf)
        return !0;
      s = s.firstChild, i--;
    }
  }
  return !1;
}
function ry(t, e, n, r) {
  let i = [], o = [], s, l;
  t.doc.nodesBetween(e, n, (a, c, d) => {
    if (!a.isInline)
      return;
    let u = a.marks;
    if (!r.isInSet(u) && d.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), h = Math.min(c + a.nodeSize, n), p = r.addToSet(u);
      for (let m = 0; m < u.length; m++)
        u[m].isInSet(p) || (s && s.to == f && s.mark.eq(u[m]) ? s.to = h : i.push(s = new Qe(f, h, u[m])));
      l && l.to == f ? l.to = h : o.push(l = new Qt(f, h, r));
    }
  }), i.forEach((a) => t.step(a)), o.forEach((a) => t.step(a));
}
function iy(t, e, n, r) {
  let i = [], o = 0;
  t.doc.nodesBetween(e, n, (s, l) => {
    if (!s.isInline)
      return;
    o++;
    let a = null;
    if (r instanceof ss) {
      let c = s.marks, d;
      for (; d = r.isInSet(c); )
        (a || (a = [])).push(d), c = d.removeFromSet(c);
    } else r ? r.isInSet(s.marks) && (a = [r]) : a = s.marks;
    if (a && a.length) {
      let c = Math.min(l + s.nodeSize, n);
      for (let d = 0; d < a.length; d++) {
        let u = a[d], f;
        for (let h = 0; h < i.length; h++) {
          let p = i[h];
          p.step == o - 1 && u.eq(i[h].style) && (f = p);
        }
        f ? (f.to = c, f.step = o) : i.push({ style: u, from: Math.max(l, e), to: c, step: o });
      }
    }
  }), i.forEach((s) => t.step(new Qe(s.from, s.to, s.style)));
}
function La(t, e, n, r = n.contentMatch, i = !0) {
  let o = t.doc.nodeAt(e), s = [], l = e + 1;
  for (let a = 0; a < o.childCount; a++) {
    let c = o.child(a), d = l + c.nodeSize, u = r.matchType(c.type);
    if (!u)
      s.push(new me(l, d, O.empty));
    else {
      r = u;
      for (let f = 0; f < c.marks.length; f++)
        n.allowsMarkType(c.marks[f].type) || t.step(new Qe(l, d, c.marks[f]));
      if (i && c.isText && n.whitespace != "pre") {
        let f, h = /\r?\n|\r/g, p;
        for (; f = h.exec(c.text); )
          p || (p = new O(A.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0)), s.push(new me(l + f.index, l + f.index + f[0].length, p));
      }
    }
    l = d;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(A.empty, !0);
    t.replace(l, l, new O(a, 0, 0));
  }
  for (let a = s.length - 1; a >= 0; a--)
    t.step(s[a]);
}
function oy(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function br(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth, i = 0, o = 0; ; --r) {
    let s = t.$from.node(r), l = t.$from.index(r) + i, a = t.$to.indexAfter(r) - o;
    if (r < t.depth && s.canReplace(l, a, n))
      return r;
    if (r == 0 || s.type.spec.isolating || !oy(s, l, a))
      break;
    l && (i = 1), a < s.childCount && (o = 1);
  }
  return null;
}
function sy(t, e, n) {
  let { $from: r, $to: i, depth: o } = e, s = r.before(o + 1), l = i.after(o + 1), a = s, c = l, d = A.empty, u = 0;
  for (let p = o, m = !1; p > n; p--)
    m || r.index(p) > 0 ? (m = !0, d = A.from(r.node(p).copy(d)), u++) : a--;
  let f = A.empty, h = 0;
  for (let p = o, m = !1; p > n; p--)
    m || i.after(p + 1) < i.end(p) ? (m = !0, f = A.from(i.node(p).copy(f)), h++) : c++;
  t.step(new we(a, c, s, l, new O(d.append(f), u, h), d.size - u, !0));
}
function Oa(t, e, n = null, r = t) {
  let i = ly(t, e), o = i && ay(r, e);
  return o ? i.map(Gc).concat({ type: e, attrs: n }).concat(o.map(Gc)) : null;
}
function Gc(t) {
  return { type: t, attrs: null };
}
function ly(t, e) {
  let { parent: n, startIndex: r, endIndex: i } = t, o = n.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let s = o.length ? o[0] : e;
  return n.canReplaceWith(r, i, s) ? o : null;
}
function ay(t, e) {
  let { parent: n, startIndex: r, endIndex: i } = t, o = n.child(r), s = e.contentMatch.findWrapping(o.type);
  if (!s)
    return null;
  let a = (s.length ? s[s.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(n.child(c).type);
  return !a || !a.validEnd ? null : s;
}
function cy(t, e, n) {
  let r = A.empty;
  for (let s = n.length - 1; s >= 0; s--) {
    if (r.size) {
      let l = n[s].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = A.from(n[s].type.create(n[s].attrs, r));
  }
  let i = e.start, o = e.end;
  t.step(new we(i, o, i, o, new O(r, 0, 0), n.length, !0));
}
function dy(t, e, n, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = t.steps.length;
  t.doc.nodesBetween(e, n, (s, l) => {
    let a = typeof i == "function" ? i(s) : i;
    if (s.isTextblock && !s.hasMarkup(r, a) && uy(t.doc, t.mapping.slice(o).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let h = r.whitespace == "pre", p = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        h && !p ? c = !1 : !h && p && (c = !0);
      }
      c === !1 && ch(t, s, l, o), La(t, t.mapping.slice(o).map(l, 1), r, void 0, c === null);
      let d = t.mapping.slice(o), u = d.map(l, 1), f = d.map(l + s.nodeSize, 1);
      return t.step(new we(u, f, u + 1, f - 1, new O(A.from(r.create(a, null, s.marks)), 0, 0), 1, !0)), c === !0 && ah(t, s, l, o), !1;
    }
  });
}
function ah(t, e, n, r) {
  e.forEach((i, o) => {
    if (i.isText) {
      let s, l = /\r?\n|\r/g;
      for (; s = l.exec(i.text); ) {
        let a = t.mapping.slice(r).map(n + 1 + o + s.index);
        t.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function ch(t, e, n, r) {
  e.forEach((i, o) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let s = t.mapping.slice(r).map(n + 1 + o);
      t.replaceWith(s, s + 1, e.type.schema.text(`
`));
    }
  });
}
function uy(t, e, n) {
  let r = t.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, n);
}
function fy(t, e, n, r, i) {
  let o = t.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  n || (n = o.type);
  let s = n.create(r, null, i || o.marks);
  if (o.isLeaf)
    return t.replaceWith(e, e + o.nodeSize, s);
  if (!n.validContent(o.content))
    throw new RangeError("Invalid content for node type " + n.name);
  t.step(new we(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new O(A.from(s), 0, 0), 1, !0));
}
function Rt(t, e, n = 1, r) {
  let i = t.resolve(e), o = i.depth - n, s = r && r[r.length - 1] || i.parent;
  if (o < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !s.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, d = n - 2; c > o; c--, d--) {
    let u = i.node(c), f = i.index(c);
    if (u.type.spec.isolating)
      return !1;
    let h = u.content.cutByIndex(f, u.childCount), p = r && r[d + 1];
    p && (h = h.replaceChild(0, p.type.create(p.attrs)));
    let m = r && r[d] || u;
    if (!u.canReplace(f + 1, u.childCount) || !m.type.validContent(h))
      return !1;
  }
  let l = i.indexAfter(o), a = r && r[0];
  return i.node(o).canReplaceWith(l, l, a ? a.type : i.node(o + 1).type);
}
function hy(t, e, n = 1, r) {
  let i = t.doc.resolve(e), o = A.empty, s = A.empty;
  for (let l = i.depth, a = i.depth - n, c = n - 1; l > a; l--, c--) {
    o = A.from(i.node(l).copy(o));
    let d = r && r[c];
    s = A.from(d ? d.type.create(d.attrs, s) : i.node(l).copy(s));
  }
  t.step(new me(e, e, new O(o.append(s), n, n), !0));
}
function hn(t, e) {
  let n = t.resolve(e), r = n.index();
  return dh(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function py(t, e) {
  e.content.size || t.type.compatibleContent(e.type);
  let n = t.contentMatchAt(t.childCount), { linebreakReplacement: r } = t.type.schema;
  for (let i = 0; i < e.childCount; i++) {
    let o = e.child(i), s = o.type == r ? t.type.schema.nodes.text : o.type;
    if (n = n.matchType(s), !n || !t.type.allowsMarks(o.marks))
      return !1;
  }
  return n.validEnd;
}
function dh(t, e) {
  return !!(t && e && !t.isLeaf && py(t, e));
}
function ls(t, e, n = -1) {
  let r = t.resolve(e);
  for (let i = r.depth; ; i--) {
    let o, s, l = r.index(i);
    if (i == r.depth ? (o = r.nodeBefore, s = r.nodeAfter) : n > 0 ? (o = r.node(i + 1), l++, s = r.node(i).maybeChild(l)) : (o = r.node(i).maybeChild(l - 1), s = r.node(i + 1)), o && !o.isTextblock && dh(o, s) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = n < 0 ? r.before(i) : r.after(i);
  }
}
function my(t, e, n) {
  let r = null, { linebreakReplacement: i } = t.doc.type.schema, o = t.doc.resolve(e - n), s = o.node().type;
  if (i && s.inlineContent) {
    let d = s.whitespace == "pre", u = !!s.contentMatch.matchType(i);
    d && !u ? r = !1 : !d && u && (r = !0);
  }
  let l = t.steps.length;
  if (r === !1) {
    let d = t.doc.resolve(e + n);
    ch(t, d.node(), d.before(), l);
  }
  s.inlineContent && La(t, e + n - 1, s, o.node().contentMatchAt(o.index()), r == null);
  let a = t.mapping.slice(l), c = a.map(e - n);
  if (t.step(new me(c, a.map(e + n, -1), O.empty, !0)), r === !0) {
    let d = t.doc.resolve(c);
    ah(t, d.node(), d.before(), t.steps.length);
  }
  return t;
}
function gy(t, e, n) {
  let r = t.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), n))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.index(i);
      if (r.node(i).canReplaceWith(o, o, n))
        return r.before(i + 1);
      if (o > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.indexAfter(i);
      if (r.node(i).canReplaceWith(o, o, n))
        return r.after(i + 1);
      if (o < r.node(i).childCount)
        return null;
    }
  return null;
}
function uh(t, e, n) {
  let r = t.resolve(e);
  if (!n.content.size)
    return e;
  let i = n.content;
  for (let o = 0; o < n.openStart; o++)
    i = i.firstChild.content;
  for (let o = 1; o <= (n.openStart == 0 && n.size ? 2 : 1); o++)
    for (let s = r.depth; s >= 0; s--) {
      let l = s == r.depth ? 0 : r.pos <= (r.start(s + 1) + r.end(s + 1)) / 2 ? -1 : 1, a = r.index(s) + (l > 0 ? 1 : 0), c = r.node(s), d = !1;
      if (o == 1)
        d = c.canReplace(a, a, i);
      else {
        let u = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        d = u && c.canReplaceWith(a, a, u[0]);
      }
      if (d)
        return l == 0 ? r.pos : l < 0 ? r.before(s + 1) : r.after(s + 1);
    }
  return null;
}
function as(t, e, n = e, r = O.empty) {
  if (e == n && !r.size)
    return null;
  let i = t.resolve(e), o = t.resolve(n);
  return fh(i, o, r) ? new me(e, n, r) : new yy(i, o, r).fit();
}
function fh(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class yy {
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.unplaced = r, this.frontier = [], this.placed = A.empty;
    for (let i = 0; i <= e.depth; i++) {
      let o = e.node(i);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = A.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), n = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let o = this.placed, s = r.depth, l = i.depth;
    for (; s && l && o.childCount == 1; )
      o = o.firstChild.content, s--, l--;
    let a = new O(o, s, l);
    return e > -1 ? new we(r.pos, e, this.$to.pos, this.$to.end(), a, n) : a.size || r.pos != this.$to.pos ? new me(r.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let n = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let o = n.firstChild;
      if (n.childCount > 1 && (i = 0), o.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      n = o.content;
    }
    for (let n = 1; n <= 2; n++)
      for (let r = n == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, o = null;
        r ? (o = Ds(this.unplaced.content, r - 1).firstChild, i = o.content) : i = this.unplaced.content;
        let s = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], d, u = null;
          if (n == 1 && (s ? c.matchType(s.type) || (u = c.fillBefore(A.from(s), !1)) : o && a.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, inject: u };
          if (n == 2 && s && (d = c.findWrapping(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, wrap: d };
          if (o && c.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, i = Ds(e, n);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new O(e, n + 1, Math.max(r, i.size + n >= e.size - r ? n + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, i = Ds(e, n);
    if (i.childCount <= 1 && n > 0) {
      let o = e.size - n <= n + i.size;
      this.unplaced = new O(Mr(e, n - 1, 1), n - 1, o ? n - 1 : r);
    } else
      this.unplaced = new O(Mr(e, n, 1), n, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: n, parent: r, inject: i, wrap: o }) {
    for (; this.depth > n; )
      this.closeFrontierNode();
    if (o)
      for (let m = 0; m < o.length; m++)
        this.openFrontierNode(o[m]);
    let s = this.unplaced, l = r ? r.content : s.content, a = s.openStart - e, c = 0, d = [], { match: u, type: f } = this.frontier[n];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        d.push(i.child(m));
      u = u.matchFragment(i);
    }
    let h = l.size + e - (s.content.size - s.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), g = u.matchType(m.type);
      if (!g)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (u = g, d.push(hh(m.mark(f.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let p = c == l.childCount;
    p || (h = -1), this.placed = Er(this.placed, n, A.from(d)), this.frontier[n].match = u, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = l; m < h; m++) {
      let y = g.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), g = y.content;
    }
    this.unplaced = p ? e == 0 ? O.empty : new O(Mr(s.content, e - 1, 1), e - 1, h < 0 ? s.openEnd : e - 1) : new O(Mr(s.content, e, c), s.openStart, s.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], n;
    if (!e.type.isTextblock || !Ps(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
      let { match: r, type: i } = this.frontier[n], o = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), s = Ps(e, n, i, r, o);
      if (s) {
        for (let l = n - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], d = Ps(e, l, c, a, !0);
          if (!d || d.childCount)
            continue e;
        }
        return { depth: n, fit: s, move: o ? e.doc.resolve(e.after(n + 1)) : e };
      }
    }
  }
  close(e) {
    let n = this.findCloseLevel(e);
    if (!n)
      return null;
    for (; this.depth > n.depth; )
      this.closeFrontierNode();
    n.fit.childCount && (this.placed = Er(this.placed, n.depth, n.fit)), e = n.move;
    for (let r = n.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), o = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, n = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = Er(this.placed, this.depth, A.from(e.create(n, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let n = this.frontier.pop().match.fillBefore(A.empty, !0);
    n.childCount && (this.placed = Er(this.placed, this.frontier.length, n));
  }
}
function Mr(t, e, n) {
  return e == 0 ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(Mr(t.firstChild.content, e - 1, n)));
}
function Er(t, e, n) {
  return e == 0 ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(Er(t.lastChild.content, e - 1, n)));
}
function Ds(t, e) {
  for (let n = 0; n < e; n++)
    t = t.firstChild.content;
  return t;
}
function hh(t, e, n) {
  if (e <= 0)
    return t;
  let r = t.content;
  return e > 1 && (r = r.replaceChild(0, hh(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(A.empty, !0)))), t.copy(r);
}
function Ps(t, e, n, r, i) {
  let o = t.node(e), s = i ? t.indexAfter(e) : t.index(e);
  if (s == o.childCount && !n.compatibleContent(o.type))
    return null;
  let l = r.fillBefore(o.content, !0, s);
  return l && !by(n, o.content, s) ? l : null;
}
function by(t, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function vy(t) {
  return t.spec.defining || t.spec.definingForContent;
}
function wy(t, e, n, r) {
  if (!r.size)
    return t.deleteRange(e, n);
  let i = t.doc.resolve(e), o = t.doc.resolve(n);
  if (fh(i, o, r))
    return t.step(new me(e, n, r));
  let s = mh(i, o);
  s[s.length - 1] == 0 && s.pop();
  let l = -(i.depth + 1);
  s.unshift(l);
  for (let f = i.depth, h = i.pos - 1; f > 0; f--, h--) {
    let p = i.node(f).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    s.indexOf(f) > -1 ? l = f : i.before(f) == h && s.splice(1, 0, -f);
  }
  let a = s.indexOf(l), c = [], d = r.openStart;
  for (let f = r.content, h = 0; ; h++) {
    let p = f.firstChild;
    if (c.push(p), h == r.openStart)
      break;
    f = p.content;
  }
  for (let f = d - 1; f >= 0; f--) {
    let h = c[f], p = vy(h.type);
    if (p && !h.sameMarkup(i.node(Math.abs(l) - 1)))
      d = f;
    else if (p || !h.type.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let h = (f + d + 1) % (r.openStart + 1), p = c[h];
    if (p)
      for (let m = 0; m < s.length; m++) {
        let g = s[(m + a) % s.length], y = !0;
        g < 0 && (y = !1, g = -g);
        let b = i.node(g - 1), w = i.index(g - 1);
        if (b.canReplaceWith(w, w, p.type, p.marks))
          return t.replace(i.before(g), y ? o.after(g) : n, new O(ph(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let u = t.steps.length;
  for (let f = s.length - 1; f >= 0 && (t.replace(e, n, r), !(t.steps.length > u)); f--) {
    let h = s[f];
    h < 0 || (e = i.before(h), n = o.after(h));
  }
}
function ph(t, e, n, r, i) {
  if (e < n) {
    let o = t.firstChild;
    t = t.replaceChild(0, o.copy(ph(o.content, e + 1, n, r, o)));
  }
  if (e > r) {
    let o = i.contentMatchAt(0), s = o.fillBefore(t).append(t);
    t = s.append(o.matchFragment(s).fillBefore(A.empty, !0));
  }
  return t;
}
function ky(t, e, n, r) {
  if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
    let i = gy(t.doc, e, r.type);
    i != null && (e = n = i);
  }
  t.replaceRange(e, n, new O(A.from(r), 0, 0));
}
function xy(t, e, n) {
  let r = t.doc.resolve(e), i = t.doc.resolve(n);
  if (r.parent.isTextblock && i.parent.isTextblock && r.start() != i.start() && r.parentOffset == 0 && i.parentOffset == 0) {
    let s = r.sharedDepth(n), l = !1;
    for (let a = r.depth; a > s; a--)
      r.node(a).type.spec.isolating && (l = !0);
    for (let a = i.depth; a > s; a--)
      i.node(a).type.spec.isolating && (l = !0);
    if (!l) {
      for (let a = r.depth; a > 0 && e == r.start(a); a--)
        e = r.before(a);
      for (let a = i.depth; a > 0 && n == i.start(a); a--)
        n = i.before(a);
      r = t.doc.resolve(e), i = t.doc.resolve(n);
    }
  }
  let o = mh(r, i);
  for (let s = 0; s < o.length; s++) {
    let l = o[s], a = s == o.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return t.delete(r.start(l), i.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return t.delete(r.before(l), i.after(l));
  }
  for (let s = 1; s <= r.depth && s <= i.depth; s++)
    if (e - r.start(s) == r.depth - s && n > r.end(s) && i.end(s) - n != i.depth - s && r.start(s - 1) == i.start(s - 1) && r.node(s - 1).canReplace(r.index(s - 1), i.index(s - 1)))
      return t.delete(r.before(s), n);
  t.delete(e, n);
}
function mh(t, e) {
  let n = [], r = Math.min(t.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let o = t.start(i);
    if (o < t.pos - (t.depth - i) || e.end(i) > e.pos + (e.depth - i) || t.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (o == e.start(i) || i == t.depth && i == e.depth && t.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == o - 1) && n.push(i);
  }
  return n;
}
class nr extends Re {
  /**
  Construct an attribute step.
  */
  constructor(e, n, r) {
    super(), this.pos = e, this.attr = n, this.value = r;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return ge.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in n.attrs)
      r[o] = n.attrs[o];
    r[this.attr] = this.value;
    let i = n.type.create(r, null, n.marks);
    return ge.fromReplace(e, this.pos, this.pos + 1, new O(A.from(i), 0, n.isLeaf ? 0 : 1));
  }
  getMap() {
    return Be.empty;
  }
  invert(e) {
    return new nr(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new nr(n.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number" || typeof n.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new nr(n.pos, n.attr, n.value);
  }
}
Re.jsonID("attr", nr);
class ti extends Re {
  /**
  Construct an attribute step.
  */
  constructor(e, n) {
    super(), this.attr = e, this.value = n;
  }
  apply(e) {
    let n = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      n[i] = e.attrs[i];
    n[this.attr] = this.value;
    let r = e.type.create(n, e.content, e.marks);
    return ge.ok(r);
  }
  getMap() {
    return Be.empty;
  }
  invert(e) {
    return new ti(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new ti(n.attr, n.value);
  }
}
Re.jsonID("docAttr", ti);
let sr = class extends Error {
};
sr = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
sr.prototype = Object.create(Error.prototype);
sr.prototype.constructor = sr;
sr.prototype.name = "TransformError";
class Ha {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new ei();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let n = this.maybeStep(e);
    if (n.failed)
      throw new sr(n.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let n = e.apply(this.doc);
    return n.failed || this.addStep(e, n.doc), n;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  Return a single range, in post-transform document positions,
  that covers all content changed by this transform. Returns null
  if no replacements are made. Note that this will ignore changes
  that add/remove marks without replacing the underlying content.
  */
  changedRange() {
    let e = 1e9, n = -1e9;
    for (let r = 0; r < this.mapping.maps.length; r++) {
      let i = this.mapping.maps[r];
      r && (e = i.map(e, 1), n = i.map(n, -1)), i.forEach((o, s, l, a) => {
        e = Math.min(e, l), n = Math.max(n, a);
      });
    }
    return e == 1e9 ? null : { from: e, to: n };
  }
  /**
  @internal
  */
  addStep(e, n) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = n;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, n = e, r = O.empty) {
    let i = as(this.doc, e, n, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, n, r) {
    return this.replace(e, n, new O(A.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, n) {
    return this.replace(e, n, O.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, n) {
    return this.replaceWith(e, e, n);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, n, r) {
    return wy(this, e, n, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, n, r) {
    return ky(this, e, n, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, n) {
    return xy(this, e, n), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, n) {
    return sy(this, e, n), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, n = 1) {
    return my(this, e, n), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, n) {
    return cy(this, e, n), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, n = e, r, i = null) {
    return dy(this, e, n, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, n, r = null, i) {
    return fy(this, e, n, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, n, r) {
    return this.step(new nr(e, n, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, n) {
    return this.step(new ti(e, n)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, n) {
    return this.step(new en(e, n)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, n) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (n instanceof ie)
      n.isInSet(r.marks) && this.step(new Hn(e, n));
    else {
      let i = r.marks, o, s = [];
      for (; o = n.isInSet(i); )
        s.push(new Hn(e, o)), i = o.removeFromSet(i);
      for (let l = s.length - 1; l >= 0; l--)
        this.step(s[l]);
    }
    return this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split (with the outermost nodes coming first).
  */
  split(e, n = 1, r) {
    return hy(this, e, n, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, n, r) {
    return ry(this, e, n, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, n, r) {
    return iy(this, e, n, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, n, r) {
    return La(this, e, n, r), this;
  }
}
const zs = /* @__PURE__ */ Object.create(null);
class $ {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, r) {
    this.$anchor = e, this.$head = n, this.ranges = r || [new gh(e.min(n), e.max(n))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let n = 0; n < e.length; n++)
      if (e[n].$from.pos != e[n].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, n = O.empty) {
    let r = n.content.lastChild, i = null;
    for (let l = 0; l < n.openEnd; l++)
      i = r, r = r.lastChild;
    let o = e.steps.length, s = this.ranges;
    for (let l = 0; l < s.length; l++) {
      let { $from: a, $to: c } = s[l], d = e.mapping.slice(o);
      e.replaceRange(d.map(a.pos), d.map(c.pos), l ? O.empty : n), l == 0 && Zc(e, o, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, n) {
    let r = e.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      let { $from: s, $to: l } = i[o], a = e.mapping.slice(r), c = a.map(s.pos), d = a.map(l.pos);
      o ? e.deleteRange(c, d) : (e.replaceRangeWith(c, d, n), Zc(e, r, n.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, n, r = !1) {
    let i = e.parent.inlineContent ? new N(e) : qn(e.node(0), e.parent, e.pos, e.index(), n, r);
    if (i)
      return i;
    for (let o = e.depth - 1; o >= 0; o--) {
      let s = n < 0 ? qn(e.node(0), e.node(o), e.before(o + 1), e.index(o), n, r) : qn(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, n, r);
      if (s)
        return s;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, n = 1) {
    return this.findFrom(e, n) || this.findFrom(e, -n) || new Ue(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return qn(e, e, 0, 0, 1) || new Ue(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return qn(e, e, e.content.size, e.childCount, -1) || new Ue(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, n) {
    if (!n || !n.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = zs[n.type];
    if (!r)
      throw new RangeError(`No selection type ${n.type} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, n) {
    if (e in zs)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return zs[e] = n, n.prototype.jsonID = e, n;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return N.between(this.$anchor, this.$head).getBookmark();
  }
}
$.prototype.visible = !0;
class gh {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let Jc = !1;
function Xc(t) {
  !Jc && !t.parent.inlineContent && (Jc = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class N extends $ {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    Xc(e), Xc(n), super(e, n);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, n) {
    let r = e.resolve(n.map(this.head));
    if (!r.parent.inlineContent)
      return $.near(r);
    let i = e.resolve(n.map(this.anchor));
    return new N(i.parent.inlineContent ? i : r, r);
  }
  replace(e, n = O.empty) {
    if (super.replace(e, n), n == O.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof N && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new cs(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number" || typeof n.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new N(e.resolve(n.anchor), e.resolve(n.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, n, r = n) {
    let i = e.resolve(n);
    return new this(i, r == n ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, n, r) {
    let i = e.pos - n.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !n.parent.inlineContent) {
      let o = $.findFrom(n, r, !0) || $.findFrom(n, -r, !0);
      if (o)
        n = o.$head;
      else
        return $.near(n, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = n : (e = ($.findFrom(e, -r, !0) || $.findFrom(e, r, !0)).$anchor, e.pos < n.pos != i < 0 && (e = n))), new N(e, n);
  }
}
$.jsonID("text", N);
class cs {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new cs(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return N.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class z extends $ {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let n = e.nodeAfter, r = e.node(0).resolve(e.pos + n.nodeSize);
    super(e, r), this.node = n;
  }
  map(e, n) {
    let { deleted: r, pos: i } = n.mapResult(this.anchor), o = e.resolve(i);
    return r ? $.near(o) : new z(o);
  }
  content() {
    return new O(A.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof z && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Ra(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new z(e.resolve(n.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, n) {
    return new z(e.resolve(n));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
z.prototype.visible = !1;
$.jsonID("node", z);
class Ra {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new cs(r, r) : new Ra(r);
  }
  resolve(e) {
    let n = e.resolve(this.anchor), r = n.nodeAfter;
    return r && z.isSelectable(r) ? new z(n) : $.near(n);
  }
}
class Ue extends $ {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, n = O.empty) {
    if (n == O.empty) {
      e.delete(0, e.doc.content.size);
      let r = $.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, n);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new Ue(e);
  }
  map(e) {
    return new Ue(e);
  }
  eq(e) {
    return e instanceof Ue;
  }
  getBookmark() {
    return Sy;
  }
}
$.jsonID("all", Ue);
const Sy = {
  map() {
    return this;
  },
  resolve(t) {
    return new Ue(t);
  }
};
function qn(t, e, n, r, i, o = !1) {
  if (e.inlineContent)
    return N.create(t, n);
  for (let s = r - (i > 0 ? 0 : 1); i > 0 ? s < e.childCount : s >= 0; s += i) {
    let l = e.child(s);
    if (l.isAtom) {
      if (!o && z.isSelectable(l))
        return z.create(t, n - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = qn(t, l, n + i, i < 0 ? l.childCount : 0, i, o);
      if (a)
        return a;
    }
    n += l.nodeSize * i;
  }
  return null;
}
function Zc(t, e, n) {
  let r = t.steps.length - 1;
  if (r < e)
    return;
  let i = t.steps[r];
  if (!(i instanceof me || i instanceof we))
    return;
  let o = t.mapping.maps[r], s;
  o.forEach((l, a, c, d) => {
    s == null && (s = d);
  }), t.setSelection($.near(t.doc.resolve(s), n));
}
const Yc = 1, Li = 2, Qc = 4;
class Cy extends Ha {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | Yc) & ~Li, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & Yc) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= Li, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return ie.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & Li) > 0;
  }
  /**
  @internal
  */
  addStep(e, n) {
    super.addStep(e, n), this.updated = this.updated & ~Li, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, n = !0) {
    let r = this.selection;
    return n && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || ie.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, n, r) {
    let i = this.doc.type.schema;
    if (n == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = n), !e)
        return this.deleteRange(n, r);
      let o = this.storedMarks;
      if (!o) {
        let s = this.doc.resolve(n);
        o = r == n ? s.marks() : s.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(n, r, i.text(e, o)), !this.selection.empty && this.selection.to == n + e.length && this.setSelection($.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, n) {
    return this.meta[typeof e == "string" ? e : e.key] = n, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= Qc, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & Qc) > 0;
  }
}
function ed(t, e) {
  return !e || !t ? t : t.bind(e);
}
class Lr {
  constructor(e, n, r) {
    this.name = e, this.init = ed(n.init, r), this.apply = ed(n.apply, r);
  }
}
const Ay = [
  new Lr("doc", {
    init(t) {
      return t.doc || t.schema.topNodeType.createAndFill();
    },
    apply(t) {
      return t.doc;
    }
  }),
  new Lr("selection", {
    init(t, e) {
      return t.selection || $.atStart(e.doc);
    },
    apply(t) {
      return t.selection;
    }
  }),
  new Lr("storedMarks", {
    init(t) {
      return t.storedMarks || null;
    },
    apply(t, e, n, r) {
      return r.selection.$cursor ? t.storedMarks : null;
    }
  }),
  new Lr("scrollToSelection", {
    init() {
      return 0;
    },
    apply(t, e) {
      return t.scrolledIntoView ? e + 1 : e;
    }
  })
];
class $s {
  constructor(e, n) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = Ay.slice(), n && n.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new Lr(r.key, r.spec.state, r));
    });
  }
}
class wn {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, n = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != n) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let n = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let o = !1;
      for (let s = 0; s < this.config.plugins.length; s++) {
        let l = this.config.plugins[s];
        if (l.spec.appendTransaction) {
          let a = i ? i[s].n : 0, c = i ? i[s].state : this, d = a < n.length && l.spec.appendTransaction.call(l, a ? n.slice(a) : n, c, r);
          if (d && r.filterTransaction(d, s)) {
            if (d.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let u = 0; u < this.config.plugins.length; u++)
                i.push(u < s ? { state: r, n: n.length } : { state: this, n: 0 });
            }
            n.push(d), r = r.applyInner(d), o = !0;
          }
          i && (i[s] = { state: r, n: n.length });
        }
      }
      if (!o)
        return { state: r, transactions: n };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let n = new wn(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let o = r[i];
      n[o.name] = o.apply(e, this[o.name], this, n);
    }
    return n;
  }
  /**
  Accessor that constructs and returns a new [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new Cy(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let n = new $s(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new wn(n);
    for (let i = 0; i < n.fields.length; i++)
      r[n.fields[i].name] = n.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let n = new $s(this.schema, e.plugins), r = n.fields, i = new wn(n);
    for (let o = 0; o < r.length; o++) {
      let s = r[o].name;
      i[s] = this.hasOwnProperty(s) ? this[s] : r[o].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let n = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (n.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], o = i.spec.state;
        o && o.toJSON && (n[r] = o.toJSON.call(i, this[i.key]));
      }
    return n;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, n, r) {
    if (!n)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new $s(e.schema, e.plugins), o = new wn(i);
    return i.fields.forEach((s) => {
      if (s.name == "doc")
        o.doc = tn.fromJSON(e.schema, n.doc);
      else if (s.name == "selection")
        o.selection = $.fromJSON(o.doc, n.selection);
      else if (s.name == "storedMarks")
        n.storedMarks && (o.storedMarks = n.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == s.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(n, l)) {
              o[s.name] = c.fromJSON.call(a, e, n[l], o);
              return;
            }
          }
        o[s.name] = s.init(e, o);
      }
    }), o;
  }
}
function yh(t, e, n) {
  for (let r in t) {
    let i = t[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = yh(i, e, {})), n[r] = i;
  }
  return n;
}
class re {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && yh(e.props, this, this.props), this.key = e.key ? e.key.key : bh("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Bs = /* @__PURE__ */ Object.create(null);
function bh(t) {
  return t in Bs ? t + "$" + ++Bs[t] : (Bs[t] = 0, t + "$");
}
class se {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = bh(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Va = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function vh(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const wh = (t, e, n) => {
  let r = vh(t, n);
  if (!r)
    return !1;
  let i = Na(r);
  if (!i) {
    let s = r.blockRange(), l = s && br(s);
    return l == null ? !1 : (e && e(t.tr.lift(s, l).scrollIntoView()), !0);
  }
  let o = i.nodeBefore;
  if (Lh(t, i, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (lr(o, "end") || z.isSelectable(o)))
    for (let s = r.depth; ; s--) {
      let l = as(t.doc, r.before(s), r.after(s), O.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = t.tr.step(l);
          a.setSelection(lr(o, "end") ? $.findFrom(a.doc.resolve(a.mapping.map(i.pos, -1)), -1) : z.create(a.doc, i.pos - o.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (s == 1 || r.node(s - 1).childCount > 1)
        break;
    }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(t.tr.delete(i.pos - o.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, Ty = (t, e, n) => {
  let r = vh(t, n);
  if (!r)
    return !1;
  let i = Na(r);
  return i ? kh(t, i, e) : !1;
}, My = (t, e, n) => {
  let r = Sh(t, n);
  if (!r)
    return !1;
  let i = Ia(r);
  return i ? kh(t, i, e) : !1;
};
function kh(t, e, n) {
  let r = e.nodeBefore, i = r, o = e.pos - 1;
  for (; !i.isTextblock; o--) {
    if (i.type.spec.isolating)
      return !1;
    let d = i.lastChild;
    if (!d)
      return !1;
    i = d;
  }
  let s = e.nodeAfter, l = s, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let d = l.firstChild;
    if (!d)
      return !1;
    l = d;
  }
  let c = as(t.doc, o, a, O.empty);
  if (!c || c.from != o || c instanceof me && c.slice.size >= a - o)
    return !1;
  if (n) {
    let d = t.tr.step(c);
    d.setSelection(N.create(d.doc, o)), n(d.scrollIntoView());
  }
  return !0;
}
function lr(t, e, n = !1) {
  for (let r = t; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (n && r.childCount != 1)
      return !1;
  }
  return !1;
}
const xh = (t, e, n) => {
  let { $head: r, empty: i } = t.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
      return !1;
    o = Na(r);
  }
  let s = o && o.nodeBefore;
  return !s || !z.isSelectable(s) ? !1 : (e && e(t.tr.setSelection(z.create(t.doc, o.pos - s.nodeSize)).scrollIntoView()), !0);
};
function Na(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Sh(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const Ch = (t, e, n) => {
  let r = Sh(t, n);
  if (!r)
    return !1;
  let i = Ia(r);
  if (!i)
    return !1;
  let o = i.nodeAfter;
  if (Lh(t, i, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (lr(o, "start") || z.isSelectable(o))) {
    let s = as(t.doc, r.before(), r.after(), O.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (e) {
        let l = t.tr.step(s);
        l.setSelection(lr(o, "start") ? $.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : z.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(t.tr.delete(i.pos, i.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, Ah = (t, e, n) => {
  let { $head: r, empty: i } = t.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)
      return !1;
    o = Ia(r);
  }
  let s = o && o.nodeAfter;
  return !s || !z.isSelectable(s) ? !1 : (e && e(t.tr.setSelection(z.create(t.doc, o.pos)).scrollIntoView()), !0);
};
function Ia(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      let n = t.node(e);
      if (t.index(e) + 1 < n.childCount)
        return t.doc.resolve(t.after(e + 1));
      if (n.type.spec.isolating)
        break;
    }
  return null;
}
const Ey = (t, e) => {
  let n = t.selection, r = n instanceof z, i;
  if (r) {
    if (n.node.isTextblock || !hn(t.doc, n.from))
      return !1;
    i = n.from;
  } else if (i = ls(t.doc, n.from, -1), i == null)
    return !1;
  if (e) {
    let o = t.tr.join(i);
    r && o.setSelection(z.create(o.doc, i - t.doc.resolve(i).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, Ly = (t, e) => {
  let n = t.selection, r;
  if (n instanceof z) {
    if (n.node.isTextblock || !hn(t.doc, n.to))
      return !1;
    r = n.to;
  } else if (r = ls(t.doc, n.to, 1), r == null)
    return !1;
  return e && e(t.tr.join(r).scrollIntoView()), !0;
}, Oy = (t, e) => {
  let { $from: n, $to: r } = t.selection, i = n.blockRange(r), o = i && br(i);
  return o == null ? !1 : (e && e(t.tr.lift(i, o).scrollIntoView()), !0);
}, Th = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function _a(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
const Hy = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return !1;
  let i = n.node(-1), o = n.indexAfter(-1), s = _a(i.contentMatchAt(o));
  if (!s || !i.canReplaceWith(o, o, s))
    return !1;
  if (e) {
    let l = n.after(), a = t.tr.replaceWith(l, l, s.createAndFill());
    a.setSelection($.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, Mh = (t, e) => {
  let n = t.selection, { $from: r, $to: i } = n;
  if (n instanceof Ue || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let o = _a(i.parent.contentMatchAt(i.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let s = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = t.tr.insert(s, o.createAndFill());
    l.setSelection(N.create(l.doc, s + 1)), e(l.scrollIntoView());
  }
  return !0;
}, Eh = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let o = n.before();
    if (Rt(t.doc, o))
      return e && e(t.tr.split(o).scrollIntoView()), !0;
  }
  let r = n.blockRange(), i = r && br(r);
  return i == null ? !1 : (e && e(t.tr.lift(r, i).scrollIntoView()), !0);
};
function Ry(t) {
  return (e, n) => {
    let { $from: r, $to: i } = e.selection;
    if (e.selection instanceof z && e.selection.node.isBlock)
      return !r.parentOffset || !Rt(e.doc, r.pos) ? !1 : (n && n(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let o = [], s, l, a = !1, c = !1;
    for (let h = r.depth; ; h--)
      if (r.node(h).isBlock) {
        a = r.end(h) == r.pos + (r.depth - h), c = r.start(h) == r.pos - (r.depth - h), l = _a(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), o.unshift(a && l ? { type: l } : null), s = h;
        break;
      } else {
        if (h == 1)
          return !1;
        o.unshift(null);
      }
    let d = e.tr;
    (e.selection instanceof N || e.selection instanceof Ue) && d.deleteSelection();
    let u = d.mapping.map(r.pos), f = Rt(d.doc, u, o.length, o);
    if (f || (o[0] = l ? { type: l } : null, f = Rt(d.doc, u, o.length, o)), !f)
      return !1;
    if (d.split(u, o.length, o), !a && c && r.node(s).type != l) {
      let h = d.mapping.map(r.before(s)), p = d.doc.resolve(h);
      l && r.node(s - 1).canReplaceWith(p.index(), p.index() + 1, l) && d.setNodeMarkup(d.mapping.map(r.before(s)), l);
    }
    return n && n(d.scrollIntoView()), !0;
  };
}
const Vy = Ry(), Ny = (t, e) => {
  let { $from: n, to: r } = t.selection, i, o = n.sharedDepth(r);
  return o == 0 ? !1 : (i = n.before(o), e && e(t.tr.setSelection(z.create(t.doc, i))), !0);
};
function Iy(t, e, n) {
  let r = e.nodeBefore, i = e.nodeAfter, o = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(i.isTextblock || hn(t.doc, e.pos)) ? !1 : (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function Lh(t, e, n, r) {
  let i = e.nodeBefore, o = e.nodeAfter, s, l, a = i.type.spec.isolating || o.type.spec.isolating;
  if (!a && Iy(t, e, n))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (s = (l = i.contentMatchAt(i.childCount)).findWrapping(o.type)) && l.matchType(s[0] || o.type).validEnd) {
    if (n) {
      let h = e.pos + o.nodeSize, p = A.empty;
      for (let y = s.length - 1; y >= 0; y--)
        p = A.from(s[y].create(null, p));
      p = A.from(i.copy(p));
      let m = t.tr.step(new we(e.pos - 1, h, e.pos, h, new O(p, 1, 0), s.length, !0)), g = m.doc.resolve(h + 2 * s.length);
      g.nodeAfter && g.nodeAfter.type == i.type && hn(m.doc, g.pos) && m.join(g.pos), n(m.scrollIntoView());
    }
    return !0;
  }
  let d = o.type.spec.isolating || r > 0 && a ? null : $.findFrom(e, 1), u = d && d.$from.blockRange(d.$to), f = u && br(u);
  if (f != null && f >= e.depth)
    return n && n(t.tr.lift(u, f).scrollIntoView()), !0;
  if (c && lr(o, "start", !0) && lr(i, "end")) {
    let h = i, p = [];
    for (; p.push(h), !h.isTextblock; )
      h = h.lastChild;
    let m = o, g = 1;
    for (; !m.isTextblock; m = m.firstChild)
      g++;
    if (h.canReplace(h.childCount, h.childCount, m.content)) {
      if (n) {
        let y = A.empty;
        for (let w = p.length - 1; w >= 0; w--)
          y = A.from(p[w].copy(y));
        let b = t.tr.step(new we(e.pos - p.length, e.pos + o.nodeSize, e.pos + g, e.pos + o.nodeSize - g, new O(y, p.length, 0), 0, !0));
        n(b.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Oh(t) {
  return function(e, n) {
    let r = e.selection, i = t < 0 ? r.$from : r.$to, o = i.depth;
    for (; i.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return i.node(o).isTextblock ? (n && n(e.tr.setSelection(N.create(e.doc, t < 0 ? i.start(o) : i.end(o)))), !0) : !1;
  };
}
const _y = Oh(-1), Dy = Oh(1);
function Py(t, e = null) {
  return function(n, r) {
    let { $from: i, $to: o } = n.selection, s = i.blockRange(o), l = s && Oa(s, t, e);
    return l ? (r && r(n.tr.wrap(s, l).scrollIntoView()), !0) : !1;
  };
}
function td(t, e = null) {
  return function(n, r) {
    let i = !1;
    for (let o = 0; o < n.selection.ranges.length && !i; o++) {
      let { $from: { pos: s }, $to: { pos: l } } = n.selection.ranges[o];
      n.doc.nodesBetween(s, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(t, e)))
          if (a.type == t)
            i = !0;
          else {
            let d = n.doc.resolve(c), u = d.index();
            i = d.parent.canReplaceWith(u, u + 1, t);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let o = n.tr;
      for (let s = 0; s < n.selection.ranges.length; s++) {
        let { $from: { pos: l }, $to: { pos: a } } = n.selection.ranges[s];
        o.setBlockType(l, a, t, e);
      }
      r(o.scrollIntoView());
    }
    return !0;
  };
}
function Da(...t) {
  return function(e, n, r) {
    for (let i = 0; i < t.length; i++)
      if (t[i](e, n, r))
        return !0;
    return !1;
  };
}
Da(Va, wh, xh);
Da(Va, Ch, Ah);
Da(Th, Mh, Eh, Vy);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function zy(t, e = null) {
  return function(n, r) {
    let { $from: i, $to: o } = n.selection, s = i.blockRange(o);
    if (!s)
      return !1;
    let l = r ? n.tr : null;
    return $y(l, s, t, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function $y(t, e, n, r = null) {
  let i = !1, o = e, s = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = s.resolve(e.start - 2);
    o = new ao(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new ao(e.$from, s.resolve(e.$to.end(e.depth)), e.depth)), i = !0;
  }
  let l = Oa(o, n, r, e);
  return l ? (t && By(t, e, l, i, n), !0) : !1;
}
function By(t, e, n, r, i) {
  let o = A.empty;
  for (let d = n.length - 1; d >= 0; d--)
    o = A.from(n[d].type.create(n[d].attrs, o));
  t.step(new we(e.start - (r ? 2 : 0), e.end, e.start, e.end, new O(o, 0, 0), n.length, !0));
  let s = 0;
  for (let d = 0; d < n.length; d++)
    n[d].type == i && (s = d + 1);
  let l = n.length - s, a = e.start + n.length - (r ? 2 : 0), c = e.parent;
  for (let d = e.startIndex, u = e.endIndex, f = !0; d < u; d++, f = !1)
    !f && Rt(t.doc, a, l) && (t.split(a, l), a += 2 * l), a += c.child(d).nodeSize;
  return t;
}
function Fy(t) {
  return function(e, n) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (s) => s.childCount > 0 && s.firstChild.type == t);
    return o ? n ? r.node(o.depth - 1).type == t ? Uy(e, n, t, o) : Wy(e, n, o) : !0 : !1;
  };
}
function Uy(t, e, n, r) {
  let i = t.tr, o = r.end, s = r.$to.end(r.depth);
  o < s && (i.step(new we(o - 1, s, o, s, new O(A.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new ao(i.doc.resolve(r.$from.pos), i.doc.resolve(s), r.depth));
  const l = br(r);
  if (l == null)
    return !1;
  i.lift(r, l);
  let a = i.doc.resolve(i.mapping.map(o, -1) - 1);
  return hn(i.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && i.join(a.pos), e(i.scrollIntoView()), !0;
}
function Wy(t, e, n) {
  let r = t.tr, i = n.parent;
  for (let h = n.end, p = n.endIndex - 1, m = n.startIndex; p > m; p--)
    h -= i.child(p).nodeSize, r.delete(h - 1, h + 1);
  let o = r.doc.resolve(n.start), s = o.nodeAfter;
  if (r.mapping.map(n.end) != n.start + o.nodeAfter.nodeSize)
    return !1;
  let l = n.startIndex == 0, a = n.endIndex == i.childCount, c = o.node(-1), d = o.index(-1);
  if (!c.canReplace(d + (l ? 0 : 1), d + 1, s.content.append(a ? A.empty : A.from(i))))
    return !1;
  let u = o.pos, f = u + s.nodeSize;
  return r.step(new we(u - (l ? 1 : 0), f + (a ? 1 : 0), u + 1, f - 1, new O((l ? A.empty : A.from(i.copy(A.empty))).append(a ? A.empty : A.from(i.copy(A.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function jy(t) {
  return function(e, n) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == t);
    if (!o)
      return !1;
    let s = o.startIndex;
    if (s == 0)
      return !1;
    let l = o.parent, a = l.child(s - 1);
    if (a.type != t)
      return !1;
    if (n) {
      let c = a.lastChild && a.lastChild.type == l.type, d = A.from(c ? t.create() : null), u = new O(A.from(t.create(null, A.from(l.type.create(null, d)))), c ? 3 : 1, 0), f = o.start, h = o.end;
      n(e.tr.step(new we(f - (c ? 3 : 1), h, f, h, u, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
const Se = function(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}, ar = function(t) {
  let e = t.assignedSlot || t.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let Ml = null;
const Et = function(t, e, n) {
  let r = Ml || (Ml = document.createRange());
  return r.setEnd(t, n ?? t.nodeValue.length), r.setStart(t, e || 0), r;
}, Ky = function() {
  Ml = null;
}, Rn = function(t, e, n, r) {
  return n && (nd(t, e, n, r, -1) || nd(t, e, n, r, 1));
}, qy = /^(img|br|input|textarea|hr)$/i;
function nd(t, e, n, r, i) {
  for (var o; ; ) {
    if (t == n && e == r)
      return !0;
    if (e == (i < 0 ? 0 : Ge(t))) {
      let s = t.parentNode;
      if (!s || s.nodeType != 1 || bi(t) || qy.test(t.nodeName) || t.contentEditable == "false")
        return !1;
      e = Se(t) + (i < 0 ? 0 : 1), t = s;
    } else if (t.nodeType == 1) {
      let s = t.childNodes[e + (i < 0 ? -1 : 0)];
      if (s.nodeType == 1 && s.contentEditable == "false")
        if (!((o = s.pmViewDesc) === null || o === void 0) && o.ignoreForSelection)
          e += i;
        else
          return !1;
      else
        t = s, e = i < 0 ? Ge(t) : 0;
    } else
      return !1;
  }
}
function Ge(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function Gy(t, e) {
  for (; ; ) {
    if (t.nodeType == 3 && e)
      return t;
    if (t.nodeType == 1 && e > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[e - 1], e = Ge(t);
    } else if (t.parentNode && !bi(t))
      e = Se(t), t = t.parentNode;
    else
      return null;
  }
}
function Jy(t, e) {
  for (; ; ) {
    if (t.nodeType == 3 && e < t.nodeValue.length)
      return t;
    if (t.nodeType == 1 && e < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[e], e = 0;
    } else if (t.parentNode && !bi(t))
      e = Se(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
function Xy(t, e, n) {
  for (let r = e == 0, i = e == Ge(t); r || i; ) {
    if (t == n)
      return !0;
    let o = Se(t);
    if (t = t.parentNode, !t)
      return !1;
    r = r && o == 0, i = i && o == Ge(t);
  }
}
function bi(t) {
  let e;
  for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const ds = function(t) {
  return t.focusNode && Rn(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function vn(t, e) {
  let n = document.createEvent("Event");
  return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n;
}
function Zy(t) {
  let e = t.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Yy(t, e, n) {
  if (t.caretPositionFromPoint)
    try {
      let r = t.caretPositionFromPoint(e, n);
      if (r)
        return { node: r.offsetNode, offset: Math.min(Ge(r.offsetNode), r.offset) };
    } catch {
    }
  if (t.caretRangeFromPoint) {
    let r = t.caretRangeFromPoint(e, n);
    if (r)
      return { node: r.startContainer, offset: Math.min(Ge(r.startContainer), r.startOffset) };
  }
}
const ft = typeof navigator < "u" ? navigator : null, rd = typeof document < "u" ? document : null, pn = ft && ft.userAgent || "", El = /Edge\/(\d+)/.exec(pn), Hh = /MSIE \d/.exec(pn), Ll = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(pn), Pe = !!(Hh || Ll || El), rn = Hh ? document.documentMode : Ll ? +Ll[1] : El ? +El[1] : 0, Je = !Pe && /gecko\/(\d+)/i.test(pn);
Je && +(/Firefox\/(\d+)/.exec(pn) || [0, 0])[1];
const Ol = !Pe && /Chrome\/(\d+)/.exec(pn), Te = !!Ol, Rh = Ol ? +Ol[1] : 0, Oe = !Pe && !!ft && /Apple Computer/.test(ft.vendor), cr = Oe && (/Mobile\/\w+/.test(pn) || !!ft && ft.maxTouchPoints > 2), qe = cr || (ft ? /Mac/.test(ft.platform) : !1), Vh = ft ? /Win/.test(ft.platform) : !1, Lt = /Android \d/.test(pn), vi = !!rd && "webkitFontSmoothing" in rd.documentElement.style, Qy = vi ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function e0(t) {
  let e = t.defaultView && t.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: t.documentElement.clientWidth,
    top: 0,
    bottom: t.documentElement.clientHeight
  };
}
function xt(t, e) {
  return typeof t == "number" ? t : t[e];
}
function t0(t) {
  let e = t.getBoundingClientRect(), n = e.width / t.offsetWidth || 1, r = e.height / t.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + t.clientWidth * n,
    top: e.top,
    bottom: e.top + t.clientHeight * r
  };
}
function id(t, e, n) {
  if (!Hl(e) && e.left == 0)
    return;
  let r = t.someProp("scrollThreshold") || 0, i = t.someProp("scrollMargin") || 5, o = t.dom.ownerDocument;
  for (let s = n || t.dom; s; ) {
    if (s.nodeType != 1) {
      s = ar(s);
      continue;
    }
    let l = s, a = l == o.body, c = a ? e0(o) : t0(l), d = 0, u = 0;
    if (e.top < c.top + xt(r, "top") ? u = -(c.top - e.top + xt(i, "top")) : e.bottom > c.bottom - xt(r, "bottom") && (u = e.bottom - e.top > c.bottom - c.top ? e.top + xt(i, "top") - c.top : e.bottom - c.bottom + xt(i, "bottom")), e.left < c.left + xt(r, "left") ? d = -(c.left - e.left + xt(i, "left")) : e.right > c.right - xt(r, "right") && (d = e.right - c.right + xt(i, "right")), d || u)
      if (a)
        o.defaultView.scrollBy(d, u);
      else {
        let h = l.scrollLeft, p = l.scrollTop;
        u && (l.scrollTop += u), d && (l.scrollLeft += d);
        let m = l.scrollLeft - h, g = l.scrollTop - p;
        e = { left: e.left - m, top: e.top - g, right: e.right - m, bottom: e.bottom - g };
      }
    let f = a ? "fixed" : getComputedStyle(s).position;
    if (/^(fixed|sticky)$/.test(f))
      break;
    s = f == "absolute" ? s.offsetParent : ar(s);
  }
}
function n0(t) {
  let e = t.dom.getBoundingClientRect(), n = Math.max(0, e.top), r, i;
  for (let o = (e.left + e.right) / 2, s = n + 1; s < Math.min(innerHeight, e.bottom); s += 5) {
    let l = t.root.elementFromPoint(o, s);
    if (!l || l == t.dom || !t.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= n - 20) {
      r = l, i = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: Nh(t.dom) };
}
function Nh(t) {
  let e = [], n = t.ownerDocument;
  for (let r = t; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), t != n); r = ar(r))
    ;
  return e;
}
function r0({ refDOM: t, refTop: e, stack: n }) {
  let r = t ? t.getBoundingClientRect().top : 0;
  Ih(n, r == 0 ? 0 : r - e);
}
function Ih(t, e) {
  for (let n = 0; n < t.length; n++) {
    let { dom: r, top: i, left: o } = t[n];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != o && (r.scrollLeft = o);
  }
}
let Un = null;
function i0(t) {
  if (t.setActive)
    return t.setActive();
  if (Un)
    return t.focus(Un);
  let e = Nh(t);
  t.focus(Un == null ? {
    get preventScroll() {
      return Un = { preventScroll: !0 }, !0;
    }
  } : void 0), Un || (Un = !1, Ih(e, 0));
}
function _h(t, e) {
  let n, r = 2e8, i, o = 0, s = e.top, l = e.top, a, c;
  for (let d = t.firstChild, u = 0; d; d = d.nextSibling, u++) {
    let f;
    if (d.nodeType == 1)
      f = d.getClientRects();
    else if (d.nodeType == 3)
      f = Et(d).getClientRects();
    else
      continue;
    for (let h = 0; h < f.length; h++) {
      let p = f[h];
      if (p.top <= s && p.bottom >= l) {
        s = Math.max(p.bottom, s), l = Math.min(p.top, l);
        let m = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (m < r) {
          n = d, r = m, i = m && n.nodeType == 3 ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e, d.nodeType == 1 && m && (o = u + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
          continue;
        }
      } else p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = d, c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      !n && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (o = u + 1);
    }
  }
  return !n && a && (n = a, i = c, r = 0), n && n.nodeType == 3 ? o0(n, i) : !n || r && n.nodeType == 1 ? { node: t, offset: o } : _h(n, i);
}
function o0(t, e) {
  let n = t.nodeValue.length, r = document.createRange(), i;
  for (let o = 0; o < n; o++) {
    r.setEnd(t, o + 1), r.setStart(t, o);
    let s = Kt(r, 1);
    if (s.top != s.bottom && Pa(e, s)) {
      i = { node: t, offset: o + (e.left >= (s.left + s.right) / 2 ? 1 : 0) };
      break;
    }
  }
  return r.detach(), i || { node: t, offset: 0 };
}
function Pa(t, e) {
  return t.left >= e.left - 1 && t.left <= e.right + 1 && t.top >= e.top - 1 && t.top <= e.bottom + 1;
}
function s0(t, e) {
  let n = t.parentNode;
  return n && /^li$/i.test(n.nodeName) && e.left < t.getBoundingClientRect().left ? n : t;
}
function l0(t, e, n) {
  let { node: r, offset: i } = _h(e, n), o = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let s = r.getBoundingClientRect();
    o = s.left != s.right && n.left > (s.left + s.right) / 2 ? 1 : -1;
  }
  return t.docView.posFromDOM(r, i, o);
}
function a0(t, e, n, r) {
  let i = -1;
  for (let o = e, s = !1; o != t.dom; ) {
    let l = t.docView.nearestDesc(o, !0), a;
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM) && // Ignore elements with zero-size bounding rectangles
    ((a = l.dom.getBoundingClientRect()).width || a.height) && (l.node.isBlock && l.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(l.dom.nodeName) && (!s && a.left > r.left || a.top > r.top ? i = l.posBefore : (!s && a.right < r.left || a.bottom < r.top) && (i = l.posAfter), s = !0), !l.contentDOM && i < 0 && !l.node.isText))
      return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    o = l.dom.parentNode;
  }
  return i > -1 ? i : t.docView.posFromDOM(e, n, -1);
}
function Dh(t, e, n) {
  let r = t.childNodes.length;
  if (r && n.top < n.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - n.top) / (n.bottom - n.top)) - 2)), o = i; ; ) {
      let s = t.childNodes[o];
      if (s.nodeType == 1) {
        let l = s.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (Pa(e, c))
            return Dh(s, e, c);
        }
      }
      if ((o = (o + 1) % r) == i)
        break;
    }
  return t;
}
function c0(t, e) {
  let n = t.dom.ownerDocument, r, i = 0, o = Yy(n, e.left, e.top);
  o && ({ node: r, offset: i } = o);
  let s = (t.root.elementFromPoint ? t.root : n).elementFromPoint(e.left, e.top), l;
  if (!s || !t.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
    let c = t.dom.getBoundingClientRect();
    if (!Pa(e, c) || (s = Dh(t.dom, e, c), !s))
      return null;
  }
  if (Oe)
    for (let c = s; r && c; c = ar(c))
      c.draggable && (r = void 0);
  if (s = s0(s, e), r) {
    if (Je && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let d = r.childNodes[i], u;
      d.nodeName == "IMG" && (u = d.getBoundingClientRect()).right <= e.left && u.bottom > e.top && i++;
    }
    let c;
    vi && i && r.nodeType == 1 && (c = r.childNodes[i - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && i--, r == t.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = t.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = a0(t, r, i, e));
  }
  l == null && (l = l0(t, s, e));
  let a = t.docView.nearestDesc(s, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function Hl(t) {
  return t.top < t.bottom || t.left < t.right;
}
function Kt(t, e) {
  let n = t.getClientRects();
  if (n.length) {
    let r = n[e < 0 ? 0 : n.length - 1];
    if (Hl(r))
      return r;
  }
  return Array.prototype.find.call(n, Hl) || t.getBoundingClientRect();
}
const d0 = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function Ph(t, e, n) {
  let { node: r, offset: i, atom: o } = t.docView.domFromPos(e, n < 0 ? -1 : 1), s = vi || Je;
  if (r.nodeType == 3)
    if (s && (d0.test(r.nodeValue) || (n < 0 ? !i : i == r.nodeValue.length))) {
      let a = Kt(Et(r, i, i), n);
      if (Je && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = Kt(Et(r, i - 1, i - 1), -1);
        if (c.top == a.top) {
          let d = Kt(Et(r, i, i + 1), -1);
          if (d.top != a.top)
            return Cr(d, d.left < c.left);
        }
      }
      return a;
    } else {
      let a = i, c = i, d = n < 0 ? 1 : -1;
      return n < 0 && !i ? (c++, d = -1) : n >= 0 && i == r.nodeValue.length ? (a--, d = 1) : n < 0 ? a-- : c++, Cr(Kt(Et(r, a, c), d), d < 0);
    }
  if (!t.state.doc.resolve(e - (o || 0)).parent.inlineContent) {
    if (o == null && i && (n < 0 || i == Ge(r))) {
      let a = r.childNodes[i - 1];
      if (a.nodeType == 1)
        return Fs(a.getBoundingClientRect(), !1);
    }
    if (o == null && i < Ge(r)) {
      let a = r.childNodes[i];
      if (a.nodeType == 1)
        return Fs(a.getBoundingClientRect(), !0);
    }
    return Fs(r.getBoundingClientRect(), n >= 0);
  }
  if (o == null && i && (n < 0 || i == Ge(r))) {
    let a = r.childNodes[i - 1], c = a.nodeType == 3 ? Et(a, Ge(a) - (s ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return Cr(Kt(c, 1), !1);
  }
  if (o == null && i < Ge(r)) {
    let a = r.childNodes[i];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? Et(a, 0, s ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return Cr(Kt(c, -1), !0);
  }
  return Cr(Kt(r.nodeType == 3 ? Et(r) : r, -n), n >= 0);
}
function Cr(t, e) {
  if (t.width == 0)
    return t;
  let n = e ? t.left : t.right;
  return { top: t.top, bottom: t.bottom, left: n, right: n };
}
function Fs(t, e) {
  if (t.height == 0)
    return t;
  let n = e ? t.top : t.bottom;
  return { top: n, bottom: n, left: t.left, right: t.right };
}
function zh(t, e, n) {
  let r = t.state, i = t.root.activeElement;
  r != e && t.updateState(e), i != t.dom && t.focus();
  try {
    return n();
  } finally {
    r != e && t.updateState(r), i != t.dom && i && i.focus();
  }
}
function u0(t, e, n) {
  let r = e.selection, i = n == "up" ? r.$from : r.$to;
  return zh(t, e, () => {
    let { node: o } = t.docView.domFromPos(i.pos, n == "up" ? -1 : 1);
    for (; ; ) {
      let l = t.docView.nearestDesc(o, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        o = l.contentDOM || l.dom;
        break;
      }
      o = l.dom.parentNode;
    }
    let s = Ph(t, i.pos, 1);
    for (let l = o.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = Et(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let d = a[c];
        if (d.bottom > d.top + 1 && (n == "up" ? s.top - d.top > (d.bottom - s.top) * 2 : d.bottom - s.bottom > (s.bottom - d.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const f0 = /[\u0590-\u08ac]/;
function h0(t, e, n) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, o = !i, s = i == r.parent.content.size, l = t.domSelection();
  return l ? !f0.test(r.parent.textContent) || !l.modify ? n == "left" || n == "backward" ? o : s : zh(t, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: d, anchorOffset: u } = t.domSelectionRange(), f = l.caretBidiLevel;
    l.modify("move", n, "character");
    let h = r.depth ? t.docView.domAfterPos(r.before()) : t.dom, { focusNode: p, focusOffset: m } = t.domSelectionRange(), g = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == m;
    try {
      l.collapse(d, u), a && (a != d || c != u) && l.extend && l.extend(a, c);
    } catch {
    }
    return f != null && (l.caretBidiLevel = f), g;
  }) : r.pos == r.start() || r.pos == r.end();
}
let od = null, sd = null, ld = !1;
function p0(t, e, n) {
  return od == e && sd == n ? ld : (od = e, sd = n, ld = n == "up" || n == "down" ? u0(t, e, n) : h0(t, e, n));
}
const Xe = 0, ad = 1, kn = 2, et = 3;
class wi {
  constructor(e, n, r, i) {
    this.parent = e, this.children = n, this.dom = r, this.contentDOM = i, this.dirty = Xe, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, n, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule(e) {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let n = 0; n < this.children.length; n++)
      e += this.children[n].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let n = 0, r = this.posAtStart; ; n++) {
      let i = this.children[n];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, n, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[n - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.previousSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.previousSibling;
        return o ? this.posBeforeChild(s) + s.size : this.posAtStart;
      } else {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[n];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.nextSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.nextSibling;
        return o ? this.posBeforeChild(s) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = n > Se(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (n == 0)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !1;
            break;
          }
          if (o.previousSibling)
            break;
        }
      if (i == null && n == e.childNodes.length)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !0;
            break;
          }
          if (o.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, n = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let o = this.getDesc(i), s;
      if (o && (!n || o.node))
        if (r && (s = o.nodeDOM) && !(s.nodeType == 1 ? s.contains(e.nodeType == 1 ? e : e.parentNode) : s == e))
          r = !1;
        else
          return o;
    }
  }
  getDesc(e) {
    let n = e.pmViewDesc;
    for (let r = n; r; r = r.parent)
      if (r == this)
        return n;
  }
  posFromDOM(e, n, r) {
    for (let i = e; i; i = i.parentNode) {
      let o = this.getDesc(i);
      if (o)
        return o.localPosFromDOM(e, n, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let n = 0, r = 0; n < this.children.length; n++) {
      let i = this.children[n], o = r + i.size;
      if (r == e && o != r) {
        for (; !i.border && i.children.length; )
          for (let s = 0; s < i.children.length; s++) {
            let l = i.children[s];
            if (l.size) {
              i = l;
              break;
            }
          }
        return i;
      }
      if (e < o)
        return i.descAt(e - r - i.border);
      r = o;
    }
  }
  domFromPos(e, n) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let o = 0; r < this.children.length; r++) {
      let s = this.children[r], l = o + s.size;
      if (l > e || s instanceof Bh) {
        i = e - o;
        break;
      }
      o = l;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, n);
    for (let o; r && !(o = this.children[r - 1]).size && o instanceof $h && o.side >= 0; r--)
      ;
    if (n <= 0) {
      let o, s = !0;
      for (; o = r ? this.children[r - 1] : null, !(!o || o.dom.parentNode == this.contentDOM); r--, s = !1)
        ;
      return o && n && s && !o.border && !o.domAtom ? o.domFromPos(o.size, n) : { node: this.contentDOM, offset: o ? Se(o.dom) + 1 : 0 };
    } else {
      let o, s = !0;
      for (; o = r < this.children.length ? this.children[r] : null, !(!o || o.dom.parentNode == this.contentDOM); r++, s = !1)
        ;
      return o && s && !o.border && !o.domAtom ? o.domFromPos(0, n) : { node: this.contentDOM, offset: o ? Se(o.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, n, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: n, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, o = -1;
    for (let s = r, l = 0; ; l++) {
      let a = this.children[l], c = s + a.size;
      if (i == -1 && e <= c) {
        let d = s + a.border;
        if (e >= d && n <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, n, d);
        e = s;
        for (let u = l; u > 0; u--) {
          let f = this.children[u - 1];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
            i = Se(f.dom) + 1;
            break;
          }
          e -= f.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > n || l == this.children.length - 1)) {
        n = c;
        for (let d = l + 1; d < this.children.length; d++) {
          let u = this.children[d];
          if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(-1)) {
            o = Se(u.dom);
            break;
          }
          n += u.size;
        }
        o == -1 && (o = this.contentDOM.childNodes.length);
        break;
      }
      s = c;
    }
    return { node: this.contentDOM, from: e, to: n, fromOffset: i, toOffset: o };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let n = this.children[e < 0 ? 0 : this.children.length - 1];
    return n.size == 0 || n.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: n, offset: r } = this.domFromPos(e, 0);
    if (n.nodeType != 1 || r == n.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return n.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, n, r, i = !1) {
    let o = Math.min(e, n), s = Math.max(e, n);
    for (let h = 0, p = 0; h < this.children.length; h++) {
      let m = this.children[h], g = p + m.size;
      if (o > p && s < g)
        return m.setSelection(e - p - m.border, n - p - m.border, r, i);
      p = g;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = n == e ? l : this.domFromPos(n, n ? -1 : 1), c = r.root.getSelection(), d = r.domSelectionRange(), u = !1;
    if ((Je || Oe) && e == n) {
      let { node: h, offset: p } = l;
      if (h.nodeType == 3) {
        if (u = !!(p && h.nodeValue[p - 1] == `
`), u && p == h.nodeValue.length)
          for (let m = h, g; m; m = m.parentNode) {
            if (g = m.nextSibling) {
              g.nodeName == "BR" && (l = a = { node: g.parentNode, offset: Se(g) + 1 });
              break;
            }
            let y = m.pmViewDesc;
            if (y && y.node && y.node.isBlock)
              break;
          }
      } else {
        let m = h.childNodes[p - 1];
        u = m && (m.nodeName == "BR" || m.contentEditable == "false");
      }
    }
    if (Je && d.focusNode && d.focusNode != a.node && d.focusNode.nodeType == 1) {
      let h = d.focusNode.childNodes[d.focusOffset];
      h && h.contentEditable == "false" && (i = !0);
    }
    if (!(i || u && Oe) && Rn(l.node, l.offset, d.anchorNode, d.anchorOffset) && Rn(a.node, a.offset, d.focusNode, d.focusOffset))
      return;
    let f = !1;
    if ((c.extend || e == n) && !(u && Je)) {
      c.collapse(l.node, l.offset);
      try {
        e != n && c.extend(a.node, a.offset), f = !0;
      } catch {
      }
    }
    if (!f) {
      if (e > n) {
        let p = l;
        l = a, a = p;
      }
      let h = document.createRange();
      h.setEnd(a.node, a.offset), h.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(h);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, n) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let o = this.children[i], s = r + o.size;
      if (r == s ? e <= s && n >= r : e < s && n > r) {
        let l = r + o.border, a = s - o.border;
        if (e >= l && n <= a) {
          this.dirty = e == r || n == s ? kn : ad, e == l && n == a && (o.contentLost || o.dom.parentNode != this.contentDOM) ? o.dirty = et : o.markDirty(e - l, n - l);
          return;
        } else
          o.dirty = o.dom == o.contentDOM && o.dom.parentNode == this.contentDOM && !o.children.length ? kn : et;
      }
      r = s;
    }
    this.dirty = kn;
  }
  markParentsDirty() {
    let e = 1;
    for (let n = this.parent; n; n = n.parent, e++) {
      let r = e == 1 ? kn : ad;
      n.dirty < r && (n.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  get ignoreForSelection() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class $h extends wi {
  constructor(e, n, r, i) {
    let o, s = n.type.toDOM;
    if (typeof s == "function" && (s = s(r, () => {
      if (!o)
        return i;
      if (o.parent)
        return o.parent.posBeforeChild(o);
    })), !n.type.spec.raw) {
      if (s.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(s), s = l;
      }
      s.contentEditable = "false", s.classList.add("ProseMirror-widget");
    }
    super(e, [], s, null), this.widget = n, this.widget = n, o = this;
  }
  matchesWidget(e) {
    return this.dirty == Xe && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let n = this.widget.spec.stopEvent;
    return n ? n(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get ignoreForSelection() {
    return !!this.widget.type.spec.relaxedSide;
  }
  get side() {
    return this.widget.type.side;
  }
}
class m0 extends wi {
  constructor(e, n, r, i) {
    super(e, [], n, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, n) {
    return e != this.textDOM ? this.posAtStart + (n ? this.size : 0) : this.posAtStart + n;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class on extends wi {
  constructor(e, n, r, i, o) {
    super(e, [], r, i), this.mark = n, this.spec = o;
  }
  static create(e, n, r, i) {
    let o = i.nodeViews[n.type.name], s = o && o(n, i, r);
    return (!s || !s.dom) && (s = fn.renderSpec(document, n.type.spec.toDOM(n, r), null, n.attrs)), new on(e, n, s.dom, s.contentDOM || s.dom, s);
  }
  parseRule() {
    return this.dirty & et || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != et && this.mark.eq(e);
  }
  markDirty(e, n) {
    if (super.markDirty(e, n), this.dirty != Xe) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = Xe;
    }
  }
  slice(e, n, r) {
    let i = on.create(this.parent, this.mark, !0, r), o = this.children, s = this.size;
    n < s && (o = Vl(o, n, s, r)), e > 0 && (o = Vl(o, 0, e, r));
    for (let l = 0; l < o.length; l++)
      o[l].parent = i;
    return i.children = o, i;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class sn extends wi {
  constructor(e, n, r, i, o, s, l) {
    super(e, [], o, s), this.node = n, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, n, r, i, o, s) {
    let l = o.nodeViews[n.type.name], a, c = l && l(n, o, () => {
      if (!a)
        return s;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, i), d = c && c.dom, u = c && c.contentDOM;
    if (n.isText) {
      if (!d)
        d = document.createTextNode(n.text);
      else if (d.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else d || ({ dom: d, contentDOM: u } = fn.renderSpec(document, n.type.spec.toDOM(n), null, n.attrs));
    !u && !n.isText && d.nodeName != "BR" && (d.hasAttribute("contenteditable") || (d.contentEditable = "false"), n.type.spec.draggable && (d.draggable = !0));
    let f = d;
    return d = Wh(d, r, n), c ? a = new g0(e, n, r, i, d, u || null, f, c) : n.isText ? new us(e, n, r, i, d, f) : new sn(e, n, r, i, d, u || null, f);
  }
  parseRule(e) {
    if (this.node.type.spec.reparseInView)
      return null;
    let n = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (n.preserveWhitespace = "full"), !this.contentDOM)
      n.getContent = () => this.node.content;
    else if (!this.contentLost)
      n.contentElement = this.contentDOM;
    else {
      for (let r = this.children.length - 1; r >= 0; r--) {
        let i = this.children[r];
        if (this.dom.contains(i.dom.parentNode)) {
          n.contentElement = i.dom.parentNode;
          break;
        }
      }
      if (!n.contentElement) {
        let r = e && e.find((i) => i.nodeType == 1 && e.indexOf(i.parentNode) < 0 && this.dom.contains(i));
        r ? n.contentElement = r : n.getContent = () => A.empty;
      }
    }
    return n;
  }
  matchesNode(e, n, r) {
    return this.dirty == Xe && e.eq(this.node) && uo(n, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, n) {
    let r = this.node.inlineContent, i = n, o = e.composing ? this.localCompositionInfo(e, n) : null, s = o && o.pos > -1 ? o : null, l = o && o.pos < 0, a = new b0(this, s && s.node, e);
    k0(this.node, this.innerDeco, (c, d, u) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e, d) : c.type.side >= 0 && !u && a.syncToMarks(d == this.node.childCount ? ie.none : this.node.child(d).marks, r, e, d), a.placeWidget(c, e, i);
    }, (c, d, u, f) => {
      a.syncToMarks(c.marks, r, e, f);
      let h;
      a.findNodeMatch(c, d, u, f) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (h = a.findIndexWithChild(o.node)) > -1 && a.updateNodeAt(c, d, u, h, e) || a.updateNextNode(c, d, u, e, f, i) || a.addNode(c, d, u, e, i), i += c.nodeSize;
    }), a.syncToMarks([], r, e, 0), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == kn) && (s && this.protectLocalComposition(e, s), Fh(this.contentDOM, this.children, e), cr && x0(this.dom));
  }
  localCompositionInfo(e, n) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof N) || r < n || i > n + this.node.content.size)
      return null;
    let o = e.input.compositionNode;
    if (!o || !this.dom.contains(o.parentNode))
      return null;
    if (this.node.inlineContent) {
      let s = o.nodeValue, l = S0(this.node.content, s, r - n, i - n);
      return l < 0 ? null : { node: o, pos: l, text: s };
    } else
      return { node: o, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: n, pos: r, text: i }) {
    if (this.getDesc(n))
      return;
    let o = n;
    for (; o.parentNode != this.contentDOM; o = o.parentNode) {
      for (; o.previousSibling; )
        o.parentNode.removeChild(o.previousSibling);
      for (; o.nextSibling; )
        o.parentNode.removeChild(o.nextSibling);
      o.pmViewDesc && (o.pmViewDesc = void 0);
    }
    let s = new m0(this, o, n, i);
    e.input.compositionNodes.push(s), this.children = Vl(this.children, r, r + i.length, e, s);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, n, r, i) {
    return this.dirty == et || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, n, r, i), !0);
  }
  updateInner(e, n, r, i) {
    this.updateOuterDeco(n), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = Xe;
  }
  updateOuterDeco(e) {
    if (uo(e, this.outerDeco))
      return;
    let n = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = Uh(this.dom, this.nodeDOM, Rl(this.outerDeco, this.node, n), Rl(e, this.node, n)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.nodeDOM.draggable = !0));
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.nodeDOM.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function cd(t, e, n, r, i) {
  Wh(r, e, t);
  let o = new sn(void 0, t, e, n, r, r, r);
  return o.contentDOM && o.updateChildren(i, 0), o;
}
class us extends sn {
  constructor(e, n, r, i, o, s) {
    super(e, n, r, i, o, null, s);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, n, r, i) {
    return this.dirty == et || this.dirty != Xe && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(n), (this.dirty != Xe || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = Xe, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let n = this.nodeDOM; n; n = n.parentNode)
      if (n == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, n, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(n, this.node.text.length) : super.localPosFromDOM(e, n, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, n, r) {
    let i = this.node.cut(e, n), o = document.createTextNode(i.text);
    return new us(this.parent, i, this.outerDeco, this.innerDeco, o, o);
  }
  markDirty(e, n) {
    super.markDirty(e, n), this.dom != this.nodeDOM && (e == 0 || n == this.nodeDOM.nodeValue.length) && (this.dirty = et);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class Bh extends wi {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == Xe && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class g0 extends sn {
  constructor(e, n, r, i, o, s, l, a) {
    super(e, n, r, i, o, s, l), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, n, r, i) {
    if (this.dirty == et)
      return !1;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let o = this.spec.update(e, n, r);
      return o && this.updateInner(e, n, r, i), o;
    } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, n, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, n, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, n, r.root) : super.setSelection(e, n, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function Fh(t, e, n) {
  let r = t.firstChild, i = !1;
  for (let o = 0; o < e.length; o++) {
    let s = e[o], l = s.dom;
    if (l.parentNode == t) {
      for (; l != r; )
        r = dd(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, t.insertBefore(l, r);
    if (s instanceof on) {
      let a = r ? r.previousSibling : t.lastChild;
      Fh(s.contentDOM, s.children, n), r = a ? a.nextSibling : t.firstChild;
    }
  }
  for (; r; )
    r = dd(r), i = !0;
  i && n.trackWrites == t && (n.trackWrites = null);
}
const Nr = function(t) {
  t && (this.nodeName = t);
};
Nr.prototype = /* @__PURE__ */ Object.create(null);
const xn = [new Nr()];
function Rl(t, e, n) {
  if (t.length == 0)
    return xn;
  let r = n ? xn[0] : new Nr(), i = [r];
  for (let o = 0; o < t.length; o++) {
    let s = t[o].type.attrs;
    if (s) {
      s.nodeName && i.push(r = new Nr(s.nodeName));
      for (let l in s) {
        let a = s[l];
        a != null && (n && i.length == 1 && i.push(r = new Nr(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return i;
}
function Uh(t, e, n, r) {
  if (n == xn && r == xn)
    return e;
  let i = e;
  for (let o = 0; o < r.length; o++) {
    let s = r[o], l = n[o];
    if (o) {
      let a;
      l && l.nodeName == s.nodeName && i != t && (a = i.parentNode) && a.nodeName.toLowerCase() == s.nodeName || (a = document.createElement(s.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = xn[0]), i = a;
    }
    y0(i, l || xn[0], s);
  }
  return i;
}
function y0(t, e, n) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in n) && t.removeAttribute(r);
  for (let r in n)
    r != "class" && r != "style" && r != "nodeName" && n[r] != e[r] && t.setAttribute(r, n[r]);
  if (e.class != n.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = n.class ? n.class.split(" ").filter(Boolean) : [];
    for (let o = 0; o < r.length; o++)
      i.indexOf(r[o]) == -1 && t.classList.remove(r[o]);
    for (let o = 0; o < i.length; o++)
      r.indexOf(i[o]) == -1 && t.classList.add(i[o]);
    t.classList.length == 0 && t.removeAttribute("class");
  }
  if (e.style != n.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        t.style.removeProperty(i[1]);
    }
    n.style && (t.style.cssText += n.style);
  }
}
function Wh(t, e, n) {
  return Uh(t, t, xn, Rl(e, n, t.nodeType != 1));
}
function uo(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (!t[n].type.eq(e[n].type))
      return !1;
  return !0;
}
function dd(t) {
  let e = t.nextSibling;
  return t.parentNode.removeChild(t), e;
}
class b0 {
  constructor(e, n, r) {
    this.lock = n, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = v0(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, n) {
    if (e != n) {
      for (let r = e; r < n; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, n - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, n, r, i) {
    let o = 0, s = this.stack.length >> 1, l = Math.min(s, e.length);
    for (; o < l && (o == s - 1 ? this.top : this.stack[o + 1 << 1]).matchesMark(e[o]) && e[o].type.spec.spanning !== !1; )
      o++;
    for (; o < s; )
      this.destroyRest(), this.top.dirty = Xe, this.index = this.stack.pop(), this.top = this.stack.pop(), s--;
    for (; s < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let a = -1, c = this.top.children.length;
      i < this.preMatch.index && (c = Math.min(this.index + 3, c));
      for (let d = this.index; d < c; d++) {
        let u = this.top.children[d];
        if (u.matchesMark(e[s]) && !this.isLocked(u.dom)) {
          a = d;
          break;
        }
      }
      if (a < 0 && this.index < this.top.children.length) {
        let d = this.top.children[this.index];
        d instanceof on && d.dirty != et && d.mark.type == e[s].type && d.spec.update && !this.isLocked(d.dom) && d.spec.update(e[s]) && (d.mark = e[s], a = this.index, this.changed = !0);
      }
      if (a > -1)
        a > this.index && (this.changed = !0, this.destroyBetween(this.index, a)), this.top = this.top.children[this.index];
      else {
        let d = on.create(this.top, e[s], n, r);
        this.top.children.splice(this.index, 0, d), this.top = d, this.changed = !0;
      }
      this.index = 0, s++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, n, r, i) {
    let o = -1, s;
    if (i >= this.preMatch.index && (s = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && s.matchesNode(e, n, r))
      o = this.top.children.indexOf(s, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, n, r) && !this.preMatch.matched.has(c)) {
          o = l;
          break;
        }
      }
    return o < 0 ? !1 : (this.destroyBetween(this.index, o), this.index++, !0);
  }
  updateNodeAt(e, n, r, i, o) {
    let s = this.top.children[i];
    return s.dirty == et && s.dom == s.contentDOM && (s.dirty = kn), s.update(e, n, r, o) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let n = e.parentNode;
      if (!n)
        return -1;
      if (n == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = n;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, n, r, i, o, s) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof sn) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != o)
          return !1;
        let d = a.dom, u, f = this.isLocked(d) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != et && uo(n, a.outerDeco));
        if (!f && a.update(e, n, r, i))
          return this.destroyBetween(this.index, l), a.dom != d && (this.changed = !0), this.index++, !0;
        if (!f && (u = this.recreateWrapper(a, e, n, r, i, s)))
          return this.destroyBetween(this.index, l), this.top.children[this.index] = u, u.contentDOM && (u.dirty = kn, u.updateChildren(i, s + 1), u.dirty = Xe), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, n, r, i, o, s) {
    if (e.dirty || n.isAtom || !e.children.length || !e.node.content.eq(n.content) || !uo(r, e.outerDeco) || !i.eq(e.innerDeco))
      return null;
    let l = sn.create(this.top, n, r, i, o, s);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let a of l.children)
        a.parent = l;
    }
    return e.destroy(), l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, n, r, i, o) {
    let s = sn.create(this.top, e, n, r, i, o);
    s.contentDOM && s.updateChildren(i, o + 1), this.top.children.splice(this.index++, 0, s), this.changed = !0;
  }
  placeWidget(e, n, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let o = new $h(this.top, e, n, r);
      this.top.children.splice(this.index++, 0, o), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], n = this.top;
    for (; e instanceof on; )
      n = e, e = n.children[n.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof us) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Oe || Te) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", n), this.addHackNode("BR", this.top));
  }
  addHackNode(e, n) {
    if (n == this.top && this.index < n.children.length && n.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new Bh(this.top, [], r, null);
      n != this.top ? n.children.push(i) : n.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function v0(t, e) {
  let n = e, r = n.children.length, i = t.childCount, o = /* @__PURE__ */ new Map(), s = [];
  e: for (; i > 0; ) {
    let l;
    for (; ; )
      if (r) {
        let c = n.children[r - 1];
        if (c instanceof on)
          n = c, r = c.children.length;
        else {
          l = c, r--;
          break;
        }
      } else {
        if (n == e)
          break e;
        r = n.parent.children.indexOf(n), n = n.parent;
      }
    let a = l.node;
    if (a) {
      if (a != t.child(i - 1))
        break;
      --i, o.set(l, i), s.push(l);
    }
  }
  return { index: i, matched: o, matches: s.reverse() };
}
function w0(t, e) {
  return t.type.side - e.type.side;
}
function k0(t, e, n, r) {
  let i = e.locals(t), o = 0;
  if (i.length == 0) {
    for (let c = 0; c < t.childCount; c++) {
      let d = t.child(c);
      r(d, i, e.forChild(o, d), c), o += d.nodeSize;
    }
    return;
  }
  let s = 0, l = [], a = null;
  for (let c = 0; ; ) {
    let d, u;
    for (; s < i.length && i[s].to == o; ) {
      let g = i[s++];
      g.widget && (d ? (u || (u = [d])).push(g) : d = g);
    }
    if (d)
      if (u) {
        u.sort(w0);
        for (let g = 0; g < u.length; g++)
          n(u[g], c, !!a);
      } else
        n(d, c, !!a);
    let f, h;
    if (a)
      h = -1, f = a, a = null;
    else if (c < t.childCount)
      h = c, f = t.child(c++);
    else
      break;
    for (let g = 0; g < l.length; g++)
      l[g].to <= o && l.splice(g--, 1);
    for (; s < i.length && i[s].from <= o && i[s].to > o; )
      l.push(i[s++]);
    let p = o + f.nodeSize;
    if (f.isText) {
      let g = p;
      s < i.length && i[s].from < g && (g = i[s].from);
      for (let y = 0; y < l.length; y++)
        l[y].to < g && (g = l[y].to);
      g < p && (a = f.cut(g - o), f = f.cut(0, g - o), p = g, h = -1);
    } else
      for (; s < i.length && i[s].to < p; )
        s++;
    let m = f.isInline && !f.isLeaf ? l.filter((g) => !g.inline) : l.slice();
    r(f, m, e.forChild(o, f), h), o = p;
  }
}
function x0(t) {
  if (t.nodeName == "UL" || t.nodeName == "OL") {
    let e = t.style.cssText;
    t.style.cssText = e + "; list-style: square !important", window.getComputedStyle(t).listStyle, t.style.cssText = e;
  }
}
function S0(t, e, n, r) {
  for (let i = 0, o = 0; i < t.childCount && o <= r; ) {
    let s = t.child(i++), l = o;
    if (o += s.nodeSize, !s.isText)
      continue;
    let a = s.text;
    for (; i < t.childCount; ) {
      let c = t.child(i++);
      if (o += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (o >= n) {
      if (o >= r && a.slice(r - e.length - l, r - l) == e)
        return r - e.length;
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= n)
        return l + c;
      if (n == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function Vl(t, e, n, r, i) {
  let o = [];
  for (let s = 0, l = 0; s < t.length; s++) {
    let a = t[s], c = l, d = l += a.size;
    c >= n || d <= e ? o.push(a) : (c < e && o.push(a.slice(0, e - c, r)), i && (o.push(i), i = void 0), d > n && o.push(a.slice(n - c, a.size, r)));
  }
  return o;
}
function za(t, e = null) {
  let n = t.domSelectionRange(), r = t.state.doc;
  if (!n.focusNode)
    return null;
  let i = t.docView.nearestDesc(n.focusNode), o = i && i.size == 0, s = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (s < 0)
    return null;
  let l = r.resolve(s), a, c;
  if (ds(n)) {
    for (a = s; i && !i.node; )
      i = i.parent;
    let u = i.node;
    if (i && u.isAtom && z.isSelectable(u) && i.parent && !(u.isInline && Xy(n.focusNode, n.focusOffset, i.dom))) {
      let f = i.posBefore;
      c = new z(s == f ? l : r.resolve(f));
    }
  } else {
    if (n instanceof t.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
      let u = s, f = s;
      for (let h = 0; h < n.rangeCount; h++) {
        let p = n.getRangeAt(h);
        u = Math.min(u, t.docView.posFromDOM(p.startContainer, p.startOffset, 1)), f = Math.max(f, t.docView.posFromDOM(p.endContainer, p.endOffset, -1));
      }
      if (u < 0)
        return null;
      [a, s] = f == t.state.selection.anchor ? [f, u] : [u, f], l = r.resolve(s);
    } else
      a = t.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
    if (a < 0)
      return null;
  }
  let d = r.resolve(a);
  if (!c) {
    let u = e == "pointer" || t.state.selection.head < l.pos && !o ? 1 : -1;
    c = $a(t, d, l, u);
  }
  return c;
}
function jh(t) {
  return t.editable ? t.hasFocus() : qh(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function Vt(t, e = !1) {
  let n = t.state.selection;
  if (Kh(t, n), !jh(t))
    return;
  let r = t.input.mouseDown;
  if (!e && Te && r) {
    let i = t.domSelectionRange(), o = t.domObserver.currentSelection;
    if (i.anchorNode && o.anchorNode && Rn(i.anchorNode, i.anchorOffset, o.anchorNode, o.anchorOffset) && r.delaySelUpdate()) {
      t.domObserver.setCurSelection();
      return;
    }
  }
  if (t.domObserver.disconnectSelection(), t.cursorWrapper)
    A0(t);
  else {
    let { anchor: i, head: o } = n, s, l;
    ud && !(n instanceof N) && (n.$from.parent.inlineContent || (s = fd(t, n.from)), !n.empty && !n.$from.parent.inlineContent && (l = fd(t, n.to))), t.docView.setSelection(i, o, t, e), ud && (s && hd(s), l && hd(l)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && C0(t));
  }
  t.domObserver.setCurSelection(), t.domObserver.connectSelection();
}
const ud = Oe || Te && Rh < 63;
function fd(t, e) {
  let { node: n, offset: r } = t.docView.domFromPos(e, 0), i = r < n.childNodes.length ? n.childNodes[r] : null, o = r ? n.childNodes[r - 1] : null;
  if (Oe && i && i.contentEditable == "false")
    return Us(i);
  if ((!i || i.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (i)
      return Us(i);
    if (o)
      return Us(o);
  }
}
function Us(t) {
  return t.contentEditable = "true", Oe && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
}
function hd(t) {
  t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
}
function C0(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let n = t.domSelectionRange(), r = n.anchorNode, i = n.anchorOffset;
  e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
    (n.anchorNode != r || n.anchorOffset != i) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
      (!jh(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function A0(t) {
  let e = t.domSelection();
  if (!e)
    return;
  let n = t.cursorWrapper.dom, r = n.nodeName == "IMG";
  r ? e.collapse(n.parentNode, Se(n) + 1) : e.collapse(n, 0), !r && !t.state.selection.visible && Pe && rn <= 11 && (n.disabled = !0, n.disabled = !1);
}
function Kh(t, e) {
  if (e instanceof z) {
    let n = t.docView.descAt(e.from);
    n != t.lastSelectedViewDesc && (pd(t), n && n.selectNode(), t.lastSelectedViewDesc = n);
  } else
    pd(t);
}
function pd(t) {
  t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
}
function $a(t, e, n, r) {
  return t.someProp("createSelectionBetween", (i) => i(t, e, n)) || N.between(e, n, r);
}
function md(t) {
  return t.editable && !t.hasFocus() ? !1 : qh(t);
}
function qh(t) {
  let e = t.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return t.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function T0(t) {
  let e = t.docView.domFromPos(t.state.selection.anchor, 0), n = t.domSelectionRange();
  return Rn(e.node, e.offset, n.anchorNode, n.anchorOffset);
}
function Nl(t, e) {
  let { $anchor: n, $head: r } = t.selection, i = e > 0 ? n.max(r) : n.min(r), o = i.parent.inlineContent ? i.depth ? t.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return o && $.findFrom(o, e);
}
function qt(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function gd(t, e, n) {
  let r = t.state.selection;
  if (r instanceof N)
    if (n.indexOf("s") > -1) {
      let { $head: i } = r, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let s = t.state.doc.resolve(i.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return qt(t, new N(r.$anchor, s));
    } else if (r.empty) {
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = Nl(t.state, e);
        return i && i instanceof z ? qt(t, i) : !1;
      } else if (!(qe && n.indexOf("m") > -1)) {
        let i = r.$head, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, s;
        if (!o || o.isText)
          return !1;
        let l = e < 0 ? i.pos - o.nodeSize : i.pos;
        return o.isAtom || (s = t.docView.descAt(l)) && !s.contentDOM ? z.isSelectable(o) ? qt(t, new z(e < 0 ? t.state.doc.resolve(i.pos - o.nodeSize) : i)) : vi ? qt(t, new N(t.state.doc.resolve(e < 0 ? l : l + o.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof z && r.node.isInline)
      return qt(t, new N(e > 0 ? r.$to : r.$from));
    {
      let i = Nl(t.state, e);
      return i ? qt(t, i) : !1;
    }
  }
}
function fo(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function Ir(t, e) {
  let n = t.pmViewDesc;
  return n && n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR");
}
function Wn(t, e) {
  return e < 0 ? M0(t) : E0(t);
}
function M0(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let i, o, s = !1;
  for (Je && n.nodeType == 1 && r < fo(n) && Ir(n.childNodes[r], -1) && (s = !0); ; )
    if (r > 0) {
      if (n.nodeType != 1)
        break;
      {
        let l = n.childNodes[r - 1];
        if (Ir(l, -1))
          i = n, o = --r;
        else if (l.nodeType == 3)
          n = l, r = n.nodeValue.length;
        else
          break;
      }
    } else {
      if (Gh(n))
        break;
      {
        let l = n.previousSibling;
        for (; l && Ir(l, -1); )
          i = n.parentNode, o = Se(l), l = l.previousSibling;
        if (l)
          n = l, r = fo(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = 0;
        }
      }
    }
  s ? Il(t, n, r) : i && Il(t, i, o);
}
function E0(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let i = fo(n), o, s;
  for (; ; )
    if (r < i) {
      if (n.nodeType != 1)
        break;
      let l = n.childNodes[r];
      if (Ir(l, 1))
        o = n, s = ++r;
      else
        break;
    } else {
      if (Gh(n))
        break;
      {
        let l = n.nextSibling;
        for (; l && Ir(l, 1); )
          o = l.parentNode, s = Se(l) + 1, l = l.nextSibling;
        if (l)
          n = l, r = 0, i = fo(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = i = 0;
        }
      }
    }
  o && Il(t, o, s);
}
function Gh(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function L0(t, e) {
  for (; t && e == t.childNodes.length && !bi(t); )
    e = Se(t) + 1, t = t.parentNode;
  for (; t && e < t.childNodes.length; ) {
    let n = t.childNodes[e];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = 0;
  }
}
function O0(t, e) {
  for (; t && !e && !bi(t); )
    e = Se(t), t = t.parentNode;
  for (; t && e; ) {
    let n = t.childNodes[e - 1];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = t.childNodes.length;
  }
}
function Il(t, e, n) {
  if (e.nodeType != 3) {
    let o, s;
    (s = L0(e, n)) ? (e = s, n = 0) : (o = O0(e, n)) && (e = o, n = o.nodeValue.length);
  }
  let r = t.domSelection();
  if (!r)
    return;
  if (ds(r)) {
    let o = document.createRange();
    o.setEnd(e, n), o.setStart(e, n), r.removeAllRanges(), r.addRange(o);
  } else r.extend && r.extend(e, n);
  t.domObserver.setCurSelection();
  let { state: i } = t;
  setTimeout(() => {
    t.state == i && Vt(t);
  }, 50);
}
function yd(t, e) {
  let n = t.state.doc.resolve(e);
  if (!(Te || Vh) && n.parent.inlineContent) {
    let i = t.coordsAtPos(e);
    if (e > n.start()) {
      let o = t.coordsAtPos(e - 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left < i.left ? "ltr" : "rtl";
    }
    if (e < n.end()) {
      let o = t.coordsAtPos(e + 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(t.dom).direction == "rtl" ? "rtl" : "ltr";
}
function bd(t, e, n) {
  let r = t.state.selection;
  if (r instanceof N && !r.empty || n.indexOf("s") > -1 || qe && n.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: o } = r;
  if (!i.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let s = Nl(t.state, e);
    if (s && s instanceof z)
      return qt(t, s);
  }
  if (!i.parent.inlineContent) {
    let s = e < 0 ? i : o, l = r instanceof Ue ? $.near(s, e) : $.findFrom(s, e);
    return l ? qt(t, l) : !1;
  }
  return !1;
}
function vd(t, e) {
  if (!(t.state.selection instanceof N))
    return !0;
  let { $head: n, $anchor: r, empty: i } = t.state.selection;
  if (!n.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (t.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let o = !n.textOffset && (e < 0 ? n.nodeBefore : n.nodeAfter);
  if (o && !o.isText) {
    let s = t.state.tr;
    return e < 0 ? s.delete(n.pos - o.nodeSize, n.pos) : s.delete(n.pos, n.pos + o.nodeSize), t.dispatch(s), !0;
  }
  return !1;
}
function wd(t, e, n) {
  t.domObserver.stop(), e.contentEditable = n, t.domObserver.start();
}
function H0(t) {
  if (!Oe || t.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (e && e.nodeType == 1 && n == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    wd(t, r, "true"), setTimeout(() => wd(t, r, "false"), 20);
  }
  return !1;
}
function R0(t) {
  let e = "";
  return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
}
function V0(t, e) {
  let n = e.keyCode, r = R0(e);
  if (n == 8 || qe && n == 72 && r == "c")
    return vd(t, -1) || Wn(t, -1);
  if (n == 46 && !e.shiftKey || qe && n == 68 && r == "c")
    return vd(t, 1) || Wn(t, 1);
  if (n == 13 || n == 27)
    return !0;
  if (n == 37 || qe && n == 66 && r == "c") {
    let i = n == 37 ? yd(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return gd(t, i, r) || Wn(t, i);
  } else if (n == 39 || qe && n == 70 && r == "c") {
    let i = n == 39 ? yd(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return gd(t, i, r) || Wn(t, i);
  } else {
    if (n == 38 || qe && n == 80 && r == "c")
      return bd(t, -1, r) || Wn(t, -1);
    if (n == 40 || qe && n == 78 && r == "c")
      return H0(t) || bd(t, 1, r) || Wn(t, 1);
    if (r == (qe ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return !0;
  }
  return !1;
}
function Ba(t, e) {
  t.someProp("transformCopied", (h) => {
    e = h(e, t);
  });
  let n = [], { content: r, openStart: i, openEnd: o } = e;
  for (; i > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, o--;
    let h = r.firstChild;
    n.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let s = t.someProp("clipboardSerializer") || fn.fromSchema(t.state.schema), l = ep(), a = l.createElement("div");
  a.appendChild(s.serializeFragment(r, { document: l }));
  let c = a.firstChild, d, u = 0;
  for (; c && c.nodeType == 1 && (d = Qh[c.nodeName.toLowerCase()]); ) {
    for (let h = d.length - 1; h >= 0; h--) {
      let p = l.createElement(d[h]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), u++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${o}${u ? ` -${u}` : ""} ${JSON.stringify(n)}`);
  let f = t.someProp("clipboardTextSerializer", (h) => h(e, t)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: f, slice: e };
}
function Jh(t, e, n, r, i) {
  let o = i.parent.type.spec.code, s, l;
  if (!n && !e)
    return null;
  let a = !!e && (r || o || !n);
  if (a) {
    if (t.someProp("transformPastedText", (f) => {
      e = f(e, o || r, t);
    }), o)
      return l = new O(A.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), t.someProp("transformPasted", (f) => {
        l = f(l, t, !0);
      }), l;
    let u = t.someProp("clipboardTextParser", (f) => f(e, i, r, t));
    if (u)
      l = u;
    else {
      let f = i.marks(), { schema: h } = t.state, p = fn.fromSchema(h);
      s = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = s.appendChild(document.createElement("p"));
        m && g.appendChild(p.serializeNode(h.text(m, f)));
      });
    }
  } else
    t.someProp("transformPastedHTML", (u) => {
      n = u(n, t);
    }), s = D0(n), vi && P0(s);
  let c = s && s.querySelector("[data-pm-slice]"), d = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (d && d[3])
    for (let u = +d[3]; u > 0; u--) {
      let f = s.firstChild;
      for (; f && f.nodeType != 1; )
        f = f.nextSibling;
      if (!f)
        break;
      s = f;
    }
  if (l || (l = (t.someProp("clipboardParser") || t.someProp("domParser") || nn.fromSchema(t.state.schema)).parseSlice(s, {
    preserveWhitespace: !!(a || d),
    context: i,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !N0.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), d)
    l = z0(kd(l, +d[1], +d[2]), d[4]);
  else if (l = O.maxOpen(I0(l.content, i), !0), l.openStart || l.openEnd) {
    let u = 0, f = 0;
    for (let h = l.content.firstChild; u < l.openStart && !h.type.spec.isolating; u++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild)
      ;
    l = kd(l, u, f);
  }
  return t.someProp("transformPasted", (u) => {
    l = u(l, t, a);
  }), l;
}
const N0 = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function I0(t, e) {
  if (t.childCount < 2)
    return t;
  for (let n = e.depth; n >= 0; n--) {
    let i = e.node(n).contentMatchAt(e.index(n)), o, s = [];
    if (t.forEach((l) => {
      if (!s)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return s = null;
      if (c = s.length && o.length && Zh(a, o, l, s[s.length - 1], 0))
        s[s.length - 1] = c;
      else {
        s.length && (s[s.length - 1] = Yh(s[s.length - 1], o.length));
        let d = Xh(l, a);
        s.push(d), i = i.matchType(d.type), o = a;
      }
    }), s)
      return A.from(s);
  }
  return t;
}
function Xh(t, e, n = 0) {
  for (let r = e.length - 1; r >= n; r--)
    t = e[r].create(null, A.from(t));
  return t;
}
function Zh(t, e, n, r, i) {
  if (i < t.length && i < e.length && t[i] == e[i]) {
    let o = Zh(t, e, n, r.lastChild, i + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(i == t.length - 1 ? n.type : t[i + 1]))
      return r.copy(r.content.append(A.from(Xh(n, t, i + 1))));
  }
}
function Yh(t, e) {
  if (e == 0)
    return t;
  let n = t.content.replaceChild(t.childCount - 1, Yh(t.lastChild, e - 1)), r = t.contentMatchAt(t.childCount).fillBefore(A.empty, !0);
  return t.copy(n.append(r));
}
function _l(t, e, n, r, i, o) {
  let s = e < 0 ? t.firstChild : t.lastChild, l = s.content;
  return t.childCount > 1 && (o = 0), i < r - 1 && (l = _l(l, e, n, r, i + 1, o)), i >= n && (l = e < 0 ? s.contentMatchAt(0).fillBefore(l, o <= i).append(l) : l.append(s.contentMatchAt(s.childCount).fillBefore(A.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, s.copy(l));
}
function kd(t, e, n) {
  return e < t.openStart && (t = new O(_l(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new O(_l(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t;
}
const Qh = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
function ep() {
  return document.implementation.createHTMLDocument("title");
}
let Ws = null;
function _0(t) {
  let e = window.trustedTypes;
  return e ? (Ws || (Ws = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (n) => n })), Ws.createHTML(t)) : t;
}
function D0(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let n = ep(), r = n.body, i = /<([a-z][^>\s]+)/i.exec(t), o;
  if ((o = i && Qh[i[1].toLowerCase()]) && (t = o.map((s) => "<" + s + ">").join("") + t + o.map((s) => "</" + s + ">").reverse().join("")), r.innerHTML = _0(t), o)
    for (let s = 0; s < o.length; s++)
      r = r.querySelector(o[s]) || r;
  for (let s = 0; s < n.styleSheets.length; s++) {
    let l = n.styleSheets[s];
    for (let a = 0; a < l.rules.length; a++) {
      let c = l.rules[a];
      if (c instanceof CSSStyleRule) {
        let d = r.querySelectorAll(c.selectorText);
        for (let u = 0; u < d.length; u++)
          d[u].style.cssText += c.style.cssText;
      }
    }
  }
  return r;
}
function P0(t) {
  let e = t.querySelectorAll(Te ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), r);
  }
}
function z0(t, e) {
  if (!t.size)
    return t;
  let n = t.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return t;
  }
  let { content: i, openStart: o, openEnd: s } = t;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = n.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = A.from(a.create(r[l + 1], i)), o++, s++;
  }
  return new O(i, o, s);
}
const Ve = {}, Ne = {}, $0 = { touchstart: !0, touchmove: !0 };
class B0 {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.badSafariComposition = !1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function F0(t) {
  for (let e in Ve) {
    let n = Ve[e];
    t.dom.addEventListener(e, t.input.eventHandlers[e] = (r) => {
      W0(t, r) && !Fa(t, r) && (t.editable || !(r.type in Ne)) && n(t, r);
    }, $0[e] ? { passive: !0 } : void 0);
  }
  Oe && t.dom.addEventListener("input", () => null), Dl(t);
}
function Ot(t, e) {
  t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
}
function U0(t) {
  t.input.mouseDown && t.input.mouseDown.done(), t.domObserver.stop();
  for (let e in t.input.eventHandlers)
    t.dom.removeEventListener(e, t.input.eventHandlers[e]);
  clearTimeout(t.input.composingTimeout), clearTimeout(t.input.lastIOSEnterFallbackTimeout);
}
function Dl(t) {
  t.someProp("handleDOMEvents", (e) => {
    for (let n in e)
      t.input.eventHandlers[n] || t.dom.addEventListener(n, t.input.eventHandlers[n] = (r) => Fa(t, r));
  });
}
function Fa(t, e) {
  return t.someProp("handleDOMEvents", (n) => {
    let r = n[e.type];
    return r ? r(t, e) || e.defaultPrevented : !1;
  });
}
function W0(t, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let n = e.target; n != t.dom; n = n.parentNode)
    if (!n || n.nodeType == 11 || n.pmViewDesc && n.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function j0(t, e) {
  !Fa(t, e) && Ve[e.type] && (t.editable || !(e.type in Ne)) && Ve[e.type](t, e);
}
Ne.keydown = (t, e) => {
  let n = e;
  if (t.input.shiftKey = n.keyCode == 16 || n.shiftKey, !ip(t) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), !(Lt && Te && n.keyCode == 13)))
    if (n.keyCode != 229 && t.domObserver.forceFlush(), cr && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
      let r = Date.now();
      t.input.lastIOSEnter = r, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t.input.lastIOSEnter == r && (t.someProp("handleKeyDown", (i) => i(t, vn(13, "Enter"))), t.input.lastIOSEnter = 0);
      }, 200);
    } else t.someProp("handleKeyDown", (r) => r(t, n)) || V0(t, n) ? n.preventDefault() : Ot(t, "key");
};
Ne.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
Ne.keypress = (t, e) => {
  let n = e;
  if (ip(t) || !n.charCode || n.ctrlKey && !n.altKey || qe && n.metaKey)
    return;
  if (t.someProp("handleKeyPress", (i) => i(t, n))) {
    n.preventDefault();
    return;
  }
  let r = t.state.selection;
  if (!(r instanceof N) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(n.charCode), o = () => t.state.tr.insertText(i).scrollIntoView();
    !/[\r\n]/.test(i) && !t.someProp("handleTextInput", (s) => s(t, r.$from.pos, r.$to.pos, i, o)) && t.dispatch(o()), n.preventDefault();
  }
};
function ki(t) {
  return { left: t.clientX, top: t.clientY };
}
function K0(t, e) {
  let n = e.x - t.clientX, r = e.y - t.clientY;
  return n * n + r * r < 100;
}
function Ua(t, e, n, r, i) {
  if (r == -1)
    return !1;
  let o = t.state.doc.resolve(r);
  for (let s = o.depth + 1; s > 0; s--)
    if (t.someProp(e, (l) => s > o.depth ? l(t, n, o.nodeAfter, o.before(s), i, !0) : l(t, n, o.node(s), o.before(s), i, !1)))
      return !0;
  return !1;
}
function xi(t, e, n) {
  if (t.focused || t.focus(), t.state.selection.eq(e))
    return;
  let r = t.state.tr.setSelection(e);
  r.setMeta("pointer", !0), t.dispatch(r);
}
function q0(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.doc.resolve(e), r = n.nodeAfter;
  return r && r.isAtom && z.isSelectable(r) ? (xi(t, new z(n)), !0) : !1;
}
function G0(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.selection, r, i;
  n instanceof z && (r = n.node);
  let o = t.state.doc.resolve(e);
  for (let s = o.depth + 1; s > 0; s--) {
    let l = s > o.depth ? o.nodeAfter : o.node(s);
    if (z.isSelectable(l)) {
      r && n.$from.depth > 0 && s >= n.$from.depth && o.before(n.$from.depth + 1) == n.$from.pos ? i = o.before(n.$from.depth) : i = o.before(s);
      break;
    }
  }
  return i != null ? (xi(t, z.create(t.state.doc, i)), !0) : !1;
}
function J0(t, e, n, r, i) {
  return Ua(t, "handleClickOn", e, n, r) || t.someProp("handleClick", (o) => o(t, e, r)) || (i ? G0(t, n) : q0(t, n));
}
function X0(t, e, n, r) {
  return Ua(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", (i) => i(t, e, r));
}
function Z0(t, e, n, r) {
  return Ua(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", (i) => i(t, e, r)) || Y0(t, n, r);
}
function Y0(t, e, n) {
  if (n.button != 0)
    return !1;
  let r = tp(t, e, !0), i = t.state.doc;
  return r ? (xi(t, r), r instanceof N && i.eq(t.state.doc) && (t.input.mouseDown = new eb(t, r)), !0) : !1;
}
function tp(t, e, n) {
  let r = t.state.doc;
  if (e == -1)
    return r.inlineContent ? N.create(r, 0, r.content.size) : null;
  let i = r.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let s = o > i.depth ? i.nodeAfter : i.node(o), l = i.before(o);
    if (s.inlineContent)
      return N.create(r, l + 1, l + 1 + s.content.size);
    if (n && z.isSelectable(s))
      return z.create(r, l);
  }
  return null;
}
function Wa(t) {
  return ho(t);
}
const np = qe ? "metaKey" : "ctrlKey";
Ve.mousedown = (t, e) => {
  let n = e;
  t.input.shiftKey = n.shiftKey;
  let r = Wa(t), i = Date.now(), o = "singleClick";
  i - t.input.lastClick.time < 500 && K0(n, t.input.lastClick) && !n[np] && t.input.lastClick.button == n.button && (t.input.lastClick.type == "singleClick" ? o = "doubleClick" : t.input.lastClick.type == "doubleClick" && (o = "tripleClick")), t.input.lastClick = { time: i, x: n.clientX, y: n.clientY, type: o, button: n.button }, t.input.mouseDown && t.input.mouseDown.done();
  let s = t.posAtCoords(ki(n));
  s && (o == "singleClick" ? t.input.mouseDown = new Q0(t, s, n, !!r) : (o == "doubleClick" ? X0 : Z0)(t, s.pos, s.inside, n) ? n.preventDefault() : Ot(t, "pointer"));
};
class rp {
  constructor(e) {
    this.view = e, this.mightDrag = null, e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this));
  }
  up(e) {
    this.done();
  }
  move(e) {
    e.buttons == 0 && this.done();
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.view.input.mouseDown == this && (this.view.input.mouseDown = null);
  }
  delaySelUpdate() {
    return !1;
  }
}
class Q0 extends rp {
  constructor(e, n, r, i) {
    super(e), this.pos = n, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.startDoc = e.state.doc, this.selectNode = !!r[np], this.allowDefault = r.shiftKey;
    let o, s;
    if (n.inside > -1)
      o = e.state.doc.nodeAt(n.inside), s = n.inside;
    else {
      let d = e.state.doc.resolve(n.pos);
      o = d.parent, s = d.depth ? d.before() : 0;
    }
    const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.nodeDOM.nodeType == 1 ? a.nodeDOM : null;
    let { selection: c } = e.state;
    r.button == 0 && (o.type.spec.draggable && o.type.spec.selectable !== !1 || c instanceof z && c.from <= s && c.to > s) && (this.mightDrag = {
      node: o,
      pos: s,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && Je && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), Ot(e, "pointer");
  }
  done() {
    super.done(), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => {
      this.view.isDestroyed || Vt(this.view);
    });
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords(ki(e))), this.updateAllowDefault(e), this.allowDefault || !n ? Ot(this.view, "pointer") : J0(this.view, n.pos, n.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Oe && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    Te && !this.view.state.selection.visible && Math.min(Math.abs(n.pos - this.view.state.selection.from), Math.abs(n.pos - this.view.state.selection.to)) <= 2) ? (xi(this.view, $.near(this.view.state.doc.resolve(n.pos))), e.preventDefault()) : Ot(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), Ot(this.view, "pointer"), super.move(e);
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
  delaySelUpdate() {
    return this.allowDefault ? (this.delayedSelectionSync = !0, !0) : !1;
  }
}
class eb extends rp {
  constructor(e, n) {
    super(e), this.startSelection = n, this.startDoc = e.state.doc;
  }
  move(e) {
    if (e.buttons == 0 || this.view.isDestroyed || !this.view.state.doc.eq(this.startDoc)) {
      this.done();
      return;
    }
    e.preventDefault(), Ot(this.view, "pointer");
    let n = this.view.posAtCoords(ki(e)), r = n && tp(this.view, n.inside, !1);
    if (!r)
      return;
    let { doc: i } = this.view.state, o = this.startSelection, [s, l] = r.from < o.from ? [o.to, r.from] : [o.from, r.to];
    xi(this.view, N.create(i, s, l));
  }
}
Ve.touchstart = (t) => {
  t.input.lastTouch = Date.now(), Wa(t), Ot(t, "pointer");
};
Ve.touchmove = (t) => {
  t.input.lastTouch = Date.now(), Ot(t, "pointer");
};
Ve.contextmenu = (t) => Wa(t);
function ip(t, e) {
  return t.composing ? !0 : Oe && Math.abs(Date.now() - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1;
}
const tb = Lt ? 5e3 : -1;
Ne.compositionstart = Ne.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t, n = e.selection.$to;
    if (e.selection instanceof N && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1) || Te && Vh && nb(t)))
      t.markCursor = t.state.storedMarks || n.marks(), ho(t, !0), t.markCursor = null;
    else if (ho(t, !e.selection.empty), Je && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
      let r = t.domSelectionRange();
      for (let i = r.focusNode, o = r.focusOffset; i && i.nodeType == 1 && o != 0; ) {
        let s = o < 0 ? i.lastChild : i.childNodes[o - 1];
        if (!s)
          break;
        if (s.nodeType == 3) {
          let l = t.domSelection();
          l && l.collapse(s, s.nodeValue.length);
          break;
        } else
          i = s, o = -1;
      }
    }
    t.input.composing = !0;
  }
  op(t, tb);
};
function nb(t) {
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (!e || e.nodeType != 1 || n >= e.childNodes.length)
    return !1;
  let r = e.childNodes[n];
  return r.nodeType == 1 && r.contentEditable == "false";
}
Ne.compositionend = (t, e) => {
  t.composing && (t.input.composing = !1, t.input.compositionEndedAt = Date.now(), t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionNode = null, t.input.badSafariComposition ? t.domObserver.forceFlush() : t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, op(t, 20));
};
function op(t, e) {
  clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => ho(t), e));
}
function sp(t) {
  for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = Date.now()); t.input.compositionNodes.length > 0; )
    t.input.compositionNodes.pop().markParentsDirty();
}
function rb(t) {
  let e = t.domSelectionRange();
  if (!e.focusNode)
    return null;
  let n = Gy(e.focusNode, e.focusOffset), r = Jy(e.focusNode, e.focusOffset);
  if (n && r && n != r) {
    let i = r.pmViewDesc, o = t.domObserver.lastChangedTextNode;
    if (n == o || r == o)
      return o;
    if (!i || !i.isText(r.nodeValue))
      return r;
    if (t.input.compositionNode == r) {
      let s = n.pmViewDesc;
      if (!(!s || !s.isText(n.nodeValue)))
        return r;
    }
  }
  return n || r;
}
function ho(t, e = !1) {
  if (!(Lt && t.domObserver.flushingSoon >= 0)) {
    if (t.domObserver.forceFlush(), sp(t), e || t.docView && t.docView.dirty) {
      let n = za(t), r = t.state.selection;
      return n && !n.eq(r) ? t.dispatch(t.state.tr.setSelection(n)) : (t.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? t.dispatch(t.state.tr.deleteSelection()) : t.updateState(t.state), !0;
    }
    return !1;
  }
}
function ib(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    n.parentNode && n.parentNode.removeChild(n), t.focus();
  }, 50);
}
const ni = Pe && rn < 15 || cr && Qy < 604;
Ve.copy = Ne.cut = (t, e) => {
  let n = e, r = t.state.selection, i = n.type == "cut";
  if (r.empty)
    return;
  let o = ni ? null : n.clipboardData, s = r.content(), { dom: l, text: a } = Ba(t, s);
  o ? (n.preventDefault(), o.clearData(), o.setData("text/html", l.innerHTML), o.setData("text/plain", a)) : ib(t, l), i && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function ob(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null;
}
function sb(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code, r = t.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
  n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = t.input.shiftKey && t.input.lastKeyCode != 45;
  setTimeout(() => {
    t.focus(), r.parentNode && r.parentNode.removeChild(r), n ? ri(t, r.value, null, i, e) : ri(t, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function ri(t, e, n, r, i) {
  let o = Jh(t, e, n, r, t.state.selection.$from);
  if (t.someProp("handlePaste", (a) => a(t, i, o || O.empty)))
    return !0;
  if (!o)
    return !1;
  let s = ob(o), l = s ? t.state.tr.replaceSelectionWith(s, r) : t.state.tr.replaceSelection(o);
  return t.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function lp(t) {
  let e = t.getData("text/plain") || t.getData("Text");
  if (e)
    return e;
  let n = t.getData("text/uri-list");
  return n ? n.replace(/\r?\n/g, " ") : "";
}
Ne.paste = (t, e) => {
  let n = e;
  if (t.composing && !Lt)
    return;
  let r = ni ? null : n.clipboardData, i = t.input.shiftKey && t.input.lastKeyCode != 45;
  r && ri(t, lp(r), r.getData("text/html"), i, n) ? n.preventDefault() : sb(t, n);
};
class ap {
  constructor(e, n, r) {
    this.slice = e, this.move = n, this.node = r;
  }
}
const lb = qe ? "altKey" : "ctrlKey";
function cp(t, e) {
  let n;
  return t.someProp("dragCopies", (r) => {
    n = n || r(e);
  }), n != null ? !n : !e[lb];
}
Ve.dragstart = (t, e) => {
  let n = e, r = t.input.mouseDown;
  if (r && r.done(), !n.dataTransfer)
    return;
  let i = t.state.selection, o = i.empty ? null : t.posAtCoords(ki(n)), s;
  if (!(o && o.pos >= i.from && o.pos <= (i instanceof z ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      s = z.create(t.state.doc, r.mightDrag.pos);
    else if (n.target && n.target.nodeType == 1) {
      let u = t.docView.nearestDesc(n.target, !0);
      u && u.node.type.spec.draggable && u != t.docView && (s = z.create(t.state.doc, u.posBefore));
    }
  }
  let l = (s || t.state.selection).content(), { dom: a, text: c, slice: d } = Ba(t, l);
  (!n.dataTransfer.files.length || !Te || Rh > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(ni ? "Text" : "text/html", a.innerHTML), n.dataTransfer.effectAllowed = "copyMove", ni || n.dataTransfer.setData("text/plain", c), t.dragging = new ap(d, cp(t, n), s);
};
Ve.dragend = (t) => {
  let e = t.dragging;
  window.setTimeout(() => {
    t.dragging == e && (t.dragging = null);
  }, 50);
};
Ne.dragover = Ne.dragenter = (t, e) => e.preventDefault();
Ne.drop = (t, e) => {
  try {
    ab(t, e, t.dragging);
  } finally {
    t.dragging = null;
  }
};
function ab(t, e, n) {
  if (!e.dataTransfer)
    return;
  let r = t.posAtCoords(ki(e));
  if (!r)
    return;
  let i = t.state.doc.resolve(r.pos), o = n && n.slice;
  o ? t.someProp("transformPasted", (h) => {
    o = h(o, t, !1);
  }) : o = Jh(t, lp(e.dataTransfer), ni ? null : e.dataTransfer.getData("text/html"), !1, i);
  let s = !!(n && cp(t, e));
  if (t.someProp("handleDrop", (h) => h(t, e, o || O.empty, s))) {
    e.preventDefault();
    return;
  }
  if (!o)
    return;
  e.preventDefault();
  let l = o ? uh(t.state.doc, i.pos, o) : i.pos;
  l == null && (l = i.pos);
  let a = t.state.tr;
  if (s) {
    let { node: h } = n;
    h ? h.replace(a) : a.deleteSelection();
  }
  let c = a.mapping.map(l), d = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1, u = a.doc;
  if (d ? a.replaceRangeWith(c, c, o.content.firstChild) : a.replaceRange(c, c, o), a.doc.eq(u))
    return;
  let f = a.doc.resolve(c);
  if (d && z.isSelectable(o.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(o.content.firstChild))
    a.setSelection(new z(f));
  else {
    let h = a.mapping.map(l);
    a.mapping.maps[a.mapping.maps.length - 1].forEach((p, m, g, y) => h = y), a.setSelection($a(t, f, a.doc.resolve(h)));
  }
  t.focus(), t.dispatch(a.setMeta("uiEvent", "drop"));
}
Ve.focus = (t) => {
  t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
    t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && Vt(t);
  }, 20));
};
Ve.blur = (t, e) => {
  let n = e;
  t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
};
Ve.beforeinput = (t, e) => {
  if (Lt && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: r } = t.input;
    setTimeout(() => {
      if (t.input.domChangeCount != r || (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", (o) => o(t, vn(8, "Backspace")))))
        return;
      let { $cursor: i } = t.state.selection;
      i && i.pos > 0 && t.dispatch(t.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in Ne)
  Ve[t] = Ne[t];
function ii(t, e) {
  if (t == e)
    return !0;
  for (let n in t)
    if (t[n] !== e[n])
      return !1;
  for (let n in e)
    if (!(n in t))
      return !1;
  return !0;
}
class po {
  constructor(e, n) {
    this.toDOM = e, this.spec = n || Mn, this.side = this.spec.side || 0;
  }
  map(e, n, r, i) {
    let { pos: o, deleted: s } = e.mapResult(n.from + i, this.side < 0 ? -1 : 1);
    return s ? null : new ve(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof po && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && ii(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class ln {
  constructor(e, n) {
    this.attrs = e, this.spec = n || Mn;
  }
  map(e, n, r, i) {
    let o = e.map(n.from + i, this.spec.inclusiveStart ? -1 : 1) - r, s = e.map(n.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= s ? null : new ve(o, s, this);
  }
  valid(e, n) {
    return n.from < n.to;
  }
  eq(e) {
    return this == e || e instanceof ln && ii(this.attrs, e.attrs) && ii(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof ln;
  }
  destroy() {
  }
}
class ja {
  constructor(e, n) {
    this.attrs = e, this.spec = n || Mn;
  }
  map(e, n, r, i) {
    let o = e.mapResult(n.from + i, 1);
    if (o.deleted)
      return null;
    let s = e.mapResult(n.to + i, -1);
    return s.deleted || s.pos <= o.pos ? null : new ve(o.pos - r, s.pos - r, this);
  }
  valid(e, n) {
    let { index: r, offset: i } = e.content.findIndex(n.from), o;
    return i == n.from && !(o = e.child(r)).isText && i + o.nodeSize == n.to;
  }
  eq(e) {
    return this == e || e instanceof ja && ii(this.attrs, e.attrs) && ii(this.spec, e.spec);
  }
  destroy() {
  }
}
class ve {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.from = e, this.to = n, this.type = r;
  }
  /**
  @internal
  */
  copy(e, n) {
    return new ve(e, n, this.type);
  }
  /**
  @internal
  */
  eq(e, n = 0) {
    return this.type.eq(e.type) && this.from + n == e.from && this.to + n == e.to;
  }
  /**
  @internal
  */
  map(e, n, r) {
    return this.type.map(e, this, n, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, n, r) {
    return new ve(e, e, new po(n, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, n, r, i) {
    return new ve(e, n, new ln(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, n, r, i) {
    return new ve(e, n, new ja(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof ln;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof po;
  }
}
const Gn = [], Mn = {};
class Z {
  /**
  @internal
  */
  constructor(e, n) {
    this.local = e.length ? e : Gn, this.children = n.length ? n : Gn;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, n) {
    return n.length ? mo(n, e, 0, Mn) : Ee;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, n, r) {
    let i = [];
    return this.findInner(e ?? 0, n ?? 1e9, i, 0, r), i;
  }
  findInner(e, n, r, i, o) {
    for (let s = 0; s < this.local.length; s++) {
      let l = this.local[s];
      l.from <= n && l.to >= e && (!o || o(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let s = 0; s < this.children.length; s += 3)
      if (this.children[s] < n && this.children[s + 1] > e) {
        let l = this.children[s] + 1;
        this.children[s + 2].findInner(e - l, n - l, r, i + l, o);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, n, r) {
    return this == Ee || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, r || Mn);
  }
  /**
  @internal
  */
  mapInner(e, n, r, i, o) {
    let s;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, i);
      a && a.type.valid(n, a) ? (s || (s = [])).push(a) : o.onRemove && o.onRemove(this.local[l].spec);
    }
    return this.children.length ? cb(this.children, s || [], e, n, r, i, o) : s ? new Z(s.sort(En), Gn) : Ee;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, n) {
    return n.length ? this == Ee ? Z.create(e, n) : this.addInner(e, n, 0) : this;
  }
  addInner(e, n, r) {
    let i, o = 0;
    e.forEach((l, a) => {
      let c = a + r, d;
      if (d = up(n, l, c)) {
        for (i || (i = this.children.slice()); o < i.length && i[o] < a; )
          o += 3;
        i[o] == a ? i[o + 2] = i[o + 2].addInner(l, d, c + 1) : i.splice(o, 0, a, a + l.nodeSize, mo(d, l, c + 1, Mn)), o += 3;
      }
    });
    let s = dp(o ? fp(n) : n, -r);
    for (let l = 0; l < s.length; l++)
      s[l].type.valid(e, s[l]) || s.splice(l--, 1);
    return new Z(s.length ? this.local.concat(s).sort(En) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == Ee ? this : this.removeInner(e, 0);
  }
  removeInner(e, n) {
    let r = this.children, i = this.local;
    for (let o = 0; o < r.length; o += 3) {
      let s, l = r[o] + n, a = r[o + 1] + n;
      for (let d = 0, u; d < e.length; d++)
        (u = e[d]) && u.from > l && u.to < a && (e[d] = null, (s || (s = [])).push(u));
      if (!s)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[o + 2].removeInner(s, l + 1);
      c != Ee ? r[o + 2] = c : (r.splice(o, 3), o -= 3);
    }
    if (i.length) {
      for (let o = 0, s; o < e.length; o++)
        if (s = e[o])
          for (let l = 0; l < i.length; l++)
            i[l].eq(s, n) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new Z(i, r) : Ee;
  }
  forChild(e, n) {
    if (this == Ee)
      return this;
    if (n.isLeaf)
      return Z.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let o = e + 1, s = o + n.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < s && a.to > o && a.type instanceof ln) {
        let c = Math.max(o, a.from) - o, d = Math.min(s, a.to) - o;
        c < d && (i || (i = [])).push(a.copy(c, d));
      }
    }
    if (i) {
      let l = new Z(i.sort(En), Gn);
      return r ? new Zt([l, r]) : l;
    }
    return r || Ee;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof Z) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let n = 0; n < this.local.length; n++)
      if (!this.local[n].eq(e.local[n]))
        return !1;
    for (let n = 0; n < this.children.length; n += 3)
      if (this.children[n] != e.children[n] || this.children[n + 1] != e.children[n + 1] || !this.children[n + 2].eq(e.children[n + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return Ka(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == Ee)
      return Gn;
    if (e.inlineContent || !this.local.some(ln.is))
      return this.local;
    let n = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof ln || n.push(this.local[r]);
    return n;
  }
  forEachSet(e) {
    e(this);
  }
}
Z.empty = new Z([], []);
Z.removeOverlap = Ka;
const Ee = Z.empty;
class Zt {
  constructor(e) {
    this.members = e;
  }
  map(e, n) {
    const r = this.members.map((i) => i.map(e, n, Mn));
    return Zt.from(r);
  }
  forChild(e, n) {
    if (n.isLeaf)
      return Z.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].forChild(e, n);
      o != Ee && (o instanceof Zt ? r = r.concat(o.members) : r.push(o));
    }
    return Zt.from(r);
  }
  eq(e) {
    if (!(e instanceof Zt) || e.members.length != this.members.length)
      return !1;
    for (let n = 0; n < this.members.length; n++)
      if (!this.members[n].eq(e.members[n]))
        return !1;
    return !0;
  }
  locals(e) {
    let n, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].localsInner(e);
      if (o.length)
        if (!n)
          n = o;
        else {
          r && (n = n.slice(), r = !1);
          for (let s = 0; s < o.length; s++)
            n.push(o[s]);
        }
    }
    return n ? Ka(r ? n : n.sort(En)) : Gn;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return Ee;
      case 1:
        return e[0];
      default:
        return new Zt(e.every((n) => n instanceof Z) ? e : e.reduce((n, r) => n.concat(r instanceof Z ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let n = 0; n < this.members.length; n++)
      this.members[n].forEachSet(e);
  }
}
function cb(t, e, n, r, i, o, s) {
  let l = t.slice();
  for (let c = 0, d = o; c < n.maps.length; c++) {
    let u = 0;
    n.maps[c].forEach((f, h, p, m) => {
      let g = m - p - (h - f);
      for (let y = 0; y < l.length; y += 3) {
        let b = l[y + 1];
        if (b < 0 || f > b + d - u)
          continue;
        let w = l[y] + d - u;
        h >= w ? l[y + 1] = f <= w ? -2 : -1 : f >= d && g && (l[y] += g, l[y + 1] += g);
      }
      u += g;
    }), d = n.maps[c].map(d, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let d = n.map(t[c] + o), u = d - i;
      if (u < 0 || u >= r.content.size) {
        a = !0;
        continue;
      }
      let f = n.map(t[c + 1] + o, -1), h = f - i, { index: p, offset: m } = r.content.findIndex(u), g = r.maybeChild(p);
      if (g && m == u && m + g.nodeSize == h) {
        let y = l[c + 2].mapInner(n, g, d + 1, t[c] + o + 1, s);
        y != Ee ? (l[c] = u, l[c + 1] = h, l[c + 2] = y) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = db(l, t, e, n, i, o, s), d = mo(c, r, 0, s);
    e = d.local;
    for (let u = 0; u < l.length; u += 3)
      l[u + 1] < 0 && (l.splice(u, 3), u -= 3);
    for (let u = 0, f = 0; u < d.children.length; u += 3) {
      let h = d.children[u];
      for (; f < l.length && l[f] < h; )
        f += 3;
      l.splice(f, 0, d.children[u], d.children[u + 1], d.children[u + 2]);
    }
  }
  return new Z(e.sort(En), l);
}
function dp(t, e) {
  if (!e || !t.length)
    return t;
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    n.push(new ve(i.from + e, i.to + e, i.type));
  }
  return n;
}
function db(t, e, n, r, i, o, s) {
  function l(a, c) {
    for (let d = 0; d < a.local.length; d++) {
      let u = a.local[d].map(r, i, c);
      u ? n.push(u) : s.onRemove && s.onRemove(a.local[d].spec);
    }
    for (let d = 0; d < a.children.length; d += 3)
      l(a.children[d + 2], a.children[d] + c + 1);
  }
  for (let a = 0; a < t.length; a += 3)
    t[a + 1] == -1 && l(t[a + 2], e[a] + o + 1);
  return n;
}
function up(t, e, n) {
  if (e.isLeaf)
    return null;
  let r = n + e.nodeSize, i = null;
  for (let o = 0, s; o < t.length; o++)
    (s = t[o]) && s.from > n && s.to < r && ((i || (i = [])).push(s), t[o] = null);
  return i;
}
function fp(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    t[n] != null && e.push(t[n]);
  return e;
}
function mo(t, e, n, r) {
  let i = [], o = !1;
  e.forEach((l, a) => {
    let c = up(t, l, a + n);
    if (c) {
      o = !0;
      let d = mo(c, l, n + a + 1, r);
      d != Ee && i.push(a, a + l.nodeSize, d);
    }
  });
  let s = dp(o ? fp(t) : t, -n).sort(En);
  for (let l = 0; l < s.length; l++)
    s[l].type.valid(e, s[l]) || (r.onRemove && r.onRemove(s[l].spec), s.splice(l--, 1));
  return s.length || i.length ? new Z(s, i) : Ee;
}
function En(t, e) {
  return t.from - e.from || t.to - e.to;
}
function Ka(t) {
  let e = t;
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n];
    if (r.from != r.to)
      for (let i = n + 1; i < e.length; i++) {
        let o = e[i];
        if (o.from == r.from) {
          o.to != r.to && (e == t && (e = t.slice()), e[i] = o.copy(o.from, r.to), xd(e, i + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == t && (e = t.slice()), e[n] = r.copy(r.from, o.from), xd(e, i, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function xd(t, e, n) {
  for (; e < t.length && En(n, t[e]) > 0; )
    e++;
  t.splice(e, 0, n);
}
function js(t) {
  let e = [];
  return t.someProp("decorations", (n) => {
    let r = n(t.state);
    r && r != Ee && e.push(r);
  }), t.cursorWrapper && e.push(Z.create(t.state.doc, [t.cursorWrapper.deco])), Zt.from(e);
}
const ub = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, fb = Pe && rn <= 11;
class hb {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class pb {
  constructor(e, n) {
    this.view = e, this.handleDOMChange = n, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new hb(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      Pe && rn <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : Oe && e.composing && r.some((i) => i.type == "childList" && i.target.nodeName == "TR") ? (e.input.badSafariComposition = !0, this.flushSoon()) : this.flush();
    }), fb && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, ub)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let n = 0; n < e.length; n++)
          this.queue.push(e[n]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (md(this.view)) {
      if (this.suppressingSelectionUpdates)
        return Vt(this.view);
      if (Pe && rn <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && Rn(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let n = /* @__PURE__ */ new Set(), r;
    for (let o = e.focusNode; o; o = ar(o))
      n.add(o);
    for (let o = e.anchorNode; o; o = ar(o))
      if (n.has(o)) {
        r = o;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let n = this.pendingRecords();
    n.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && md(e) && !this.ignoreSelectionChange(r), o = -1, s = -1, l = !1, a = [];
    if (e.editable)
      for (let d = 0; d < n.length; d++) {
        let u = this.registerMutation(n[d], a);
        u && (o = o < 0 ? u.from : Math.min(u.from, o), s = s < 0 ? u.to : Math.max(u.to, s), u.typeOver && (l = !0));
      }
    if (a.some((d) => d.nodeName == "BR") && (e.input.lastKeyCode == 8 || e.input.lastKeyCode == 46 || Te && (e.composing || e.input.compositionEndedAt > Date.now() - 50) && n.some((d) => d.type == "childList" && d.removedNodes.length))) {
      for (let d of a)
        if (d.nodeName == "BR" && d.parentNode) {
          let u = d.nextSibling;
          for (; u && u.nodeType == 1; ) {
            if (u.contentEditable == "false") {
              d.parentNode.removeChild(d);
              break;
            }
            u = u.firstChild;
          }
        }
    } else if (Je && a.length) {
      let d = a.filter((u) => u.nodeName == "BR");
      if (d.length == 2) {
        let [u, f] = d;
        u.parentNode && u.parentNode.parentNode == f.parentNode ? f.remove() : u.remove();
      } else {
        let { focusNode: u } = this.currentSelection;
        for (let f of d) {
          let h = f.parentNode;
          h && h.nodeName == "LI" && (!u || yb(e, u) != h) && f.remove();
        }
      }
    }
    let c = null;
    o < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && ds(r) && (c = za(e)) && c.eq($.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Vt(e), this.currentSelection.set(r), e.scrollToSelection()) : (o > -1 || i) && (o > -1 && (e.docView.markDirty(o, s), mb(e)), e.input.badSafariComposition && (e.input.badSafariComposition = !1, bb(e, a)), this.handleDOMChange(o, s, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || Vt(e), this.currentSelection.set(r));
  }
  registerMutation(e, n) {
    if (n.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let d = 0; d < e.addedNodes.length; d++) {
        let u = e.addedNodes[d];
        n.push(u), u.nodeType == 3 && (this.lastChangedTextNode = u);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, o = e.nextSibling;
      if (Pe && rn <= 11 && e.addedNodes.length)
        for (let d = 0; d < e.addedNodes.length; d++) {
          let { previousSibling: u, nextSibling: f } = e.addedNodes[d];
          (!u || Array.prototype.indexOf.call(e.addedNodes, u) < 0) && (i = u), (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (o = f);
        }
      let s = i && i.parentNode == e.target ? Se(i) + 1 : 0, l = r.localPosFromDOM(e.target, s, -1), a = o && o.parentNode == e.target ? Se(o) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
      from: r.posAtStart,
      to: r.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: e.target.nodeValue == e.oldValue
    });
  }
}
let Sd = /* @__PURE__ */ new WeakMap(), Cd = !1;
function mb(t) {
  if (!Sd.has(t) && (Sd.set(t, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(t.dom).whiteSpace) !== -1)) {
    if (t.requiresGeckoHackNode = Je, Cd)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Cd = !0;
  }
}
function Ad(t, e) {
  let n = e.startContainer, r = e.startOffset, i = e.endContainer, o = e.endOffset, s = t.domAtPos(t.state.selection.anchor);
  return Rn(s.node, s.offset, i, o) && ([n, r, i, o] = [i, o, n, r]), { anchorNode: n, anchorOffset: r, focusNode: i, focusOffset: o };
}
function gb(t, e) {
  if (e.getComposedRanges) {
    let i = e.getComposedRanges(t.root)[0];
    if (i)
      return Ad(t, i);
  }
  let n;
  function r(i) {
    i.preventDefault(), i.stopImmediatePropagation(), n = i.getTargetRanges()[0];
  }
  return t.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), t.dom.removeEventListener("beforeinput", r, !0), n ? Ad(t, n) : null;
}
function yb(t, e) {
  for (let n = e.parentNode; n && n != t.dom; n = n.parentNode) {
    let r = t.docView.nearestDesc(n, !0);
    if (r && r.node.isBlock)
      return n;
  }
  return null;
}
function bb(t, e) {
  var n;
  let { focusNode: r, focusOffset: i } = t.domSelectionRange();
  for (let o of e)
    if (((n = o.parentNode) === null || n === void 0 ? void 0 : n.nodeName) == "TR") {
      let s = o.nextSibling;
      for (; s && s.nodeName != "TD" && s.nodeName != "TH"; )
        s = s.nextSibling;
      if (s) {
        let l = s;
        for (; ; ) {
          let a = l.firstChild;
          if (!a || a.nodeType != 1 || a.contentEditable == "false" || /^(BR|IMG)$/.test(a.nodeName))
            break;
          l = a;
        }
        l.insertBefore(o, l.firstChild), r == o && t.domSelection().collapse(o, i);
      } else
        o.parentNode.removeChild(o);
    }
}
function vb(t, e, n, r) {
  let { node: i, fromOffset: o, toOffset: s, from: l, to: a } = t.docView.parseRange(e, n), c = t.domSelectionRange(), d, u = c.anchorNode;
  if (u && t.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (d = [{ node: u, offset: c.anchorOffset }], ds(c) || d.push({ node: c.focusNode, offset: c.focusOffset })), Te && t.input.lastKeyCode === 8)
    for (let y = s; y > o; y--) {
      let b = i.childNodes[y - 1], w = b.pmViewDesc;
      if (b.nodeName == "BR" && !w) {
        s = y;
        break;
      }
      if (!w || w.size)
        break;
    }
  let f = t.state.doc, h = t.someProp("domParser") || nn.fromSchema(t.state.schema), p = f.resolve(l), m = null, g = h.parse(i, {
    topNode: p.parent,
    topMatch: p.parent.contentMatchAt(p.index()),
    topOpen: !0,
    from: o,
    to: s,
    preserveWhitespace: p.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: d,
    ruleFromNode: wb(r),
    context: p
  });
  if (d && d[0].pos != null) {
    let y = d[0].pos, b = d[1] && d[1].pos;
    b == null && (b = y), m = { anchor: y + l, head: b + l };
  }
  return { doc: g, sel: m, from: l, to: a };
}
const wb = (t) => (e) => {
  let n = e.pmViewDesc;
  if (n)
    return n.parseRule(t);
  if (e.nodeName == "BR" && e.parentNode) {
    if (Oe && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
      let r = document.createElement("div");
      return r.appendChild(document.createElement("li")), { skip: r };
    } else if (e.parentNode.lastChild == e || Oe && /^(tr|table)$/i.test(e.parentNode.nodeName))
      return { ignore: !0 };
  } else if (e.nodeName == "IMG" && e.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}, kb = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function xb(t, e, n, r, i) {
  let o = t.input.compositionPendingChanges || (t.composing ? t.input.compositionID : 0);
  if (t.input.compositionPendingChanges = 0, e < 0) {
    let S = t.input.lastSelectionTime > Date.now() - 50 ? t.input.lastSelectionOrigin : null, C = za(t, S);
    if (C && !t.state.selection.eq(C)) {
      if (Te && Lt && t.input.lastKeyCode === 13 && Date.now() - 100 < t.input.lastKeyCodeTime && t.someProp("handleKeyDown", (_) => _(t, vn(13, "Enter"))))
        return;
      let E = t.state.tr.setSelection(C);
      S == "pointer" ? E.setMeta("pointer", !0) : S == "key" && E.scrollIntoView(), o && E.setMeta("composition", o), t.dispatch(E);
    }
    return;
  }
  let s = t.state.doc.resolve(e), l = s.sharedDepth(n);
  e = s.before(l + 1), n = t.state.doc.resolve(n).after(l + 1);
  let a = t.state.selection, c = vb(t, e, n, i), d = t.state.doc, u = d.slice(c.from, c.to), f, h;
  t.input.lastKeyCode === 8 && Date.now() - 100 < t.input.lastKeyCodeTime ? (f = t.state.selection.to, h = "end") : (f = t.state.selection.from, h = "start"), t.input.lastKeyCode = null;
  let p = Ab(u.content, c.doc.content, c.from, f, h);
  if (p && t.input.domChangeCount++, (cr && t.input.lastIOSEnter > Date.now() - 225 || Lt) && i.some((S) => S.nodeType == 1 && !kb.test(S.nodeName)) && (!p || p.endA >= p.endB) && t.someProp("handleKeyDown", (S) => S(t, vn(13, "Enter")))) {
    t.input.lastIOSEnter = 0;
    return;
  }
  if (!p)
    if (r && a instanceof N && !a.empty && a.$head.sameParent(a.$anchor) && !t.composing && !(c.sel && c.sel.anchor != c.sel.head))
      p = { start: a.from, endA: a.to, endB: a.to };
    else {
      if (c.sel) {
        let S = Td(t, t.state.doc, c.sel);
        if (S && !S.eq(t.state.selection)) {
          let C = t.state.tr.setSelection(S);
          o && C.setMeta("composition", o), t.dispatch(C);
        }
      }
      return;
    }
  t.state.selection.from < t.state.selection.to && p.start == p.endB && t.state.selection instanceof N && (p.start > t.state.selection.from && p.start <= t.state.selection.from + 2 && t.state.selection.from >= c.from ? p.start = t.state.selection.from : p.endA < t.state.selection.to && p.endA >= t.state.selection.to - 2 && t.state.selection.to <= c.to && (p.endB += t.state.selection.to - p.endA, p.endA = t.state.selection.to)), Pe && rn <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > c.from && c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == "  " && (p.start--, p.endA--, p.endB--);
  let m = c.doc.resolveNoCache(p.start - c.from), g = c.doc.resolveNoCache(p.endB - c.from), y = d.resolve(p.start), b = m.sameParent(g) && m.parent.inlineContent && y.end() >= p.endA;
  if ((cr && t.input.lastIOSEnter > Date.now() - 225 && (!b || i.some((S) => S.nodeName == "DIV" || S.nodeName == "P")) || !b && m.pos < c.doc.content.size && (!m.sameParent(g) || !m.parent.inlineContent) && m.pos < g.pos && !/\S/.test(c.doc.textBetween(m.pos, g.pos, "", ""))) && t.someProp("handleKeyDown", (S) => S(t, vn(13, "Enter")))) {
    t.input.lastIOSEnter = 0;
    return;
  }
  if (t.state.selection.anchor > p.start && Cb(d, p.start, p.endA, m, g) && t.someProp("handleKeyDown", (S) => S(t, vn(8, "Backspace")))) {
    Lt && Te && t.domObserver.suppressSelectionUpdates();
    return;
  }
  Te && p.endB == p.start && (t.input.lastChromeDelete = Date.now()), Lt && !b && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == p.endA && (p.endB -= 2, g = c.doc.resolveNoCache(p.endB - c.from), setTimeout(() => {
    t.someProp("handleKeyDown", function(S) {
      return S(t, vn(13, "Enter"));
    });
  }, 20));
  let w = p.start, v = p.endA, x = (S) => {
    let C = S || t.state.tr.replace(w, v, c.doc.slice(p.start - c.from, p.endB - c.from));
    if (c.sel) {
      let E = Td(t, C.doc, c.sel);
      E && !(Te && t.composing && E.empty && (p.start != p.endB || t.input.lastChromeDelete < Date.now() - 100) && (E.head == w || E.head == C.mapping.map(v) - 1) || Pe && E.empty && E.head == w) && C.setSelection(E);
    }
    return o && C.setMeta("composition", o), C.scrollIntoView();
  }, k;
  if (b)
    if (m.pos == g.pos) {
      Pe && rn <= 11 && m.parentOffset == 0 && (t.domObserver.suppressSelectionUpdates(), setTimeout(() => Vt(t), 20));
      let S = x(t.state.tr.delete(w, v)), C = d.resolve(p.start).marksAcross(d.resolve(p.endA));
      C && S.ensureMarks(C), t.dispatch(S);
    } else if (
      // Adding or removing a mark
      p.endA == p.endB && (k = Sb(m.parent.content.cut(m.parentOffset, g.parentOffset), y.parent.content.cut(y.parentOffset, p.endA - y.start())))
    ) {
      let S = x(t.state.tr);
      k.type == "add" ? S.addMark(w, v, k.mark) : S.removeMark(w, v, k.mark), t.dispatch(S);
    } else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
      let S = m.parent.textBetween(m.parentOffset, g.parentOffset), C = () => x(t.state.tr.insertText(S, w, v));
      t.someProp("handleTextInput", (E) => E(t, w, v, S, C)) || t.dispatch(C());
    } else
      t.dispatch(x());
  else
    t.dispatch(x());
}
function Td(t, e, n) {
  return Math.max(n.anchor, n.head) > e.content.size ? null : $a(t, e.resolve(n.anchor), e.resolve(n.head));
}
function Sb(t, e) {
  let n = t.firstChild.marks, r = e.firstChild.marks, i = n, o = r, s, l, a;
  for (let d = 0; d < r.length; d++)
    i = r[d].removeFromSet(i);
  for (let d = 0; d < n.length; d++)
    o = n[d].removeFromSet(o);
  if (i.length == 1 && o.length == 0)
    l = i[0], s = "add", a = (d) => d.mark(l.addToSet(d.marks));
  else if (i.length == 0 && o.length == 1)
    l = o[0], s = "remove", a = (d) => d.mark(l.removeFromSet(d.marks));
  else
    return null;
  let c = [];
  for (let d = 0; d < e.childCount; d++)
    c.push(a(e.child(d)));
  if (A.from(c).eq(t))
    return { mark: l, type: s };
}
function Cb(t, e, n, r, i) {
  if (
    // The content must have shrunk
    n - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    Ks(r, !0, !1) < i.pos
  )
    return !1;
  let o = t.resolve(e);
  if (!r.parent.isTextblock) {
    let l = o.nodeAfter;
    return l != null && n == e + l.nodeSize;
  }
  if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock)
    return !1;
  let s = t.resolve(Ks(o, !0, !0));
  return !s.parent.isTextblock || s.pos > n || Ks(s, !0, !1) < n ? !1 : r.parent.content.cut(r.parentOffset).eq(s.parent.content);
}
function Ks(t, e, n) {
  let r = t.depth, i = e ? t.end() : t.pos;
  for (; r > 0 && (e || t.indexAfter(r) == t.node(r).childCount); )
    r--, i++, e = !1;
  if (n) {
    let o = t.node(r).maybeChild(t.indexAfter(r));
    for (; o && !o.isLeaf; )
      o = o.firstChild, i++;
  }
  return i;
}
function Ab(t, e, n, r, i) {
  let o = t.findDiffStart(e, n), s = n + t.size, l = n + e.size;
  if (o == null)
    return null;
  let { a, b: c } = t.findDiffEnd(e, s, l);
  if (i == "end") {
    let d = Math.max(0, o - Math.min(a, c));
    r -= a + d - o;
  }
  if (a < o && s < l) {
    let d = r <= o && r >= a ? o - r : 0;
    o -= d, c = o + (c - a), a = o;
  } else if (c < o) {
    let d = r <= o && r >= c ? o - r : 0;
    o -= d, a = o + (a - c), c = o;
  }
  return { start: o, endA: a, endB: c };
}
class hp {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, n) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new B0(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = n, this.state = n.state, this.directPlugins = n.plugins || [], this.directPlugins.forEach(Hd), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Ld(this), Ed(this), this.nodeViews = Od(this), this.docView = cd(this.state.doc, Md(this), js(this), this.dom, this), this.domObserver = new pb(this, (r, i, o, s) => xb(this, r, i, o, s)), this.domObserver.start(), F0(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let n in e)
        this._props[n] = e[n];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && Dl(this);
    let n = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Hd), this.directPlugins = e.plugins), this.updateStateInner(e.state, n);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let n = {};
    for (let r in this._props)
      n[r] = this._props[r];
    n.state = this.state;
    for (let r in e)
      n[r] = e[r];
    this.update(n);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, n) {
    var r;
    let i = this.state, o = !1, s = !1;
    e.storedMarks && this.composing && (sp(this), s = !0), this.state = e;
    let l = i.plugins != e.plugins || this._props.plugins != n.plugins;
    if (l || this._props.plugins != n.plugins || this._props.nodeViews != n.nodeViews) {
      let h = Od(this);
      Mb(h, this.nodeViews) && (this.nodeViews = h, o = !0);
    }
    (l || n.handleDOMEvents != this._props.handleDOMEvents) && Dl(this), this.editable = Ld(this), Ed(this);
    let a = js(this), c = Md(this), d = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", u = o || !this.docView.matchesNode(e.doc, c, a);
    (u || !e.selection.eq(i.selection)) && (s = !0);
    let f = d == "preserve" && s && this.dom.style.overflowAnchor == null && n0(this);
    if (s) {
      this.domObserver.stop();
      let h = u && (Pe || Te) && !this.composing && !i.selection.empty && !e.selection.empty && Tb(i.selection, e.selection);
      if (u) {
        let m = Te ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = rb(this)), (o || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = cd(e.doc, c, a, this.dom, this)), m && (!this.trackWrites || !this.dom.contains(this.trackWrites)) && (h = !0);
      }
      let p = this.input.mouseDown;
      h || !(p && this.domObserver.currentSelection.eq(this.domSelectionRange()) && T0(this) && p.delaySelUpdate()) ? Vt(this, h) : (Kh(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), d == "reset" ? this.dom.scrollTop = 0 : d == "to selection" ? this.scrollToSelection() : f && r0(f);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!(!e || !this.dom.contains(e.nodeType == 1 ? e : e.parentNode))) {
      if (!this.someProp("handleScrollToSelection", (n) => n(this))) if (this.state.selection instanceof z) {
        let n = this.docView.domAfterPos(this.state.selection.from);
        n.nodeType == 1 && id(this, n.getBoundingClientRect(), e);
      } else
        id(this, this.coordsAtPos(this.state.selection.head, 1), e);
    }
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let n = 0; n < this.directPlugins.length; n++) {
        let r = this.directPlugins[n];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let n = 0; n < this.state.plugins.length; n++) {
        let r = this.state.plugins[n];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let n = 0; n < this.pluginViews.length; n++) {
        let r = this.pluginViews[n];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, n) {
    let r = e.node, i = -1;
    if (r.from < this.state.doc.content.size && this.state.doc.nodeAt(r.from) == r.node)
      i = r.from;
    else {
      let o = r.from + (this.state.doc.content.size - n.doc.content.size);
      (o > 0 && o < this.state.doc.content.size && this.state.doc.nodeAt(o)) == r.node && (i = o);
    }
    this.dragging = new ap(e.slice, e.move, i < 0 ? void 0 : z.create(this.state.doc, i));
  }
  someProp(e, n) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = n ? n(r) : r))
      return i;
    for (let s = 0; s < this.directPlugins.length; s++) {
      let l = this.directPlugins[s].props[e];
      if (l != null && (i = n ? n(l) : l))
        return i;
    }
    let o = this.state.plugins;
    if (o)
      for (let s = 0; s < o.length; s++) {
        let l = o[s].props[e];
        if (l != null && (i = n ? n(l) : l))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (Pe) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && i0(this.dom), Vt(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let n = this.dom.parentNode; n; n = n.parentNode)
        if (n.nodeType == 9 || n.nodeType == 11 && n.host)
          return n.getSelection || (Object.getPrototypeOf(n).getSelection = () => n.ownerDocument.getSelection()), this._root = n;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return c0(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, n = 1) {
    return Ph(this, e, n);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, n = 0) {
    return this.docView.domFromPos(e, n);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let n = this.docView.descAt(e);
    return n ? n.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, n, r = -1) {
    let i = this.docView.posFromDOM(e, n, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, n) {
    return p0(this, n || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, n) {
    return ri(this, "", e, !1, n || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, n) {
    return ri(this, e, null, !0, n || new ClipboardEvent("paste"));
  }
  /**
  Serialize the given slice as it would be if it was copied from
  this editor. Returns a DOM element that contains a
  representation of the slice as its children, a textual
  representation, and the transformed slice (which can be
  different from the given input due to hooks like
  [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
  */
  serializeForClipboard(e) {
    return Ba(this, e);
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (U0(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], js(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, Ky());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return j0(this, e);
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return e ? Oe && this.root.nodeType === 11 && Zy(this.dom.ownerDocument) == this.dom && gb(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
hp.prototype.dispatch = function(t) {
  let e = this._props.dispatchTransaction;
  e ? e.call(this, t) : this.updateState(this.state.apply(t));
};
function Md(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(t.editable), t.someProp("attributes", (n) => {
    if (typeof n == "function" && (n = n(t.state)), n)
      for (let r in n)
        r == "class" ? e.class += " " + n[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + n[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(n[r]));
  }), e.translate || (e.translate = "no"), [ve.node(0, t.state.doc.content.size, e)];
}
function Ed(t) {
  if (t.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), t.cursorWrapper = { dom: e, deco: ve.widget(t.state.selection.from, e, { raw: !0, marks: t.markCursor }) };
  } else
    t.cursorWrapper = null;
}
function Ld(t) {
  return !t.someProp("editable", (e) => e(t.state) === !1);
}
function Tb(t, e) {
  let n = Math.min(t.$anchor.sharedDepth(t.head), e.$anchor.sharedDepth(e.head));
  return t.$anchor.start(n) != e.$anchor.start(n);
}
function Od(t) {
  let e = /* @__PURE__ */ Object.create(null);
  function n(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return t.someProp("nodeViews", n), t.someProp("markViews", n), e;
}
function Mb(t, e) {
  let n = 0, r = 0;
  for (let i in t) {
    if (t[i] != e[i])
      return !0;
    n++;
  }
  for (let i in e)
    r++;
  return n != r;
}
function Hd(t) {
  if (t.spec.state || t.spec.filterTransaction || t.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var cn = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, go = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Eb = typeof navigator < "u" && /Mac/.test(navigator.platform), Lb = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Ce = 0; Ce < 10; Ce++) cn[48 + Ce] = cn[96 + Ce] = String(Ce);
for (var Ce = 1; Ce <= 24; Ce++) cn[Ce + 111] = "F" + Ce;
for (var Ce = 65; Ce <= 90; Ce++)
  cn[Ce] = String.fromCharCode(Ce + 32), go[Ce] = String.fromCharCode(Ce);
for (var qs in cn) go.hasOwnProperty(qs) || (go[qs] = cn[qs]);
function Ob(t) {
  var e = Eb && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || Lb && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? go : cn)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
const Hb = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), Rb = typeof navigator < "u" && /Win/.test(navigator.platform);
function Vb(t) {
  let e = t.split(/-(?!$)/), n = e[e.length - 1];
  n == "Space" && (n = " ");
  let r, i, o, s;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      Hb ? s = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (n = "Alt-" + n), i && (n = "Ctrl-" + n), s && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function Nb(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t)
    e[Vb(n)] = t[n];
  return e;
}
function Gs(t, e, n = !0) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t;
}
function Ib(t) {
  return new re({ props: { handleKeyDown: qa(t) } });
}
function qa(t) {
  let e = Nb(t);
  return function(n, r) {
    let i = Ob(r), o, s = e[Gs(i, r)];
    if (s && s(n.state, n.dispatch, n))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let l = e[Gs(i, r, !1)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(Rb && r.ctrlKey && r.altKey) && (o = cn[r.keyCode]) && o != i) {
        let l = e[Gs(o, r)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
    }
    return !1;
  };
}
var _b = Object.defineProperty, Ga = (t, e) => {
  for (var n in e)
    _b(t, n, { get: e[n], enumerable: !0 });
};
function fs(t) {
  const { state: e, transaction: n } = t;
  let { selection: r } = n, { doc: i } = n, { storedMarks: o } = n;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return o;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = n.selection, i = n.doc, o = n.storedMarks, n;
    }
  };
}
var rr = class pp {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: n, state: r } = this, { view: i } = n, { tr: o } = r, s = this.buildProps(o);
    return Object.fromEntries(
      Object.entries(e).map(([l, a]) => [l, (...d) => {
        const u = a(...d)(s);
        return !o.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(o), u;
      }])
    );
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, n = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i, l = [], a = !!e, c = e || o.tr, d = () => (!a && n && !c.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(c), l.every((f) => f === !0)), u = {
      ...Object.fromEntries(
        Object.entries(r).map(([f, h]) => [f, (...m) => {
          const g = this.buildProps(c, n), y = h(...m)(g);
          return l.push(y), u;
        }])
      ),
      run: d
    };
    return u;
  }
  /**
   * Creates a chain that safely returns `false` when run.
   * @returns A non-dispatching command chain.
   * @example
   * const chain = CommandManager.createFakeChain()
   * chain.focus().run() // false
   */
  static createFakeChain() {
    const e = new Proxy(
      {},
      {
        get: (n, r) => {
          if (r !== "then")
            return r === "run" ? () => !1 : () => e;
        }
      }
    );
    return e;
  }
  createCan(e) {
    const { rawCommands: n, state: r } = this, i = !1, o = e || r.tr, s = this.buildProps(o, i);
    return {
      ...Object.fromEntries(
        Object.entries(n).map(([a, c]) => [a, (...d) => c(...d)({ ...s, dispatch: void 0 })])
      ),
      chain: () => this.createChain(o, i)
    };
  }
  /**
   * Creates capability checks that safely return `false`.
   * @returns A non-dispatching capability checker.
   * @example
   * const can = CommandManager.createFallbackCan()
   * can.focus() // false
   */
  static createFallbackCan() {
    const e = pp.createFakeChain();
    return new Proxy(
      {
        chain: () => e
      },
      {
        get: (r, i) => {
          if (i !== "then")
            return i === "chain" ? r.chain : () => !1;
        }
      }
    );
  }
  buildProps(e, n = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i, l = {
      tr: e,
      editor: i,
      view: s,
      state: fs({
        state: o,
        transaction: e
      }),
      dispatch: n ? () => {
      } : void 0,
      chain: () => this.createChain(e, n),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(
          Object.entries(r).map(([a, c]) => [a, (...d) => c(...d)(l)])
        );
      }
    };
    return l;
  }
}, mp = {};
Ga(mp, {
  blur: () => Db,
  clearContent: () => Pb,
  clearNodes: () => zb,
  command: () => $b,
  createParagraphNear: () => Bb,
  cut: () => Fb,
  deleteCurrentNode: () => Ub,
  deleteNode: () => Wb,
  deleteRange: () => jb,
  deleteSelection: () => Gb,
  enter: () => Jb,
  exitCode: () => Xb,
  extendMarkRange: () => Zb,
  first: () => Yb,
  focus: () => ev,
  forEach: () => tv,
  insertContent: () => nv,
  insertContentAt: () => rv,
  insertDefaultBlock: () => iv,
  joinBackward: () => lv,
  joinDown: () => sv,
  joinForward: () => av,
  joinItemBackward: () => cv,
  joinItemForward: () => dv,
  joinTextblockBackward: () => uv,
  joinTextblockForward: () => fv,
  joinUp: () => ov,
  keyboardShortcut: () => pv,
  lift: () => mv,
  liftEmptyBlock: () => gv,
  liftListItem: () => yv,
  newlineInCode: () => bv,
  resetAttributes: () => vv,
  scrollIntoView: () => wv,
  selectAll: () => kv,
  selectNodeBackward: () => xv,
  selectNodeForward: () => Sv,
  selectParentNode: () => Cv,
  selectTextblockEnd: () => Av,
  selectTextblockStart: () => Tv,
  setContent: () => Mv,
  setMark: () => qv,
  setMeta: () => Gv,
  setNode: () => Jv,
  setNodeSelection: () => Xv,
  setTextDirection: () => Zv,
  setTextSelection: () => Yv,
  sinkListItem: () => Qv,
  splitBlock: () => ew,
  splitListItem: () => tw,
  toggleList: () => rw,
  toggleMark: () => iw,
  toggleNode: () => ow,
  toggleWrap: () => sw,
  undoInputRule: () => lw,
  unsetAllMarks: () => aw,
  unsetMark: () => cw,
  unsetTextDirection: () => dw,
  updateAttributes: () => uw,
  updateDecorations: () => hw,
  wrapIn: () => pw,
  wrapInList: () => mw
});
var Db = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var n;
  t.isDestroyed || (e.dom.blur(), (n = window?.getSelection()) == null || n.removeAllRanges());
}), !0), Pb = (t = !0) => ({ commands: e }) => e.setContent("", { emitUpdate: t }), zb = () => ({ state: t, tr: e, dispatch: n }) => {
  const { selection: r } = e, { ranges: i } = r;
  return n && i.forEach(({ $from: o, $to: s }) => {
    t.doc.nodesBetween(o.pos, s.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: d } = e, u = c.resolve(d.map(a)), f = c.resolve(d.map(a + l.nodeSize)), h = u.blockRange(f);
      if (!h)
        return;
      const p = br(h);
      if (l.type.isTextblock) {
        const { defaultType: m } = u.parent.contentMatchAt(u.index());
        e.setNodeMarkup(h.start, m);
      }
      (p || p === 0) && e.lift(h, p);
    });
  }), !0;
}, $b = (t) => (e) => t(e), Bb = () => ({ state: t, dispatch: e }) => Mh(t, e), Fb = (t, e) => ({ editor: n, tr: r }) => {
  const { state: i } = n, o = i.doc.slice(t.from, t.to);
  r.deleteRange(t.from, t.to);
  const s = r.mapping.map(e);
  return r.insert(s, o.content), r.setSelection(new N(r.doc.resolve(Math.max(s - 1, 0)))), !0;
}, Ub = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, r = n.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = t.selection.$anchor;
  for (let o = i.depth; o > 0; o -= 1)
    if (i.node(o).type === r.type) {
      if (e) {
        const l = i.before(o), a = i.after(o);
        t.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
};
function ye(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t])
      throw Error(
        `There is no node type named '${t}'. Maybe you forgot to add the extension?`
      );
    return e.nodes[t];
  }
  return t;
}
var Wb = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const i = ye(t, n.schema), o = e.selection.$anchor;
  for (let s = o.depth; s > 0; s -= 1)
    if (o.node(s).type === i) {
      if (r) {
        const a = o.before(s), c = o.after(s);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, jb = (t) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: i } = t;
  return n && e.delete(r, i), !0;
}, Kb = (t) => t.content ? /^text(\*|\+)/.test(t.content) : !1, Rd = (t, e, n) => {
  if (!t.parent.isInline || n === "left" && t.pos > t.start() || n === "right" && t.pos < t.end())
    return t.pos;
  const r = e.nodes[t.parent.type.name].spec;
  return Kb(r) ? n === "left" ? t.start() - 1 : t.end() + 1 : t.pos;
}, qb = (t, e, n) => {
  const r = Rd(t, n, "left"), i = Rd(e, n, "right");
  return { from: r, to: i };
}, Gb = () => ({ state: t, dispatch: e }) => {
  if (t.selection.empty)
    return !1;
  if (e) {
    const n = t.tr, { ranges: r } = t.selection, i = n.steps.length;
    r.forEach((o) => {
      const s = n.mapping.slice(i), l = n.doc.resolve(s.map(o.$from.pos)), a = n.doc.resolve(s.map(o.$to.pos)), { from: c, to: d } = qb(l, a, t.schema);
      n.deleteRange(c, d);
    }), n.selection.empty || n.setSelection(N.near(n.doc.resolve(n.selection.from))), n.scrollIntoView(), e(n);
  }
  return !0;
}, Jb = () => ({ commands: t }) => t.keyboardShortcut("Enter"), Xb = () => ({ state: t, dispatch: e }) => Hy(t, e);
function Ja(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
function yo(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => n.strict ? e[i] === t[i] : Ja(e[i]) ? e[i].test(t[i]) : e[i] === t[i]) : !0;
}
function gp(t, e, n = {}) {
  return t.find((r) => r.type === e && yo(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(n).map((i) => [i, r.attrs[i]])),
    n
  ));
}
function Vd(t, e, n = {}) {
  return !!gp(t, e, n);
}
function hs(t, e, n) {
  if (!t || !e)
    return;
  let r = t.parent.childAfter(t.parentOffset);
  if ((!r.node || !r.node.marks.some((c) => c.type === e)) && (r = t.parent.childBefore(t.parentOffset)), !r.node || !r.node.marks.some((c) => c.type === e))
    return;
  if (!n) {
    const c = r.node.marks.find((d) => d.type === e);
    c && (n = c.attrs);
  }
  if (!gp([...r.node.marks], e, n))
    return;
  let o = r.index, s = t.start() + r.offset, l = o + 1, a = s + r.node.nodeSize;
  for (; o > 0 && Vd([...t.parent.child(o - 1).marks], e, n); )
    o -= 1, s -= t.parent.child(o).nodeSize;
  for (; l < t.parent.childCount && Vd([...t.parent.child(l).marks], e, n); )
    a += t.parent.child(l).nodeSize, l += 1;
  return {
    from: s,
    to: a
  };
}
function $t(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(
        `There is no mark type named '${t}'. Maybe you forgot to add the extension?`
      );
    return e.marks[t];
  }
  return t;
}
var Zb = (t, e) => ({ tr: n, state: r, dispatch: i }) => {
  const o = $t(t, r.schema), { doc: s, selection: l } = n, { $from: a, from: c, to: d } = l;
  if (i) {
    const u = hs(a, o, e);
    if (u && u.from <= c && u.to >= d) {
      const f = N.create(s, u.from, u.to);
      n.setSelection(f);
    }
  }
  return !0;
}, Yb = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return !0;
  return !1;
};
function ps(t) {
  return t instanceof N;
}
function Ht(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function Pl(t, e = null) {
  if (!e)
    return null;
  const n = $.atStart(t), r = $.atEnd(t);
  if (e === "start" || e === !0)
    return n;
  if (e === "end")
    return r;
  const i = n.from, o = r.to;
  return e === "all" ? N.create(
    t,
    Ht(0, i, o),
    Ht(t.content.size, i, o)
  ) : N.create(
    t,
    Ht(e, i, o),
    Ht(e, i, o)
  );
}
function zl() {
  return ["Android"].includes(navigator.platform) || /android/i.test(navigator.userAgent);
}
function oi() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(
    navigator.platform
  ) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function Qb() {
  return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
var ev = (t = null, e = {}) => ({ editor: n, view: r, tr: i, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const s = () => {
    (oi() || zl()) && r.dom.focus(), Qb() && !oi() && !zl() && r.dom.focus({ preventScroll: !0 }), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e?.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  try {
    if (r.hasFocus() && t === null || t === !1)
      return !0;
  } catch {
    return !1;
  }
  if (o && t === null && !ps(n.state.selection))
    return s(), !0;
  const l = Pl(i.doc, t) || n.state.selection, a = n.state.selection.eq(l);
  return o && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), s()), !0;
}, tv = (t, e) => (n) => t.every((r, i) => e(r, { ...n, index: i })), nv = (t, e) => ({ tr: n, commands: r }) => r.insertContentAt(
  { from: n.selection.from, to: n.selection.to },
  t,
  e
), yp = (t) => {
  const e = t.childNodes;
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const r = e[n];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t.removeChild(r) : r.nodeType === 1 && yp(r);
  }
  return t;
};
function Oi(t) {
  if (typeof window > "u")
    throw new Error(
      "[tiptap error]: there is no window object available, so this function cannot be used"
    );
  const e = `<body>${t}</body>`, n = new window.DOMParser().parseFromString(e, "text/html").body;
  return yp(n);
}
function bp(t) {
  return typeof t?.nodesBetween == "function";
}
function dr(t, e, n) {
  if (bp(t))
    return t;
  const r = typeof t == "object" && t !== null;
  n = {
    slice: !0,
    parseOptions: {},
    ...n
  };
  const i = typeof t == "string";
  if (r)
    try {
      if (Array.isArray(t) && t.length > 0)
        return A.fromArray(t.map((l) => e.nodeFromJSON(l)));
      const s = e.nodeFromJSON(t);
      return n.errorOnInvalidContent && s.check(), s;
    } catch (o) {
      if (n.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", o), dr("", e, n);
    }
  if (i) {
    if (n.errorOnInvalidContent) {
      let s = !1, l = "";
      const a = new eh({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (s = !0, l = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (n.slice ? nn.fromSchema(a).parseSlice(
        Oi(t),
        n.parseOptions
      ) : nn.fromSchema(a).parse(
        Oi(t),
        n.parseOptions
      ), n.errorOnInvalidContent && s)
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${l}`)
        });
    }
    const o = nn.fromSchema(e);
    return n.slice ? o.parseSlice(Oi(t), n.parseOptions).content : o.parse(Oi(t), n.parseOptions);
  }
  return dr("", e, n);
}
function vp(t) {
  return !("type" in t);
}
function wp(t, e, n) {
  const r = t.steps.length - 1;
  if (r < e)
    return;
  const i = t.steps[r];
  if (!(i instanceof me || i instanceof we))
    return;
  const o = t.mapping.maps[r];
  let s = 0;
  o.forEach((l, a, c, d) => {
    s === 0 && (s = d);
  }), t.setSelection($.near(t.doc.resolve(s), n));
}
var rv = (t, e, n) => ({ tr: r, dispatch: i, editor: o }) => {
  var s;
  if (i) {
    n = {
      parseOptions: o.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...n
    };
    let l;
    const a = (g) => {
      o.emit("contentError", {
        editor: o,
        error: g,
        disableCollaboration: () => {
          "collaboration" in o.storage && typeof o.storage.collaboration == "object" && o.storage.collaboration && (o.storage.collaboration.isDisabled = !0);
        }
      });
    }, c = {
      preserveWhitespace: "full",
      ...n.parseOptions
    };
    if (!n.errorOnInvalidContent && !o.options.enableContentCheck && o.options.emitContentError)
      try {
        dr(e, o.schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (g) {
        a(g);
      }
    try {
      l = dr(e, o.schema, {
        parseOptions: c,
        errorOnInvalidContent: (s = n.errorOnInvalidContent) != null ? s : o.options.enableContentCheck
      });
    } catch (g) {
      return a(g), !1;
    }
    let { from: d, to: u } = typeof t == "number" ? { from: t, to: t } : { from: t.from, to: t.to }, f = !0, h = !0;
    const p = vp(l) ? l.content : [l];
    if (p.forEach((g) => {
      g.check(), f = f ? g.isText && g.marks.length === 0 : !1, h = h ? g.isBlock : !1;
    }), d === u && h) {
      const { parent: g } = r.doc.resolve(d);
      g.isTextblock && !g.type.spec.code && !g.childCount && (d -= 1, u += 1);
    }
    let m;
    if (f)
      Array.isArray(e) ? m = e.map((g) => g.text || "").join("") : bp(e) ? m = p.map((g) => {
        var y;
        return (y = g.text) != null ? y : "";
      }).join("") : typeof e == "object" && e && e.text ? m = e.text : m = e, r.insertText(m, d, u);
    else {
      m = A.from(p);
      const g = r.doc.resolve(d), y = g.node(), b = g.parentOffset === 0, w = y.isText || y.isTextblock, v = y.content.size > 0;
      b && w && v && h && (d = Math.max(0, d - 1)), r.replaceWith(d, u, p);
    }
    n.updateSelection && wp(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", { from: d, text: m }), n.applyPasteRules && r.setMeta("applyPasteRules", { from: d, text: m });
  }
  return !0;
};
function kp(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
var iv = (t = {}) => ({ tr: e, dispatch: n, editor: r }) => {
  const { pos: i, attrs: o, content: s, updateSelection: l = !0 } = t;
  let a;
  typeof i == "number" ? a = e.doc.resolve(i) : i ? a = i : a = e.selection.$from;
  const c = kp(a.parent.contentMatchAt(a.index()));
  if (!c)
    return !1;
  const d = Object.keys(c.spec.attrs || {}), u = o ? Object.fromEntries(Object.entries(o).filter(([h]) => d.includes(h))) : {};
  let f;
  if (s) {
    const h = dr(s, r.schema);
    f = c.createAndFill(u, h);
  } else
    f = c.createAndFill(u);
  return f ? (n && (e.insert(a.pos, f), l && wp(e, e.steps.length - 1, -1)), !0) : !1;
}, ov = () => ({ state: t, dispatch: e }) => Ey(t, e), sv = () => ({ state: t, dispatch: e }) => Ly(t, e), lv = () => ({ state: t, dispatch: e }) => wh(t, e), av = () => ({ state: t, dispatch: e }) => Ch(t, e), cv = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = ls(t.doc, t.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, dv = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = ls(t.doc, t.selection.$from.pos, 1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, uv = () => ({ state: t, dispatch: e }) => Ty(t, e), fv = () => ({ state: t, dispatch: e }) => My(t, e);
function xp() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function hv(t) {
  const e = t.split(/-(?!$)/);
  let n = e[e.length - 1];
  n === "Space" && (n = " ");
  let r, i, o, s;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      oi() || xp() ? s = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (n = `Alt-${n}`), i && (n = `Ctrl-${n}`), s && (n = `Meta-${n}`), o && (n = `Shift-${n}`), n;
}
var pv = (t) => ({ editor: e, view: n, tr: r, dispatch: i }) => {
  const o = hv(t).split(/-(?!$)/), s = o.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: s === "Space" ? " " : s,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    n.someProp("handleKeyDown", (c) => c(n, l));
  });
  return a?.steps.forEach((c) => {
    const d = c.map(r.mapping);
    d && i && r.maybeStep(d);
  }), !0;
};
function Pt(t, e, n = {}) {
  const { from: r, to: i, empty: o } = t.selection, s = e ? ye(e, t.schema) : null, l = [];
  t.doc.nodesBetween(r, i, (u, f) => {
    if (u.isText)
      return;
    const h = Math.max(r, f), p = Math.min(i, f + u.nodeSize);
    l.push({
      node: u,
      from: h,
      to: p
    });
  });
  const a = i - r, c = l.filter((u) => s ? s.name === u.node.type.name : !0).filter((u) => yo(u.node.attrs, n, { strict: !1 }));
  return o ? !!c.length : c.reduce((u, f) => u + f.to - f.from, 0) >= a;
}
var mv = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const i = ye(t, n.schema);
  return Pt(n, i, e) ? Oy(n, r) : !1;
}, gv = () => ({ state: t, dispatch: e }) => Eh(t, e), yv = (t) => ({ state: e, dispatch: n }) => {
  const r = ye(t, e.schema);
  return Fy(r)(e, n);
}, bv = () => ({ state: t, dispatch: e }) => Th(t, e);
function ms(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function Nd(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((r, i) => (n.includes(i) || (r[i] = t[i]), r), {});
}
var vv = (t, e) => ({ tr: n, state: r, dispatch: i }) => {
  let o = null, s = null;
  const l = ms(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (o = ye(t, r.schema)), l === "mark" && (s = $t(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    r.doc.nodesBetween(c.$from.pos, c.$to.pos, (d, u) => {
      o && o === d.type && (a = !0, i && n.setNodeMarkup(u, void 0, Nd(d.attrs, e))), s && d.marks.length && d.marks.forEach((f) => {
        s === f.type && (a = !0, i && n.addMark(
          u,
          u + d.nodeSize,
          s.create(Nd(f.attrs, e))
        ));
      });
    });
  }), a;
}, wv = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), kv = () => ({ tr: t, dispatch: e }) => {
  if (e) {
    const n = new Ue(t.doc);
    t.setSelection(n);
  }
  return !0;
}, xv = () => ({ state: t, dispatch: e }) => xh(t, e), Sv = () => ({ state: t, dispatch: e }) => Ah(t, e), Cv = () => ({ state: t, dispatch: e }) => Ny(t, e), Av = () => ({ state: t, dispatch: e }) => Dy(t, e), Tv = () => ({ state: t, dispatch: e }) => _y(t, e);
function $l(t, e, n = {}, r = {}) {
  return dr(t, e, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
var Mv = (t, { errorOnInvalidContent: e, emitUpdate: n = !0, parseOptions: r = {} } = {}) => ({ editor: i, tr: o, dispatch: s, commands: l }) => {
  const { doc: a } = o;
  if (r.preserveWhitespace !== "full") {
    const c = $l(t, i.schema, r, {
      errorOnInvalidContent: e ?? i.options.enableContentCheck
    });
    if (s) {
      const d = vp(c) ? c.content : [c];
      o.replaceWith(0, a.content.size, d).setMeta("preventUpdate", !n);
    }
    return !0;
  }
  return s && o.setMeta("preventUpdate", !n), l.insertContentAt({ from: 0, to: a.content.size }, t, {
    parseOptions: r,
    errorOnInvalidContent: e ?? i.options.enableContentCheck
  });
};
function Sp(t, e) {
  const n = $t(e, t.schema), { from: r, to: i, empty: o } = t.selection, s = [];
  o ? (t.storedMarks && s.push(...t.storedMarks), s.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, i, (a) => {
    s.push(...a.marks);
  });
  const l = s.find((a) => a.type.name === n.name);
  return l ? { ...l.attrs } : {};
}
function Cp(t, e) {
  const n = new Ha(t);
  return e.forEach((r) => {
    r.steps.forEach((i) => {
      n.step(i);
    });
  }), n;
}
function Ev(t, e, n) {
  const r = [];
  return t.nodesBetween(e.from, e.to, (i, o) => {
    n(i) && r.push({
      node: i,
      pos: o
    });
  }), r;
}
function si(t, e) {
  for (let n = t.depth; n > 0; n -= 1) {
    const r = t.node(n);
    if (e(r))
      return {
        pos: n > 0 ? t.before(n) : 0,
        start: t.start(n),
        depth: n,
        node: r
      };
  }
}
function gs(t) {
  return (e) => si(e.$from, t);
}
function D(t, e, n) {
  return t.config[e] === void 0 && t.parent ? D(t.parent, e, n) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...n,
    parent: t.parent ? D(t.parent, e, n) : null
  }) : t.config[e];
}
function Xa(t) {
  return t.map((e) => {
    const n = {
      name: e.name,
      options: e.options,
      storage: e.storage
    }, r = D(
      e,
      "addExtensions",
      n
    );
    return r ? [e, ...Xa(r())] : e;
  }).flat(10);
}
function Za(t, e) {
  const n = fn.fromSchema(e).serializeFragment(t), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(n), i.innerHTML;
}
function Ap(t) {
  return typeof t == "function";
}
function Q(t, e = void 0, ...n) {
  return Ap(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function Lv(t = {}) {
  return Object.keys(t).length === 0 && t.constructor === Object;
}
function ur(t) {
  const e = t.filter(
    (i) => i.type === "extension"
  ), n = t.filter((i) => i.type === "node"), r = t.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: n,
    markExtensions: r
  };
}
function Tp(t) {
  const e = [], { nodeExtensions: n, markExtensions: r } = ur(t), i = [...n, ...r], o = {
    default: null,
    validate: void 0,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  }, s = n.filter((c) => c.name !== "text").map((c) => c.name), l = r.map((c) => c.name), a = [...s, ...l];
  return t.forEach((c) => {
    const d = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      extensions: i
    }, u = D(
      c,
      "addGlobalAttributes",
      d
    );
    if (!u)
      return;
    u().forEach((h) => {
      let p;
      Array.isArray(h.types) ? p = h.types : h.types === "*" ? p = a : h.types === "nodes" ? p = s : h.types === "marks" ? p = l : p = [], p.forEach((m) => {
        Object.entries(h.attributes).forEach(([g, y]) => {
          e.push({
            type: m,
            name: g,
            attribute: {
              ...o,
              ...y
            }
          });
        });
      });
    });
  }), i.forEach((c) => {
    const d = {
      name: c.name,
      options: c.options,
      storage: c.storage
    }, u = D(c, "addAttributes", d);
    if (!u)
      return;
    const f = u();
    Object.entries(f).forEach(([h, p]) => {
      const m = {
        ...o,
        ...p
      };
      typeof m?.default == "function" && (m.default = m.default()), m?.isRequired && m?.default === void 0 && delete m.default, e.push({
        type: c.name,
        name: h,
        attribute: m
      });
    });
  }), e;
}
function Ov(t) {
  const e = [];
  let n = "", r = !1, i = !1, o = 0;
  const s = t.length;
  for (let l = 0; l < s; l += 1) {
    const a = t[l];
    if (a === "'" && !i) {
      r = !r, n += a;
      continue;
    }
    if (a === '"' && !r) {
      i = !i, n += a;
      continue;
    }
    if (!r && !i) {
      if (a === "(") {
        o += 1, n += a;
        continue;
      }
      if (a === ")" && o > 0) {
        o -= 1, n += a;
        continue;
      }
      if (a === ";" && o === 0) {
        e.push(n), n = "";
        continue;
      }
    }
    n += a;
  }
  return n && e.push(n), e;
}
function Id(t) {
  const e = [], n = Ov(t || ""), r = n.length;
  for (let i = 0; i < r; i += 1) {
    const o = n[i], s = o.indexOf(":");
    if (s === -1)
      continue;
    const l = o.slice(0, s).trim(), a = o.slice(s + 1).trim();
    l && a && e.push([l, a]);
  }
  return e;
}
function ne(...t) {
  return t.filter((e) => !!e).reduce((e, n) => {
    const r = { ...e };
    return Object.entries(n).forEach(([i, o]) => {
      if (!r[i]) {
        r[i] = o;
        return;
      }
      if (i === "class") {
        const l = o ? String(o).split(" ") : [], a = r[i] ? r[i].split(" ") : [], c = l.filter(
          (d) => !a.includes(d)
        );
        r[i] = [...a, ...c].join(" ");
      } else if (i === "style") {
        const l = new Map([
          ...Id(r[i]),
          ...Id(o)
        ]);
        r[i] = Array.from(l.entries()).map(([a, c]) => `${a}: ${c}`).join("; ");
      } else
        r[i] = o;
    }), r;
  }, {});
}
function fr(t, e) {
  return e.filter((n) => n.type === t.type.name).filter((n) => n.attribute.rendered).map((n) => n.attribute.renderHTML ? n.attribute.renderHTML(t.attrs) || {} : {
    [n.name]: t.attrs[n.name]
  }).reduce((n, r) => ne(n, r), {});
}
function Hv(t) {
  return typeof t != "string" ? t : t.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(t) : t === "true" ? !0 : t === "false" ? !1 : t;
}
function _d(t, e) {
  return "style" in t ? t : {
    ...t,
    getAttrs: (n) => {
      const r = t.getAttrs ? t.getAttrs(n) : t.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((o, s) => {
        const l = s.attribute.parseHTML ? s.attribute.parseHTML(n) : Hv(n.getAttribute(s.name));
        return l == null ? o : {
          ...o,
          [s.name]: l
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function Dd(t) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(t).filter(([e, n]) => e === "attrs" && Lv(n) ? !1 : n != null)
  );
}
function Pd(t) {
  var e, n;
  const r = {};
  return !((e = t?.attribute) != null && e.isRequired) && "default" in (t?.attribute || {}) && (r.default = t.attribute.default), ((n = t?.attribute) == null ? void 0 : n.validate) !== void 0 && (r.validate = t.attribute.validate), [t.name, r];
}
function Mp(t, e) {
  var n;
  const r = Tp(t), { nodeExtensions: i, markExtensions: o } = ur(t), s = (n = i.find((c) => D(c, "topNode"))) == null ? void 0 : n.name, l = Object.fromEntries(
    i.map((c) => {
      const d = r.filter(
        (y) => y.type === c.name
      ), u = {
        name: c.name,
        options: c.options,
        storage: c.storage,
        editor: e
      }, f = t.reduce((y, b) => {
        const w = D(
          b,
          "extendNodeSchema",
          u
        );
        return {
          ...y,
          ...w ? w(c) : {}
        };
      }, {}), h = Dd({
        ...f,
        content: Q(
          D(c, "content", u)
        ),
        marks: Q(D(c, "marks", u)),
        group: Q(D(c, "group", u)),
        inline: Q(D(c, "inline", u)),
        atom: Q(D(c, "atom", u)),
        selectable: Q(
          D(c, "selectable", u)
        ),
        draggable: Q(
          D(c, "draggable", u)
        ),
        code: Q(D(c, "code", u)),
        whitespace: Q(
          D(c, "whitespace", u)
        ),
        linebreakReplacement: Q(
          D(
            c,
            "linebreakReplacement",
            u
          )
        ),
        defining: Q(
          D(c, "defining", u)
        ),
        isolating: Q(
          D(c, "isolating", u)
        ),
        attrs: Object.fromEntries(d.map(Pd))
      }), p = Q(
        D(c, "parseHTML", u)
      );
      p && (h.parseDOM = p.map(
        (y) => _d(y, d)
      ));
      const m = D(
        c,
        "renderHTML",
        u
      );
      m && (h.toDOM = (y) => m({
        node: y,
        HTMLAttributes: fr(y, d)
      }));
      const g = D(
        c,
        "renderText",
        u
      );
      return g && (h.toText = g), [c.name, h];
    })
  ), a = Object.fromEntries(
    o.map((c) => {
      const d = r.filter(
        (g) => g.type === c.name
      ), u = {
        name: c.name,
        options: c.options,
        storage: c.storage,
        editor: e
      }, f = t.reduce((g, y) => {
        const b = D(
          y,
          "extendMarkSchema",
          u
        );
        return {
          ...g,
          ...b ? b(c) : {}
        };
      }, {}), h = Dd({
        ...f,
        inclusive: Q(
          D(c, "inclusive", u)
        ),
        excludes: Q(
          D(c, "excludes", u)
        ),
        group: Q(D(c, "group", u)),
        spanning: Q(
          D(c, "spanning", u)
        ),
        code: Q(D(c, "code", u)),
        attrs: Object.fromEntries(d.map(Pd))
      }), p = Q(
        D(c, "parseHTML", u)
      );
      p && (h.parseDOM = p.map(
        (g) => _d(g, d)
      ));
      const m = D(
        c,
        "renderHTML",
        u
      );
      return m && (h.toDOM = (g) => m({
        mark: g,
        HTMLAttributes: fr(g, d)
      })), [c.name, h];
    })
  );
  return new eh({
    topNode: s,
    nodes: l,
    marks: a
  });
}
function Rv(t) {
  const e = t.filter((n, r) => t.indexOf(n) !== r);
  return Array.from(new Set(e));
}
function _r(t) {
  return t.sort((n, r) => {
    const i = D(n, "priority") || 100, o = D(r, "priority") || 100;
    return i > o ? -1 : i < o ? 1 : 0;
  });
}
function Ya(t) {
  const e = _r(Xa(t)), n = Rv(e.map((r) => r.name));
  return n.length && console.warn(
    `[tiptap warn]: Duplicate extension names found: [${n.map((r) => `'${r}'`).join(", ")}]. This can lead to issues.`
  ), e;
}
function Vv(t, e) {
  const n = Ya(t);
  return Mp(n, e);
}
function Ep(t, e, n) {
  const { from: r, to: i } = e, { blockSeparator: o = `

`, textSerializers: s = {} } = n || {};
  let l = "";
  return t.nodesBetween(r, i, (a, c, d, u) => {
    var f;
    a.isBlock && c > r && (l += o);
    const h = s?.[a.type.name];
    if (h)
      return d && (l += h({
        node: a,
        pos: c,
        parent: d,
        index: u,
        range: e
      })), !1;
    a.isText && (l += (f = a?.text) == null ? void 0 : f.slice(Math.max(r, c) - c, i - c));
  }), l;
}
function Lp(t, e) {
  const n = {
    from: 0,
    to: t.content.size
  };
  return Ep(t, n, e);
}
function Qa(t) {
  return Object.fromEntries(
    Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText])
  );
}
function Nv(t, e) {
  const n = ye(e, t.schema), { from: r, to: i } = t.selection, o = [];
  t.doc.nodesBetween(r, i, (l) => {
    o.push(l);
  });
  const s = o.reverse().find((l) => l.type.name === n.name);
  return s ? { ...s.attrs } : {};
}
function Op(t, e) {
  const n = ms(
    typeof e == "string" ? e : e.name,
    t.schema
  );
  return n === "node" ? Nv(t, e) : n === "mark" ? Sp(t, e) : {};
}
function Iv(t, e = JSON.stringify) {
  const n = {};
  return t.filter((r) => {
    const i = e(r);
    return Object.prototype.hasOwnProperty.call(n, i) ? !1 : n[i] = !0;
  });
}
function _v(t) {
  const e = Iv(t);
  return e.length === 1 ? e : e.filter((n, r) => !e.filter((o, s) => s !== r).some((o) => n.oldRange.from >= o.oldRange.from && n.oldRange.to <= o.oldRange.to && n.newRange.from >= o.newRange.from && n.newRange.to <= o.newRange.to));
}
function ys(t) {
  const { mapping: e, steps: n } = t, r = [];
  return e.maps.forEach((i, o) => {
    const s = [];
    if (i.ranges.length)
      i.forEach((l, a) => {
        s.push({ from: l, to: a });
      });
    else {
      const { from: l, to: a } = n[o];
      if (l === void 0 || a === void 0)
        return;
      s.push({ from: l, to: a });
    }
    s.forEach(({ from: l, to: a }) => {
      const c = e.slice(o).map(l, -1), d = e.slice(o).map(a), u = e.invert().map(c, -1), f = e.invert().map(d);
      r.push({
        oldRange: {
          from: u,
          to: f
        },
        newRange: {
          from: c,
          to: d
        }
      });
    });
  }), _v(r);
}
function ec(t, e, n) {
  const r = [];
  return t === e ? n.resolve(t).marks().forEach((i) => {
    const o = n.resolve(t), s = hs(o, i.type);
    s && r.push({
      mark: i,
      ...s
    });
  }) : n.nodesBetween(t, e, (i, o) => {
    !i || i?.nodeSize === void 0 || r.push(
      ...i.marks.map((s) => ({
        from: o,
        to: o + i.nodeSize,
        mark: s
      }))
    );
  }), r;
}
var Dv = (t, e, n, r = 20) => {
  const i = t.doc.resolve(n);
  let o = r, s = null;
  for (; o > 0 && s === null; ) {
    const l = i.node(o);
    l?.type.name === e ? s = l : o -= 1;
  }
  return [s, o];
}, Pv = (t) => {
  const e = t.depth - 1;
  if (e < 0) return null;
  const n = t.index(e);
  return n === 0 ? null : t.node(e).child(n - 1);
};
function jn(t, e) {
  return e.nodes[t] || e.marks[t] || null;
}
function eo(t, e, n) {
  return Object.fromEntries(
    Object.entries(n).filter(([r]) => {
      const i = t.find((o) => o.type === e && o.name === r);
      return i ? i.attribute.keepOnSplit : !1;
    })
  );
}
var zv = (t, e = 500) => {
  let n = "";
  const r = t.parentOffset;
  return t.parent.nodesBetween(
    Math.max(0, r - e),
    r,
    (i, o, s, l) => {
      var a, c;
      const d = ((c = (a = i.type.spec).toText) == null ? void 0 : c.call(a, {
        node: i,
        pos: o,
        parent: s,
        index: l
      })) || i.textContent || "%leaf%";
      n += i.isAtom && !i.isText ? d : d.slice(0, Math.max(0, r - o));
    }
  ), n;
};
function Bl(t, e, n = {}) {
  const { empty: r, ranges: i } = t.selection, o = e ? $t(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((u) => o ? o.name === u.type.name : !0).find((u) => yo(u.attrs, n, { strict: !1 }));
  let s = 0;
  const l = [];
  if (i.forEach(({ $from: u, $to: f }) => {
    const h = u.pos, p = f.pos;
    t.doc.nodesBetween(h, p, (m, g) => {
      if (o && m.inlineContent && !m.type.allowsMarkType(o))
        return !1;
      if (!m.isText && !m.marks.length)
        return;
      const y = Math.max(h, g), b = Math.min(p, g + m.nodeSize), w = b - y;
      s += w, l.push(
        ...m.marks.map((v) => ({
          mark: v,
          from: y,
          to: b
        }))
      );
    });
  }), s === 0)
    return !1;
  const a = l.filter((u) => o ? o.name === u.mark.type.name : !0).filter((u) => yo(u.mark.attrs, n, { strict: !1 })).reduce((u, f) => u + f.to - f.from, 0), c = l.filter((u) => o ? u.mark.type !== o && u.mark.type.excludes(o) : !0).reduce((u, f) => u + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= s;
}
function $v(t, e, n = {}) {
  if (!e)
    return Pt(t, null, n) || Bl(t, null, n);
  const r = ms(e, t.schema);
  return r === "node" ? Pt(t, e, n) : r === "mark" ? Bl(t, e, n) : !1;
}
var Bv = (t, e) => {
  const { $from: n, $to: r, $anchor: i } = t.selection;
  if (e) {
    const o = gs((l) => l.type.name === e)(t.selection);
    if (!o)
      return !1;
    const s = t.doc.resolve(o.pos + 1);
    return i.pos + 1 === s.end();
  }
  return !(r.parentOffset < r.parent.nodeSize - 2 || n.pos !== r.pos);
}, Fv = (t) => {
  const { $from: e, $to: n } = t.selection;
  return !(e.parentOffset > 0 || e.pos !== n.pos);
};
function zd(t, e) {
  return Array.isArray(e) ? e.some((n) => (typeof n == "string" ? n : n.name) === t.name) : e;
}
function Js(t, e) {
  const { nodeExtensions: n } = ur(e), r = n.find((s) => s.name === t);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = Q(D(r, "group", i));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function Si(t, {
  checkChildren: e = !0,
  ignoreWhitespace: n = !1
} = {}) {
  var r;
  if (n) {
    if (t.type.name === "hardBreak")
      return !0;
    if (t.isText)
      return !/\S/.test((r = t.text) != null ? r : "");
  }
  if (t.isText)
    return !t.text;
  if (t.isAtom || t.isLeaf)
    return !1;
  if (t.content.childCount === 0)
    return !0;
  if (e) {
    let i = !0;
    return t.content.forEach((o) => {
      i !== !1 && (Si(o, { ignoreWhitespace: n, checkChildren: e }) || (i = !1));
    }), i;
  }
  return !1;
}
function Hp(t) {
  return t instanceof z;
}
function Uv({
  selection: t,
  pos: e,
  nodeSize: n,
  selectedOnTextSelection: r = !1
}) {
  const { from: i, to: o } = t;
  return !!(i <= e && o >= e + n || r && ps(t) && i > e && o < e + n);
}
var Rp = class Vp {
  constructor(e) {
    this.position = e;
  }
  /**
   * Creates a MappablePosition from a JSON object.
   */
  static fromJSON(e) {
    return new Vp(e.position);
  }
  /**
   * Converts the MappablePosition to a JSON object.
   */
  toJSON() {
    return {
      position: this.position
    };
  }
};
function Wv(t, e) {
  const n = e.mapping.mapResult(t.position);
  return {
    position: new Rp(n.pos),
    mapResult: n
  };
}
function jv(t) {
  return new Rp(t);
}
function Np(t, e, n) {
  const i = t.state.doc.content.size, o = Ht(e, 0, i), s = Ht(n, 0, i), l = t.coordsAtPos(o), a = t.coordsAtPos(s, -1), c = Math.min(l.top, a.top), d = Math.max(l.bottom, a.bottom), u = Math.min(l.left, a.left), f = Math.max(l.right, a.right), h = f - u, p = d - c, y = {
    top: c,
    bottom: d,
    left: u,
    right: f,
    width: h,
    height: p,
    x: u,
    y: c
  };
  return {
    ...y,
    toJSON: () => y
  };
}
function Kv(t, e, n) {
  var r;
  const { selection: i } = e;
  let o = null;
  if (ps(i) && (o = i.$cursor), o) {
    const l = (r = t.storedMarks) != null ? r : o.marks();
    return o.parent.type.allowsMarkType(n) && (!!n.isInSet(l) || !l.some((c) => c.type.excludes(n)));
  }
  const { ranges: s } = i;
  return s.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? t.doc.inlineContent && t.doc.type.allowsMarkType(n) : !1;
    return t.doc.nodesBetween(l.pos, a.pos, (d, u, f) => {
      if (c)
        return !1;
      if (d.isInline) {
        const h = !f || f.type.allowsMarkType(n), p = !!n.isInSet(d.marks) || !d.marks.some((m) => m.type.excludes(n));
        c = h && p;
      }
      return !c;
    }), c;
  });
}
var qv = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  const { selection: o } = n, { empty: s, ranges: l } = o, a = $t(t, r.schema);
  if (i)
    if (s) {
      const c = Sp(r, a);
      n.addStoredMark(
        a.create({
          ...c,
          ...e
        })
      );
    } else
      l.forEach((c) => {
        const d = c.$from.pos, u = c.$to.pos;
        r.doc.nodesBetween(d, u, (f, h) => {
          const p = Math.max(h, d), m = Math.min(h + f.nodeSize, u);
          f.marks.find((y) => y.type === a) ? f.marks.forEach((y) => {
            a === y.type && n.addMark(
              p,
              m,
              a.create({
                ...y.attrs,
                ...e
              })
            );
          }) : n.addMark(p, m, a.create(e));
        });
      });
  return Kv(r, n, a);
}, Gv = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), Jv = (t, e = {}) => ({ state: n, dispatch: r, chain: i }) => {
  const o = ye(t, n.schema);
  let s;
  return n.selection.$anchor.sameParent(n.selection.$head) && (s = n.selection.$anchor.parent.attrs), o.isTextblock ? i().command(({ commands: l }) => td(o, { ...s, ...e })(n) ? !0 : l.clearNodes()).command(({ state: l }) => td(o, { ...s, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Xv = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, i = Ht(t, 0, r.content.size), o = z.create(r, i);
    e.setSelection(o);
  }
  return !0;
}, Zv = (t, e) => ({ tr: n, state: r, dispatch: i }) => {
  const { selection: o } = r;
  let s, l;
  return typeof e == "number" ? (s = e, l = e) : e && "from" in e && "to" in e ? (s = e.from, l = e.to) : (s = o.from, l = o.to), i && n.doc.nodesBetween(s, l, (a, c) => {
    a.isText || n.setNodeMarkup(c, void 0, {
      ...a.attrs,
      dir: t
    });
  }), !0;
}, Yv = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: i, to: o } = typeof t == "number" ? { from: t, to: t } : t, s = N.atStart(r).from, l = N.atEnd(r).to, a = Ht(i, s, l), c = Ht(o, s, l), d = N.create(r, a, c);
    e.setSelection(d);
  }
  return !0;
}, Qv = (t) => ({ state: e, dispatch: n }) => {
  const r = ye(t, e.schema);
  return jy(r)(e, n);
};
function $d(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const r = n.filter((i) => e?.includes(i.type.name));
    t.tr.ensureMarks(r);
  }
}
var ew = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: r, editor: i }) => {
  const { selection: o, doc: s } = e, { $from: l, $to: a } = o, c = i.extensionManager.attributes, d = eo(
    c,
    l.node().type.name,
    l.node().attrs
  );
  if (o instanceof z && o.node.isBlock)
    return !l.parentOffset || !Rt(s, l.pos) ? !1 : (r && (t && $d(n, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const u = a.parentOffset === a.parent.content.size, f = l.depth === 0 ? void 0 : kp(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let h = u && f ? [
    {
      type: f,
      attrs: d
    }
  ] : void 0, p = Rt(e.doc, e.mapping.map(l.pos), 1, h);
  if (!h && !p && Rt(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (p = !0, h = f ? [
    {
      type: f,
      attrs: d
    }
  ] : void 0), r) {
    if (p && (o instanceof N && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), f && !u && !l.parentOffset && l.parent.type !== f)) {
      const m = e.mapping.map(l.before()), g = e.doc.resolve(m);
      l.node(-1).canReplaceWith(g.index(), g.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    t && $d(n, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return p;
}, tw = (t, e = {}) => ({ tr: n, state: r, dispatch: i, editor: o }) => {
  var s;
  const l = ye(t, r.schema), { $from: a, $to: c } = r.selection, d = r.selection.node;
  if (d && d.isBlock || a.depth < 2 || !a.sameParent(c))
    return !1;
  const u = a.node(-1);
  if (u.type !== l)
    return !1;
  const f = o.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (i) {
      let y = A.empty;
      const b = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let C = a.depth - b; C >= a.depth - 3; C -= 1)
        y = A.from(a.node(C).copy(y));
      const w = (
        // oxlint-disable-next-line no-nested-ternary
        a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3
      ), v = {
        ...eo(f, a.node().type.name, a.node().attrs),
        ...e
      }, x = ((s = l.contentMatch.defaultType) == null ? void 0 : s.createAndFill(v)) || void 0;
      y = y.append(A.from(l.createAndFill(null, x) || void 0));
      const k = a.before(a.depth - (b - 1));
      n.replace(k, a.after(-w), new O(y, 4 - b, 0));
      let S = -1;
      n.doc.nodesBetween(k, n.doc.content.size, (C, E) => {
        if (S > -1)
          return !1;
        C.isTextblock && C.content.size === 0 && (S = E + 1);
      }), S > -1 && n.setSelection(N.near(n.doc.resolve(S))), n.scrollIntoView();
    }
    return !0;
  }
  const h = c.pos === a.end() ? u.contentMatchAt(0).defaultType : null, p = {
    ...eo(f, u.type.name, u.attrs),
    ...e
  }, m = {
    ...eo(f, a.node().type.name, a.node().attrs),
    ...e
  };
  n.delete(a.pos, c.pos);
  const g = h ? [
    { type: l, attrs: p },
    { type: h, attrs: m }
  ] : [{ type: l, attrs: p }];
  if (!Rt(n.doc, a.pos, 2))
    return !1;
  if (i) {
    const { selection: y, storedMarks: b } = r, { splittableMarks: w } = o.extensionManager, v = b || y.$to.parentOffset && y.$from.marks();
    if (n.split(a.pos, 2, g).scrollIntoView(), !v || !i)
      return !0;
    const x = v.filter((k) => w.includes(k.type.name));
    n.ensureMarks(x);
  }
  return !0;
};
function Bd(t) {
  return !t || t === "1" ? null : t;
}
function Ip(t, e) {
  return Bd(t) === Bd(e);
}
var Xs = (t, e) => {
  const n = gs((s) => s.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const i = t.doc.nodeAt(r);
  return !(n.node.type === i?.type && hn(t.doc, n.pos)) || !Ip(n.node.attrs.type, i?.attrs.type) || t.join(n.pos), !0;
}, Zs = (t, e) => {
  const n = gs((s) => s.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const i = t.doc.nodeAt(r);
  return !(n.node.type === i?.type && hn(t.doc, r)) || !Ip(n.node.attrs.type, i?.attrs.type) || t.join(r), !0;
};
function nw(t) {
  const e = t.doc, n = e.firstChild;
  if (!n)
    return null;
  const r = e.resolve(1), i = e.resolve(n.nodeSize - 1);
  return N.between(r, i);
}
var rw = (t, e, n, r = {}) => ({ editor: i, tr: o, state: s, dispatch: l, chain: a, commands: c, can: d }) => {
  const { extensions: u, splittableMarks: f } = i.extensionManager, h = ye(t, s.schema), p = ye(e, s.schema), { selection: m, storedMarks: g } = s, { $from: y, $to: b } = m, w = y.blockRange(b), v = g || m.$to.parentOffset && m.$from.marks();
  if (!w)
    return !1;
  const x = gs((F) => Js(F.type.name, u))(m), k = m.from === 0 && m.to === s.doc.content.size, S = s.doc.content.content, C = S.length === 1 ? S[0] : null, E = k && C && Js(C.type.name, u) ? {
    node: C,
    pos: 0
  } : null, _ = x ?? E, I = !!x && w.depth >= 1 && w.depth - x.depth <= 1, B = !!E;
  if ((I || B) && _) {
    if (_.node.type === h)
      return k && B ? a().command(({ tr: F, dispatch: j }) => {
        const K = nw(F);
        return K ? (F.setSelection(K), j && j(F), !0) : !1;
      }).liftListItem(p).run() : c.liftListItem(p);
    if (Js(_.node.type.name, u) && h.validContent(_.node.content))
      return a().command(() => (o.setNodeMarkup(_.pos, h), !0)).command(() => Xs(o, h)).command(() => Zs(o, h)).run();
  }
  return !n || !v || !l ? a().command(() => d().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => Xs(o, h)).command(() => Zs(o, h)).run() : a().command(() => {
    const F = d().wrapInList(h, r), j = v.filter((K) => f.includes(K.type.name));
    return o.ensureMarks(j), F ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => Xs(o, h)).command(() => Zs(o, h)).run();
}, iw = (t, e = {}, n = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: o = !1 } = n, s = $t(t, r.schema);
  return Bl(r, s, e) ? i.unsetMark(s, { extendEmptyMarkRange: o }) : i.setMark(s, e);
}, ow = (t, e, n = {}) => ({ state: r, commands: i }) => {
  const o = ye(t, r.schema), s = ye(e, r.schema), l = Pt(r, o, n);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? i.setNode(s, a) : i.setNode(o, { ...a, ...n });
}, sw = (t, e = {}) => ({ state: n, commands: r }) => {
  const i = ye(t, n.schema);
  return Pt(n, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, lw = () => ({ state: t, dispatch: e }) => {
  const n = t.plugins;
  for (let r = 0; r < n.length; r += 1) {
    const i = n[r];
    let o;
    if (i.spec.isInputRules && (o = i.getState(t))) {
      if (e) {
        const s = t.tr, l = o.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          s.step(l.steps[a].invert(l.docs[a]));
        if (o.text) {
          const a = s.doc.resolve(o.from).marks();
          s.replaceWith(o.from, o.to, t.schema.text(o.text, a));
        } else
          s.delete(o.from, o.to);
      }
      return !0;
    }
  }
  return !1;
}, aw = (t = {}) => ({ tr: e, dispatch: n, editor: r }) => {
  const { ignoreClearable: i = !1 } = t, { selection: o } = e, { empty: s, ranges: l } = o;
  if (s)
    return !0;
  const { nonClearableMarks: a } = r.extensionManager;
  if (n) {
    const c = Object.values(r.schema.marks).filter(
      (d) => i || !a.includes(d.name)
    );
    l.forEach((d) => {
      for (const u of c)
        e.removeMark(d.$from.pos, d.$to.pos, u);
    });
  }
  return !0;
}, cw = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  var o;
  const { extendEmptyMarkRange: s = !1 } = e, { selection: l } = n, a = $t(t, r.schema), { $from: c, empty: d, ranges: u } = l;
  if (!i)
    return !0;
  if (d && s) {
    let { from: f, to: h } = l;
    const p = (o = c.marks().find((g) => g.type === a)) == null ? void 0 : o.attrs, m = hs(c, a, p);
    m && (f = m.from, h = m.to), n.removeMark(f, h, a);
  } else
    u.forEach((f) => {
      n.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return n.removeStoredMark(a), !0;
}, dw = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const { selection: i } = n;
  let o, s;
  return typeof t == "number" ? (o = t, s = t) : t && "from" in t && "to" in t ? (o = t.from, s = t.to) : (o = i.from, s = i.to), r && e.doc.nodesBetween(o, s, (l, a) => {
    if (l.isText)
      return;
    const c = { ...l.attrs };
    delete c.dir, e.setNodeMarkup(a, void 0, c);
  }), !0;
}, uw = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  let o = null, s = null;
  const l = ms(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (o = ye(t, r.schema)), l === "mark" && (s = $t(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    const d = c.$from.pos, u = c.$to.pos;
    let f, h, p, m;
    n.selection.empty ? r.doc.nodesBetween(d, u, (g, y) => {
      o && o === g.type && (a = !0, p = Math.max(y, d), m = Math.min(y + g.nodeSize, u), f = y, h = g);
    }) : r.doc.nodesBetween(d, u, (g, y) => {
      y < d && o && o === g.type && (a = !0, p = Math.max(y, d), m = Math.min(y + g.nodeSize, u), f = y, h = g), y >= d && y <= u && (o && o === g.type && (a = !0, i && n.setNodeMarkup(y, void 0, {
        ...g.attrs,
        ...e
      })), s && g.marks.length && g.marks.forEach((b) => {
        if (s === b.type && (a = !0, i)) {
          const w = Math.max(y, d), v = Math.min(y + g.nodeSize, u);
          n.addMark(
            w,
            v,
            s.create({
              ...b.attrs,
              ...e
            })
          );
        }
      }));
    }), h && (f !== void 0 && i && n.setNodeMarkup(f, void 0, {
      ...h.attrs,
      ...e
    }), s && h.marks.length && h.marks.forEach((g) => {
      s === g.type && i && n.addMark(
        p,
        m,
        s.create({
          ...g.attrs,
          ...e
        })
      );
    }));
  }), a;
}, fw = "__tiptap_decorations__", Jn = new se(
  fw
), hw = (t) => ({ tr: e, dispatch: n }) => (n && e.setMeta(Jn, { type: "force", name: t }), !0), pw = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const i = ye(t, n.schema);
  return Py(i, e)(n, r);
}, mw = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const i = ye(t, n.schema);
  return zy(i, e)(n, r);
}, Xn = /* @__PURE__ */ new WeakMap();
function gw(t, e) {
  var n, r;
  Xn.set(t, ((n = Xn.get(t)) != null ? n : 0) + 1);
  try {
    return e();
  } finally {
    const i = ((r = Xn.get(t)) != null ? r : 1) - 1;
    i > 0 ? Xn.set(t, i) : Xn.delete(t);
  }
}
function yw(t) {
  return Xn.has(t);
}
var bw = class {
  constructor() {
    this.callbacks = {};
  }
  on(t, e) {
    return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(e), this;
  }
  emit(t, ...e) {
    const n = this.callbacks[t];
    return n && n.forEach((r) => r.apply(this, e)), this;
  }
  off(t, e) {
    const n = this.callbacks[t];
    return n && (e ? this.callbacks[t] = n.filter((r) => r !== e) : delete this.callbacks[t]), this;
  }
  once(t, e) {
    const n = (...r) => {
      this.off(t, n), e.apply(this, r);
    };
    return this.on(t, n);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}, _p = typeof process < "u" && process.env.NODE_ENV !== "production";
function vw(t) {
  return t.kind === "widget";
}
function Dp(t, e) {
  const n = [], r = /* @__PURE__ */ new Set();
  for (const i of t)
    i.kind === "widget" && vw(i) && r.add(i.key), n.push(i.toPMDecoration(e));
  return { decorations: n, widgetKeys: r };
}
function ww(t, e, n) {
  const { decorations: r, widgetKeys: i } = Dp(
    e,
    n
  );
  return { set: Z.create(t, r), widgetKeys: i };
}
function Pp({
  position: t,
  from: e,
  to: n,
  docSize: r
}) {
  return t < e ? !1 : t < n ? !0 : t === n && n === r;
}
function kw({
  decorations: t,
  from: e,
  to: n,
  docSize: r,
  extensionName: i,
  warnedExtensions: o
}) {
  return t.filter((s) => Pp({ position: s.anchor, from: e, to: n, docSize: r }) ? !0 : (s.anchor === n || o.has(i) || (o.add(i), console.warn(
    `[tiptap warn]: Extension "${i}" returned a decoration outside the requested range [${e}, ${n}). It was ignored.`
  )), !1));
}
function zp(t) {
  var e;
  const n = (e = t.spec) == null ? void 0 : e.key;
  return typeof n == "string" ? n : void 0;
}
function xw(t) {
  var e, n, r;
  const i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  for (const s of t.find()) {
    const l = zp(s);
    if (!l)
      continue;
    const a = (e = s.spec.extensionName) != null ? e : "unknown", c = (n = i.get(l)) != null ? n : /* @__PURE__ */ new Set();
    c.add(a), i.set(l, c), o.set(l, ((r = o.get(l)) != null ? r : 0) + 1);
  }
  return Array.from(i, ([s, l]) => ({ key: s, extensions: l })).filter(
    ({ key: s }) => {
      var l;
      return ((l = o.get(s)) != null ? l : 0) > 1;
    }
  );
}
function $p(t) {
  return t.jsonID === "attr";
}
function Sw(t) {
  let e = !1;
  if (t.getMap().forEach(() => {
    e = !0;
  }), e || $p(t))
    return !0;
  const n = t;
  return typeof n.from == "number" && typeof n.to == "number";
}
function Cw(t, e) {
  let n = null, r = 0, i = 0;
  for (let o = 0; o < t.childCount && !(i > e.to); o += 1) {
    const s = i + t.child(o).nodeSize;
    s >= e.from && (n === null && (n = i), r = s), i = s;
  }
  return n === null ? null : { from: n, to: r };
}
function Aw(t, e) {
  if (t.steps.some((o) => !Sw(o)))
    return { type: "full" };
  const n = ys(t).map(({ newRange: o }) => o);
  t.steps.forEach((o, s) => {
    if (!$p(o))
      return;
    const l = t.mapping.slice(s);
    n.push({ from: l.map(o.pos, -1), to: l.map(o.pos + 1) });
  });
  const r = [];
  for (const o of n) {
    const s = Cw(e, o);
    s && r.push(s);
  }
  r.sort((o, s) => o.from - s.from);
  const i = [];
  for (const o of r) {
    const s = i[i.length - 1];
    s && o.from <= s.to ? s.to = Math.max(s.to, o.to) : i.push({ ...o });
  }
  return { type: "ranges", ranges: i };
}
function Bp(t, e, n, r) {
  return t.map(e, n, {
    onRemove: (i) => {
      const o = i?.key;
      typeof o == "string" && r.delete(o);
    }
  });
}
function Tw(t, e, n) {
  var r, i;
  const o = (r = e.decorationSetsByExtension[t]) != null ? r : Z.empty, s = new Set((i = e.widgetKeysByExtension[t]) != null ? i : []);
  return { set: Bp(o, n.mapping, n.doc, s), widgetKeys: s };
}
function Fd(t, e) {
  const n = Object.values(e).flatMap((r) => r.find());
  return Z.create(t, n);
}
function Ud(t) {
  const e = /* @__PURE__ */ new Set();
  for (const n of Object.values(t))
    for (const r of n)
      e.add(r);
  return e;
}
function Mw(t, e) {
  var n;
  switch ((n = e.update) != null ? n : "document") {
    case "document":
      if (e.createInRange)
        throw new Error(
          `[tiptap error]: Extension "${t}" provides createInRange() but does not use the "changedRanges" decoration update strategy.`
        );
      return;
    case "changedRanges":
      if (!e.createInRange)
        throw new Error(
          `[tiptap error]: Extension "${t}" uses the "changedRanges" decoration update strategy but does not provide createInRange().`
        );
      return;
    case "manual":
      if (e.createInRange)
        throw new Error(
          `[tiptap error]: Extension "${t}" uses the "manual" decoration update strategy, which is not compatible with createInRange(). createInRange() requires the "changedRanges" strategy.`
        );
      if (e.shouldUpdate)
        throw new Error(
          `[tiptap error]: Extension "${t}" cannot combine the "manual" decoration update strategy with shouldUpdate().`
        );
      return;
    default:
      throw new Error(
        `[tiptap error]: Extension "${t}" uses an unknown decoration update strategy. Expected "document", "changedRanges", or "manual".`
      );
  }
}
function Ew(t, e, n) {
  return n ? !0 : t.update === "manual" ? !1 : t.shouldUpdate ? t.shouldUpdate(e) : e.tr.docChanged;
}
var Lw = /* @__PURE__ */ new Set(), Ow = class {
  constructor(t) {
    this.warnedWidgetKeys = /* @__PURE__ */ new Set(), this.warnedOutOfRangeExtensions = /* @__PURE__ */ new Set(), this.handleBeforeTransaction = ({ nextState: e }) => {
      const n = Jn.getState(e);
      n && this.warnDuplicateWidgetKeys(n);
    }, this.editor = t.editor, this.entries = this.resolveEntries(t.entries), this.entries.forEach(({ name: e, spec: n }) => Mw(e, n)), this.plugin = this.entries.length > 0 ? this.createPlugin() : null, this.editor.on("beforeTransaction", this.handleBeforeTransaction);
  }
  destroy() {
    this.editor.off("beforeTransaction", this.handleBeforeTransaction);
  }
  /**
   * Returns the set of live widget keys from all decoration extensions.
   * @returns A readonly set of widget keys
   */
  liveWidgetKeys() {
    var t, e;
    return (e = (t = Jn.getState(this.editor.state)) == null ? void 0 : t.widgetKeys) != null ? e : Lw;
  }
  /**
   * The mounted editor view, or `null` when destroyed. Decoration callbacks
   * must never receive the placeholder view `editor.view` falls back to.
   * @returns The mounted editor view, or `null`
   */
  get mountedView() {
    return this.editor.isDestroyed ? null : this.editor.view;
  }
  /**
   * Resolves decoration entries by calling the addDecorations function for each extension entry.
   * @param entries The decoration manager entries to resolve
   * @returns An array of resolved decoration entries
   */
  resolveEntries(t) {
    const e = [];
    for (const { name: n, addDecorations: r } of t) {
      const i = r();
      i && e.push({ name: n, spec: i });
    }
    return e;
  }
  /**
   * Creates the ProseMirror plugin for managing decorations.
   * @returns A ProseMirror plugin with state management
   */
  createPlugin() {
    const { editor: t, entries: e } = this;
    return new re({
      key: Jn,
      state: {
        init: (n, r) => {
          const i = {}, o = {};
          for (const { name: l, spec: a } of e) {
            const { set: c, widgetKeys: d } = this.buildFullSet(l, a, r);
            i[l] = c, o[l] = d;
          }
          const s = {
            decorationSetsByExtension: i,
            widgetKeysByExtension: o,
            mergedDecorationSet: this.buildMergedSet(r.doc, i),
            widgetKeys: Ud(o)
          };
          return this.warnDuplicateWidgetKeys(s), s;
        },
        apply: (n, r, i, o) => {
          const s = n.getMeta(Jn), l = s?.type === "force" && !s.name, a = s?.type === "force" ? s.name : void 0, c = {}, d = {}, u = /* @__PURE__ */ new Set();
          if (gw(t, () => {
            for (const { name: h, spec: p } of e) {
              const m = l || a === h;
              if (Ew(
                p,
                { editor: t, tr: n, oldState: i, newState: o },
                m
              ))
                if (p.update === "changedRanges" && n.docChanged && !m) {
                  const y = this.applyChangedRangesRecompute(h, p, r, n, o);
                  c[h] = y.set, d[h] = y.widgetKeys, u.add(h);
                } else {
                  const { set: y, widgetKeys: b } = this.buildFullSet(h, p, o);
                  c[h] = y, d[h] = b, u.add(h);
                }
              else {
                const y = Tw(h, r, n);
                c[h] = y.set, d[h] = y.widgetKeys;
              }
            }
          }), u.size === 0 && !n.docChanged)
            return r;
          const f = this.mergeAfterApply({
            entries: e,
            previous: r,
            tr: n,
            decorationSetsByExtension: c,
            recomputedNames: u
          });
          return {
            decorationSetsByExtension: c,
            widgetKeysByExtension: d,
            mergedDecorationSet: f,
            widgetKeys: Ud(d)
          };
        }
      },
      props: {
        decorations(n) {
          var r, i;
          return (i = (r = Jn.getState(n)) == null ? void 0 : r.mergedDecorationSet) != null ? i : Z.empty;
        }
      }
    });
  }
  /**
   * Applies changed ranges recomputation to a decoration set, dropping stale decorations and rebuilding only the touched blocks.
   * @param name The name of the decoration extension
   * @param spec The decoration spec
   * @param previous The previous decoration manager state
   * @param tr The transaction to apply
   * @param newState The new editor state
   * @returns The updated decoration set and widget keys
   */
  applyChangedRangesRecompute(t, e, n, r, i) {
    const o = Aw(r, i.doc);
    return o.type === "full" ? this.buildFullSet(t, e, i) : this.rebuildRanges(t, e, n, r, i, o.ranges);
  }
  /**
   * Rebuilds decorations for the changed block ranges: maps the previous set
   * forward, then for each range removes stale decorations, calls
   * `createInRange`, and adds the new ones while syncing widget keys.
   * @param name The extension name.
   * @param spec The decoration spec.
   * @param previous The previous decoration manager state.
   * @param tr The transaction to apply.
   * @param newState The new editor state.
   * @param ranges The block ranges to rebuild.
   * @returns The updated decoration set and widget keys.
   */
  rebuildRanges(t, e, n, r, i, o) {
    var s, l;
    const a = (s = n.decorationSetsByExtension[t]) != null ? s : Z.empty, c = new Set((l = n.widgetKeysByExtension[t]) != null ? l : []);
    let d = Bp(a, r.mapping, r.doc, c);
    const u = i.doc.content.size;
    for (const { from: f, to: h } of o) {
      const p = d.find(f, h).filter((b) => Pp({ position: b.from, from: f, to: h, docSize: u }));
      for (const b of p) {
        const w = zp(b);
        w && c.delete(w);
      }
      d = d.remove(p);
      const m = kw({
        decorations: this.runCreate(
          t,
          "createInRange",
          () => e.createInRange({
            editor: this.editor,
            state: i,
            view: this.mountedView,
            from: f,
            to: h
          })
        ),
        from: f,
        to: h,
        docSize: u,
        extensionName: t,
        warnedExtensions: this.warnedOutOfRangeExtensions
      }), { decorations: g, widgetKeys: y } = Dp(
        m,
        t
      );
      d = d.add(i.doc, g);
      for (const b of y)
        c.add(b);
    }
    return { set: d, widgetKeys: c };
  }
  /**
   * Builds a full decoration set for the entire document.
   * @param name The name of the decoration extension
   * @param spec The decoration spec
   * @param state The editor state
   * @returns The decoration set and widget keys
   */
  buildFullSet(t, e, n) {
    const r = this.runCreate(
      t,
      "create",
      () => e.create({
        editor: this.editor,
        state: n,
        view: this.mountedView
      })
    );
    return ww(n.doc, r, t);
  }
  /**
   * Runs a decoration callback and swallows anything it throws. These run inside
   * `state.apply`, where an uncaught error would abort the whole transaction.
   * @param name The extension name.
   * @param method The callback name, used in the error message.
   * @param create The callback to run.
   * @returns The decorations, or an empty array if the callback threw.
   */
  runCreate(t, e, n) {
    try {
      return n();
    } catch (r) {
      return console.error(
        `[tiptap error]: Extension "${t}" threw in \`addDecorations().${e}()\`. Its decorations were dropped for this update.`,
        r
      ), [];
    }
  }
  warnDuplicateWidgetKeys(t) {
    if (!_p)
      return;
    if (t.widgetKeys.size === 0) {
      this.warnedWidgetKeys.clear();
      return;
    }
    const e = xw(t.mergedDecorationSet), n = new Set(e.map(({ key: r }) => r));
    for (const { key: r, extensions: i } of e) {
      if (this.warnedWidgetKeys.has(r))
        continue;
      const o = Array.from(i).map((s) => `"${s}"`).join(", ");
      console.warn(
        `[tiptap warn]: Duplicate widget decoration key "${r}" in extension${i.size === 1 ? "" : "s"} ${o}. Widget decoration keys must be globally unique, otherwise ProseMirror misplaces the widget DOM. Use a stable, unique key (e.g. \`comment-\${id}\`).`
      );
    }
    this.warnedWidgetKeys = n;
  }
  /**
   * Builds the merged DecorationSet during init. Skips the merge for a
   * single extension since its per-extension set is already correct.
   * @param doc The document to build the merged set for.
   * @param decorationSetsByExtension The per-extension decoration sets.
   * @returns The merged decoration set.
   */
  buildMergedSet(t, e) {
    const n = Object.keys(e);
    return n.length === 1 ? e[n[0]] : Fd(t, e);
  }
  /**
   * Computes the merged DecorationSet after apply. Single extension skips the
   * merge; nothing recomputed maps the previous merged set forward; otherwise
   * the merge is rebuilt from the per-extension sets.
   */
  mergeAfterApply({
    entries: t,
    previous: e,
    tr: n,
    decorationSetsByExtension: r,
    recomputedNames: i
  }) {
    return t.length === 1 ? r[t[0].name] : i.size === 0 ? e.mergedDecorationSet.map(n.mapping, n.doc) : Fd(n.doc, r);
  }
};
function Hw(t, e) {
  const { selection: n } = t, { $from: r } = n;
  if (n instanceof z) {
    const o = r.index();
    return r.parent.canReplaceWith(o, o + 1, e);
  }
  let i = r.depth;
  for (; i >= 0; ) {
    const o = r.index(i);
    if (r.node(i).contentMatchAt(o).matchType(e))
      return !0;
    i -= 1;
  }
  return !1;
}
function Rw(t, e, n) {
  const r = document.querySelector("style[data-tiptap-style]");
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute("data-tiptap-style", ""), i.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(i), i;
}
function vr(t, e) {
  const n = t.getAttribute("style");
  if (!n)
    return null;
  const r = n.split(";").map((o) => o.trim()).filter(Boolean), i = e.toLowerCase();
  for (let o = r.length - 1; o >= 0; o -= 1) {
    const s = r[o], l = s.indexOf(":");
    if (l === -1)
      continue;
    if (s.slice(0, l).trim().toLowerCase() === i)
      return s.slice(l + 1).trim();
  }
  return null;
}
function Vw(t) {
  return typeof t == "number";
}
function Nw(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function Hi(t) {
  return Nw(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
var Iw = {};
Ga(Iw, {
  createAtomBlockMarkdownSpec: () => _w,
  createBlockMarkdownSpec: () => Dw,
  createInlineMarkdownSpec: () => $w,
  parseAttributes: () => tc,
  parseIndentedBlocks: () => Fl,
  renderNestedMarkdownContent: () => rc,
  serializeAttributes: () => nc
});
function tc(t) {
  if (!t?.trim())
    return {};
  const e = {}, n = [], r = t.replace(/["']([^"']*)["']/g, (c) => (n.push(c), `__QUOTED_${n.length - 1}__`)), i = r.match(/(?:^|\s)\.([\w-]+)/g);
  if (i) {
    const c = i.map((d) => d.trim().slice(1));
    e.class = c.join(" ");
  }
  const o = r.match(/(?:^|\s)#([\w-]+)/);
  o && (e.id = o[1]);
  const s = /([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g;
  Array.from(r.matchAll(s)).forEach(([, c, d]) => {
    var u;
    const f = parseInt(((u = d.match(/__QUOTED_(\d+)__/)) == null ? void 0 : u[1]) || "0", 10), h = n[f];
    h && (e[c] = h.slice(1, -1));
  });
  const a = r.replace(/(?:^|\s)\.([\w-]+)/g, "").replace(/(?:^|\s)#([\w-]+)/g, "").replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "").trim();
  return a && a.split(/\s+/).filter(Boolean).forEach((d) => {
    d.match(/^[a-zA-Z][\w-]*$/) && (e[d] = !0);
  }), e;
}
function nc(t) {
  if (!t || Object.keys(t).length === 0)
    return "";
  const e = [];
  return t.class && String(t.class).split(/\s+/).filter(Boolean).forEach((r) => e.push(`.${r}`)), t.id && e.push(`#${t.id}`), Object.entries(t).forEach(([n, r]) => {
    n === "class" || n === "id" || (r === !0 ? e.push(n) : r !== !1 && r != null && e.push(`${n}="${String(r)}"`));
  }), e.join(" ");
}
function _w(t) {
  const {
    nodeName: e,
    name: n,
    parseAttributes: r = tc,
    serializeAttributes: i = nc,
    defaultAttributes: o = {},
    requiredAttributes: s = [],
    allowedAttributes: l
  } = t, a = n || e, c = (d) => {
    if (!l)
      return d;
    const u = {};
    return l.forEach((f) => {
      f in d && (u[f] = d[f]);
    }), u;
  };
  return {
    parseMarkdown: (d, u) => {
      const f = { ...o, ...d.attributes };
      return u.createNode(e, f, []);
    },
    markdownTokenizer: {
      name: e,
      level: "block",
      start(d) {
        var u;
        const f = new RegExp(`^:::${a}(?:\\s|$)`, "m"), h = (u = d.match(f)) == null ? void 0 : u.index;
        return h !== void 0 ? h : -1;
      },
      tokenize(d, u, f) {
        const h = new RegExp(`^:::${a}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`), p = d.match(h);
        if (!p)
          return;
        const m = p[1] || "", g = r(m);
        if (!s.find((b) => !(b in g)))
          return {
            type: e,
            raw: p[0],
            attributes: g
          };
      }
    },
    renderMarkdown: (d) => {
      const u = c(d.attrs || {}), f = i(u), h = f ? ` {${f}}` : "";
      return `:::${a}${h} :::`;
    }
  };
}
function Dw(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: i = tc,
    serializeAttributes: o = nc,
    defaultAttributes: s = {},
    content: l = "block",
    allowedAttributes: a
  } = t, c = n || e, d = (u) => {
    if (!a)
      return u;
    const f = {};
    return a.forEach((h) => {
      h in u && (f[h] = u[h]);
    }), f;
  };
  return {
    parseMarkdown: (u, f) => {
      let h;
      if (r) {
        const m = r(u);
        h = typeof m == "string" ? [{ type: "text", text: m }] : m;
      } else l === "block" ? h = f.parseChildren(u.tokens || []) : h = f.parseInline(u.tokens || []);
      const p = { ...s, ...u.attributes };
      return f.createNode(e, p, h);
    },
    markdownTokenizer: {
      name: e,
      level: "block",
      start(u) {
        var f;
        const h = new RegExp(`^:::${c}`, "m"), p = (f = u.match(h)) == null ? void 0 : f.index;
        return p !== void 0 ? p : -1;
      },
      tokenize(u, f, h) {
        var p;
        const m = new RegExp(`^:::${c}(?:\\s+\\{([^}]*)\\})?\\s*\\n`), g = u.match(m);
        if (!g)
          return;
        const [y, b = ""] = g, w = i(b);
        let v = 1;
        const x = y.length;
        let k = "";
        const S = /^:::([\w-]*)(\s.*)?/gm, C = u.slice(x);
        for (S.lastIndex = 0; ; ) {
          const E = S.exec(C);
          if (E === null)
            break;
          const _ = E.index, I = E[1];
          if (!((p = E[2]) != null && p.endsWith(":::"))) {
            if (I)
              v += 1;
            else if (v -= 1, v === 0) {
              const B = C.slice(0, _);
              k = B.trim();
              const F = u.slice(0, x + _ + E[0].length);
              let j = [];
              if (k)
                if (l === "block")
                  for (j = h.blockTokens(B), j.forEach((K) => {
                    K.text && (!K.tokens || K.tokens.length === 0) && (K.tokens = h.inlineTokens(K.text));
                  }); j.length > 0; ) {
                    const K = j[j.length - 1];
                    if (K.type === "paragraph" && (!K.text || K.text.trim() === ""))
                      j.pop();
                    else
                      break;
                  }
                else
                  j = h.inlineTokens(k);
              return {
                type: e,
                raw: F,
                attributes: w,
                content: k,
                tokens: j
              };
            }
          }
        }
      }
    },
    renderMarkdown: (u, f) => {
      const h = d(u.attrs || {}), p = o(h), m = p ? ` {${p}}` : "", g = f.renderChildren(u.content || [], `

`);
      return `:::${c}${m}

${g}

:::`;
    }
  };
}
function Pw(t) {
  if (!t.trim())
    return {};
  const e = {}, n = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
  let r = n.exec(t);
  for (; r !== null; ) {
    const [, i, o, s] = r;
    e[i] = o || s, r = n.exec(t);
  }
  return e;
}
function zw(t) {
  return Object.entries(t).filter(([, e]) => e != null).map(([e, n]) => `${e}="${n}"`).join(" ");
}
function $w(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: i = Pw,
    serializeAttributes: o = zw,
    defaultAttributes: s = {},
    selfClosing: l = !1,
    allowedAttributes: a
  } = t, c = n || e, d = (f) => {
    if (!a)
      return f;
    const h = {};
    return a.forEach((p) => {
      const m = typeof p == "string" ? p : p.name, g = typeof p == "string" ? void 0 : p.skipIfDefault;
      if (m in f) {
        const y = f[m];
        if (g !== void 0 && y === g)
          return;
        h[m] = y;
      }
    }), h;
  }, u = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return {
    parseMarkdown: (f, h) => {
      const p = { ...s, ...f.attributes };
      if (l)
        return h.createNode(e, p);
      const m = r ? r(f) : f.content || "";
      return m ? h.createNode(e, p, [h.createTextNode(m)]) : h.createNode(e, p, []);
    },
    markdownTokenizer: {
      name: e,
      level: "inline",
      start(f) {
        const h = l ? new RegExp(`\\[${u}\\s*[^\\]]*\\]`) : new RegExp(`\\[${u}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${u}\\]`), p = f.match(h), m = p?.index;
        return m !== void 0 ? m : -1;
      },
      tokenize(f, h, p) {
        const m = l ? new RegExp(`^\\[${u}\\s*([^\\]]*)\\]`) : new RegExp(
          `^\\[${u}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${u}\\]`
        ), g = f.match(m);
        if (!g)
          return;
        let y = "", b = "";
        if (l) {
          const [, v] = g;
          b = v;
        } else {
          const [, v, x] = g;
          b = v, y = x || "";
        }
        const w = i(b.trim());
        return {
          type: e,
          raw: g[0],
          content: y.trim(),
          attributes: w
        };
      }
    },
    renderMarkdown: (f) => {
      let h = "";
      r ? h = r(f) : f.content && f.content.length > 0 && (h = f.content.filter((y) => y.type === "text").map((y) => y.text).join(""));
      const p = d(f.attrs || {}), m = o(p), g = m ? ` ${m}` : "";
      return l ? `[${c}${g}]` : `[${c}${g}]${h}[/${c}]`;
    }
  };
}
function Fl(t, e, n) {
  var r, i, o, s;
  const l = t.split(`
`), a = [];
  let c = "", d = 0;
  const u = e.baseIndentSize || 2;
  for (; d < l.length; ) {
    const f = l[d], h = f.match(e.itemPattern);
    if (!h) {
      if (a.length > 0)
        break;
      if (f.trim() === "") {
        d += 1, c = `${c}${f}
`;
        continue;
      } else
        return;
    }
    const p = e.extractItemData(h), { indentLevel: m, mainContent: g } = p;
    c = `${c}${f}
`;
    const y = [g];
    for (d += 1; d < l.length; ) {
      const x = l[d];
      if (x.trim() === "") {
        const S = l.slice(d + 1).findIndex((_) => _.trim() !== "");
        if (S === -1)
          break;
        if ((((i = (r = l[d + 1 + S].match(/^(\s*)/)) == null ? void 0 : r[1]) == null ? void 0 : i.length) || 0) > m) {
          y.push(x), c = `${c}${x}
`, d += 1;
          continue;
        } else
          break;
      }
      if ((((s = (o = x.match(/^(\s*)/)) == null ? void 0 : o[1]) == null ? void 0 : s.length) || 0) > m)
        y.push(x), c = `${c}${x}
`, d += 1;
      else
        break;
    }
    let b;
    const w = y.slice(1);
    if (w.length > 0) {
      const x = w.map((k) => k.slice(m + u)).join(`
`);
      x.trim() && (e.customNestedParser ? b = e.customNestedParser(x) : b = n.blockTokens(x));
    }
    const v = e.createToken(p, b);
    a.push(v);
  }
  if (a.length !== 0)
    return {
      items: a,
      raw: c
    };
}
function rc(t, e, n, r) {
  if (!t || !Array.isArray(t.content))
    return "";
  const i = typeof n == "function" ? n(r) : n, [o, ...s] = t.content, l = e.renderChildren([o]);
  let a = `${i}${l}`;
  return s && s.length > 0 && s.forEach((c, d) => {
    var u, f;
    const h = (f = (u = e.renderChild) == null ? void 0 : u.call(e, c, d + 1)) != null ? f : e.renderChildren([c]);
    if (h != null) {
      const p = h.split(`
`).map((m) => m ? e.indent(m) : e.indent("")).join(`
`);
      a += c.type === "paragraph" ? `

${p}` : `
${p}`;
    }
  }), a;
}
function Fp(t, e) {
  const n = { ...t };
  return Hi(t) && Hi(e) && Object.keys(e).forEach((r) => {
    Hi(e[r]) && Hi(t[r]) ? n[r] = Fp(t[r], e[r]) : n[r] = e[r];
  }), n;
}
function Bw(t, e, n = {}) {
  const { state: r } = e, { doc: i, tr: o } = r, s = t;
  i.descendants((l, a) => {
    const c = o.mapping.map(a), d = o.mapping.map(a) + l.nodeSize;
    let u = null;
    if (l.marks.forEach((h) => {
      if (h !== s)
        return !1;
      u = h;
    }), !u)
      return;
    let f = !1;
    if (Object.keys(n).forEach((h) => {
      n[h] !== u.attrs[h] && (f = !0);
    }), f) {
      const h = t.type.create({
        ...t.attrs,
        ...n
      });
      o.removeMark(c, d, t.type), o.addMark(c, d, h);
    }
  }), o.docChanged && e.view.dispatch(o);
}
var Ci = class {
  constructor(t) {
    var e;
    this.find = t.find, this.handler = t.handler, this.undoable = (e = t.undoable) != null ? e : !0;
  }
}, Fw = (t, e) => {
  if (Ja(e))
    return e.exec(t);
  const n = e(t);
  if (!n)
    return null;
  const r = [n.text];
  return r.index = n.index, r.input = t, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn(
    '[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'
  ), r.push(n.replaceWith)), r;
};
function Ri(t) {
  var e;
  const { editor: n, from: r, to: i, text: o, rules: s, plugin: l } = t, { view: a } = n;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(r);
  if (
    // check for code node
    c.parent.type.spec.code || (e = c.nodeBefore || c.nodeAfter) != null && e.marks.find((f) => f.type.spec.code)
  )
    return !1;
  let d = !1;
  const u = zv(c) + o;
  return s.forEach((f) => {
    if (d)
      return;
    const h = Fw(u, f.find);
    if (!h)
      return;
    const p = h[0].length - o.length;
    if (p > 0) {
      const k = c.parentOffset - p;
      if (k < 0 || c.parent.textBetween(k, c.parentOffset) !== h[0].slice(0, p))
        return;
    }
    const m = a.state.tr, g = fs({
      state: a.state,
      transaction: m
    }), y = {
      from: r - (h[0].length - o.length),
      to: i
    }, { commands: b, chain: w, can: v } = new rr({
      editor: n,
      state: g
    });
    f.handler({
      state: g,
      range: y,
      match: h,
      commands: b,
      chain: w,
      can: v
    }) === null || !m.steps.length || (f.undoable && m.setMeta(l, {
      transform: m,
      from: r,
      to: i,
      text: o
    }), a.dispatch(m), d = !0);
  }), d;
}
function Uw(t) {
  const { editor: e, rules: n } = t, r = new re({
    state: {
      init() {
        return null;
      },
      apply(i, o, s) {
        const l = i.getMeta(r);
        if (l)
          return l;
        const a = i.getMeta("applyInputRules");
        return !!a && setTimeout(() => {
          let { text: d } = a;
          typeof d == "string" ? d = d : d = Za(A.from(d), s.schema);
          const { from: u } = a, f = u + d.length;
          Ri({
            editor: e,
            from: u,
            to: f,
            text: d,
            rules: n,
            plugin: r
          });
        }), i.selectionSet || i.docChanged ? null : o;
      }
    },
    props: {
      handleTextInput(i, o, s, l) {
        return Ri({
          editor: e,
          from: o,
          to: s,
          text: l,
          rules: n,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: o } = i.state.selection;
          o && Ri({
            editor: e,
            from: o.pos,
            to: o.pos,
            text: "",
            rules: n,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, o) {
        if (o.key !== "Enter")
          return !1;
        const { $cursor: s } = i.state.selection;
        return s ? Ri({
          editor: e,
          from: s.pos,
          to: s.pos,
          text: `
`,
          rules: n,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
var ic = class {
  constructor(t = {}) {
    this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = {
      name: this.name
    }, this.config = {
      ...this.config,
      ...t
    }, this.name = this.config.name;
  }
  get options() {
    return {
      ...Q(
        D(this, "addOptions", {
          name: this.name
        })
      )
    };
  }
  get storage() {
    return {
      ...Q(
        D(this, "addStorage", {
          name: this.name,
          options: this.options
        })
      )
    };
  }
  configure(t = {}) {
    const e = this.extend({
      ...this.config,
      addOptions: () => Fp(this.options, t)
    });
    return e.name = this.name, e.parent = this.parent, this.child = null, e;
  }
  extend(t = {}) {
    const e = new this.constructor({ ...this.config, ...t });
    return e.parent = this, this.child = e, e.name = "name" in t ? t.name : e.parent.name, e;
  }
}, it = class Up extends ic {
  constructor() {
    super(...arguments), this.type = "mark";
  }
  /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Up(n);
  }
  static handleExit({ editor: e, mark: n }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const s = i.marks();
      if (!!!s.find((c) => c?.type.name === n.name))
        return !1;
      const a = s.find((c) => c?.type.name === n.name);
      return a && r.removeStoredMark(a), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, Wp = class {
  constructor(t) {
    this.find = t.find, this.handler = t.handler;
  }
}, Ww = (t, e, n) => {
  if (Ja(e))
    return [...t.matchAll(e)];
  const r = e(t, n);
  return r ? r.map((i) => {
    const o = [i.text];
    return o.index = i.index, o.input = t, o.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn(
      '[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'
    ), o.push(i.replaceWith)), o;
  }) : [];
};
function jw(t) {
  const { editor: e, state: n, from: r, to: i, rule: o, pasteEvent: s, dropEvent: l } = t, { commands: a, chain: c, can: d } = new rr({
    editor: e,
    state: n
  }), u = [];
  return n.doc.nodesBetween(r, i, (h, p) => {
    var m, g, y, b, w;
    if ((g = (m = h.type) == null ? void 0 : m.spec) != null && g.code || !(h.isText || h.isTextblock || h.isInline))
      return;
    const v = (w = (b = (y = h.content) == null ? void 0 : y.size) != null ? b : h.nodeSize) != null ? w : 0, x = Math.max(r, p), k = Math.min(i, p + v);
    if (x >= k)
      return;
    const S = h.isText ? h.text || "" : h.textBetween(x - p, k - p, void 0, "￼");
    Ww(S, o.find, s).forEach((E) => {
      if (E.index === void 0)
        return;
      const _ = x + E.index + 1, I = _ + E[0].length, B = {
        from: n.tr.mapping.map(_),
        to: n.tr.mapping.map(I)
      }, F = o.handler({
        state: n,
        range: B,
        match: E,
        commands: a,
        chain: c,
        can: d,
        pasteEvent: s,
        dropEvent: l
      });
      u.push(F);
    });
  }), u.every((h) => h !== null);
}
var Vi = null, Kw = (t) => {
  var e;
  const n = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = n.clipboardData) == null || e.setData("text/html", t), n;
};
function qw(t) {
  const { editor: e, rules: n } = t;
  let r = null, i = !1, o = !1, s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, l;
  try {
    l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    l = null;
  }
  const a = ({
    state: d,
    from: u,
    to: f,
    rule: h,
    pasteEvt: p
  }) => {
    const m = d.tr, g = fs({
      state: d,
      transaction: m
    });
    if (!(!jw({
      editor: e,
      state: g,
      from: Math.max(u - 1, 0),
      to: f.b - 1,
      rule: h,
      pasteEvent: p,
      dropEvent: l
    }) || !m.steps.length)) {
      try {
        l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        l = null;
      }
      return s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, m;
    }
  };
  return n.map((d) => new re({
    // we register a global drag handler to track the current drag source element
    view(u) {
      const f = (p) => {
        var m;
        r = (m = u.dom.parentElement) != null && m.contains(p.target) ? u.dom.parentElement : null, r && (Vi = e);
      }, h = () => {
        Vi && (Vi = null);
      };
      return window.addEventListener("dragstart", f), window.addEventListener("dragend", h), {
        destroy() {
          window.removeEventListener("dragstart", f), window.removeEventListener("dragend", h);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (u, f) => {
          if (o = r === u.dom.parentElement, l = f, !o) {
            const h = Vi;
            h?.isEditable && setTimeout(() => {
              const p = h.state.selection;
              p && h.commands.deleteRange({
                from: p.from,
                to: p.to
              });
            }, 10);
          }
          return !1;
        },
        paste: (u, f) => {
          var h;
          const p = (h = f.clipboardData) == null ? void 0 : h.getData("text/html");
          return s = f, i = !!p?.includes("data-pm-slice"), !1;
        }
      }
    },
    appendTransaction: (u, f, h) => {
      const p = u[0], m = p.getMeta("uiEvent") === "paste" && !i, g = p.getMeta("uiEvent") === "drop" && !o, y = p.getMeta("applyPasteRules"), b = !!y;
      if (!m && !g && !b)
        return;
      if (b) {
        let { text: x } = y;
        typeof x == "string" ? x = x : x = Za(A.from(x), h.schema);
        const { from: k } = y, S = k + x.length, C = Kw(x);
        return a({
          rule: d,
          state: h,
          from: k,
          to: { b: S },
          pasteEvt: C
        });
      }
      const w = f.doc.content.findDiffStart(h.doc.content), v = f.doc.content.findDiffEnd(h.doc.content);
      if (!(!Vw(w) || !v || w === v.b))
        return a({
          rule: d,
          state: h,
          from: w,
          to: v,
          pasteEvt: s
        });
    }
  }));
}
var bs = class {
  constructor(t, e) {
    this.splittableMarks = [], this.nonClearableMarks = [], this.decorationManager = null, this.editor = e, this.baseExtensions = t, this.extensions = Ya(t), this.schema = Mp(this.extensions, e), this.setupExtensions();
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((t, e) => {
      const n = {
        name: e.name,
        options: e.options,
        storage: this.editor.extensionStorage[e.name],
        editor: this.editor,
        type: jn(e.name, this.schema)
      }, r = D(
        e,
        "addCommands",
        n
      );
      return r ? {
        ...t,
        ...r()
      } : t;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: t } = this, n = _r([...this.extensions].reverse()).flatMap((i) => {
      const o = {
        name: i.name,
        options: i.options,
        storage: this.editor.extensionStorage[i.name],
        editor: t,
        type: jn(i.name, this.schema)
      }, s = [], l = D(
        i,
        "addKeyboardShortcuts",
        o
      );
      let a = {};
      if (i.type === "mark" && D(i, "exitable", o) && (a.ArrowRight = () => it.handleExit({ editor: t, mark: i })), l) {
        const h = Object.fromEntries(
          Object.entries(l()).map(([p, m]) => [p, () => m({ editor: t })])
        );
        a = { ...a, ...h };
      }
      const c = Ib(a);
      s.push(c);
      const d = D(
        i,
        "addInputRules",
        o
      );
      if (zd(i, t.options.enableInputRules) && d) {
        const h = d();
        if (h && h.length) {
          const p = Uw({
            editor: t,
            rules: h
          }), m = Array.isArray(p) ? p : [p];
          s.push(...m);
        }
      }
      const u = D(
        i,
        "addPasteRules",
        o
      );
      if (zd(i, t.options.enablePasteRules) && u) {
        const h = u();
        if (h && h.length) {
          const p = qw({ editor: t, rules: h });
          s.push(...p);
        }
      }
      const f = D(
        i,
        "addProseMirrorPlugins",
        o
      );
      if (f) {
        const h = f();
        s.push(...h);
      }
      return s;
    }), r = this.createDecorationPlugin();
    return r && n.push(r), n;
  }
  /**
   * Aggregates decorations from extensions into a single plugin, or returns null
   * if none exist. Destroys the previous manager to avoid orphaned listeners.
   * @returns A ProseMirror plugin or `null`
   * @example
   * const plugin = editor.extensionManager.createDecorationPlugin()
   */
  createDecorationPlugin() {
    var t;
    const { editor: e } = this;
    (t = this.decorationManager) == null || t.destroy();
    const n = [];
    return this.extensions.forEach((r) => {
      const i = {
        name: r.name,
        options: r.options,
        storage: this.editor.extensionStorage[r.name],
        editor: e,
        type: jn(r.name, this.schema)
      }, o = D(
        r,
        "addDecorations",
        i
      );
      o && n.push({ name: r.name, addDecorations: o });
    }), this.decorationManager = new Ow({ editor: e, entries: n }), this.decorationManager.plugin;
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return Tp(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: t } = this, { nodeExtensions: e } = ur(this.extensions);
    return Object.fromEntries(
      e.filter((n) => !!D(n, "addNodeView")).map((n) => {
        const r = this.attributes.filter(
          (a) => a.type === n.name
        ), i = {
          name: n.name,
          options: n.options,
          storage: this.editor.extensionStorage[n.name],
          editor: t,
          type: ye(n.name, this.schema)
        }, o = D(
          n,
          "addNodeView",
          i
        );
        if (!o)
          return [];
        const s = o();
        if (!s)
          return [];
        const l = (a, c, d, u, f) => {
          const h = fr(a, r);
          return s({
            // pass-through
            node: a,
            view: c,
            getPos: d,
            decorations: u,
            innerDecorations: f,
            // tiptap-specific
            editor: t,
            extension: n,
            HTMLAttributes: h
          });
        };
        return [n.name, l];
      })
    );
  }
  /**
   * Get the composed dispatchTransaction function from all extensions.
   * @param baseDispatch The base dispatch function (e.g. from the editor or user props)
   * @returns A composed dispatch function
   */
  dispatchTransaction(t) {
    const { editor: e } = this;
    return _r([...this.extensions].reverse()).reduceRight((r, i) => {
      const o = {
        name: i.name,
        options: i.options,
        storage: this.editor.extensionStorage[i.name],
        editor: e,
        type: jn(i.name, this.schema)
      }, s = D(
        i,
        "dispatchTransaction",
        o
      );
      return s ? (l) => {
        s.call(o, { transaction: l, next: r });
      } : r;
    }, t);
  }
  /**
   * Get the composed transformPastedHTML function from all extensions.
   * @param baseTransform The base transform function (e.g. from the editor props)
   * @returns A composed transform function that chains all extension transforms
   */
  transformPastedHTML(t) {
    const { editor: e } = this;
    return _r([...this.extensions]).reduce(
      (r, i) => {
        const o = {
          name: i.name,
          options: i.options,
          storage: this.editor.extensionStorage[i.name],
          editor: e,
          type: jn(i.name, this.schema)
        }, s = D(
          i,
          "transformPastedHTML",
          o
        );
        return s ? (l, a) => {
          const c = r(l, a);
          return s.call(o, c);
        } : r;
      },
      t || ((r) => r)
    );
  }
  get markViews() {
    const { editor: t } = this, { markExtensions: e } = ur(this.extensions);
    return Object.fromEntries(
      e.filter((n) => !!D(n, "addMarkView")).map((n) => {
        const r = this.attributes.filter(
          (l) => l.type === n.name
        ), i = {
          name: n.name,
          options: n.options,
          storage: this.editor.extensionStorage[n.name],
          editor: t,
          type: $t(n.name, this.schema)
        }, o = D(
          n,
          "addMarkView",
          i
        );
        if (!o)
          return [];
        const s = (l, a, c) => {
          const d = fr(l, r);
          return o()({
            // pass-through
            mark: l,
            view: a,
            inline: c,
            // tiptap-specific
            editor: t,
            extension: n,
            HTMLAttributes: d,
            updateAttributes: (u) => {
              Bw(l, t, u);
            }
          });
        };
        return [n.name, s];
      })
    );
  }
  /**
   * Destroy the extension manager and clean up all extension references
   * to prevent memory leaks through parent/child extension chains.
   *
   * Walks each extension's full parent chain and nulls every forward
   * `parent.child → current` link where the parent still points to the
   * current node. This breaks the retention path from module-scope
   * singleton roots through deep extend() chains.
   *
   * Only ancestor `.child` links matching the current chain are cleared.
   * The `.parent` pointer on ancestors is never touched — extensions
   * may be shared across live editors, so their own backward references
   * and non-matching forward links must remain intact.
   */
  destroy() {
    var t;
    (t = this.decorationManager) == null || t.destroy(), this.extensions.forEach((e) => {
      let n = e;
      for (; n.parent; ) {
        const r = n.parent;
        r.child === n && (r.child = null), n = r;
      }
    }), this.extensions = [], this.baseExtensions = [], this.decorationManager = null, this.schema = null, this.editor = null;
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    const t = this.extensions;
    this.editor.extensionStorage = Object.fromEntries(
      t.map((e) => [e.name, e.storage])
    ), t.forEach((e) => {
      var n, r;
      const i = {
        name: e.name,
        options: e.options,
        storage: this.editor.extensionStorage[e.name],
        editor: this.editor,
        type: jn(e.name, this.schema)
      };
      e.type === "mark" && (((n = Q(D(e, "keepOnSplit", i))) == null || n) && this.splittableMarks.push(e.name), (r = Q(
        D(e, "clearable", i)
      )) == null || r || this.nonClearableMarks.push(e.name));
      const o = D(
        e,
        "onBeforeCreate",
        i
      ), s = D(e, "onCreate", i), l = D(e, "onUpdate", i), a = D(
        e,
        "onSelectionUpdate",
        i
      ), c = D(
        e,
        "onTransaction",
        i
      ), d = D(e, "onFocus", i), u = D(e, "onBlur", i), f = D(e, "onDestroy", i);
      o && this.editor.on("beforeCreate", o), s && this.editor.on("create", s), l && this.editor.on("update", l), a && this.editor.on("selectionUpdate", a), c && this.editor.on("transaction", c), d && this.editor.on("focus", d), u && this.editor.on("blur", u), f && this.editor.on("destroy", f);
    });
  }
};
bs.resolve = Ya;
bs.sort = _r;
bs.flatten = Xa;
var Gw = {};
Ga(Gw, {
  ClipboardTextSerializer: () => Kp,
  Commands: () => qp,
  Delete: () => Gp,
  Drop: () => Jp,
  Editable: () => Xp,
  FocusEvents: () => Yp,
  Keymap: () => Qp,
  Paste: () => em,
  Tabindex: () => tm,
  TextDirection: () => nm,
  focusEventsPluginKey: () => Zp
});
var J = class jp extends ic {
  constructor() {
    super(...arguments), this.type = "extension";
  }
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new jp(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, Kp = J.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new re({
        key: new se("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t } = this, { state: e, schema: n } = t, { doc: r, selection: i } = e, o = Qa(n), { blockSeparator: s } = this.options, l = {
              ...s !== void 0 ? { blockSeparator: s } : {},
              textSerializers: o
            };
            return [...i.ranges].sort((c, d) => c.$from.pos - d.$from.pos).map(
              ({ $from: c, $to: d }) => Ep(r, { from: c.pos, to: d.pos }, l)
            ).join(s ?? `

`);
          }
        }
      })
    ];
  }
}), qp = J.create({
  name: "commands",
  addCommands() {
    return {
      ...mp
    };
  }
}), Gp = J.create({
  name: "delete",
  onUpdate({ transaction: t, appendedTransactions: e }) {
    var n, r, i;
    const o = () => {
      var s, l, a, c;
      if ((c = (a = (l = (s = this.editor.options.coreExtensionOptions) == null ? void 0 : s.delete) == null ? void 0 : l.filterTransaction) == null ? void 0 : a.call(l, t)) != null ? c : t.getMeta("y-sync$"))
        return;
      const d = Cp(t.before, [
        t,
        ...e
      ]);
      ys(d).forEach((h) => {
        d.mapping.mapResult(h.oldRange.from).deletedAfter && d.mapping.mapResult(h.oldRange.to).deletedBefore && d.before.nodesBetween(
          h.oldRange.from,
          h.oldRange.to,
          (p, m) => {
            const g = m + p.nodeSize - 2, y = h.oldRange.from <= m && g <= h.oldRange.to;
            this.editor.emit("delete", {
              type: "node",
              node: p,
              from: m,
              to: g,
              newFrom: d.mapping.map(m),
              newTo: d.mapping.map(g),
              deletedRange: h.oldRange,
              newRange: h.newRange,
              partial: !y,
              editor: this.editor,
              transaction: t,
              combinedTransform: d
            });
          }
        );
      });
      const f = d.mapping;
      d.steps.forEach((h, p) => {
        var m, g;
        if (h instanceof Qe) {
          const y = f.slice(p).map(h.from, -1), b = f.slice(p).map(h.to), w = f.invert().map(y, -1), v = f.invert().map(b), x = y > 0 ? (m = d.doc.nodeAt(y - 1)) == null ? void 0 : m.marks.some((S) => S.eq(h.mark)) : !1, k = (g = d.doc.nodeAt(b)) == null ? void 0 : g.marks.some((S) => S.eq(h.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: h.mark,
            from: h.from,
            to: h.to,
            deletedRange: {
              from: w,
              to: v
            },
            newRange: {
              from: y,
              to: b
            },
            partial: !!(k || x),
            editor: this.editor,
            transaction: t,
            combinedTransform: d
          });
        }
      });
    };
    (i = (r = (n = this.editor.options.coreExtensionOptions) == null ? void 0 : n.delete) == null ? void 0 : r.async) == null || i ? setTimeout(o, 0) : o();
  }
}), Jp = J.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new re({
        key: new se("tiptapDrop"),
        props: {
          handleDrop: (t, e, n, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: n,
              moved: r
            });
          }
        }
      })
    ];
  }
}), Xp = J.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new re({
        key: new se("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Zp = new se("focusEvents"), Yp = J.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new re({
        key: Zp,
        props: {
          handleDOMEvents: {
            focus: (e, n) => {
              t.isFocused = !0;
              const r = t.state.tr.setMeta("focus", { event: n }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, n) => {
              t.isFocused = !1;
              const r = t.state.tr.setMeta("blur", { event: n }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), Qp = J.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: s }) => [
      () => s.undoInputRule(),
      // maybe convert first text block node to default node
      () => s.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: d, $anchor: u } = a, { pos: f, parent: h } = u, p = u.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : u, m = p.parent.type.spec.isolating, g = u.pos - u.parentOffset, y = m && p.parent.childCount === 1 ? g === u.pos : $.atStart(c).from === f;
        return !d || !h.type.isTextblock || h.textContent.length || !y || y && u.parent.type.name === "paragraph" ? !1 : s.clearNodes();
      }),
      () => s.deleteSelection(),
      () => s.joinBackward(),
      () => s.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: s }) => [
      () => s.deleteSelection(),
      () => s.deleteCurrentNode(),
      () => s.joinForward(),
      () => s.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: s }) => [
        () => s.newlineInCode(),
        () => s.createParagraphNear(),
        () => s.liftEmptyBlock(),
        () => s.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: t,
      "Mod-Backspace": t,
      "Shift-Backspace": t,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, o = {
      ...r,
      "Ctrl-h": t,
      "Alt-Backspace": t,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return oi() || xp() ? o : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new re({
        key: new se("clearDocument"),
        appendTransaction: (t, e, n) => {
          if (t.some((m) => m.getMeta("composition")))
            return;
          const r = t.some((m) => m.docChanged) && !e.doc.eq(n.doc), i = t.some(
            (m) => m.getMeta("preventClearDocument")
          );
          if (!r || i)
            return;
          const { empty: o, from: s, to: l } = e.selection, a = $.atStart(e.doc).from, c = $.atEnd(e.doc).to;
          if (o || !(s === a && l === c) || !Si(n.doc))
            return;
          const f = n.tr, h = fs({
            state: n,
            transaction: f
          }), { commands: p } = new rr({
            editor: this.editor,
            state: h
          });
          if (p.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), em = J.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new re({
        key: new se("tiptapPaste"),
        props: {
          handlePaste: (t, e, n) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: n
            });
          }
        }
      })
    ];
  }
}), tm = J.create({
  name: "tabindex",
  addOptions() {
    return {
      value: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new re({
        key: new se("tabindex"),
        props: {
          attributes: () => {
            var t;
            return !this.editor.isEditable && this.options.value === void 0 ? {} : { tabindex: (t = this.options.value) != null ? t : "0" };
          }
        }
      })
    ];
  }
}), nm = J.create({
  name: "textDirection",
  addOptions() {
    return {
      direction: void 0
    };
  },
  addGlobalAttributes() {
    if (!this.options.direction)
      return [];
    const { nodeExtensions: t } = ur(this.extensions);
    return [
      {
        types: t.filter((e) => e.name !== "text").map((e) => e.name),
        attributes: {
          dir: {
            default: this.options.direction,
            parseHTML: (e) => {
              const n = e.getAttribute("dir");
              return n && (n === "ltr" || n === "rtl" || n === "auto") ? n : this.options.direction;
            },
            renderHTML: (e) => e.dir ? {
              dir: e.dir
            } : {}
          }
        }
      }
    ];
  },
  addProseMirrorPlugins() {
    return [
      new re({
        key: new se("textDirection"),
        props: {
          attributes: () => {
            const t = this.options.direction;
            return t ? {
              dir: t
            } : {};
          }
        }
      })
    ];
  }
}), Wd = !1;
function Jw(t) {
  if (Wd)
    return;
  Wd = !0;
  let e;
  try {
    e = me.fromJSON(t, { from: 0, to: 0 }).slice.content;
  } catch {
    return;
  }
  e instanceof A || console.warn(
    "[tiptap warn]: prosemirror-model is loaded more than once. Wrapping and splitting nodes will fail. Deduplicate it in your lock file, or alias it to a single copy in your bundler."
  );
}
var Xw = class Or {
  constructor(e, n, r = !1, i = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = n, this.currentNode = i;
  }
  get name() {
    return this.node.type.name;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) != null ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let n = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(
          `You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`
        );
        return;
      }
      n = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: n, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), n = this.resolvedPos.doc.resolve(e);
    return new Or(n, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new Or(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new Or(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((n, r) => {
      const i = n.isBlock && !n.isTextblock, o = n.isAtom && !n.isText, s = n.isInline, l = this.pos + r + (o ? 0 : 1);
      if (l < 0 || l > this.resolvedPos.doc.nodeSize - 2)
        return;
      const a = this.resolvedPos.doc.resolve(l);
      if (!i && !s && a.depth <= this.depth)
        return;
      const c = new Or(
        a,
        this.editor,
        i,
        i || s ? n : null
      );
      i && (c.actualDepth = this.depth + 1), e.push(c);
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, n = {}) {
    let r = null, i = this.parent;
    for (; i && !r; ) {
      if (i.node.type.name === e)
        if (Object.keys(n).length > 0) {
          const o = i.node.attrs, s = Object.keys(n);
          for (let l = 0; l < s.length; l += 1) {
            const a = s[l];
            if (o[a] !== n[a])
              break;
          }
        } else
          r = i;
      i = i.parent;
    }
    return r;
  }
  querySelector(e, n = {}) {
    return this.querySelectorAll(e, n, !0)[0] || null;
  }
  querySelectorAll(e, n = {}, r = !1) {
    let i = [];
    if (!this.children || this.children.length === 0)
      return i;
    const o = Object.keys(n);
    return this.children.forEach((s) => {
      r && i.length > 0 || (s.node.type.name === e && o.every(
        (a) => n[a] === s.node.attrs[a]
      ) && i.push(s), !(r && i.length > 0) && (i = i.concat(s.querySelectorAll(e, n, r))));
    }), i;
  }
  setAttribute(e) {
    const { tr: n } = this.editor.state;
    n.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...e
    }), this.editor.view.dispatch(n);
  }
}, Zw = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}`, Yw = class extends bw {
  constructor(e = {}) {
    super(), this.css = null, this.className = "tiptap", this.editorView = null, this.isFocused = !1, this.destroyed = !1, this.isInitialized = !1, this.extensionStorage = {}, this.instanceId = Math.random().toString(36).slice(2, 9), this.hasWarnedStaleDecorationRead = !1, this.options = {
      element: typeof document < "u" ? document.createElement("div") : null,
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      textDirection: void 0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      emitContentError: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onMount: () => null,
      onUnmount: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: r }) => {
        throw r;
      },
      onPaste: () => null,
      onDrop: () => null,
      onDelete: () => null,
      enableExtensionDispatchTransaction: !0
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.utils = {
      getUpdatedPosition: Wv,
      createMappablePosition: jv
    }, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("mount", this.options.onMount), this.on("unmount", this.options.onUnmount), this.on("contentError", this.options.onContentError), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: r, slice: i, moved: o }) => this.options.onDrop(r, i, o)), this.on("paste", ({ event: r, slice: i }) => this.options.onPaste(r, i)), this.on("delete", this.options.onDelete);
    const n = this.createDoc();
    if (!this.editorState) {
      const r = Pl(n, this.options.autofocus);
      this.editorState = wn.create({
        doc: n,
        schema: this.schema,
        selection: r || void 0
      });
    }
    Jw(this.schema), this.options.element && this.mount(this.options.element);
  }
  /**
   * Attach the editor to the DOM, creating a new editor view.
   */
  mount(e) {
    if (typeof document > "u")
      throw new Error(
        "[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment."
      );
    this.createView(e), this.emit("mount", { editor: this }), this.css && !document.head.contains(this.css) && document.head.appendChild(this.css), window.setTimeout(() => {
      this.isDestroyed || (this.options.autofocus !== !1 && this.options.autofocus !== null && this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
   * Remove the editor from the DOM, but still allow remounting at a different point in time
   */
  unmount() {
    if (this.editorView) {
      this.editorState = this.editorView.state;
      const e = this.editorView.dom;
      e?.editor && delete e.editor, this.editorView.destroy();
    }
    if (this.editorView = null, this.isInitialized = !1, this.css && !document.querySelectorAll(`.${this.className}`).length)
      try {
        typeof this.css.remove == "function" ? this.css.remove() : this.css.parentNode && this.css.parentNode.removeChild(this.css);
      } catch (e) {
        console.warn("Failed to remove CSS element:", e);
      }
    this.css = null, this.emit("unmount", { editor: this });
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager ? this.commandManager.chain() : rr.createFakeChain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager ? this.commandManager.can() : rr.createFallbackCan();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && typeof document < "u" && (this.css = Rw(Zw, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.editorView || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, n = !0) {
    this.setOptions({ editable: e }), n && this.emit("update", { editor: this, transaction: this.state.tr, appendedTransactions: [] });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor view.
   */
  get view() {
    return this.editorView ? this.editorView : new Proxy(
      {
        state: this.editorState,
        updateState: (e) => {
          this.editorState = e;
        },
        dispatch: (e) => {
          this.dispatchTransaction(e);
        },
        // Stub some commonly accessed properties to prevent errors
        composing: !1,
        dragging: null,
        editable: !0,
        isDestroyed: !1
      },
      {
        get: (e, n) => {
          if (this.editorView)
            return this.editorView[n];
          if (n === "state")
            return this.editorState;
          if (n in e)
            return Reflect.get(e, n);
          throw new Error(
            `[tiptap error]: The editor view is not available. Cannot access view['${n}']. The editor may not be mounted yet.`
          );
        }
      }
    );
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return _p && !this.hasWarnedStaleDecorationRead && yw(this) && (this.hasWarnedStaleDecorationRead = !0, console.warn(
      "[tiptap warn]: `editor.state` was read while decoration `create()` was running. It returns the pre-transaction document. Use the `state` argument passed to `create()` instead. Helpers like `editor.isActive()` read `editor.state` too, so pass `state` to their standalone versions instead of calling them on the editor."
    )), this.editorView && (this.editorState = this.view.state), this.editorState;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(e, n) {
    const r = Ap(n) ? n(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    return this.view.updateState(i), i;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const n = this.state.plugins;
    let r = n;
    if ([].concat(e).forEach((o) => {
      const s = typeof o == "string" ? `${o}$` : o.key;
      r = r.filter((l) => !l.key.startsWith(s));
    }), n.length === r.length)
      return;
    const i = this.state.reconfigure({
      plugins: r
    });
    return this.view.updateState(i), i;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var e, n, r, i;
    const s = [...this.options.enableCoreExtensions ? [
      Xp,
      Kp.configure({
        blockSeparator: (n = (e = this.options.coreExtensionOptions) == null ? void 0 : e.clipboardTextSerializer) == null ? void 0 : n.blockSeparator
      }),
      qp,
      Yp,
      Qp,
      tm.configure({
        value: (i = (r = this.options.coreExtensionOptions) == null ? void 0 : r.tabindex) == null ? void 0 : i.value
      }),
      Jp,
      em,
      Gp,
      nm.configure({
        direction: this.options.textDirection
      })
    ].filter((l) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[l.name] !== !1 : !0) : [], ...this.options.extensions].filter((l) => ["extension", "node", "mark"].includes(l?.type));
    this.extensionManager = new bs(s, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new rr({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates the initial document.
   */
  createDoc() {
    let e;
    try {
      e = $l(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: this.options.enableContentCheck
      });
    } catch (n) {
      if (!(n instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(
        n.message
      ))
        throw n;
      const r = $l(
        this.options.content,
        this.schema,
        this.options.parseOptions,
        {
          errorOnInvalidContent: !1
        }
      );
      return this.editorState = wn.create({
        doc: r,
        schema: this.schema,
        selection: Pl(r, this.options.autofocus) || void 0
      }), this.emit("contentError", {
        editor: this,
        error: n,
        disableCollaboration: () => {
          "collaboration" in this.storage && typeof this.storage.collaboration == "object" && this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter(
            (i) => i.name !== "collaboration"
          ), this.createExtensionManager();
        }
      }), this.editorState.doc;
    }
    return e;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView(e) {
    const { editorProps: n, enableExtensionDispatchTransaction: r } = this.options, i = n.dispatchTransaction || this.dispatchTransaction.bind(this), o = r ? this.extensionManager.dispatchTransaction(i) : i, s = n.transformPastedHTML, l = this.extensionManager.transformPastedHTML(s);
    this.editorView = new hp(e, {
      ...n,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...n?.attributes
      },
      dispatchTransaction: o,
      transformPastedHTML: l,
      state: this.editorState,
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
    const a = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(a), this.prependClass(), this.injectCSS();
    const c = this.view.dom;
    c.editor = this;
  }
  /**
   * Creates all node and mark views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `${this.className} ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const n = this.capturedTransaction;
    return this.capturedTransaction = null, n;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((d) => {
        var u;
        return (u = this.capturedTransaction) == null ? void 0 : u.step(d);
      });
      return;
    }
    const { state: n, transactions: r } = this.state.applyTransaction(e), i = !this.state.selection.eq(n.selection), o = r.includes(e), s = this.state;
    if (this.emit("beforeTransaction", {
      editor: this,
      transaction: e,
      nextState: n
    }), !o)
      return;
    this.view.updateState(n), this.emit("transaction", {
      editor: this,
      transaction: e,
      appendedTransactions: r.slice(1)
    }), i && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const l = r.findLast((d) => d.getMeta("focus") || d.getMeta("blur")), a = l?.getMeta("focus"), c = l?.getMeta("blur");
    a && this.emit("focus", {
      editor: this,
      event: a.event,
      // oxlint-disable-next-lineno-non-null-assertion
      transaction: l
    }), c && this.emit("blur", {
      editor: this,
      event: c.event,
      // oxlint-disable-next-lineno-non-null-assertion
      transaction: l
    }), !(e.getMeta("preventUpdate") || !r.some((d) => d.docChanged) || s.doc.eq(n.doc)) && this.emit("update", {
      editor: this,
      transaction: e,
      appendedTransactions: r.slice(1)
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return Op(this.state, e);
  }
  isActive(e, n) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? n : e;
    return $v(this.state, r, i);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return Za(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: n = `

`, textSerializers: r = {} } = e || {};
    return Lp(this.state.doc, {
      blockSeparator: n,
      textSerializers: {
        ...Qa(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return Si(this.state.doc);
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    this.destroyed || (this.destroyed = !0, this.emit("destroy"), this.unmount(), this.removeAllListeners(), this.extensionManager.destroy(), this.extensionManager = null, this.schema = null, this.commandManager = null, this.extensionStorage = {});
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e, n;
    return (n = (e = this.editorView) == null ? void 0 : e.isDestroyed) != null ? n : !0;
  }
  $node(e, n) {
    var r;
    return ((r = this.$doc) == null ? void 0 : r.querySelector(e, n)) || null;
  }
  $nodes(e, n) {
    var r;
    return ((r = this.$doc) == null ? void 0 : r.querySelectorAll(e, n)) || null;
  }
  $pos(e) {
    const n = this.state.doc.resolve(e), r = e > 0 && n.nodeAfter && !n.nodeAfter.isText && n.nodeAfter.isAtom ? n.nodeAfter : null;
    return new Xw(n, this, !1, r);
  }
  get $doc() {
    return this.$pos(0);
  }
};
function dn(t) {
  return new Ci({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const i = Q(t.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: o } = e, s = r[r.length - 1], l = r[0];
      if (s) {
        const a = l.search(/\S/), c = n.from + l.indexOf(s), d = c + s.length;
        if (ec(n.from, n.to, e.doc).filter((h) => h.mark.type.excluded.find((m) => m === t.type && m !== h.mark.type)).filter((h) => h.to > c).length)
          return null;
        d < n.to && o.delete(d, n.to), c > n.from && o.delete(n.from + a, c);
        const f = n.from + a + s.length;
        o.addMark(n.from + a, f, t.type.create(i || {})), o.removeStoredMark(t.type);
      }
    },
    undoable: t.undoable
  });
}
function rm(t) {
  return new Ci({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const i = Q(t.getAttributes, void 0, r) || {}, { tr: o } = e, s = n.from;
      let l = n.to;
      const a = t.type.create(i);
      if (r[1]) {
        const c = r[0].lastIndexOf(r[1]);
        let d = s + c;
        d > l ? d = l : l = d + r[1].length;
        const u = r[0][r[0].length - 1];
        o.insertText(u, s + r[0].length - 1), o.replaceWith(d, l, a);
      } else if (r[0]) {
        const c = t.type.isInline ? s : s - 1;
        o.insert(c, t.type.create(i)).delete(
          o.mapping.map(s),
          o.mapping.map(l)
        );
      }
      o.scrollIntoView();
    },
    undoable: t.undoable
  });
}
function Ul(t) {
  return new Ci({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const i = e.doc.resolve(n.from), o = Q(t.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), t.type))
        return null;
      e.tr.delete(n.from, n.to).setBlockType(n.from, n.from, t.type, o);
    },
    undoable: t.undoable
  });
}
function hr(t) {
  return new Ci({
    find: t.find,
    handler: ({ state: e, range: n, match: r, chain: i }) => {
      const o = Q(t.getAttributes, void 0, r) || {}, s = e.tr.delete(n.from, n.to), a = s.doc.resolve(n.from).blockRange(), c = a && Oa(a, t.type, o);
      if (!c)
        return null;
      if (s.wrap(a, c), t.keepMarks && t.editor) {
        const { selection: u, storedMarks: f } = e, { splittableMarks: h } = t.editor.extensionManager, p = f || u.$to.parentOffset && u.$from.marks();
        if (p) {
          const m = p.filter((g) => h.includes(g.type.name));
          s.ensureMarks(m);
        }
      }
      if (t.keepAttributes) {
        const u = t.type.name === "bulletList" || t.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(u, o).run();
      }
      const d = s.doc.resolve(n.from - 1).nodeBefore;
      d && d.type === t.type && hn(s.doc, n.from - 1) && (!t.joinPredicate || t.joinPredicate(r, d)) && s.join(n.from - 1);
    },
    undoable: t.undoable
  });
}
var Qw = (t) => "touches" in t, ek = class {
  /**
   * Creates a new ResizableNodeView instance.
   *
   * The constructor sets up the resize handles, applies initial sizing from
   * node attributes, and configures all resize behavior options.
   *
   * @param options - Configuration options for the resizable node view
   */
  constructor(t) {
    this.directions = [
      "bottom-left",
      "bottom-right",
      "top-left",
      "top-right"
    ], this.minSize = {
      height: 8,
      width: 8
    }, this.preserveAspectRatio = !1, this.classNames = {
      container: "",
      wrapper: "",
      handle: "",
      resizing: ""
    }, this.initialWidth = 0, this.initialHeight = 0, this.aspectRatio = 1, this.isResizing = !1, this.activeHandle = null, this.startX = 0, this.startY = 0, this.startWidth = 0, this.startHeight = 0, this.isShiftKeyPressed = !1, this.lastEditableState = void 0, this.handleMap = /* @__PURE__ */ new Map(), this.handleMouseMove = (l) => {
      if (!this.isResizing || !this.activeHandle)
        return;
      const a = l.clientX - this.startX, c = l.clientY - this.startY;
      this.handleResize(a, c);
    }, this.handleTouchMove = (l) => {
      if (!this.isResizing || !this.activeHandle)
        return;
      const a = l.touches[0];
      if (!a)
        return;
      const c = a.clientX - this.startX, d = a.clientY - this.startY;
      this.handleResize(c, d);
    }, this.handleMouseUp = () => {
      if (!this.isResizing)
        return;
      const l = this.element.offsetWidth, a = this.element.offsetHeight;
      this.onCommit(l, a), this.isResizing = !1, this.activeHandle = null, this.container.dataset.resizeState = "false", this.classNames.resizing && this.container.classList.remove(this.classNames.resizing), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp);
    }, this.handleKeyDown = (l) => {
      l.key === "Shift" && (this.isShiftKeyPressed = !0);
    }, this.handleKeyUp = (l) => {
      l.key === "Shift" && (this.isShiftKeyPressed = !1);
    };
    var e, n, r, i, o, s;
    this.node = t.node, this.editor = t.editor, this.element = t.element, this.element.draggable = !1, this.contentElement = t.contentElement, this.getPos = t.getPos, this.onResize = t.onResize, this.onCommit = t.onCommit, this.onUpdate = t.onUpdate, (e = t.options) != null && e.min && (this.minSize = {
      ...this.minSize,
      ...t.options.min
    }), (n = t.options) != null && n.max && (this.maxSize = t.options.max), (r = t?.options) != null && r.directions && (this.directions = t.options.directions), (i = t.options) != null && i.preserveAspectRatio && (this.preserveAspectRatio = t.options.preserveAspectRatio), (o = t.options) != null && o.className && (this.classNames = {
      container: t.options.className.container || "",
      wrapper: t.options.className.wrapper || "",
      handle: t.options.className.handle || "",
      resizing: t.options.className.resizing || ""
    }), (s = t.options) != null && s.createCustomHandle && (this.createCustomHandle = t.options.createCustomHandle), this.wrapper = this.createWrapper(), this.container = this.createContainer(), this.applyInitialSize(), this.attachHandles(), this.editor.on("update", this.handleEditorUpdate.bind(this));
  }
  /**
   * Returns the top-level DOM node that should be placed in the editor.
   *
   * This is required by the ProseMirror NodeView interface. The container
   * includes the wrapper, handles, and the actual content element.
   *
   * @returns The container element to be inserted into the editor
   */
  get dom() {
    return this.container;
  }
  get contentDOM() {
    var t;
    return (t = this.contentElement) != null ? t : null;
  }
  handleEditorUpdate() {
    const t = this.editor.isEditable;
    t !== this.lastEditableState && (this.lastEditableState = t, t ? t && this.handleMap.size === 0 && this.attachHandles() : this.removeHandles());
  }
  /**
   * Called when the node's content or attributes change.
   *
   * Updates the internal node reference. If a custom `onUpdate` callback
   * was provided, it will be called to handle additional update logic.
   *
   * @param node - The new/updated node
   * @param decorations - Node decorations
   * @param innerDecorations - Inner decorations
   * @returns `false` if the node type has changed (requires full rebuild), otherwise the result of `onUpdate` or `true`
   */
  update(t, e, n) {
    return t.type !== this.node.type ? !1 : (this.node = t, this.onUpdate ? this.onUpdate(t, e, n) : !0);
  }
  /**
   * Cleanup method called when the node view is being removed.
   *
   * Removes all event listeners to prevent memory leaks. This is required
   * by the ProseMirror NodeView interface. If a resize is active when
   * destroy is called, it will be properly cancelled.
   */
  destroy() {
    this.isResizing && (this.container.dataset.resizeState = "false", this.classNames.resizing && this.container.classList.remove(this.classNames.resizing), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp), this.isResizing = !1, this.activeHandle = null), this.editor.off("update", this.handleEditorUpdate.bind(this)), this.container.remove();
  }
  /**
   * Creates the outer container element.
   *
   * The container is the top-level element returned by the NodeView and
   * wraps the entire resizable node. It's set up with flexbox to handle
   * alignment and includes data attributes for styling and identification.
   *
   * @returns The container element
   */
  createContainer() {
    const t = document.createElement("div");
    return t.dataset.resizeContainer = "", t.dataset.node = this.node.type.name, t.style.display = this.node.type.isInline ? "inline-flex" : "flex", this.classNames.container && (t.className = this.classNames.container), t.appendChild(this.wrapper), t;
  }
  /**
   * Creates the wrapper element that contains the content and handles.
   *
   * The wrapper uses relative positioning so that resize handles can be
   * positioned absolutely within it. This is the direct parent of the
   * content element being made resizable.
   *
   * @returns The wrapper element
   */
  createWrapper() {
    const t = document.createElement("div");
    return t.style.position = "relative", t.style.display = "block", t.dataset.resizeWrapper = "", this.classNames.wrapper && (t.className = this.classNames.wrapper), t.appendChild(this.element), t;
  }
  /**
   * Creates a resize handle element for a specific direction.
   *
   * Each handle is absolutely positioned and includes a data attribute
   * identifying its direction for styling purposes.
   *
   * @param direction - The resize direction for this handle
   * @returns The handle element
   */
  createHandle(t) {
    const e = document.createElement("div");
    return e.dataset.resizeHandle = t, e.style.position = "absolute", this.classNames.handle && (e.className = this.classNames.handle), e;
  }
  /**
   * Positions a handle element according to its direction.
   *
   * Corner handles (e.g., 'top-left') are positioned at the intersection
   * of two edges. Edge handles (e.g., 'top') span the full width or height.
   *
   * @param handle - The handle element to position
   * @param direction - The direction determining the position
   */
  positionHandle(t, e) {
    const n = e.includes("top"), r = e.includes("bottom"), i = e.includes("left"), o = e.includes("right");
    n && (t.style.top = "0"), r && (t.style.bottom = "0"), i && (t.style.left = "0"), o && (t.style.right = "0"), (e === "top" || e === "bottom") && (t.style.left = "0", t.style.right = "0"), (e === "left" || e === "right") && (t.style.top = "0", t.style.bottom = "0");
  }
  /**
   * Creates and attaches all resize handles to the wrapper.
   *
   * Iterates through the configured directions, creates a handle for each,
   * positions it, attaches the mousedown listener, and appends it to the DOM.
   */
  attachHandles() {
    this.directions.forEach((t) => {
      let e;
      this.createCustomHandle ? e = this.createCustomHandle(t) : e = this.createHandle(t), e instanceof HTMLElement || (console.warn(
        `[ResizableNodeView] createCustomHandle("${t}") did not return an HTMLElement. Falling back to default handle.`
      ), e = this.createHandle(t)), this.createCustomHandle || this.positionHandle(e, t), e.addEventListener("mousedown", (n) => this.handleResizeStart(n, t)), e.addEventListener(
        "touchstart",
        (n) => this.handleResizeStart(n, t)
      ), this.handleMap.set(t, e), this.wrapper.appendChild(e);
    });
  }
  /**
   * Removes all resize handles from the wrapper.
   *
   * Cleans up the handle map and removes each handle element from the DOM.
   */
  removeHandles() {
    this.handleMap.forEach((t) => t.remove()), this.handleMap.clear();
  }
  /**
   * Applies initial sizing from node attributes to the element.
   *
   * If width/height attributes exist on the node, they're applied to the element.
   * Otherwise, the element's natural/current dimensions are measured. The aspect
   * ratio is calculated for later use in aspect-ratio-preserving resizes.
   */
  applyInitialSize() {
    const t = this.node.attrs.width, e = this.node.attrs.height;
    t ? (this.element.style.width = `${t}px`, this.initialWidth = t) : this.initialWidth = this.element.offsetWidth, e ? (this.element.style.height = `${e}px`, this.initialHeight = e) : this.initialHeight = this.element.offsetHeight, this.initialWidth > 0 && this.initialHeight > 0 && (this.aspectRatio = this.initialWidth / this.initialHeight);
  }
  /**
   * Initiates a resize operation when a handle is clicked.
   *
   * Captures the starting mouse position and element dimensions, sets up
   * the resize state, adds the resizing class and state attribute, and
   * attaches document-level listeners for mouse movement and keyboard input.
   *
   * @param event - The mouse down event
   * @param direction - The direction of the handle being dragged
   */
  handleResizeStart(t, e) {
    t.preventDefault(), t.stopPropagation(), this.isResizing = !0, this.activeHandle = e, Qw(t) ? (this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY) : (this.startX = t.clientX, this.startY = t.clientY), this.startWidth = this.element.offsetWidth, this.startHeight = this.element.offsetHeight, this.startWidth > 0 && this.startHeight > 0 && (this.aspectRatio = this.startWidth / this.startHeight), this.getPos(), this.container.dataset.resizeState = "true", this.classNames.resizing && this.container.classList.add(this.classNames.resizing), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp);
  }
  handleResize(t, e) {
    if (!this.activeHandle)
      return;
    const n = this.preserveAspectRatio || this.isShiftKeyPressed, { width: r, height: i } = this.calculateNewDimensions(this.activeHandle, t, e), o = this.applyConstraints(r, i, n);
    this.element.style.width = `${o.width}px`, this.element.style.height = `${o.height}px`, this.onResize && this.onResize(o.width, o.height);
  }
  /**
   * Calculates new dimensions based on mouse delta and resize direction.
   *
   * Takes the starting dimensions and applies the mouse movement delta
   * according to the handle direction. For corner handles, both dimensions
   * are affected. For edge handles, only one dimension changes. If aspect
   * ratio should be preserved, delegates to applyAspectRatio.
   *
   * @param direction - The active resize handle direction
   * @param deltaX - Horizontal mouse movement since resize start
   * @param deltaY - Vertical mouse movement since resize start
   * @returns The calculated width and height
   */
  calculateNewDimensions(t, e, n) {
    let r = this.startWidth, i = this.startHeight;
    const o = t.includes("right"), s = t.includes("left"), l = t.includes("bottom"), a = t.includes("top");
    return o ? r = this.startWidth + e : s && (r = this.startWidth - e), l ? i = this.startHeight + n : a && (i = this.startHeight - n), (t === "right" || t === "left") && (r = this.startWidth + (o ? e : -e)), (t === "top" || t === "bottom") && (i = this.startHeight + (l ? n : -n)), this.preserveAspectRatio || this.isShiftKeyPressed ? this.applyAspectRatio(r, i, t) : { width: r, height: i };
  }
  /**
   * Applies min/max constraints to dimensions.
   *
   * When aspect ratio is NOT preserved, constraints are applied independently
   * to width and height. When aspect ratio IS preserved, constraints are
   * applied while maintaining the aspect ratio—if one dimension hits a limit,
   * the other is recalculated proportionally.
   *
   * This ensures that aspect ratio is never broken when constrained.
   *
   * @param width - The unconstrained width
   * @param height - The unconstrained height
   * @param preserveAspectRatio - Whether to maintain aspect ratio while constraining
   * @returns The constrained dimensions
   */
  applyConstraints(t, e, n) {
    var r, i, o, s;
    if (!n) {
      let c = Math.max(this.minSize.width, t), d = Math.max(this.minSize.height, e);
      return (r = this.maxSize) != null && r.width && (c = Math.min(this.maxSize.width, c)), (i = this.maxSize) != null && i.height && (d = Math.min(this.maxSize.height, d)), { width: c, height: d };
    }
    let l = t, a = e;
    return l < this.minSize.width && (l = this.minSize.width, a = l / this.aspectRatio), a < this.minSize.height && (a = this.minSize.height, l = a * this.aspectRatio), (o = this.maxSize) != null && o.width && l > this.maxSize.width && (l = this.maxSize.width, a = l / this.aspectRatio), (s = this.maxSize) != null && s.height && a > this.maxSize.height && (a = this.maxSize.height, l = a * this.aspectRatio), { width: l, height: a };
  }
  /**
   * Adjusts dimensions to maintain the original aspect ratio.
   *
   * For horizontal handles (left/right), uses width as the primary dimension
   * and calculates height from it. For vertical handles (top/bottom), uses
   * height as primary and calculates width. For corner handles, uses width
   * as the primary dimension.
   *
   * @param width - The new width
   * @param height - The new height
   * @param direction - The active resize direction
   * @returns Dimensions adjusted to preserve aspect ratio
   */
  applyAspectRatio(t, e, n) {
    const r = n === "left" || n === "right", i = n === "top" || n === "bottom";
    return r ? {
      width: t,
      height: t / this.aspectRatio
    } : i ? {
      width: e * this.aspectRatio,
      height: e
    } : {
      width: t,
      height: t / this.aspectRatio
    };
  }
}, be = class im extends ic {
  constructor() {
    super(...arguments), this.type = "node";
  }
  /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new im(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, tk = class {
  constructor(t, e, n) {
    this.isDragging = !1, this.component = t, this.editor = e.editor, this.options = {
      stopEvent: null,
      ignoreMutation: null,
      ...n
    }, this.extension = e.extension, this.node = e.node, this.decorations = e.decorations, this.innerDecorations = e.innerDecorations, this.view = e.view, this.HTMLAttributes = e.HTMLAttributes, this.getPos = () => {
      try {
        return e.getPos();
      } catch {
        return;
      }
    }, this.mount();
  }
  mount() {
  }
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  onDragStart(t) {
    var e, n, r, i, o, s, l;
    const { view: a } = this.editor, c = t.target, d = c.nodeType === 3 ? (e = c.parentElement) == null ? void 0 : e.closest("[data-drag-handle]") : c.closest("[data-drag-handle]");
    if (!this.dom || (n = this.contentDOM) != null && n.contains(c) || !d)
      return;
    let u = 0, f = 0;
    if (this.dom !== d) {
      const b = this.dom.getBoundingClientRect(), w = d.getBoundingClientRect(), v = (i = t.offsetX) != null ? i : (r = t.nativeEvent) == null ? void 0 : r.offsetX, x = (s = t.offsetY) != null ? s : (o = t.nativeEvent) == null ? void 0 : o.offsetY;
      u = w.x - b.x + v, f = w.y - b.y + x;
    }
    const h = this.dom.cloneNode(!0);
    try {
      const b = this.dom.getBoundingClientRect();
      h.style.width = `${Math.round(b.width)}px`, h.style.height = `${Math.round(b.height)}px`, h.style.boxSizing = "border-box", h.style.pointerEvents = "none";
    } catch {
    }
    let p = null;
    try {
      p = document.createElement("div"), p.style.position = "absolute", p.style.top = "-9999px", p.style.left = "-9999px", p.style.pointerEvents = "none", p.appendChild(h), document.body.appendChild(p), (l = t.dataTransfer) == null || l.setDragImage(h, u, f);
    } finally {
      p && setTimeout(() => {
        try {
          p?.remove();
        } catch {
        }
      }, 0);
    }
    const m = this.getPos();
    if (typeof m != "number")
      return;
    const g = z.create(a.state.doc, m), y = a.state.tr.setSelection(g);
    a.dispatch(y);
  }
  stopEvent(t) {
    var e;
    if (!this.dom)
      return !1;
    if (typeof this.options.stopEvent == "function")
      return this.options.stopEvent({ event: t });
    const n = t.target;
    if (!(this.dom.contains(n) && !((e = this.contentDOM) != null && e.contains(n))))
      return !1;
    const i = t.type.startsWith("drag"), o = t.type === "dragover" || t.type === "dragenter", s = t.type === "drop";
    if ((["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(n.tagName) || n.isContentEditable) && !s && !i)
      return !0;
    const { isEditable: a } = this.editor, { isDragging: c } = this, d = !!this.node.type.spec.draggable, u = z.isSelectable(this.node), f = t.type === "copy", h = t.type === "paste", p = t.type === "cut", m = t.type === "mousedown";
    if (!d && u && i && t.target === this.dom && t.preventDefault(), d && i && !c && t.target === this.dom)
      return t.preventDefault(), !1;
    if (d && a && !c && m) {
      const g = n.closest("[data-drag-handle]");
      g && (this.dom === g || this.dom.contains(g)) && (this.isDragging = !0, document.addEventListener(
        "dragend",
        () => {
          this.isDragging = !1;
        },
        { once: !0 }
      ), document.addEventListener(
        "drop",
        () => {
          this.isDragging = !1;
        },
        { once: !0 }
      ), document.addEventListener(
        "mouseup",
        () => {
          this.isDragging = !1;
        },
        { once: !0 }
      ));
    }
    return !(c || o || s || f || h || p || m && u);
  }
  /**
   * Called when a DOM [mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) or a selection change happens within the view.
   * @return `false` if the editor should re-read the selection or re-parse the range around the mutation
   * @return `true` if it can safely be ignored.
   */
  ignoreMutation(t) {
    return !this.dom || !this.contentDOM ? !0 : typeof this.options.ignoreMutation == "function" ? this.options.ignoreMutation({ mutation: t }) : this.node.isLeaf || this.node.isAtom ? !0 : t.type === "selection" || this.dom.contains(t.target) && t.type === "childList" && (oi() || zl()) && this.editor.isFocused && [
      ...Array.from(t.addedNodes),
      ...Array.from(t.removedNodes)
    ].every((n) => n.isContentEditable) ? !1 : this.contentDOM === t.target && t.type === "attributes" ? !0 : !this.contentDOM.contains(t.target);
  }
  /**
   * Update the attributes of the prosemirror node.
   */
  updateAttributes(t) {
    this.editor.commands.command(({ tr: e }) => {
      const n = this.getPos();
      return typeof n != "number" ? !1 : (e.setNodeMarkup(n, void 0, {
        ...this.node.attrs,
        ...t
      }), !0);
    });
  }
  /**
   * Delete the node.
   */
  deleteNode() {
    const t = this.getPos();
    if (typeof t != "number")
      return;
    const e = t + this.node.nodeSize;
    this.editor.commands.deleteRange({ from: t, to: e });
  }
};
function zt(t) {
  return new Wp({
    find: t.find,
    handler: ({ state: e, range: n, match: r, pasteEvent: i }) => {
      const o = Q(t.getAttributes, void 0, r, i);
      if (o === !1 || o === null)
        return null;
      const { tr: s } = e, l = r[r.length - 1], a = r[0];
      let c = n.to;
      if (l) {
        const d = a.search(/\S/), u = n.from + a.indexOf(l), f = u + l.length;
        if (ec(n.from, n.to, e.doc).filter((m) => m.mark.type.excluded.find((y) => y === t.type && y !== m.mark.type)).filter((m) => m.to > u).length)
          return null;
        f < n.to && s.delete(f, n.to), u > n.from && s.delete(n.from + d, u), c = n.from + d + l.length, s.addMark(n.from + d, c, t.type.create(o || {})), r.index !== void 0 && r.input !== void 0 && r.index + r[0].length >= r.input.length || s.removeStoredMark(t.type);
      }
    }
  });
}
function jd(t) {
  return A1((e, n) => ({
    get() {
      return e(), t;
    },
    set(r) {
      t = r, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          n();
        });
      });
    }
  }));
}
var nk = class extends Yw {
  constructor(t = {}) {
    return super(t), this.contentComponent = null, this.appContext = null, this.reactiveState = jd(this.view.state), this.reactiveExtensionStorage = jd(this.extensionStorage), this.on("beforeTransaction", ({ nextState: e }) => {
      this.reactiveState.value = e, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), Hf(this);
  }
  get state() {
    return this.reactiveState ? this.reactiveState.value : this.view.state;
  }
  get storage() {
    return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
  }
  /**
   * Register a ProseMirror plugin.
   */
  registerPlugin(t, e) {
    const n = super.registerPlugin(t, e);
    return this.reactiveState && (this.reactiveState.value = n), n;
  }
  /**
   * Unregister a ProseMirror plugin.
   */
  unregisterPlugin(t) {
    const e = super.unregisterPlugin(t);
    return this.reactiveState && e && (this.reactiveState.value = e), e;
  }
}, rk = te({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(t) {
    const e = Y(), n = is();
    return $n(() => {
      const r = t.editor;
      r && r.options.element && e.value && Rf(() => {
        var i;
        if (!e.value || !((i = r.view.dom) != null && i.parentNode))
          return;
        const o = T(e.value);
        e.value.append(...r.view.dom.parentNode.childNodes), r.contentComponent = n.ctx._, n && (r.appContext = {
          ...n.appContext,
          // Vue internally uses prototype chain to forward/shadow injects across the entire component chain
          // so don't use object spread operator or 'Object.assign' and just set `provides` as is on editor's appContext
          // @ts-expect-error forward instance's 'provides' into appContext
          provides: n.provides
        }), r.setOptions({
          element: o
        }), r.createNodeViews();
      });
    }), Ca(() => {
      const r = t.editor;
      r && (r.contentComponent = null, r.appContext = null);
    }), { rootEl: e };
  },
  render() {
    return zn("div", {
      ref: (t) => {
        this.rootEl = t;
      }
    });
  }
});
te({
  name: "NodeViewContent",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  inject: {
    nodeViewContentRef: { default: void 0 }
  },
  mounted() {
    const t = this.nodeViewContentRef;
    t && this.$el && t(this.$el);
  },
  beforeUnmount() {
    const t = this.nodeViewContentRef;
    t && t(null);
  },
  render() {
    return zn(this.as, {
      style: {
        whiteSpace: "pre-wrap"
      },
      "data-node-view-content": ""
    });
  }
});
var om = te({
  name: "NodeViewWrapper",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  inject: ["onDragStart", "decorationClasses"],
  render() {
    var t, e;
    return zn(
      this.as,
      {
        // @ts-ignore
        class: this.decorationClasses,
        style: {
          whiteSpace: "normal"
        },
        "data-node-view-wrapper": "",
        // @ts-ignore (https://github.com/vuejs/vue-next/issues/3031)
        onDragstart: this.onDragStart
      },
      (e = (t = this.$slots).default) == null ? void 0 : e.call(t)
    );
  }
}), ik = class {
  constructor(t, { props: e = {}, editor: n }) {
    this.destroyed = !1, this.editor = n, this.component = Hf(t), this.el = document.createElement("div"), this.props = Jr(e), this.renderedComponent = this.renderComponent();
  }
  get element() {
    return this.renderedComponent.el;
  }
  get ref() {
    var t, e, n, r;
    return (e = (t = this.renderedComponent.vNode) == null ? void 0 : t.component) != null && e.exposed ? this.renderedComponent.vNode.component.exposed : (r = (n = this.renderedComponent.vNode) == null ? void 0 : n.component) == null ? void 0 : r.proxy;
  }
  renderComponent() {
    if (this.destroyed)
      return this.renderedComponent;
    let t = zn(this.component, this.props);
    return this.editor.appContext && (t.appContext = this.editor.appContext), typeof document < "u" && this.el && Vc(t, this.el), { vNode: t, destroy: () => {
      this.el && Vc(null, this.el), this.el = null, t = null;
    }, el: this.el ? this.el.firstElementChild : null };
  }
  updateProps(t = {}) {
    this.destroyed || (Object.entries(t).forEach(([e, n]) => {
      this.props[e] = n;
    }), this.renderComponent());
  }
  destroy() {
    this.destroyed || (this.destroyed = !0, this.renderedComponent.destroy());
  }
};
te({
  name: "MarkViewContent",
  props: {
    as: {
      type: String,
      default: "span"
    }
  },
  render() {
    return zn(this.as, {
      style: {
        whiteSpace: "inherit"
      },
      "data-mark-view-content": ""
    });
  }
});
var sm = {
  editor: {
    type: Object,
    required: !0
  },
  node: {
    type: Object,
    required: !0
  },
  decorations: {
    type: Object,
    required: !0
  },
  selected: {
    type: Boolean,
    required: !0
  },
  extension: {
    type: Object,
    required: !0
  },
  getPos: {
    type: Function,
    required: !0
  },
  updateAttributes: {
    type: Function,
    required: !0
  },
  deleteNode: {
    type: Function,
    required: !0
  },
  view: {
    type: Object,
    required: !0
  },
  innerDecorations: {
    type: Object,
    required: !0
  },
  HTMLAttributes: {
    type: Object,
    required: !0
  }
}, ok = class extends tk {
  constructor(t, e, n) {
    super(t, e, n), this.cachedExtensionWithSyncedStorage = null, this.handlePositionUpdate = () => {
      const r = this.getPos();
      typeof r != "number" || r === this.currentPos || (this.currentPos = r, this.renderer.updateProps({ getPos: () => this.getPos() }));
    }, this.options.trackNodeViewPosition && this.editor.on("update", this.handlePositionUpdate);
  }
  /**
   * Returns a proxy of the extension that redirects storage access to the editor's mutable storage.
   * This preserves the original prototype chain (instanceof checks, methods like configure/extend work).
   * Cached to avoid proxy creation on every update.
   */
  get extensionWithSyncedStorage() {
    if (!this.cachedExtensionWithSyncedStorage) {
      const t = this.editor, e = this.extension;
      this.cachedExtensionWithSyncedStorage = new Proxy(e, {
        get(n, r, i) {
          var o;
          return r === "storage" ? (o = t.storage[e.name]) != null ? o : {} : Reflect.get(n, r, i);
        }
      });
    }
    return this.cachedExtensionWithSyncedStorage;
  }
  mount() {
    const t = {
      editor: this.editor,
      node: this.node,
      decorations: this.decorations,
      innerDecorations: this.innerDecorations,
      view: this.view,
      selected: !1,
      extension: this.extensionWithSyncedStorage,
      HTMLAttributes: this.HTMLAttributes,
      getPos: () => this.getPos(),
      updateAttributes: (i = {}) => this.updateAttributes(i),
      deleteNode: () => this.deleteNode()
    }, e = t, n = this.onDragStart.bind(this);
    this.decorationClasses = Y(this.getDecorationClasses());
    const r = te({
      extends: { ...this.component },
      props: Object.keys(t),
      template: this.component.template,
      setup: (i) => {
        var o, s;
        return Zi("onDragStart", n), Zi("decorationClasses", this.decorationClasses), Zi("nodeViewContentRef", (l) => {
          if (!(!l || l === this.contentDOMElement)) {
            if (this.contentDOMElement)
              for (; this.contentDOMElement.firstChild; )
                l.appendChild(this.contentDOMElement.firstChild);
            this.contentDOMElement = l;
          }
        }), (s = (o = this.component).setup) == null ? void 0 : s.call(o, i, {
          expose: () => {
          }
        });
      },
      // add support for scoped styles
      // @ts-ignore
      // oxlint-disable-next-line
      __scopeId: this.component.__scopeId,
      // add support for CSS Modules
      // @ts-ignore
      // oxlint-disable-next-line
      __cssModules: this.component.__cssModules,
      // add support for vue devtools
      // @ts-ignore
      // oxlint-disable-next-line
      __name: this.component.__name,
      // @ts-ignore
      // oxlint-disable-next-line
      __file: this.component.__file
    });
    this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this), this.editor.on("selectionUpdate", this.handleSelectionUpdate), this.currentPos = this.getPos(), this.node.isLeaf || (this.options.contentDOMElementTag ? this.contentDOMElement = document.createElement(this.options.contentDOMElementTag) : this.contentDOMElement = document.createElement(this.node.isInline ? "span" : "div"), this.contentDOMElement.style.whiteSpace = "inherit", this.contentDOMElement.dataset.nodeViewContentVue = ""), this.renderer = new ik(r, {
      editor: this.editor,
      props: e
    });
  }
  /**
   * Return the DOM element.
   * This is the element that will be used to display the node view.
   */
  get dom() {
    if (!this.renderer.element || !this.renderer.element.hasAttribute("data-node-view-wrapper"))
      throw Error("Please use the NodeViewWrapper component for your node view.");
    return this.renderer.element;
  }
  /**
   * Return the content DOM element.
   * This is the element that will be used to display the rich-text content of the node.
   */
  get contentDOM() {
    return this.node.isLeaf ? null : this.contentDOMElement;
  }
  /**
   * On editor selection update, check if the node is selected.
   * If it is, call `selectNode`, otherwise call `deselectNode`.
   */
  handleSelectionUpdate() {
    const t = this.getPos();
    if (typeof t != "number")
      return;
    if (Uv({
      selection: this.editor.state.selection,
      pos: t,
      nodeSize: this.node.nodeSize,
      selectedOnTextSelection: this.options.selectedOnTextSelection
    })) {
      if (this.renderer.props.selected)
        return;
      this.selectNode();
    } else {
      if (!this.renderer.props.selected)
        return;
      this.deselectNode();
    }
  }
  /**
   * On update, update the React component.
   * To prevent unnecessary updates, the `update` option can be used.
   */
  update(t, e, n) {
    const r = (s) => {
      this.decorationClasses.value = this.getDecorationClasses(), this.renderer.updateProps(s);
    };
    if (typeof this.options.update == "function") {
      const s = this.node, l = this.decorations, a = this.innerDecorations;
      return this.node = t, this.decorations = e, this.innerDecorations = n, this.options.update({
        oldNode: s,
        oldDecorations: l,
        newNode: t,
        newDecorations: e,
        oldInnerDecorations: a,
        innerDecorations: n,
        updateProps: () => r({
          node: t,
          decorations: e,
          innerDecorations: n,
          extension: this.extensionWithSyncedStorage
        })
      });
    }
    if (t.type !== this.node.type)
      return !1;
    if (!(t !== this.node))
      return this.node = t, this.decorations = e, this.innerDecorations = n, this.decorationClasses.value = this.getDecorationClasses(), !0;
    this.node = t, this.decorations = e, this.innerDecorations = n, this.currentPos = this.getPos();
    const o = {
      node: t,
      decorations: e,
      innerDecorations: n,
      extension: this.extensionWithSyncedStorage
    };
    return this.options.trackNodeViewPosition && (o.getPos = () => this.getPos()), r(o), !0;
  }
  /**
   * Select the node.
   * Add the `selected` prop and the `ProseMirror-selectednode` class.
   */
  selectNode() {
    this.renderer.updateProps({
      selected: !0
    }), this.renderer.element && this.renderer.element.classList.add("ProseMirror-selectednode");
  }
  /**
   * Deselect the node.
   * Remove the `selected` prop and the `ProseMirror-selectednode` class.
   */
  deselectNode() {
    this.renderer.updateProps({
      selected: !1
    }), this.renderer.element && this.renderer.element.classList.remove("ProseMirror-selectednode");
  }
  getDecorationClasses() {
    return this.decorations.flatMap((t) => t.type.attrs.class).join(" ");
  }
  destroy() {
    this.renderer.destroy(), this.editor.off("selectionUpdate", this.handleSelectionUpdate), this.options.trackNodeViewPosition && this.editor.off("update", this.handlePositionUpdate), this.contentDOMElement = null;
  }
};
function lm(t, e) {
  return (n) => {
    if (!n.editor.contentComponent)
      return {};
    const r = typeof t == "function" && "__vccOpts" in t ? t.__vccOpts : t;
    return new ok(r, n, e);
  };
}
const am = "en", Wl = 200, sk = Wl - 80, Kd = 20, qd = 1e5, Gd = 16, Ni = 6, Ii = 10, _i = 2, lk = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#000000",
  "#333333",
  "#666666",
  "#999999",
  "#CCCCCC",
  "#D5D5D4",
  "#E8E8E8",
  "#EEEEEE"
], jl = "Roboto", ak = [
  { title: "editor.default", value: jl, divider: !0, default: !0 },
  { title: "Arial", value: "Arial" },
  { title: "Arial Black", value: "Arial Black" },
  { title: "Georgia", value: "Georgia" },
  { title: "Impact", value: "Impact" },
  { title: "Helvetica", value: "Helvetica" },
  { title: "Tahoma", value: "Tahoma" },
  { title: "Times New Roman", value: "Times New Roman" },
  { title: "Verdana", value: "Verdana" },
  { title: "Courier New", value: "Courier New", divider: !0 },
  { title: "Monaco", value: "Monaco" },
  { title: "Monospace", value: "monospace" }
], bo = "default", Jd = [
  { title: "editor.default", value: bo, default: !0 }
], ck = [8, 10, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72], Kn = "default";
var vo = /* @__PURE__ */ ((t) => (t[t["size-small"] = 200] = "size-small", t[t["size-medium"] = 500] = "size-medium", t["size-large"] = "100%", t))(vo || {}), wo = /* @__PURE__ */ ((t) => (t[t["size-small"] = 480] = "size-small", t[t["size-medium"] = 640] = "size-medium", t["size-large"] = "100%", t))(wo || {});
const dk = {
  image: [
    "float-left",
    "float-none",
    "float-right",
    "divider",
    "image-size-small",
    "image-size-medium",
    "image-size-large",
    "divider",
    "textAlign",
    "divider",
    "image",
    "image-aspect-ratio",
    "remove"
  ],
  text: ["bold", "italic", "underline", "strike", "divider", "color", "highlight", "textAlign", "divider", "link"],
  link: [
    "bold",
    "italic",
    "underline",
    "strike",
    "divider",
    "color",
    "highlight",
    "textAlign",
    "divider",
    "link",
    "unlink",
    "link-open"
  ],
  video: ["video-size-small", "video-size-medium", "video-size-large", "divider", "video", "remove"]
}, to = Jr({
  extensions: []
});
function uk(t) {
  to.defaultLang = t.defaultLang, to.defaultMarkdownTheme = t.defaultMarkdownTheme, to.extensions = t.extensions ?? [];
}
function vs() {
  return {
    state: to
  };
}
var cm = typeof global == "object" && global && global.Object === Object && global, fk = typeof self == "object" && self && self.Object === Object && self, bt = cm || fk || Function("return this")(), ht = bt.Symbol, dm = Object.prototype, hk = dm.hasOwnProperty, pk = dm.toString, Ar = ht ? ht.toStringTag : void 0;
function mk(t) {
  var e = hk.call(t, Ar), n = t[Ar];
  try {
    t[Ar] = void 0;
    var r = !0;
  } catch {
  }
  var i = pk.call(t);
  return r && (e ? t[Ar] = n : delete t[Ar]), i;
}
var gk = Object.prototype, yk = gk.toString;
function bk(t) {
  return yk.call(t);
}
var vk = "[object Null]", wk = "[object Undefined]", Xd = ht ? ht.toStringTag : void 0;
function wr(t) {
  return t == null ? t === void 0 ? wk : vk : Xd && Xd in Object(t) ? mk(t) : bk(t);
}
function Vn(t) {
  return t != null && typeof t == "object";
}
var kk = "[object Symbol]";
function ws(t) {
  return typeof t == "symbol" || Vn(t) && wr(t) == kk;
}
function um(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var pt = Array.isArray, Zd = ht ? ht.prototype : void 0, Yd = Zd ? Zd.toString : void 0;
function fm(t) {
  if (typeof t == "string")
    return t;
  if (pt(t))
    return um(t, fm) + "";
  if (ws(t))
    return Yd ? Yd.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var xk = /\s/;
function Sk(t) {
  for (var e = t.length; e-- && xk.test(t.charAt(e)); )
    ;
  return e;
}
var Ck = /^\s+/;
function Ak(t) {
  return t && t.slice(0, Sk(t) + 1).replace(Ck, "");
}
function Nn(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Qd = NaN, Tk = /^[-+]0x[0-9a-f]+$/i, Mk = /^0b[01]+$/i, Ek = /^0o[0-7]+$/i, Lk = parseInt;
function eu(t) {
  if (typeof t == "number")
    return t;
  if (ws(t))
    return Qd;
  if (Nn(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Nn(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Ak(t);
  var n = Mk.test(t);
  return n || Ek.test(t) ? Lk(t.slice(2), n ? 2 : 8) : Tk.test(t) ? Qd : +t;
}
function oc(t) {
  return t;
}
var Ok = "[object AsyncFunction]", Hk = "[object Function]", Rk = "[object GeneratorFunction]", Vk = "[object Proxy]";
function hm(t) {
  if (!Nn(t))
    return !1;
  var e = wr(t);
  return e == Hk || e == Rk || e == Ok || e == Vk;
}
var Ys = bt["__core-js_shared__"], tu = function() {
  var t = /[^.]+$/.exec(Ys && Ys.keys && Ys.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Nk(t) {
  return !!tu && tu in t;
}
var Ik = Function.prototype, _k = Ik.toString;
function Bn(t) {
  if (t != null) {
    try {
      return _k.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Dk = /[\\^$.*+?()[\]{}|]/g, Pk = /^\[object .+?Constructor\]$/, zk = Function.prototype, $k = Object.prototype, Bk = zk.toString, Fk = $k.hasOwnProperty, Uk = RegExp(
  "^" + Bk.call(Fk).replace(Dk, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Wk(t) {
  if (!Nn(t) || Nk(t))
    return !1;
  var e = hm(t) ? Uk : Pk;
  return e.test(Bn(t));
}
function jk(t, e) {
  return t?.[e];
}
function Fn(t, e) {
  var n = jk(t, e);
  return Wk(n) ? n : void 0;
}
var Kl = Fn(bt, "WeakMap");
function Kk(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
var qk = 800, Gk = 16, Jk = Date.now;
function Xk(t) {
  var e = 0, n = 0;
  return function() {
    var r = Jk(), i = Gk - (r - n);
    if (n = r, i > 0) {
      if (++e >= qk)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function Zk(t) {
  return function() {
    return t;
  };
}
var nu = function() {
  try {
    var t = Fn(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Yk = nu ? function(t, e) {
  return nu(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Zk(e),
    writable: !0
  });
} : oc, Qk = Xk(Yk);
function ex(t, e, n, r) {
  for (var i = t.length, o = n + -1; ++o < i; )
    if (e(t[o], o, t))
      return o;
  return -1;
}
function tx(t) {
  return t !== t;
}
function nx(t, e, n) {
  for (var r = n - 1, i = t.length; ++r < i; )
    if (t[r] === e)
      return r;
  return -1;
}
function rx(t, e, n) {
  return e === e ? nx(t, e, n) : ex(t, tx, n);
}
function ix(t, e) {
  var n = t == null ? 0 : t.length;
  return !!n && rx(t, e, 0) > -1;
}
var ox = 9007199254740991, sx = /^(?:0|[1-9]\d*)$/;
function pm(t, e) {
  var n = typeof t;
  return e = e ?? ox, !!e && (n == "number" || n != "symbol" && sx.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function mm(t, e) {
  return t === e || t !== t && e !== e;
}
var ru = Math.max;
function lx(t, e, n) {
  return e = ru(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, i = -1, o = ru(r.length - e, 0), s = Array(o); ++i < o; )
      s[i] = r[e + i];
    i = -1;
    for (var l = Array(e + 1); ++i < e; )
      l[i] = r[i];
    return l[e] = n(s), Kk(t, this, l);
  };
}
function ax(t, e) {
  return Qk(lx(t, e, oc), t + "");
}
var cx = 9007199254740991;
function sc(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= cx;
}
function gm(t) {
  return t != null && sc(t.length) && !hm(t);
}
var dx = Object.prototype;
function ux(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || dx;
  return t === n;
}
function fx(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var hx = "[object Arguments]";
function iu(t) {
  return Vn(t) && wr(t) == hx;
}
var ym = Object.prototype, px = ym.hasOwnProperty, mx = ym.propertyIsEnumerable, lc = iu(/* @__PURE__ */ function() {
  return arguments;
}()) ? iu : function(t) {
  return Vn(t) && px.call(t, "callee") && !mx.call(t, "callee");
};
function gx() {
  return !1;
}
var bm = typeof exports == "object" && exports && !exports.nodeType && exports, ou = bm && typeof module == "object" && module && !module.nodeType && module, yx = ou && ou.exports === bm, su = yx ? bt.Buffer : void 0, bx = su ? su.isBuffer : void 0, ql = bx || gx, vx = "[object Arguments]", wx = "[object Array]", kx = "[object Boolean]", xx = "[object Date]", Sx = "[object Error]", Cx = "[object Function]", Ax = "[object Map]", Tx = "[object Number]", Mx = "[object Object]", Ex = "[object RegExp]", Lx = "[object Set]", Ox = "[object String]", Hx = "[object WeakMap]", Rx = "[object ArrayBuffer]", Vx = "[object DataView]", Nx = "[object Float32Array]", Ix = "[object Float64Array]", _x = "[object Int8Array]", Dx = "[object Int16Array]", Px = "[object Int32Array]", zx = "[object Uint8Array]", $x = "[object Uint8ClampedArray]", Bx = "[object Uint16Array]", Fx = "[object Uint32Array]", le = {};
le[Nx] = le[Ix] = le[_x] = le[Dx] = le[Px] = le[zx] = le[$x] = le[Bx] = le[Fx] = !0;
le[vx] = le[wx] = le[Rx] = le[kx] = le[Vx] = le[xx] = le[Sx] = le[Cx] = le[Ax] = le[Tx] = le[Mx] = le[Ex] = le[Lx] = le[Ox] = le[Hx] = !1;
function Ux(t) {
  return Vn(t) && sc(t.length) && !!le[wr(t)];
}
function vm(t) {
  return function(e) {
    return t(e);
  };
}
var wm = typeof exports == "object" && exports && !exports.nodeType && exports, Dr = wm && typeof module == "object" && module && !module.nodeType && module, Wx = Dr && Dr.exports === wm, Qs = Wx && cm.process, lu = function() {
  try {
    var t = Dr && Dr.require && Dr.require("util").types;
    return t || Qs && Qs.binding && Qs.binding("util");
  } catch {
  }
}(), au = lu && lu.isTypedArray, km = au ? vm(au) : Ux, jx = Object.prototype, Kx = jx.hasOwnProperty;
function qx(t, e) {
  var n = pt(t), r = !n && lc(t), i = !n && !r && ql(t), o = !n && !r && !i && km(t), s = n || r || i || o, l = s ? fx(t.length, String) : [], a = l.length;
  for (var c in t)
    Kx.call(t, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    pm(c, a))) && l.push(c);
  return l;
}
function Gx(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var Jx = Gx(Object.keys, Object), Xx = Object.prototype, Zx = Xx.hasOwnProperty;
function Yx(t) {
  if (!ux(t))
    return Jx(t);
  var e = [];
  for (var n in Object(t))
    Zx.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function xm(t) {
  return gm(t) ? qx(t) : Yx(t);
}
var Qx = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, eS = /^\w*$/;
function ac(t, e) {
  if (pt(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || ws(t) ? !0 : eS.test(t) || !Qx.test(t) || e != null && t in Object(e);
}
var li = Fn(Object, "create");
function tS() {
  this.__data__ = li ? li(null) : {}, this.size = 0;
}
function nS(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var rS = "__lodash_hash_undefined__", iS = Object.prototype, oS = iS.hasOwnProperty;
function sS(t) {
  var e = this.__data__;
  if (li) {
    var n = e[t];
    return n === rS ? void 0 : n;
  }
  return oS.call(e, t) ? e[t] : void 0;
}
var lS = Object.prototype, aS = lS.hasOwnProperty;
function cS(t) {
  var e = this.__data__;
  return li ? e[t] !== void 0 : aS.call(e, t);
}
var dS = "__lodash_hash_undefined__";
function uS(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = li && e === void 0 ? dS : e, this;
}
function In(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
In.prototype.clear = tS;
In.prototype.delete = nS;
In.prototype.get = sS;
In.prototype.has = cS;
In.prototype.set = uS;
function fS() {
  this.__data__ = [], this.size = 0;
}
function ks(t, e) {
  for (var n = t.length; n--; )
    if (mm(t[n][0], e))
      return n;
  return -1;
}
var hS = Array.prototype, pS = hS.splice;
function mS(t) {
  var e = this.__data__, n = ks(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : pS.call(e, n, 1), --this.size, !0;
}
function gS(t) {
  var e = this.__data__, n = ks(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function yS(t) {
  return ks(this.__data__, t) > -1;
}
function bS(t, e) {
  var n = this.__data__, r = ks(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function Bt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Bt.prototype.clear = fS;
Bt.prototype.delete = mS;
Bt.prototype.get = gS;
Bt.prototype.has = yS;
Bt.prototype.set = bS;
var ai = Fn(bt, "Map");
function vS() {
  this.size = 0, this.__data__ = {
    hash: new In(),
    map: new (ai || Bt)(),
    string: new In()
  };
}
function wS(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function xs(t, e) {
  var n = t.__data__;
  return wS(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function kS(t) {
  var e = xs(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function xS(t) {
  return xs(this, t).get(t);
}
function SS(t) {
  return xs(this, t).has(t);
}
function CS(t, e) {
  var n = xs(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function Ft(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Ft.prototype.clear = vS;
Ft.prototype.delete = kS;
Ft.prototype.get = xS;
Ft.prototype.has = SS;
Ft.prototype.set = CS;
var AS = "Expected a function";
function cc(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(AS);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], o = n.cache;
    if (o.has(i))
      return o.get(i);
    var s = t.apply(this, r);
    return n.cache = o.set(i, s) || o, s;
  };
  return n.cache = new (cc.Cache || Ft)(), n;
}
cc.Cache = Ft;
var TS = 500;
function MS(t) {
  var e = cc(t, function(r) {
    return n.size === TS && n.clear(), r;
  }), n = e.cache;
  return e;
}
var ES = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, LS = /\\(\\)?/g, OS = MS(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(ES, function(n, r, i, o) {
    e.push(i ? o.replace(LS, "$1") : r || n);
  }), e;
});
function HS(t) {
  return t == null ? "" : fm(t);
}
function Sm(t, e) {
  return pt(t) ? t : ac(t, e) ? [t] : OS(HS(t));
}
function Ss(t) {
  if (typeof t == "string" || ws(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Cm(t, e) {
  e = Sm(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Ss(e[n++])];
  return n && n == r ? t : void 0;
}
function RS(t, e, n) {
  var r = t == null ? void 0 : Cm(t, e);
  return r === void 0 ? n : r;
}
function Am(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var cu = ht ? ht.isConcatSpreadable : void 0;
function VS(t) {
  return pt(t) || lc(t) || !!(cu && t && t[cu]);
}
function NS(t, e, n, r, i) {
  var o = -1, s = t.length;
  for (n || (n = VS), i || (i = []); ++o < s; ) {
    var l = t[o];
    n(l) && Am(i, l);
  }
  return i;
}
function IS() {
  this.__data__ = new Bt(), this.size = 0;
}
function _S(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function DS(t) {
  return this.__data__.get(t);
}
function PS(t) {
  return this.__data__.has(t);
}
var zS = 200;
function $S(t, e) {
  var n = this.__data__;
  if (n instanceof Bt) {
    var r = n.__data__;
    if (!ai || r.length < zS - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new Ft(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function Nt(t) {
  var e = this.__data__ = new Bt(t);
  this.size = e.size;
}
Nt.prototype.clear = IS;
Nt.prototype.delete = _S;
Nt.prototype.get = DS;
Nt.prototype.has = PS;
Nt.prototype.set = $S;
function BS(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++n < r; ) {
    var s = t[n];
    e(s, n, t) && (o[i++] = s);
  }
  return o;
}
function FS() {
  return [];
}
var US = Object.prototype, WS = US.propertyIsEnumerable, du = Object.getOwnPropertySymbols, jS = du ? function(t) {
  return t == null ? [] : (t = Object(t), BS(du(t), function(e) {
    return WS.call(t, e);
  }));
} : FS;
function KS(t, e, n) {
  var r = e(t);
  return pt(t) ? r : Am(r, n(t));
}
function uu(t) {
  return KS(t, xm, jS);
}
var Gl = Fn(bt, "DataView"), Jl = Fn(bt, "Promise"), Xl = Fn(bt, "Set"), fu = "[object Map]", qS = "[object Object]", hu = "[object Promise]", pu = "[object Set]", mu = "[object WeakMap]", gu = "[object DataView]", GS = Bn(Gl), JS = Bn(ai), XS = Bn(Jl), ZS = Bn(Xl), YS = Bn(Kl), Gt = wr;
(Gl && Gt(new Gl(new ArrayBuffer(1))) != gu || ai && Gt(new ai()) != fu || Jl && Gt(Jl.resolve()) != hu || Xl && Gt(new Xl()) != pu || Kl && Gt(new Kl()) != mu) && (Gt = function(t) {
  var e = wr(t), n = e == qS ? t.constructor : void 0, r = n ? Bn(n) : "";
  if (r)
    switch (r) {
      case GS:
        return gu;
      case JS:
        return fu;
      case XS:
        return hu;
      case ZS:
        return pu;
      case YS:
        return mu;
    }
  return e;
});
var yu = bt.Uint8Array, QS = "__lodash_hash_undefined__";
function eC(t) {
  return this.__data__.set(t, QS), this;
}
function tC(t) {
  return this.__data__.has(t);
}
function ci(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new Ft(); ++e < n; )
    this.add(t[e]);
}
ci.prototype.add = ci.prototype.push = eC;
ci.prototype.has = tC;
function nC(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function Tm(t, e) {
  return t.has(e);
}
var rC = 1, iC = 2;
function Mm(t, e, n, r, i, o) {
  var s = n & rC, l = t.length, a = e.length;
  if (l != a && !(s && a > l))
    return !1;
  var c = o.get(t), d = o.get(e);
  if (c && d)
    return c == e && d == t;
  var u = -1, f = !0, h = n & iC ? new ci() : void 0;
  for (o.set(t, e), o.set(e, t); ++u < l; ) {
    var p = t[u], m = e[u];
    if (r)
      var g = s ? r(m, p, u, e, t, o) : r(p, m, u, t, e, o);
    if (g !== void 0) {
      if (g)
        continue;
      f = !1;
      break;
    }
    if (h) {
      if (!nC(e, function(y, b) {
        if (!Tm(h, b) && (p === y || i(p, y, n, r, o)))
          return h.push(b);
      })) {
        f = !1;
        break;
      }
    } else if (!(p === m || i(p, m, n, r, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(t), o.delete(e), f;
}
function oC(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function sC(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var lC = 1, aC = 2, cC = "[object Boolean]", dC = "[object Date]", uC = "[object Error]", fC = "[object Map]", hC = "[object Number]", pC = "[object RegExp]", mC = "[object Set]", gC = "[object String]", yC = "[object Symbol]", bC = "[object ArrayBuffer]", vC = "[object DataView]", bu = ht ? ht.prototype : void 0, el = bu ? bu.valueOf : void 0;
function wC(t, e, n, r, i, o, s) {
  switch (n) {
    case vC:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case bC:
      return !(t.byteLength != e.byteLength || !o(new yu(t), new yu(e)));
    case cC:
    case dC:
    case hC:
      return mm(+t, +e);
    case uC:
      return t.name == e.name && t.message == e.message;
    case pC:
    case gC:
      return t == e + "";
    case fC:
      var l = oC;
    case mC:
      var a = r & lC;
      if (l || (l = sC), t.size != e.size && !a)
        return !1;
      var c = s.get(t);
      if (c)
        return c == e;
      r |= aC, s.set(t, e);
      var d = Mm(l(t), l(e), r, i, o, s);
      return s.delete(t), d;
    case yC:
      if (el)
        return el.call(t) == el.call(e);
  }
  return !1;
}
var kC = 1, xC = Object.prototype, SC = xC.hasOwnProperty;
function CC(t, e, n, r, i, o) {
  var s = n & kC, l = uu(t), a = l.length, c = uu(e), d = c.length;
  if (a != d && !s)
    return !1;
  for (var u = a; u--; ) {
    var f = l[u];
    if (!(s ? f in e : SC.call(e, f)))
      return !1;
  }
  var h = o.get(t), p = o.get(e);
  if (h && p)
    return h == e && p == t;
  var m = !0;
  o.set(t, e), o.set(e, t);
  for (var g = s; ++u < a; ) {
    f = l[u];
    var y = t[f], b = e[f];
    if (r)
      var w = s ? r(b, y, f, e, t, o) : r(y, b, f, t, e, o);
    if (!(w === void 0 ? y === b || i(y, b, n, r, o) : w)) {
      m = !1;
      break;
    }
    g || (g = f == "constructor");
  }
  if (m && !g) {
    var v = t.constructor, x = e.constructor;
    v != x && "constructor" in t && "constructor" in e && !(typeof v == "function" && v instanceof v && typeof x == "function" && x instanceof x) && (m = !1);
  }
  return o.delete(t), o.delete(e), m;
}
var AC = 1, vu = "[object Arguments]", wu = "[object Array]", Di = "[object Object]", TC = Object.prototype, ku = TC.hasOwnProperty;
function MC(t, e, n, r, i, o) {
  var s = pt(t), l = pt(e), a = s ? wu : Gt(t), c = l ? wu : Gt(e);
  a = a == vu ? Di : a, c = c == vu ? Di : c;
  var d = a == Di, u = c == Di, f = a == c;
  if (f && ql(t)) {
    if (!ql(e))
      return !1;
    s = !0, d = !1;
  }
  if (f && !d)
    return o || (o = new Nt()), s || km(t) ? Mm(t, e, n, r, i, o) : wC(t, e, a, n, r, i, o);
  if (!(n & AC)) {
    var h = d && ku.call(t, "__wrapped__"), p = u && ku.call(e, "__wrapped__");
    if (h || p) {
      var m = h ? t.value() : t, g = p ? e.value() : e;
      return o || (o = new Nt()), i(m, g, n, r, o);
    }
  }
  return f ? (o || (o = new Nt()), CC(t, e, n, r, i, o)) : !1;
}
function Cs(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !Vn(t) && !Vn(e) ? t !== t && e !== e : MC(t, e, n, r, Cs, i);
}
var EC = 1, LC = 2;
function OC(t, e, n, r) {
  var i = n.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var s = n[i];
    if (s[2] ? s[1] !== t[s[0]] : !(s[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    s = n[i];
    var l = s[0], a = t[l], c = s[1];
    if (s[2]) {
      if (a === void 0 && !(l in t))
        return !1;
    } else {
      var d = new Nt(), u;
      if (!(u === void 0 ? Cs(c, a, EC | LC, r, d) : u))
        return !1;
    }
  }
  return !0;
}
function Em(t) {
  return t === t && !Nn(t);
}
function HC(t) {
  for (var e = xm(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Em(i)];
  }
  return e;
}
function Lm(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function RC(t) {
  var e = HC(t);
  return e.length == 1 && e[0][2] ? Lm(e[0][0], e[0][1]) : function(n) {
    return n === t || OC(n, t, e);
  };
}
function VC(t, e) {
  return t != null && e in Object(t);
}
function NC(t, e, n) {
  e = Sm(e, t);
  for (var r = -1, i = e.length, o = !1; ++r < i; ) {
    var s = Ss(e[r]);
    if (!(o = t != null && n(t, s)))
      break;
    t = t[s];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && sc(i) && pm(s, i) && (pt(t) || lc(t)));
}
function IC(t, e) {
  return t != null && NC(t, e, VC);
}
var _C = 1, DC = 2;
function PC(t, e) {
  return ac(t) && Em(e) ? Lm(Ss(t), e) : function(n) {
    var r = RS(n, t);
    return r === void 0 && r === e ? IC(n, t) : Cs(e, r, _C | DC);
  };
}
function zC(t) {
  return function(e) {
    return e?.[t];
  };
}
function $C(t) {
  return function(e) {
    return Cm(e, t);
  };
}
function BC(t) {
  return ac(t) ? zC(Ss(t)) : $C(t);
}
function FC(t) {
  return typeof t == "function" ? t : t == null ? oc : typeof t == "object" ? pt(t) ? PC(t[0], t[1]) : RC(t) : BC(t);
}
var tl = function() {
  return bt.Date.now();
}, UC = "Expected a function", WC = Math.max, jC = Math.min;
function KC(t, e, n) {
  var r, i, o, s, l, a, c = 0, d = !1, u = !1, f = !0;
  if (typeof t != "function")
    throw new TypeError(UC);
  e = eu(e) || 0, Nn(n) && (d = !!n.leading, u = "maxWait" in n, o = u ? WC(eu(n.maxWait) || 0, e) : o, f = "trailing" in n ? !!n.trailing : f);
  function h(k) {
    var S = r, C = i;
    return r = i = void 0, c = k, s = t.apply(C, S), s;
  }
  function p(k) {
    return c = k, l = setTimeout(y, e), d ? h(k) : s;
  }
  function m(k) {
    var S = k - a, C = k - c, E = e - S;
    return u ? jC(E, o - C) : E;
  }
  function g(k) {
    var S = k - a, C = k - c;
    return a === void 0 || S >= e || S < 0 || u && C >= o;
  }
  function y() {
    var k = tl();
    if (g(k))
      return b(k);
    l = setTimeout(y, m(k));
  }
  function b(k) {
    return l = void 0, f && r ? h(k) : (r = i = void 0, s);
  }
  function w() {
    l !== void 0 && clearTimeout(l), c = 0, r = a = i = l = void 0;
  }
  function v() {
    return l === void 0 ? s : b(tl());
  }
  function x() {
    var k = tl(), S = g(k);
    if (r = arguments, i = this, a = k, S) {
      if (l === void 0)
        return p(a);
      if (u)
        return clearTimeout(l), l = setTimeout(y, e), h(a);
    }
    return l === void 0 && (l = setTimeout(y, e)), s;
  }
  return x.cancel = w, x.flush = v, x;
}
function nl(t) {
  return Vn(t) && gm(t);
}
var qC = 200;
function GC(t, e, n, r) {
  var i = -1, o = ix, s = !0, l = t.length, a = [], c = e.length;
  if (!l)
    return a;
  n && (e = um(e, vm(n))), e.length >= qC && (o = Tm, s = !1, e = new ci(e));
  e:
    for (; ++i < l; ) {
      var d = t[i], u = n == null ? d : n(d);
      if (d = d !== 0 ? d : 0, s && u === u) {
        for (var f = c; f--; )
          if (e[f] === u)
            continue e;
        a.push(d);
      } else o(e, u, r) || a.push(d);
    }
  return a;
}
function JC(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
var XC = ax(function(t, e) {
  var n = JC(e);
  return nl(n) && (n = void 0), nl(t) ? GC(t, NS(e, 1, nl), FC(n)) : [];
});
function xu(t, e) {
  return Cs(t, e);
}
var ZC = "Expected a function";
function Pr(t, e, n) {
  var r = !0, i = !0;
  if (typeof t != "function")
    throw new TypeError(ZC);
  return Nn(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), KC(t, e, {
    leading: r,
    maxWait: e,
    trailing: i
  });
}
function YC(t, e, n) {
  return t < e ? e : t > n ? n : t;
}
const Zl = (t) => typeof t == "number", zr = (t) => typeof t == "string", pr = (t) => typeof t == "boolean", QC = (t) => typeof t == "function", $r = (t, e = "px") => {
  if (!t) return t;
  const n = Zl(t) ? String(t) : t, r = Number.parseFloat(n), i = n.match(/[a-zA-Z%]+$/), o = i ? i[0] : e;
  return Number.isNaN(r) ? t : r + o;
};
function eA(t, e) {
  const { extensions: n = [] } = t.extensionManager ?? {};
  return !!n.find((i) => i.name === e);
}
function Om(t, e) {
  const { state: n } = vs(), r = W(() => pr(T(t)) ? bo : zr(n.defaultMarkdownTheme) && n.defaultMarkdownTheme ? n.defaultMarkdownTheme : bo), i = W(() => ({
    [`markdown-theme-${T(r)}`]: !!zr(T(r))
  }));
  function o(l) {
    !pr(T(t)) && T(t) !== l && e?.(l);
  }
  return _t(r, (l) => o(l)), _t(t, (l) => {
    l && zr(l) && n.defaultMarkdownTheme !== l && (n.defaultMarkdownTheme = l);
  }), (() => {
    n.defaultMarkdownTheme && o(n.defaultMarkdownTheme);
  })(), {
    markdownThemeStyle: i
  };
}
function Hm(t) {
  return M1() ? (E1(t), !0) : !1;
}
const ir = /* @__PURE__ */ new WeakMap(), tA = (...t) => {
  var e;
  const n = t[0], r = (e = is()) == null ? void 0 : e.proxy;
  if (r == null)
    throw new Error("injectLocal must be called in setup");
  return ir.has(r) && n in ir.get(r) ? ir.get(r)[n] : T1(...t);
}, nA = (t, e) => {
  var n;
  const r = (n = is()) == null ? void 0 : n.proxy;
  if (r == null)
    throw new Error("provideLocal must be called in setup");
  ir.has(r) || ir.set(r, /* @__PURE__ */ Object.create(null));
  const i = ir.get(r);
  i[t] = e, Zi(t, e);
};
function rA(t, e) {
  const n = Symbol(t.name || "InjectionState"), r = void 0;
  return [(...s) => {
    const l = t(...s);
    return nA(n, l), l;
  }, () => tA(n, r)];
}
function Rm(t) {
  return typeof t == "function" ? t() : T(t);
}
const Vm = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const iA = Object.prototype.toString, oA = (t) => iA.call(t) === "[object Object]", sA = () => {
}, lA = Vm ? window : void 0, aA = Vm ? window.document : void 0;
function Yl(t) {
  var e;
  const n = Rm(t);
  return (e = n?.$el) != null ? e : n;
}
function Su(...t) {
  let e, n, r, i;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, r, i] = t, e = lA) : [e, n, r, i] = t, !e)
    return sA;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], s = () => {
    o.forEach((d) => d()), o.length = 0;
  }, l = (d, u, f, h) => (d.addEventListener(u, f, h), () => d.removeEventListener(u, f, h)), a = _t(
    () => [Yl(e), Rm(i)],
    ([d, u]) => {
      if (s(), !d)
        return;
      const f = oA(u) ? { ...u } : u;
      o.push(
        ...n.flatMap((h) => r.map((p) => l(d, h, p, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), s();
  };
  return Hm(c), c;
}
function cA() {
  const t = Y(!1), e = is();
  return e && Aa(() => {
    t.value = !0;
  }, e), t;
}
function dA(t) {
  const e = cA();
  return W(() => (e.value, !!t()));
}
const Cu = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function uA(t, e = {}) {
  const {
    document: n = aA,
    autoExit: r = !1
  } = e, i = W(() => {
    var y;
    return (y = Yl(t)) != null ? y : n?.querySelector("html");
  }), o = Y(!1), s = W(() => [
    "requestFullscreen",
    "webkitRequestFullscreen",
    "webkitEnterFullscreen",
    "webkitEnterFullScreen",
    "webkitRequestFullScreen",
    "mozRequestFullScreen",
    "msRequestFullscreen"
  ].find((y) => n && y in n || i.value && y in i.value)), l = W(() => [
    "exitFullscreen",
    "webkitExitFullscreen",
    "webkitExitFullScreen",
    "webkitCancelFullScreen",
    "mozCancelFullScreen",
    "msExitFullscreen"
  ].find((y) => n && y in n || i.value && y in i.value)), a = W(() => [
    "fullScreen",
    "webkitIsFullScreen",
    "webkitDisplayingFullscreen",
    "mozFullScreen",
    "msFullscreenElement"
  ].find((y) => n && y in n || i.value && y in i.value)), c = [
    "fullscreenElement",
    "webkitFullscreenElement",
    "mozFullScreenElement",
    "msFullscreenElement"
  ].find((y) => n && y in n), d = dA(() => i.value && n && s.value !== void 0 && l.value !== void 0 && a.value !== void 0), u = () => c ? n?.[c] === i.value : !1, f = () => {
    if (a.value) {
      if (n && n[a.value] != null)
        return n[a.value];
      {
        const y = i.value;
        if (y?.[a.value] != null)
          return !!y[a.value];
      }
    }
    return !1;
  };
  async function h() {
    if (!(!d.value || !o.value)) {
      if (l.value)
        if (n?.[l.value] != null)
          await n[l.value]();
        else {
          const y = i.value;
          y?.[l.value] != null && await y[l.value]();
        }
      o.value = !1;
    }
  }
  async function p() {
    if (!d.value || o.value)
      return;
    f() && await h();
    const y = i.value;
    s.value && y?.[s.value] != null && (await y[s.value](), o.value = !0);
  }
  async function m() {
    await (o.value ? h() : p());
  }
  const g = () => {
    const y = f();
    (!y || y && u()) && (o.value = y);
  };
  return Su(n, Cu, g, !1), Su(() => Yl(i), Cu, g, !1), r && Hm(h), {
    isSupported: d,
    isFullscreen: o,
    enter: p,
    exit: h,
    toggle: m
  };
}
const [fA, dc] = rA(() => {
  const { state: t } = vs(), e = Jr({
    extensions: t.extensions ?? [],
    defaultLang: am,
    defaultMarkdownTheme: bo,
    isFullscreen: !1,
    color: void 0,
    highlight: void 0
  }), n = W(() => e.isFullscreen);
  function r() {
    e.isFullscreen = !e.isFullscreen;
  }
  return $n(() => {
    e.extensions = t.extensions, e.defaultLang = t.defaultLang, e.defaultMarkdownTheme = t.defaultMarkdownTheme;
  }), {
    state: e,
    isFullscreen: n,
    toggleFullscreen: r
  };
}), Au = "[vuetify-pro-tiptap]";
class Nm {
  static warn(e) {
    console.warn(`${Au}: ${e}`);
  }
  static error(e) {
    console.error(`${Au}: ${e}`);
  }
}
function hA(t) {
  return t = t || /* @__PURE__ */ new Map(), {
    /**
     * A Map of event names to registered handler functions.
     */
    all: t,
    /**
     * Register an event handler for the given type.
     * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
     * @param {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on(e, n) {
      const r = t.get(e);
      r ? r.push(n) : t.set(e, [n]);
    },
    /**
     * Remove an event handler for the given type.
     * If `handler` is omitted, all handlers of the given type are removed.
     * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
     * @param {Function} [handler] Handler function to remove
     * @memberOf mitt
     */
    off(e, n) {
      const r = t.get(e);
      r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : t.set(e, []));
    },
    /**
     * Invoke all handlers for the given type.
     * If present, `'*'` handlers are invoked after type-matched handlers.
     *
     * Note: Manually firing '*' handlers is not supported.
     *
     * @param {string|symbol} type The event type to invoke
     * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit(e, n) {
      let r = t.get(e);
      r && r.slice().map((i) => {
        i(n);
      }), r = t.get("*"), r && r.slice().map((i) => {
        i(e, n);
      });
    }
  };
}
const pA = {
  "editor.remove": "Entfernen",
  "editor.words": "WÖRTER",
  "editor.characters": "ZEICHEN",
  "editor.default": "Standard",
  "editor.size.small.tooltip": "Klein",
  "editor.size.medium.tooltip": "Mittel",
  "editor.size.large.tooltip": "Groß",
  "editor.bold.tooltip": "Fett",
  "editor.italic.tooltip": "Kursiv",
  "editor.underline.tooltip": "Unterstrichen",
  "editor.strike.tooltip": "Durchgestrichen",
  "editor.color.tooltip": "Farbe",
  "editor.highlight.tooltip": "Hervorheben",
  "editor.heading.tooltip": "Überschriften",
  "editor.heading.h1.tooltip": "Überschrift 1",
  "editor.heading.h2.tooltip": "Überschrift 2",
  "editor.heading.h3.tooltip": "Überschrift 3",
  "editor.heading.h4.tooltip": "Überschrift 4",
  "editor.heading.h5.tooltip": "Überschrift 5",
  "editor.heading.h6.tooltip": "Überschrift 6",
  "editor.paragraph.tooltip": "Absatz",
  "editor.textalign.tooltip": "Ausrichten",
  "editor.textalign.left.tooltip": "Links",
  "editor.textalign.center.tooltip": "Zentriert",
  "editor.textalign.right.tooltip": "Rechts",
  "editor.textalign.justify.tooltip": "Blocksatz",
  "editor.fontFamily.tooltip": "Schriftart",
  "editor.fontSize.tooltip": "Schriftgröße",
  "editor.superscript.tooltip": "Hochgestellt",
  "editor.subscript.tooltip": "Tiefgestellt",
  "editor.bulletlist.tooltip": "Aufzählungsliste",
  "editor.orderedlist.tooltip": "Nummerierte Liste",
  "editor.tasklist.tooltip": "Aufgabenliste",
  "editor.indent.tooltip": "Einzug",
  "editor.outdent.tooltip": "Ausrücken",
  "editor.link.tooltip": "Link",
  "editor.link.unlink.tooltip": "Link entfernen",
  "editor.link.open": "Link öffnen",
  "editor.link.dialog.title": "Link einfügen",
  "editor.link.dialog.link": "Link",
  "editor.link.dialog.rel": "rel",
  "editor.link.dialog.openInNewTab": "In neuem Tab öffnen",
  "editor.link.dialog.button.apply": "Anwenden",
  "editor.markdownTheme.tooltip": "Thema",
  "editor.image.tooltip": "Bild",
  "editor.image.float.left.tooltip": "Links ausrichten",
  "editor.image.float.none.tooltip": "Keine Ausrichtung",
  "editor.image.float.right.tooltip": "Rechts ausrichten",
  "editor.image.dialog.title": "Bild einfügen",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Hochladen",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Alt"
}, mA = {
  "editor.remove": "Remove",
  "editor.words": "WORDS",
  "editor.characters": "CHARACTERS",
  "editor.default": "default",
  "editor.size.small.tooltip": "Small",
  "editor.size.medium.tooltip": "Medium",
  "editor.size.large.tooltip": "Cover",
  "editor.bold.tooltip": "Bold",
  "editor.italic.tooltip": "Italic",
  "editor.underline.tooltip": "Underline",
  "editor.strike.tooltip": "Strike",
  "editor.color.tooltip": "Color",
  "editor.highlight.tooltip": "Highlight",
  "editor.heading.tooltip": "Headings",
  "editor.heading.h1.tooltip": "Heading 1",
  "editor.heading.h2.tooltip": "Heading 2",
  "editor.heading.h3.tooltip": "Heading 3",
  "editor.heading.h4.tooltip": "Heading 4",
  "editor.heading.h5.tooltip": "Heading 5",
  "editor.heading.h6.tooltip": "Heading 6",
  "editor.paragraph.tooltip": "Paragraph",
  "editor.textalign.tooltip": "Align",
  "editor.textalign.left.tooltip": "Left",
  "editor.textalign.center.tooltip": "Center",
  "editor.textalign.right.tooltip": "Right",
  "editor.textalign.justify.tooltip": "Justify",
  "editor.fontFamily.tooltip": "Font family",
  "editor.fontSize.tooltip": "Font size",
  "editor.superscript.tooltip": "Superscript",
  "editor.subscript.tooltip": "Subscript",
  "editor.bulletlist.tooltip": "Bullet List",
  "editor.orderedlist.tooltip": "Ordered List",
  "editor.tasklist.tooltip": "Task List",
  "editor.indent.tooltip": "Indent",
  "editor.outdent.tooltip": "Outdent",
  "editor.link.tooltip": "Link",
  "editor.link.unlink.tooltip": "Unlink",
  "editor.link.open": "Open link",
  "editor.link.dialog.title": "Insert link",
  "editor.link.dialog.link": "link",
  "editor.link.dialog.rel": "rel",
  "editor.link.dialog.openInNewTab": "Open in new tab",
  "editor.link.dialog.button.apply": "apply",
  "editor.markdownTheme.tooltip": "Theme",
  "editor.image.tooltip": "Image",
  "editor.image.float.left.tooltip": "Float left",
  "editor.image.float.none.tooltip": "Float none",
  "editor.image.float.right.tooltip": "Float right",
  "editor.image.dialog.title": "Insert image",
  "editor.image.dialog.tab.url": "url",
  "editor.image.dialog.tab.upload": "upload",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Lock original aspect ratio",
  "editor.image.dialog.form.file": "File",
  "editor.image.dialog.button.apply": "apply",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Insert video",
  "editor.video.dialog.link": "link",
  "editor.video.dialog.button.apply": "apply",
  "editor.table.tooltip": "Table",
  "editor.table.menu.insert_table": "Insert Table",
  "editor.table.menu.insert_table.with_header_row": "With header row",
  "editor.table.menu.add_column_before": "Add Column Before",
  "editor.table.menu.add_column_after": "Add Column After",
  "editor.table.menu.delete_column": "Delete Column",
  "editor.table.menu.add_row_before": "Add Row Before",
  "editor.table.menu.add_row_after": "Add Row After",
  "editor.table.menu.delete_row": "Delete Row",
  "editor.table.menu.merge_or_split_cells": "Merge Or Split Cells",
  "editor.table.menu.delete_table": "Delete Table",
  "editor.blockquote.tooltip": "Blockquote",
  "editor.horizontalrule.tooltip": "Horizontal Rule",
  "editor.code.tooltip": "Code",
  "editor.codeblock.tooltip": "Code Block",
  "editor.htmlview.tooltip": "HTML View",
  "editor.clear.tooltip": "Clear Format",
  "editor.undo.tooltip": "Undo",
  "editor.redo.tooltip": "Redo",
  "editor.fullscreen.tooltip.fullscreen": "Fullscreen",
  "editor.fullscreen.tooltip.exit": "Fullscreen Exit"
}, gA = {
  "editor.remove": "Rimuovi",
  "editor.words": "Parole",
  "editor.characters": "Caratteri",
  "editor.default": "Predefinito",
  "editor.size.small.tooltip": "Piccolo",
  "editor.size.medium.tooltip": "Medio",
  "editor.size.large.tooltip": "Grande",
  "editor.bold.tooltip": "Grassetto",
  "editor.italic.tooltip": "Corsivo",
  "editor.underline.tooltip": "Sottolineato",
  "editor.strike.tooltip": "Barrato",
  "editor.color.tooltip": "Colore",
  "editor.highlight.tooltip": "Evidenzia",
  "editor.heading.tooltip": "Intestazioni",
  "editor.heading.h1.tooltip": "Intestzione 1",
  "editor.heading.h2.tooltip": "Intestzione 2",
  "editor.heading.h3.tooltip": "Intestzione 3",
  "editor.heading.h4.tooltip": "Intestazione 4",
  "editor.heading.h5.tooltip": "Intestazione 5",
  "editor.heading.h6.tooltip": "Intestazione 6",
  "editor.paragraph.tooltip": "Paragrafo",
  "editor.textalign.tooltip": "Allineamento",
  "editor.textalign.left.tooltip": "Sinistra",
  "editor.textalign.center.tooltip": "Centro",
  "editor.textalign.right.tooltip": "Destra",
  "editor.textalign.justify.tooltip": "Giustificato",
  "editor.fontFamily.tooltip": "Tipo carattere",
  "editor.fontSize.tooltip": "Dimensione carattere",
  "editor.superscript.tooltip": "Apice",
  "editor.subscript.tooltip": "Pedice",
  "editor.bulletlist.tooltip": "Elenco puntato",
  "editor.orderedlist.tooltip": "Elenco numerato",
  "editor.tasklist.tooltip": "Elenco attività",
  "editor.indent.tooltip": "Aumenta rientro",
  "editor.outdent.tooltip": "Riduci rientro",
  "editor.link.tooltip": "Aggiungi collegamento",
  "editor.link.unlink.tooltip": "Rimuovi collegamento",
  "editor.link.open": "Apri collegamento",
  "editor.link.dialog.title": "Inserisci collegamento",
  "editor.link.dialog.link": "Collegamento",
  "editor.link.dialog.rel": "rel",
  "editor.link.dialog.openInNewTab": "Apri in una nuova finestra",
  "editor.link.dialog.button.apply": "Applica",
  "editor.markdownTheme.tooltip": "Tema",
  "editor.image.tooltip": "Immagine",
  "editor.image.float.left.tooltip": "Allinea a sinistra",
  "editor.image.float.none.tooltip": "Nessun allineamento",
  "editor.image.float.right.tooltip": "Allinea a destra",
  "editor.image.dialog.title": "Inserisci immagine",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Carica",
  "editor.image.dialog.form.link": "Collegamento",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Blocca le proporzioni originali",
  "editor.image.dialog.form.file": "File",
  "editor.image.dialog.button.apply": "Applica",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Inserisci video",
  "editor.video.dialog.link": "Collegamento",
  "editor.video.dialog.button.apply": "Applica",
  "editor.table.tooltip": "Tabella",
  "editor.table.menu.insert_table": "Inserisci tabella",
  "editor.table.menu.insert_table.with_header_row": "Con riga intestazione",
  "editor.table.menu.add_column_before": "Aggiungi colonna prima",
  "editor.table.menu.add_column_after": "Aggiungi colonna dopo",
  "editor.table.menu.delete_column": "Elimina colonna",
  "editor.table.menu.add_row_before": "Aggiungi riga prima",
  "editor.table.menu.add_row_after": "Aggiungi riga dopo",
  "editor.table.menu.delete_row": "Elimina riga",
  "editor.table.menu.merge_or_split_cells": "Unisci o dividi celle",
  "editor.table.menu.delete_table": "Elimina tabella",
  "editor.blockquote.tooltip": "Citazione",
  "editor.horizontalrule.tooltip": "Linea orizzontale",
  "editor.code.tooltip": "Codice",
  "editor.codeblock.tooltip": "Blocco di codice",
  "editor.clear.tooltip": "Rimuovi formattazione",
  "editor.undo.tooltip": "Annulla",
  "editor.redo.tooltip": "Ripristina",
  "editor.fullscreen.tooltip.fullscreen": "Schermo intero",
  "editor.fullscreen.tooltip.exit": "Esci da schermo intero"
}, yA = {
  "editor.remove": "Verwijderen",
  "editor.words": "WOORDEN",
  "editor.characters": "KARAKTERS",
  "editor.default": "standaard",
  "editor.size.small.tooltip": "Klein",
  "editor.size.medium.tooltip": "Middelmatig",
  "editor.size.large.tooltip": "Cover",
  "editor.bold.tooltip": "Dikgedrukt",
  "editor.italic.tooltip": "Cursief",
  "editor.underline.tooltip": "Onderstreept",
  "editor.strike.tooltip": "Doorgetrokken",
  "editor.color.tooltip": "Kleur",
  "editor.highlight.tooltip": "Markeren",
  "editor.heading.tooltip": "Koppen",
  "editor.heading.h1.tooltip": "Kop 1",
  "editor.heading.h2.tooltip": "Kop 2",
  "editor.heading.h3.tooltip": "Kop 3",
  "editor.heading.h4.tooltip": "Kop 4",
  "editor.heading.h5.tooltip": "Kop 5",
  "editor.heading.h6.tooltip": "Kop 6",
  "editor.paragraph.tooltip": "Paragraaf",
  "editor.textalign.tooltip": "Uitlijnen",
  "editor.textalign.left.tooltip": "Links",
  "editor.textalign.center.tooltip": "Midden",
  "editor.textalign.right.tooltip": "Rechts",
  "editor.textalign.justify.tooltip": "Justify",
  "editor.fontFamily.tooltip": "Font familie",
  "editor.fontSize.tooltip": "Font grootte",
  "editor.superscript.tooltip": "Superscript",
  "editor.subscript.tooltip": "Subscript",
  "editor.bulletlist.tooltip": "Ongenummerde lijst",
  "editor.orderedlist.tooltip": "Genummerde lijst",
  "editor.tasklist.tooltip": "Takenlijst",
  "editor.indent.tooltip": "Inspringing vergroten",
  "editor.outdent.tooltip": "Inspringing verkleinen",
  "editor.link.tooltip": "Link",
  "editor.link.unlink.tooltip": "Link verwijderen",
  "editor.link.open": "Link openen",
  "editor.link.dialog.title": "Link invoegen",
  "editor.link.dialog.link": "link",
  "editor.link.dialog.rel": "rel",
  "editor.link.dialog.openInNewTab": "Openen in nieuw tabblad",
  "editor.link.dialog.button.apply": "Toepassen",
  "editor.markdownTheme.tooltip": "Thema",
  "editor.image.tooltip": "Afbeelding",
  "editor.image.float.left.tooltip": "Zweef links",
  "editor.image.float.none.tooltip": "Niet zweven",
  "editor.image.float.right.tooltip": "Zweef rechts",
  "editor.image.dialog.title": "Afbeelding invoegen",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Upload",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Originele aspect ratio vastzetten",
  "editor.image.dialog.form.file": "Bestand",
  "editor.image.dialog.button.apply": "Toepassen",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Video invoegen",
  "editor.video.dialog.link": "link",
  "editor.video.dialog.button.apply": "Toepassen",
  "editor.table.tooltip": "Tabel",
  "editor.table.menu.insert_table": "Tabel invoegen",
  "editor.table.menu.insert_table.with_header_row": "Met kop rij",
  "editor.table.menu.add_column_before": "Kolom ervoor invoegen",
  "editor.table.menu.add_column_after": "Kolom erna invoegen",
  "editor.table.menu.delete_column": "Kolom verwijderen",
  "editor.table.menu.add_row_before": "Rij ervoor invoegen",
  "editor.table.menu.add_row_after": "Rij erna invoegen",
  "editor.table.menu.delete_row": "Rij verwijderen",
  "editor.table.menu.merge_or_split_cells": "Cellen samenvoegen/splitsen",
  "editor.table.menu.delete_table": "Tabel verwijderen",
  "editor.blockquote.tooltip": "Citaatblok",
  "editor.horizontalrule.tooltip": "Horizontale lijn",
  "editor.code.tooltip": "Code",
  "editor.codeblock.tooltip": "Code blok",
  "editor.clear.tooltip": "Formattering verwijderen",
  "editor.undo.tooltip": "Stap terug",
  "editor.redo.tooltip": "Stap verder",
  "editor.fullscreen.tooltip.fullscreen": "Volledig scherm",
  "editor.fullscreen.tooltip.exit": "Volledig scherm verlaten"
}, bA = {
  "editor.remove": "删除",
  "editor.words": "单词",
  "editor.characters": "字符",
  "editor.default": "默认",
  "editor.size.small.tooltip": "小尺寸",
  "editor.size.medium.tooltip": "中等尺寸",
  "editor.size.large.tooltip": "铺满",
  "editor.bold.tooltip": "粗体",
  "editor.italic.tooltip": "斜体",
  "editor.underline.tooltip": "下划线",
  "editor.strike.tooltip": "中划线",
  "editor.color.tooltip": "文本颜色",
  "editor.highlight.tooltip": "文本高亮",
  "editor.heading.tooltip": "标题",
  "editor.heading.h1.tooltip": "标题 1",
  "editor.heading.h2.tooltip": "标题 2",
  "editor.heading.h3.tooltip": "标题 3",
  "editor.heading.h4.tooltip": "标题 4",
  "editor.heading.h5.tooltip": "标题 5",
  "editor.heading.h6.tooltip": "标题 6",
  "editor.paragraph.tooltip": "正文",
  "editor.textalign.tooltip": "对齐方式",
  "editor.textalign.left.tooltip": "左对齐",
  "editor.textalign.center.tooltip": "居中对齐",
  "editor.textalign.right.tooltip": "右对齐",
  "editor.textalign.justify.tooltip": "两端对齐",
  "editor.fontFamily.tooltip": "字体",
  "editor.fontSize.tooltip": "字体大小",
  "editor.superscript.tooltip": "上标",
  "editor.subscript.tooltip": "下标",
  "editor.bulletlist.tooltip": "无序列表",
  "editor.orderedlist.tooltip": "有序列表",
  "editor.tasklist.tooltip": "任务列表",
  "editor.indent.tooltip": "增加缩进",
  "editor.outdent.tooltip": "减少缩进",
  "editor.link.tooltip": "网络链接",
  "editor.link.unlink.tooltip": "取消链接",
  "editor.link.open": "打开链接",
  "editor.link.dialog.title": "插入链接",
  "editor.link.dialog.link": "链接",
  "editor.link.dialog.rel": "rel",
  "editor.link.dialog.openInNewTab": "在新标签页中打开",
  "editor.link.dialog.button.apply": "应用",
  "editor.markdownTheme.tooltip": "主题",
  "editor.image.tooltip": "图片",
  "editor.image.float.left.tooltip": "左浮动",
  "editor.image.float.none.tooltip": "无浮动",
  "editor.image.float.right.tooltip": "右浮动",
  "editor.image.dialog.title": "插入图片",
  "editor.image.dialog.tab.url": "网络图片",
  "editor.image.dialog.tab.upload": "本地图片",
  "editor.image.dialog.form.link": "链接",
  "editor.image.dialog.form.alt": "说明",
  "editor.image.dialog.form.aspectRatio": "锁定原有长宽比",
  "editor.image.dialog.form.file": "文件",
  "editor.image.dialog.button.apply": "应用",
  "editor.video.tooltip": "视频",
  "editor.video.dialog.title": "插入视频",
  "editor.video.dialog.link": "网络链接",
  "editor.video.dialog.button.apply": "应用",
  "editor.table.tooltip": "表格",
  "editor.table.menu.insert_table": "插入表格",
  "editor.table.menu.insert_table.with_header_row": "带标题行",
  "editor.table.menu.add_column_before": "向左插入一列",
  "editor.table.menu.add_column_after": "向右插入一列",
  "editor.table.menu.delete_column": "删除列",
  "editor.table.menu.add_row_before": "向上插入一行",
  "editor.table.menu.add_row_after": "向下插入一行",
  "editor.table.menu.delete_row": "删除行",
  "editor.table.menu.merge_or_split_cells": "合并或拆分单元格",
  "editor.table.menu.delete_table": "删除表格",
  "editor.blockquote.tooltip": "引用",
  "editor.horizontalrule.tooltip": "分隔线",
  "editor.code.tooltip": "代码",
  "editor.codeblock.tooltip": "代码块",
  "editor.htmlview.tooltip": "HTML视图",
  "editor.clear.tooltip": "清除格式",
  "editor.undo.tooltip": "撤销",
  "editor.redo.tooltip": "重做",
  "editor.fullscreen.tooltip.fullscreen": "全屏",
  "editor.fullscreen.tooltip.exit": "退出全屏"
}, vA = {
  nl: yA,
  zhHans: bA,
  en: mA,
  de: pA,
  it: gA
}, Zn = {
  lang: am,
  message: vA
};
class wA {
  emitter;
  constructor() {
    this.emitter = hA();
  }
  get lang() {
    return Zn.lang;
  }
  set lang(e) {
    if (!this.isLangSupported(e)) {
      Nm.warn(`Can't find the current language "${e}", Using language "${Zn.lang}" by default`);
      return;
    }
    Zn.lang = e, this.emitter.emit("lang", e);
  }
  get message() {
    return Zn.message;
  }
  set message(e) {
    Zn.message = e;
  }
  loadLangMessage(e) {
    return this.message[e];
  }
  isLangSupported(e) {
    return Object.keys(this.message).includes(e);
  }
  setLang(e) {
    this.lang = e;
  }
  registerWatchLang(e) {
    return this.emitter.on("lang", e), {
      unsubscribe: () => {
        this.emitter.off("lang", e);
      }
    };
  }
  setMessage(e, n) {
    this.message[e] = n;
  }
  buildI18nHandler(e) {
    e || (e = this.lang);
    const n = this.loadLangMessage(e);
    return function(i) {
      return n[i] || i;
    };
  }
}
const Ql = new wA(), Ut = () => {
  const t = Y(Zn.lang), e = W(() => Ql.buildI18nHandler(T(t)));
  return $n((n) => {
    const r = Ql.registerWatchLang((i) => {
      t.value = i;
    });
    n(() => {
      r.unsubscribe();
    });
  }), {
    lang: t,
    t: e
  };
}, Im = ["top", "right", "bottom", "left"], Tu = ["start", "end"], Mu = /* @__PURE__ */ Im.reduce((t, e) => t.concat(e, e + "-" + Tu[0], e + "-" + Tu[1]), []), mt = Math.min, tt = Math.max, ko = Math.round, It = (t) => ({
  x: t,
  y: t
}), kA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function _m(t, e, n) {
  return tt(t, mt(e, n));
}
function Wt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function rt(t) {
  return t.split("-")[0];
}
function nt(t) {
  return t.split("-")[1];
}
function Dm(t) {
  return t === "x" ? "y" : "x";
}
function uc(t) {
  return t === "y" ? "height" : "width";
}
function ct(t) {
  const e = t[0];
  return e === "t" || e === "b" ? "y" : "x";
}
function fc(t) {
  return Dm(ct(t));
}
function Pm(t, e, n) {
  n === void 0 && (n = !1);
  const r = nt(t), i = fc(t), o = uc(i);
  let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (s = So(s)), [s, So(s)];
}
function xA(t) {
  const e = So(t);
  return [xo(t), e, xo(e)];
}
function xo(t) {
  return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start");
}
const Eu = ["left", "right"], Lu = ["right", "left"], SA = ["top", "bottom"], CA = ["bottom", "top"];
function AA(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Lu : Eu : e ? Eu : Lu;
    case "left":
    case "right":
      return e ? SA : CA;
    default:
      return [];
  }
}
function TA(t, e, n, r) {
  const i = nt(t);
  let o = AA(rt(t), n === "start", r);
  return i && (o = o.map((s) => s + "-" + i), e && (o = o.concat(o.map(xo)))), o;
}
function So(t) {
  const e = rt(t);
  return kA[e] + t.slice(e.length);
}
function MA(t) {
  var e, n, r, i;
  return {
    top: (e = t.top) != null ? e : 0,
    right: (n = t.right) != null ? n : 0,
    bottom: (r = t.bottom) != null ? r : 0,
    left: (i = t.left) != null ? i : 0
  };
}
function hc(t) {
  return typeof t != "number" ? MA(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function an(t) {
  const {
    x: e,
    y: n,
    width: r,
    height: i
  } = t;
  return {
    width: r,
    height: i,
    top: n,
    left: e,
    right: e + r,
    bottom: n + i,
    x: e,
    y: n
  };
}
function Ou(t, e, n) {
  let {
    reference: r,
    floating: i
  } = t;
  const o = ct(e), s = fc(e), l = uc(s), a = rt(e), c = o === "y", d = r.x + r.width / 2 - i.width / 2, u = r.y + r.height / 2 - i.height / 2, f = r[l] / 2 - i[l] / 2;
  let h;
  switch (a) {
    case "top":
      h = {
        x: d,
        y: r.y - i.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      h = {
        x: r.x - i.width,
        y: u
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  const p = nt(e);
  return p && (h[s] += f * (p === "end" ? 1 : -1) * (n && c ? -1 : 1)), h;
}
async function EA(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: i,
    platform: o,
    rects: s,
    elements: l,
    strategy: a
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = Wt(e, t), p = hc(h), g = l[f ? u === "floating" ? "reference" : "floating" : u], y = an(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(g))) == null || n ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: a
  })), b = u === "floating" ? {
    x: r,
    y: i,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, w = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), v = await (o.isElement == null ? void 0 : o.isElement(w)) && await (o.getScale == null ? void 0 : o.getScale(w)) || {
    x: 1,
    y: 1
  }, x = an(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: b,
    offsetParent: w,
    strategy: a
  }) : b);
  return {
    top: (y.top - x.top + p.top) / v.y,
    bottom: (x.bottom - y.bottom + p.bottom) / v.y,
    left: (y.left - x.left + p.left) / v.x,
    right: (x.right - y.right + p.right) / v.x
  };
}
const LA = 50, OA = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: s
  } = n, l = s.detectOverflow ? s : {
    ...s,
    detectOverflow: EA
  }, a = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let c = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: d,
    y: u
  } = Ou(c, r, a), f = r, h = 0;
  const p = {};
  for (let m = 0; m < o.length; m++) {
    const g = o[m];
    if (!g)
      continue;
    const {
      name: y,
      fn: b
    } = g, {
      x: w,
      y: v,
      data: x,
      reset: k
    } = await b({
      x: d,
      y: u,
      initialPlacement: r,
      placement: f,
      strategy: i,
      middlewareData: p,
      rects: c,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    d = w ?? d, u = v ?? u, p[y] = {
      ...p[y],
      ...x
    }, k && h < LA && (h++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (c = k.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : k.rects), {
      x: d,
      y: u
    } = Ou(c, f, a)), m = -1);
  }
  return {
    x: d,
    y: u,
    placement: f,
    strategy: i,
    middlewareData: p
  };
}, HA = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: r,
      placement: i,
      rects: o,
      platform: s,
      elements: l,
      middlewareData: a
    } = e, {
      element: c,
      padding: d = 0
    } = Wt(t, e) || {};
    if (c == null)
      return {};
    const u = hc(d), f = {
      x: n,
      y: r
    }, h = fc(i), p = uc(h), m = await s.getDimensions(c), g = h === "y", y = g ? "top" : "left", b = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", v = o.reference[p] + o.reference[h] - f[h] - o.floating[p], x = f[h] - o.reference[h], k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let S = k ? k[w] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(k))) && (S = l.floating[w] || o.floating[p]);
    const C = v / 2 - x / 2, E = S / 2 - m[p] / 2 - 1, _ = mt(u[y], E), I = mt(u[b], E), B = S - m[p] - I, F = S / 2 - m[p] / 2 + C, j = _m(_, F, B), K = !a.arrow && nt(i) != null && F !== j && o.reference[p] / 2 - (F < _ ? _ : I) - m[p] / 2 < 0, V = K ? F < _ ? F - _ : F - B : 0;
    return {
      [h]: f[h] + V,
      data: {
        [h]: j,
        centerOffset: F - j - V,
        ...K && {
          alignmentOffset: V
        }
      },
      reset: K
    };
  }
});
function RA(t, e, n) {
  return (t ? [...n.filter((i) => nt(i) === t), ...n.filter((i) => nt(i) !== t)] : n.filter((i) => rt(i) === i)).filter((i) => t ? nt(i) === t || (e ? xo(i) !== i : !1) : !0);
}
const VA = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, r, i;
      const {
        rects: o,
        middlewareData: s,
        placement: l,
        platform: a,
        elements: c
      } = e, {
        crossAxis: d = !1,
        alignment: u,
        allowedPlacements: f = Mu,
        autoAlignment: h = !0,
        ...p
      } = Wt(t, e), m = u !== void 0 || f === Mu ? RA(u || null, h, f) : f, g = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, y = m[g];
      if (y == null)
        return {};
      if (l !== y)
        return {
          reset: {
            placement: m[0]
          }
        };
      const b = await a.detectOverflow(e, p), w = Pm(y, o, await (a.isRTL == null ? void 0 : a.isRTL(c.floating))), v = [b[rt(y)], b[w[0]], b[w[1]]], x = [...((r = s.autoPlacement) == null ? void 0 : r.overflows) || [], {
        placement: y,
        overflows: v
      }], k = m[g + 1];
      if (k)
        return {
          data: {
            index: g + 1,
            overflows: x
          },
          reset: {
            placement: k
          }
        };
      const S = x.map((_) => {
        const I = nt(_.placement);
        return [_.placement, I && d ? (
          // Check along the mainAxis and main crossAxis side.
          _.overflows.slice(0, 2).reduce((B, F) => B + F, 0)
        ) : (
          // Check only the mainAxis.
          _.overflows[0]
        ), _.overflows];
      }).sort((_, I) => _[1] - I[1]), E = ((i = S.filter((_) => _[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        nt(_[0]) ? 2 : 3
      ).every((I) => I <= 0))[0]) == null ? void 0 : i[0]) || S[0][0];
      return E !== l ? {
        data: {
          index: g + 1,
          overflows: x
        },
        reset: {
          placement: E
        }
      } : {};
    }
  };
}, NA = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: i,
        middlewareData: o,
        rects: s,
        initialPlacement: l,
        platform: a,
        elements: c
      } = e, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: m = !0,
        ...g
      } = Wt(t, e);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const y = rt(i), b = ct(l), w = rt(l) === l, v = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), x = f || (w || !m ? [So(l)] : xA(l)), k = p !== "none";
      !f && k && x.push(...TA(l, m, p, v));
      const S = [l, ...x], C = await a.detectOverflow(e, g), E = [];
      let _ = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (d && E.push(C[y]), u) {
        const j = Pm(i, s, v);
        E.push(C[j[0]], C[j[1]]);
      }
      if (_ = [..._, {
        placement: i,
        overflows: E
      }], !E.every((j) => j <= 0)) {
        var I, B;
        const j = (((I = o.flip) == null ? void 0 : I.index) || 0) + 1, K = S[j];
        if (K && (!(u === "alignment" ? b !== ct(K) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        _.every((P) => ct(P.placement) === b ? P.overflows[0] > 0 : !0)))
          return {
            data: {
              index: j,
              overflows: _
            },
            reset: {
              placement: K
            }
          };
        let V = (B = _.filter((X) => X.overflows[0] <= 0).sort((X, P) => X.overflows[1] - P.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!V)
          switch (h) {
            case "bestFit": {
              var F;
              const X = (F = _.filter((P) => {
                if (k) {
                  const G = ct(P.placement);
                  return G === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  G === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((G) => G > 0).reduce((G, Ie) => G + Ie, 0)]).sort((P, G) => P[1] - G[1])[0]) == null ? void 0 : F[0];
              X && (V = X);
              break;
            }
            case "initialPlacement":
              V = l;
              break;
          }
        if (i !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
function Hu(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Ru(t) {
  return Im.some((e) => t[e] >= 0);
}
const IA = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n,
        platform: r
      } = e, {
        strategy: i = "referenceHidden",
        ...o
      } = Wt(t, e);
      switch (i) {
        case "referenceHidden": {
          const s = await r.detectOverflow(e, {
            ...o,
            elementContext: "reference"
          }), l = Hu(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Ru(l)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(e, {
            ...o,
            altBoundary: !0
          }), l = Hu(s, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Ru(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
function zm(t) {
  const e = mt(...t.map((o) => o.left)), n = mt(...t.map((o) => o.top)), r = tt(...t.map((o) => o.right)), i = tt(...t.map((o) => o.bottom));
  return {
    x: e,
    y: n,
    width: r - e,
    height: i - n
  };
}
function _A(t) {
  const e = t.slice().sort((i, o) => i.y - o.y), n = [];
  let r = null;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    !r || o.y - r.y > r.height / 2 ? n.push([o]) : n[n.length - 1].push(o), r = o;
  }
  return n.map((i) => an(zm(i)));
}
const DA = function(t) {
  return t === void 0 && (t = {}), {
    name: "inline",
    options: t,
    async fn(e) {
      const {
        placement: n,
        elements: r,
        rects: i,
        platform: o,
        strategy: s
      } = e, {
        padding: l = 2,
        x: a,
        y: c
      } = Wt(t, e), d = Array.from(await (o.getClientRects == null ? void 0 : o.getClientRects(r.reference)) || []);
      if (!d.length)
        return {};
      const u = _A(d), f = an(zm(d)), h = hc(l);
      function p() {
        if (u.length === 2 && (u[0].left > u[1].right || u[1].left > u[0].right) && a != null && c != null)
          return u.find((g) => a > g.left - h.left && a < g.right + h.right && c > g.top - h.top && c < g.bottom + h.bottom) || f;
        if (u.length >= 2) {
          if (ct(n) === "y") {
            const k = u[0], S = u[u.length - 1], C = rt(n) === "top", E = k.top, _ = S.bottom, I = C ? k.left : S.left, B = C ? k.right : S.right;
            return an({
              x: I,
              y: E,
              width: B - I,
              height: _ - E
            });
          }
          const g = rt(n) === "left", y = tt(...u.map((k) => k.right)), b = mt(...u.map((k) => k.left)), w = u.filter((k) => g ? k.left === b : k.right === y), v = w[0].top, x = w[w.length - 1].bottom;
          return an({
            x: b,
            y: v,
            width: y - b,
            height: x - v
          });
        }
        return f;
      }
      const m = await o.getElementRects({
        reference: {
          getBoundingClientRect: p
        },
        floating: r.floating,
        strategy: s
      });
      return i.reference.x !== m.reference.x || i.reference.y !== m.reference.y || i.reference.width !== m.reference.width || i.reference.height !== m.reference.height ? {
        reset: {
          rects: m
        }
      } : {};
    }
  };
}, PA = /* @__PURE__ */ new Set(["left", "top"]);
async function zA(t, e) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = t, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), s = rt(n), l = nt(n), a = ct(n) === "y", c = PA.has(s) ? -1 : 1, d = o && a ? -1 : 1, u = Wt(e, t);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: p
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return l && typeof p == "number" && (h = l === "end" ? p * -1 : p), a ? {
    x: h * d,
    y: f * c
  } : {
    x: f * c,
    y: h * d
  };
}
const $A = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, r;
      const {
        x: i,
        y: o,
        placement: s,
        middlewareData: l
      } = e, a = await zA(e, t);
      return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: i + a.x,
        y: o + a.y,
        data: {
          ...a,
          placement: s
        }
      };
    }
  };
}, BA = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r,
        placement: i,
        platform: o
      } = e, {
        mainAxis: s = !0,
        crossAxis: l = !1,
        limiter: a = {
          fn: (b) => {
            let {
              x: w,
              y: v
            } = b;
            return {
              x: w,
              y: v
            };
          }
        },
        ...c
      } = Wt(t, e), d = {
        x: n,
        y: r
      }, u = await o.detectOverflow(e, c), f = ct(i), h = Dm(f);
      let p = d[h], m = d[f];
      const g = (b, w) => _m(w + u[b === "y" ? "top" : "left"], w, w - u[b === "y" ? "bottom" : "right"]);
      s && (p = g(h, p)), l && (m = g(f, m));
      const y = a.fn({
        ...e,
        [h]: p,
        [f]: m
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [h]: s,
            [f]: l
          }
        }
      };
    }
  };
}, FA = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      const {
        placement: n,
        rects: r,
        platform: i,
        elements: o
      } = e, {
        apply: s = () => {
        },
        ...l
      } = Wt(t, e), a = await i.detectOverflow(e, l), c = rt(n), d = nt(n), u = ct(n) === "y", {
        width: f,
        height: h
      } = r.floating;
      let p, m;
      c === "top" || c === "bottom" ? (p = c, m = d === (await (i.isRTL == null ? void 0 : i.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (m = c, p = d === "end" ? "top" : "bottom");
      const g = h - a.top - a.bottom, y = f - a.left - a.right, b = mt(h - a[p], g), w = mt(f - a[m], y), v = e.middlewareData.shift, x = !v;
      let k = b, S = w;
      v != null && v.enabled.x && (S = y), v != null && v.enabled.y && (k = g), x && !d && (u ? S = f - 2 * tt(a.left, a.right) : k = h - 2 * tt(a.top, a.bottom)), await s({
        ...e,
        availableWidth: S,
        availableHeight: k
      });
      const C = await i.getDimensions(o.floating);
      return f !== C.width || h !== C.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function As() {
  return typeof window < "u";
}
function kr(t) {
  return $m(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function We(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function mn(t) {
  var e;
  return (e = ($m(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function $m(t) {
  return As() ? t instanceof Node || t instanceof We(t).Node : !1;
}
function gt(t) {
  return As() ? t instanceof Element || t instanceof We(t).Element : !1;
}
function gn(t) {
  return As() ? t instanceof HTMLElement || t instanceof We(t).HTMLElement : !1;
}
function Vu(t) {
  return !As() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof We(t).ShadowRoot;
}
function Ts(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: i
  } = yt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && i !== "inline" && i !== "contents";
}
function UA(t) {
  return /^(table|td|th)$/.test(kr(t));
}
function Ms(t) {
  try {
    if (t.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return t.matches(":modal");
  } catch {
    return !1;
  }
}
const WA = /transform|translate|scale|rotate|perspective|filter/, jA = /paint|layout|strict|content/, yn = (t) => !!t && t !== "none";
let rl;
function pc(t) {
  const e = gt(t) ? yt(t) : t;
  return yn(e.transform) || yn(e.translate) || yn(e.scale) || yn(e.rotate) || yn(e.perspective) || !mc() && (yn(e.backdropFilter) || yn(e.filter)) || WA.test(e.willChange || "") || jA.test(e.contain || "");
}
function KA(t) {
  let e = _n(t);
  for (; gn(e) && !di(e); ) {
    if (pc(e))
      return e;
    if (Ms(e))
      return null;
    e = _n(e);
  }
  return null;
}
function mc() {
  return rl == null && (rl = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), rl;
}
function di(t) {
  return /^(html|body|#document)$/.test(kr(t));
}
function yt(t) {
  return We(t).getComputedStyle(t);
}
function Es(t) {
  return gt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function _n(t) {
  if (kr(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Vu(t) && t.host || // Fallback.
    mn(t)
  );
  return Vu(e) ? e.host : e;
}
function Bm(t) {
  const e = _n(t);
  return di(e) ? (t.ownerDocument || t).body : gn(e) && Ts(e) ? e : Bm(e);
}
function Fm(t, e, n) {
  var r;
  e === void 0 && (e = []);
  const i = Bm(t), o = i === ((r = t.ownerDocument) == null ? void 0 : r.body), s = We(i);
  return o ? (ea(s), e.concat(s, s.visualViewport || [], Ts(i) ? i : [], [])) : e.concat(i, Fm(i, []));
}
function ea(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Um(t) {
  const e = yt(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const i = gn(t), o = i ? t.offsetWidth : n, s = i ? t.offsetHeight : r, l = ko(n) !== o || ko(r) !== s;
  return l && (n = o, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function Wm(t) {
  return gt(t) ? t : t.contextElement;
}
function or(t) {
  const e = Wm(t);
  if (!gn(e))
    return It(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: i,
    $: o
  } = Um(e);
  let s = (o ? ko(n.width) : n.width) / r, l = (o ? ko(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const qA = /* @__PURE__ */ It(0);
function jm(t) {
  const e = We(t);
  return !mc() || !e.visualViewport ? qA : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function GA(t, e, n) {
  return e === void 0 && (e = !1), !!n && e && n === We(t);
}
function ui(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), o = Wm(t);
  let s = It(1);
  e && (r ? gt(r) && (s = or(r)) : s = or(t));
  const l = GA(o, n, r) ? jm(o) : It(0);
  let a = (i.left + l.x) / s.x, c = (i.top + l.y) / s.y, d = i.width / s.x, u = i.height / s.y;
  if (o && r) {
    const f = We(o), h = gt(r) ? We(r) : r;
    let p = f, m = ea(p);
    for (; m && h !== p; ) {
      const g = or(m), y = m.getBoundingClientRect(), b = yt(m), w = y.left + (m.clientLeft + parseFloat(b.paddingLeft)) * g.x, v = y.top + (m.clientTop + parseFloat(b.paddingTop)) * g.y;
      a *= g.x, c *= g.y, d *= g.x, u *= g.y, a += w, c += v, p = We(m), m = ea(p);
    }
  }
  return an({
    width: d,
    height: u,
    x: a,
    y: c
  });
}
function Ls(t, e) {
  const n = Es(t).scrollLeft;
  return e ? e.left + n : ui(mn(t)).left + n;
}
function Km(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - Ls(t, n), i = n.top + e.scrollTop;
  return {
    x: r,
    y: i
  };
}
function JA(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: i
  } = t;
  const o = i === "fixed", s = mn(r), l = e ? Ms(e.floating) : !1;
  if (r === s || l && o)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = It(1);
  const d = It(0), u = gn(r);
  if ((u || !o) && ((kr(r) !== "body" || Ts(s)) && (a = Es(r)), u)) {
    const h = ui(r);
    c = or(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const f = s && !u && !o ? Km(s, a) : It(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - a.scrollTop * c.y + d.y + f.y
  };
}
function XA(t) {
  return t.getClientRects ? Array.from(t.getClientRects()) : [];
}
function ZA(t) {
  const e = Es(t), n = t.ownerDocument.body, r = tt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = tt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -e.scrollLeft + Ls(t);
  const s = -e.scrollTop;
  return yt(n).direction === "rtl" && (o += tt(t.clientWidth, n.clientWidth) - r), {
    width: r,
    height: i,
    x: o,
    y: s
  };
}
const YA = 25;
function QA(t, e, n) {
  n === void 0 && (n = "viewport");
  const r = n === "layoutViewport", i = We(t), o = mn(t), s = i.visualViewport;
  let l = o.clientWidth, a = o.clientHeight, c = 0, d = 0;
  if (s) {
    const f = !mc() || e === "fixed";
    r ? f || (c = -s.offsetLeft, d = -s.offsetTop) : (l = s.width, a = s.height, f && (c = s.offsetLeft, d = s.offsetTop));
  }
  if (Ls(o) <= 0) {
    const f = o.ownerDocument, h = f.body, p = getComputedStyle(h), m = f.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, g = Math.abs(o.clientWidth - h.clientWidth - m), y = getComputedStyle(o).scrollbarGutter === "stable both-edges" ? g / 2 : g;
    y <= YA && (l -= y);
  }
  return {
    width: l,
    height: a,
    x: c,
    y: d
  };
}
function eT(t, e) {
  const n = ui(t, !0, e === "fixed"), r = n.top + t.clientTop, i = n.left + t.clientLeft, o = or(t), s = t.clientWidth * o.x, l = t.clientHeight * o.y, a = i * o.x, c = r * o.y;
  return {
    width: s,
    height: l,
    x: a,
    y: c
  };
}
function Nu(t, e, n) {
  let r;
  if (e === "viewport" || e === "layoutViewport")
    r = QA(t, n, e);
  else if (e === "document")
    r = ZA(mn(t));
  else if (gt(e))
    r = eT(e, n);
  else {
    const i = jm(t);
    r = {
      x: e.x - i.x,
      y: e.y - i.y,
      width: e.width,
      height: e.height
    };
  }
  return an(r);
}
function tT(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = Fm(t, []).filter((l) => gt(l) && kr(l) !== "body"), i = null;
  const o = yt(t).position === "fixed";
  let s = o ? _n(t) : t;
  for (; gt(s) && !di(s); ) {
    const l = yt(s), a = pc(s), c = i ? i.position : o ? "fixed" : "";
    !a && (c === "fixed" || c === "absolute" && l.position === "static") ? r = r.filter((u) => u !== s) : i = l, s = _n(s);
  }
  return e.set(t, r), r;
}
function nT(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = t;
  const s = [...n === "clippingAncestors" ? Ms(e) ? [] : tT(e, this._c) : [].concat(n), r], l = Nu(e, s[0], i);
  let a = l.top, c = l.right, d = l.bottom, u = l.left;
  for (let f = 1; f < s.length; f++) {
    const h = Nu(e, s[f], i);
    a = tt(h.top, a), c = mt(h.right, c), d = mt(h.bottom, d), u = tt(h.left, u);
  }
  return {
    width: c - u,
    height: d - a,
    x: u,
    y: a
  };
}
function rT(t) {
  const {
    width: e,
    height: n
  } = Um(t);
  return {
    width: e,
    height: n
  };
}
function iT(t, e, n) {
  const r = gn(e), i = mn(e), o = n === "fixed", s = ui(t, !0, o, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = It(0);
  if ((r || !o) && ((kr(e) !== "body" || Ts(i)) && (l = Es(e)), r)) {
    const f = ui(e, !0, o, e);
    a.x = f.x + e.clientLeft, a.y = f.y + e.clientTop;
  }
  !r && i && (a.x = Ls(i));
  const c = i && !r && !o ? Km(i, l) : It(0), d = s.left + l.scrollLeft - a.x - c.x, u = s.top + l.scrollTop - a.y - c.y;
  return {
    x: d,
    y: u,
    width: s.width,
    height: s.height
  };
}
function il(t) {
  return yt(t).position === "static";
}
function Iu(t, e) {
  if (!gn(t) || yt(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return mn(t) === n && (n = n.ownerDocument.body), n;
}
function qm(t, e) {
  const n = We(t);
  if (Ms(t))
    return n;
  if (!gn(t)) {
    let i = _n(t);
    for (; i && !di(i); ) {
      if (gt(i) && !il(i))
        return i;
      i = _n(i);
    }
    return n;
  }
  let r = Iu(t, e);
  for (; r && UA(r) && il(r); )
    r = Iu(r, e);
  return r && di(r) && il(r) && !pc(r) ? n : r || KA(t) || n;
}
const oT = async function(t) {
  const e = this.getOffsetParent || qm, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: iT(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function sT(t) {
  return yt(t).direction === "rtl";
}
const lT = {
  convertOffsetParentRelativeRectToViewportRelativeRect: JA,
  getDocumentElement: mn,
  getClippingRect: nT,
  getOffsetParent: qm,
  getElementRects: oT,
  getClientRects: XA,
  getDimensions: rT,
  getScale: or,
  isElement: gt,
  isRTL: sT
}, Gm = $A, Jm = VA, Xm = BA, Zm = NA, Ym = FA, Qm = IA, eg = HA, tg = DA, ng = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), i = n ?? {}, o = {
    ...lT,
    ...i.platform,
    _c: r
  };
  return OA(t, e, {
    ...i,
    platform: o
  });
};
let ta, na;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  ta = (e) => t.get(e), na = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  ta = (r) => {
    for (let i = 0; i < t.length; i += 2) if (t[i] == r) return t[i + 1];
  }, na = (r, i) => (n == 10 && (n = 0), t[n++] = r, t[n++] = i);
}
var pe = class {
  constructor(t, e, n, r) {
    this.width = t, this.height = e, this.map = n, this.problems = r;
  }
  findCell(t) {
    for (let e = 0; e < this.map.length; e++) {
      const n = this.map[e];
      if (n != t) continue;
      const r = e % this.width, i = e / this.width | 0;
      let o = r + 1, s = i + 1;
      for (let l = 1; o < this.width && this.map[e + l] == n; l++) o++;
      for (let l = 1; s < this.height && this.map[e + this.width * l] == n; l++) s++;
      return {
        left: r,
        top: i,
        right: o,
        bottom: s
      };
    }
    throw new RangeError(`No cell with offset ${t} found`);
  }
  colCount(t) {
    for (let e = 0; e < this.map.length; e++) if (this.map[e] == t) return e % this.width;
    throw new RangeError(`No cell with offset ${t} found`);
  }
  nextCell(t, e, n) {
    const { left: r, right: i, top: o, bottom: s } = this.findCell(t);
    return e == "horiz" ? (n < 0 ? r == 0 : i == this.width) ? null : this.map[o * this.width + (n < 0 ? r - 1 : i)] : (n < 0 ? o == 0 : s == this.height) ? null : this.map[r + this.width * (n < 0 ? o - 1 : s)];
  }
  rectBetween(t, e) {
    const { left: n, right: r, top: i, bottom: o } = this.findCell(t), { left: s, right: l, top: a, bottom: c } = this.findCell(e);
    return {
      left: Math.min(n, s),
      top: Math.min(i, a),
      right: Math.max(r, l),
      bottom: Math.max(o, c)
    };
  }
  cellsInRect(t) {
    const e = [], n = {};
    for (let r = t.top; r < t.bottom; r++) for (let i = t.left; i < t.right; i++) {
      const o = r * this.width + i, s = this.map[o];
      n[s] || (n[s] = !0, !(i == t.left && i && this.map[o - 1] == s || r == t.top && r && this.map[o - this.width] == s) && e.push(s));
    }
    return e;
  }
  positionAt(t, e, n) {
    for (let r = 0, i = 0; ; r++) {
      const o = i + n.child(r).nodeSize;
      if (r == t) {
        let s = e + t * this.width;
        const l = (t + 1) * this.width;
        for (; s < l && this.map[s] < i; ) s++;
        return s == l ? o - 1 : this.map[s];
      }
      i = o;
    }
  }
  static get(t) {
    return ta(t) || na(t, aT(t));
  }
};
function aT(t) {
  if (t.type.spec.tableRole != "table") throw new RangeError("Not a table node: " + t.type.name);
  const e = cT(t), n = t.childCount, r = [];
  let i = 0, o = null;
  const s = [];
  for (let c = 0, d = e * n; c < d; c++) r[c] = 0;
  for (let c = 0, d = 0; c < n; c++) {
    const u = t.child(c);
    d++;
    for (let p = 0; ; p++) {
      for (; i < r.length && r[i] != 0; ) i++;
      if (p == u.childCount) break;
      const m = u.child(p), { colspan: g, rowspan: y, colwidth: b } = m.attrs;
      for (let w = 0; w < y; w++) {
        if (w + c >= n) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: d,
            n: y - w
          });
          break;
        }
        const v = i + w * e;
        for (let x = 0; x < g; x++) {
          r[v + x] == 0 ? r[v + x] = d : (o || (o = [])).push({
            type: "collision",
            row: c,
            pos: d,
            n: g - x
          });
          const k = b && b[x];
          if (k) {
            const S = (v + x) % e * 2, C = s[S];
            C == null || C != k && s[S + 1] == 1 ? (s[S] = k, s[S + 1] = 1) : C == k && s[S + 1]++;
          }
        }
      }
      i += g, d += m.nodeSize;
    }
    const f = (c + 1) * e;
    let h = 0;
    for (; i < f; ) r[i++] == 0 && h++;
    h && (o || (o = [])).push({
      type: "missing",
      row: c,
      n: h
    }), d++;
  }
  (e === 0 || n === 0) && (o || (o = [])).push({ type: "zero_sized" });
  const l = new pe(e, n, r, o);
  let a = !1;
  for (let c = 0; !a && c < s.length; c += 2) s[c] != null && s[c + 1] < n && (a = !0);
  return a && dT(l, s, t), l;
}
function cT(t) {
  let e = -1, n = !1;
  for (let r = 0; r < t.childCount; r++) {
    const i = t.child(r);
    let o = 0;
    if (n) for (let s = 0; s < r; s++) {
      const l = t.child(s);
      for (let a = 0; a < l.childCount; a++) {
        const c = l.child(a);
        s + c.attrs.rowspan > r && (o += c.attrs.colspan);
      }
    }
    for (let s = 0; s < i.childCount; s++) {
      const l = i.child(s);
      o += l.attrs.colspan, l.attrs.rowspan > 1 && (n = !0);
    }
    e == -1 ? e = o : e != o && (e = Math.max(e, o));
  }
  return e;
}
function dT(t, e, n) {
  t.problems || (t.problems = []);
  const r = {};
  for (let i = 0; i < t.map.length; i++) {
    const o = t.map[i];
    if (r[o]) continue;
    r[o] = !0;
    const s = n.nodeAt(o);
    if (!s) throw new RangeError(`No cell with offset ${o} found`);
    let l = null;
    const a = s.attrs;
    for (let c = 0; c < a.colspan; c++) {
      const d = e[(i + c) % t.width * 2];
      d != null && (!a.colwidth || a.colwidth[c] != d) && ((l || (l = uT(a)))[c] = d);
    }
    l && t.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: l
    });
  }
}
function uT(t) {
  if (t.colwidth) return t.colwidth.slice();
  const e = [];
  for (let n = 0; n < t.colspan; n++) e.push(0);
  return e;
}
function He(t) {
  let e = t.cached.tableNodeTypes;
  if (!e) {
    e = t.cached.tableNodeTypes = {};
    for (const n in t.nodes) {
      const r = t.nodes[n], i = r.spec.tableRole;
      i && (e[i] = r);
    }
  }
  return e;
}
const Yt = new se("selectingCells");
function Dn(t) {
  for (let e = t.depth - 1; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return t.node(0).resolve(t.before(e + 1));
  return null;
}
function fT(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function ot(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--) if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function Os(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell) return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell") return e.$anchor;
  const n = Dn(e.$head) || hT(e.$head);
  if (n) return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function hT(t) {
  for (let e = t.nodeAfter, n = t.pos; e; e = e.firstChild, n++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n);
  }
  for (let e = t.nodeBefore, n = t.pos; e; e = e.lastChild, n--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n - e.nodeSize);
  }
}
function ra(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function pT(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function gc(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function rg(t, e, n) {
  const r = t.node(-1), i = pe.get(r), o = t.start(-1), s = i.nextCell(t.pos - o, e, n);
  return s == null ? null : t.node(0).resolve(o + s);
}
function Pn(t, e, n = 1) {
  const r = {
    ...t,
    colspan: t.colspan - n
  };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, n), r.colwidth.some((i) => i > 0) || (r.colwidth = null)), r;
}
function ig(t, e, n = 1) {
  const r = {
    ...t,
    colspan: t.colspan + n
  };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let i = 0; i < n; i++) r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function mT(t, e, n) {
  const r = He(e.type.schema).header_cell;
  for (let i = 0; i < t.height; i++) if (e.nodeAt(t.map[n + i * t.width]).type != r) return !1;
  return !0;
}
var oe = class Tt extends $ {
  constructor(e, n = e) {
    const r = e.node(-1), i = pe.get(r), o = e.start(-1), s = i.rectBetween(e.pos - o, n.pos - o), l = e.node(0), a = i.cellsInRect(s).filter((d) => d != n.pos - o);
    a.unshift(n.pos - o);
    const c = a.map((d) => {
      const u = r.nodeAt(d);
      if (!u) throw new RangeError(`No cell with offset ${d} found`);
      const f = o + d + 1;
      return new gh(l.resolve(f), l.resolve(f + u.content.size));
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)), i = e.resolve(n.map(this.$headCell.pos));
    if (ra(r) && ra(i) && gc(r, i)) {
      const o = this.$anchorCell.node(-1) != r.node(-1);
      return o && this.isRowSelection() ? Tt.rowSelection(r, i) : o && this.isColSelection() ? Tt.colSelection(r, i) : new Tt(r, i);
    }
    return N.between(r, i);
  }
  content() {
    const e = this.$anchorCell.node(-1), n = pe.get(e), r = this.$anchorCell.start(-1), i = n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r), o = {}, s = [];
    for (let a = i.top; a < i.bottom; a++) {
      const c = [];
      for (let d = a * n.width + i.left, u = i.left; u < i.right; u++, d++) {
        const f = n.map[d];
        if (o[f]) continue;
        o[f] = !0;
        const h = n.findCell(f);
        let p = e.nodeAt(f);
        if (!p) throw new RangeError(`No cell with offset ${f} found`);
        const m = i.left - h.left, g = h.right - i.right;
        if (m > 0 || g > 0) {
          let y = p.attrs;
          if (m > 0 && (y = Pn(y, 0, m)), g > 0 && (y = Pn(y, y.colspan - g, g)), h.left < i.left) {
            if (p = p.type.createAndFill(y), !p) throw new RangeError(`Could not create cell with attrs ${JSON.stringify(y)}`);
          } else p = p.type.create(y, p.content);
        }
        if (h.top < i.top || h.bottom > i.bottom) {
          const y = {
            ...p.attrs,
            rowspan: Math.min(h.bottom, i.bottom) - Math.max(h.top, i.top)
          };
          h.top < i.top ? p = p.type.createAndFill(y) : p = p.type.create(y, p.content);
        }
        c.push(p);
      }
      s.push(e.child(a).copy(A.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : s;
    return new O(A.from(l), 1, 1);
  }
  replace(e, n = O.empty) {
    const r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      const { $from: l, $to: a } = i[s], c = e.mapping.slice(r);
      e.replace(c.map(l.pos), c.map(a.pos), s ? O.empty : n);
    }
    const o = $.findFrom(e.doc.resolve(e.mapping.slice(r).map(this.to)), -1);
    o && e.setSelection(o);
  }
  replaceWith(e, n) {
    this.replace(e, new O(A.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), r = pe.get(n), i = this.$anchorCell.start(-1), o = r.cellsInRect(r.rectBetween(this.$anchorCell.pos - i, this.$headCell.pos - i));
    for (let s = 0; s < o.length; s++) e(n.nodeAt(o[s]), i + o[s]);
  }
  isColSelection() {
    const e = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
    if (Math.min(e, n) > 0) return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, i = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, i) == this.$headCell.node(-1).childCount;
  }
  static colSelection(e, n = e) {
    const r = e.node(-1), i = pe.get(r), o = e.start(-1), s = i.findCell(e.pos - o), l = i.findCell(n.pos - o), a = e.node(0);
    return s.top <= l.top ? (s.top > 0 && (e = a.resolve(o + i.map[s.left])), l.bottom < i.height && (n = a.resolve(o + i.map[i.width * (i.height - 1) + l.right - 1]))) : (l.top > 0 && (n = a.resolve(o + i.map[l.left])), s.bottom < i.height && (e = a.resolve(o + i.map[i.width * (i.height - 1) + s.right - 1]))), new Tt(e, n);
  }
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = pe.get(e), r = this.$anchorCell.start(-1), i = n.colCount(this.$anchorCell.pos - r), o = n.colCount(this.$headCell.pos - r);
    if (Math.min(i, o) > 0) return !1;
    const s = i + this.$anchorCell.nodeAfter.attrs.colspan, l = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(s, l) == n.width;
  }
  eq(e) {
    return e instanceof Tt && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  static rowSelection(e, n = e) {
    const r = e.node(-1), i = pe.get(r), o = e.start(-1), s = i.findCell(e.pos - o), l = i.findCell(n.pos - o), a = e.node(0);
    return s.left <= l.left ? (s.left > 0 && (e = a.resolve(o + i.map[s.top * i.width])), l.right < i.width && (n = a.resolve(o + i.map[i.width * (l.top + 1) - 1]))) : (l.left > 0 && (n = a.resolve(o + i.map[l.top * i.width])), s.right < i.width && (e = a.resolve(o + i.map[i.width * (s.top + 1) - 1]))), new Tt(e, n);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, n) {
    return new Tt(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r = n) {
    return new Tt(e.resolve(n), e.resolve(r));
  }
  getBookmark() {
    return new gT(this.$anchorCell.pos, this.$headCell.pos);
  }
};
oe.prototype.visible = !1;
$.jsonID("cell", oe);
var gT = class og {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new og(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && gc(n, r) ? new oe(n, r) : $.near(r, 1);
  }
};
function yT(t) {
  if (!(t.selection instanceof oe)) return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(ve.node(r, r + n.nodeSize, { class: "selectedCell" }));
  }), Z.create(t.doc, e);
}
function bT({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, r = e.pos, i = t.depth;
  for (; i >= 0 && !(t.after(i + 1) < t.end(i)); i--, n++) ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--) ;
  return n == r && /row|table/.test(t.node(i).type.spec.tableRole);
}
function vT({ $from: t, $to: e }) {
  let n, r;
  for (let i = t.depth; i > 0; i--) {
    const o = t.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      n = o;
      break;
    }
  }
  for (let i = e.depth; i > 0; i--) {
    const o = e.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      r = o;
      break;
    }
  }
  return n !== r && e.parentOffset === 0;
}
function wT(t, e, n) {
  const r = (e || t).selection, i = (e || t).doc;
  let o, s;
  if (r instanceof z && (s = r.node.type.spec.tableRole)) {
    if (s == "cell" || s == "header_cell") o = oe.create(i, r.from);
    else if (s == "row") {
      const l = i.resolve(r.from + 1);
      o = oe.rowSelection(l, l);
    } else if (!n) {
      const l = pe.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      o = oe.create(i, a + 1, c);
    }
  } else r instanceof N && bT(r) ? o = N.create(i, r.from) : r instanceof N && vT(r) && (o = N.create(i, r.$from.start(), r.$from.end()));
  return o && (e || (e = t.tr)).setSelection(o), e;
}
const kT = new se("fix-tables");
function sg(t, e, n, r) {
  const i = t.childCount, o = e.childCount;
  e: for (let s = 0, l = 0; s < o; s++) {
    const a = e.child(s);
    for (let c = l, d = Math.min(i, s + 3); c < d; c++) if (t.child(c) == a) {
      l = c + 1, n += a.nodeSize;
      continue e;
    }
    r(a, n), l < i && t.child(l).sameMarkup(a) ? sg(t.child(l), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
  }
}
function lg(t, e) {
  let n;
  const r = (i, o) => {
    i.type.spec.tableRole == "table" && (n = xT(t, i, o, n));
  };
  return e ? e.doc != t.doc && sg(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function xT(t, e, n, r) {
  const i = pe.get(e);
  if (!i.problems) return r;
  r || (r = t.tr);
  const o = [];
  for (let a = 0; a < i.height; a++) o.push(0);
  for (let a = 0; a < i.problems.length; a++) {
    const c = i.problems[a];
    if (c.type == "collision") {
      const d = e.nodeAt(c.pos);
      if (!d) continue;
      const u = d.attrs;
      for (let f = 0; f < u.rowspan; f++) o[c.row + f] += c.n;
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, Pn(u, u.colspan - c.n, c.n));
    } else if (c.type == "missing") o[c.row] += c.n;
    else if (c.type == "overlong_rowspan") {
      const d = e.nodeAt(c.pos);
      if (!d) continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, {
        ...d.attrs,
        rowspan: d.attrs.rowspan - c.n
      });
    } else if (c.type == "colwidth mismatch") {
      const d = e.nodeAt(c.pos);
      if (!d) continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, {
        ...d.attrs,
        colwidth: c.colwidth
      });
    } else if (c.type == "zero_sized") {
      const d = r.mapping.map(n);
      r.delete(d, d + e.nodeSize);
    }
  }
  let s, l;
  for (let a = 0; a < o.length; a++) o[a] && (s == null && (s = a), l = a);
  for (let a = 0, c = n + 1; a < i.height; a++) {
    const d = e.child(a), u = c + d.nodeSize, f = o[a];
    if (f > 0) {
      let h = "cell";
      d.firstChild && (h = d.firstChild.type.spec.tableRole);
      const p = [];
      for (let g = 0; g < f; g++) {
        const y = He(t.schema)[h].createAndFill();
        y && p.push(y);
      }
      const m = (a == 0 || s == a - 1) && l == a ? c + 1 : u - 1;
      r.insert(r.mapping.map(m), p);
    }
    c = u;
  }
  return r.setMeta(kT, { fixTables: !0 });
}
function vt(t) {
  const e = t.selection, n = Os(t), r = n.node(-1), i = n.start(-1), o = pe.get(r);
  return {
    ...e instanceof oe ? o.rectBetween(e.$anchorCell.pos - i, e.$headCell.pos - i) : o.findCell(n.pos - i),
    tableStart: i,
    map: o,
    table: r
  };
}
function ag(t, { map: e, tableStart: n, table: r }, i) {
  let o = i > 0 ? -1 : 0;
  mT(e, r, i + o) && (o = i == 0 || i == e.width ? null : 0);
  for (let s = 0; s < e.height; s++) {
    const l = s * e.width + i;
    if (i > 0 && i < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      t.setNodeMarkup(t.mapping.map(n + a), null, ig(c.attrs, i - e.colCount(a))), s += c.attrs.rowspan - 1;
    } else {
      const a = o == null ? He(r.type.schema).cell : r.nodeAt(e.map[l + o]).type, c = e.positionAt(s, i, r);
      t.insert(t.mapping.map(n + c), a.createAndFill());
    }
  }
  return t;
}
function ST(t, e) {
  if (!ot(t)) return !1;
  if (e) {
    const n = vt(t);
    e(ag(t.tr, n, n.left));
  }
  return !0;
}
function CT(t, e) {
  if (!ot(t)) return !1;
  if (e) {
    const n = vt(t);
    e(ag(t.tr, n, n.right));
  }
  return !0;
}
function AT(t, { map: e, table: n, tableStart: r }, i) {
  const o = t.mapping.maps.length;
  for (let s = 0; s < e.height; ) {
    const l = s * e.width + i, a = e.map[l], c = n.nodeAt(a), d = c.attrs;
    if (i > 0 && e.map[l - 1] == a || i < e.width - 1 && e.map[l + 1] == a) t.setNodeMarkup(t.mapping.slice(o).map(r + a), null, Pn(d, i - e.colCount(a)));
    else {
      const u = t.mapping.slice(o).map(r + a);
      t.delete(u, u + c.nodeSize);
    }
    s += d.rowspan;
  }
}
function TT(t, e) {
  if (!ot(t)) return !1;
  if (e) {
    const n = vt(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let i = n.right - 1; AT(r, n, i), i != n.left; i--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = pe.get(o);
    }
    e(r);
  }
  return !0;
}
function MT(t, e, n) {
  var r;
  const i = He(e.type.schema).header_cell;
  for (let o = 0; o < t.width; o++) if (((r = e.nodeAt(t.map[o + n * t.width])) === null || r === void 0 ? void 0 : r.type) != i) return !1;
  return !0;
}
function cg(t, { map: e, tableStart: n, table: r }, i) {
  let o = n;
  for (let c = 0; c < i; c++) o += r.child(c).nodeSize;
  const s = [];
  let l = i > 0 ? -1 : 0;
  MT(e, r, i + l) && (l = i == 0 || i == e.height ? null : 0);
  for (let c = 0, d = e.width * i; c < e.width; c++, d++) if (i > 0 && i < e.height && e.map[d] == e.map[d - e.width]) {
    const u = e.map[d], f = r.nodeAt(u).attrs;
    t.setNodeMarkup(n + u, null, {
      ...f,
      rowspan: f.rowspan + 1
    }), c += f.colspan - 1;
  } else {
    var a;
    const u = l == null ? He(r.type.schema).cell : (a = r.nodeAt(e.map[d + l * e.width])) === null || a === void 0 ? void 0 : a.type, f = u?.createAndFill();
    f && s.push(f);
  }
  return t.insert(o, He(r.type.schema).row.create(null, s)), t;
}
function ET(t, e) {
  if (!ot(t)) return !1;
  if (e) {
    const n = vt(t);
    e(cg(t.tr, n, n.top));
  }
  return !0;
}
function LT(t, e) {
  if (!ot(t)) return !1;
  if (e) {
    const n = vt(t);
    e(cg(t.tr, n, n.bottom));
  }
  return !0;
}
function OT(t, { map: e, table: n, tableStart: r }, i) {
  let o = 0;
  for (let c = 0; c < i; c++) o += n.child(c).nodeSize;
  const s = o + n.child(i).nodeSize, l = t.mapping.maps.length;
  t.delete(o + r, s + r);
  const a = /* @__PURE__ */ new Set();
  for (let c = 0, d = i * e.width; c < e.width; c++, d++) {
    const u = e.map[d];
    if (!a.has(u)) {
      if (a.add(u), i > 0 && u == e.map[d - e.width]) {
        const f = n.nodeAt(u).attrs;
        t.setNodeMarkup(t.mapping.slice(l).map(u + r), null, {
          ...f,
          rowspan: f.rowspan - 1
        }), c += f.colspan - 1;
      } else if (i < e.height && u == e.map[d + e.width]) {
        const f = n.nodeAt(u), h = f.attrs, p = f.type.create({
          ...h,
          rowspan: f.attrs.rowspan - 1
        }, f.content), m = e.positionAt(i + 1, c, n);
        t.insert(t.mapping.slice(l).map(r + m), p), c += h.colspan - 1;
      }
    }
  }
}
function HT(t, e) {
  if (!ot(t)) return !1;
  if (e) {
    const n = vt(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let i = n.bottom - 1; OT(r, n, i), i != n.top; i--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = pe.get(n.table);
    }
    e(r);
  }
  return !0;
}
function _u(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function RT({ width: t, height: e, map: n }, r) {
  let i = r.top * t + r.left, o = i, s = (r.bottom - 1) * t + r.left, l = i + (r.right - r.left - 1);
  for (let a = r.top; a < r.bottom; a++) {
    if (r.left > 0 && n[o] == n[o - 1] || r.right < t && n[l] == n[l + 1]) return !0;
    o += t, l += t;
  }
  for (let a = r.left; a < r.right; a++) {
    if (r.top > 0 && n[i] == n[i - t] || r.bottom < e && n[s] == n[s + t]) return !0;
    i++, s++;
  }
  return !1;
}
function Du(t, e) {
  const n = t.selection;
  if (!(n instanceof oe) || n.$anchorCell.pos == n.$headCell.pos) return !1;
  const r = vt(t), { map: i } = r;
  if (RT(i, r)) return !1;
  if (e) {
    const o = t.tr, s = {};
    let l = A.empty, a, c;
    for (let d = r.top; d < r.bottom; d++) for (let u = r.left; u < r.right; u++) {
      const f = i.map[d * i.width + u], h = r.table.nodeAt(f);
      if (!(s[f] || !h))
        if (s[f] = !0, a == null)
          a = f, c = h;
        else {
          _u(h) || (l = l.append(h.content));
          const p = o.mapping.map(f + r.tableStart);
          o.delete(p, p + h.nodeSize);
        }
    }
    if (a == null || c == null) return !0;
    if (o.setNodeMarkup(a + r.tableStart, null, {
      ...ig(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
      rowspan: r.bottom - r.top
    }), l.size > 0) {
      const d = a + 1 + c.content.size, u = _u(c) ? a + 1 : d;
      o.replaceWith(u + r.tableStart, d + r.tableStart, l);
    }
    o.setSelection(new oe(o.doc.resolve(a + r.tableStart))), e(o);
  }
  return !0;
}
function Pu(t, e) {
  const n = He(t.schema);
  return VT(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function VT(t) {
  return (e, n) => {
    const r = e.selection;
    let i, o;
    if (r instanceof oe) {
      if (r.$anchorCell.pos != r.$headCell.pos) return !1;
      i = r.$anchorCell.nodeAfter, o = r.$anchorCell.pos;
    } else {
      var s;
      if (i = fT(r.$from), !i) return !1;
      o = (s = Dn(r.$from)) === null || s === void 0 ? void 0 : s.pos;
    }
    if (i == null || o == null || i.attrs.colspan == 1 && i.attrs.rowspan == 1) return !1;
    if (n) {
      let l = i.attrs;
      const a = [], c = l.colwidth;
      l.rowspan > 1 && (l = {
        ...l,
        rowspan: 1
      }), l.colspan > 1 && (l = {
        ...l,
        colspan: 1
      });
      const d = vt(e), u = e.tr;
      for (let h = 0; h < d.right - d.left; h++) a.push(c ? {
        ...l,
        colwidth: c && c[h] ? [c[h]] : null
      } : l);
      let f;
      for (let h = d.top; h < d.bottom; h++) {
        let p = d.map.positionAt(h, d.left, d.table);
        h == d.top && (p += i.nodeSize);
        for (let m = d.left, g = 0; m < d.right; m++, g++)
          m == d.left && h == d.top || u.insert(f = u.mapping.map(p + d.tableStart, 1), t({
            node: i,
            row: h,
            col: m
          }).createAndFill(a[g]));
      }
      u.setNodeMarkup(o, t({
        node: i,
        row: d.top,
        col: d.left
      }), a[0]), r instanceof oe && u.setSelection(new oe(u.doc.resolve(r.$anchorCell.pos), f ? u.doc.resolve(f) : void 0)), n(u);
    }
    return !0;
  };
}
function NT(t, e) {
  return function(n, r) {
    if (!ot(n)) return !1;
    const i = Os(n);
    if (i.nodeAfter.attrs[t] === e) return !1;
    if (r) {
      const o = n.tr;
      n.selection instanceof oe ? n.selection.forEachCell((s, l) => {
        s.attrs[t] !== e && o.setNodeMarkup(l, null, {
          ...s.attrs,
          [t]: e
        });
      }) : o.setNodeMarkup(i.pos, null, {
        ...i.nodeAfter.attrs,
        [t]: e
      }), r(o);
    }
    return !0;
  };
}
function IT(t) {
  return function(e, n) {
    if (!ot(e)) return !1;
    if (n) {
      const r = He(e.schema), i = vt(e), o = e.tr, s = i.map.cellsInRect(t == "column" ? {
        left: i.left,
        top: 0,
        right: i.right,
        bottom: i.map.height
      } : t == "row" ? {
        left: 0,
        top: i.top,
        right: i.map.width,
        bottom: i.bottom
      } : i), l = s.map((a) => i.table.nodeAt(a));
      for (let a = 0; a < s.length; a++) l[a].type == r.header_cell && o.setNodeMarkup(i.tableStart + s[a], r.cell, l[a].attrs);
      if (o.steps.length === 0) for (let a = 0; a < s.length; a++) o.setNodeMarkup(i.tableStart + s[a], r.header_cell, l[a].attrs);
      n(o);
    }
    return !0;
  };
}
function zu(t, e, n) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: t == "row" ? e.map.width : 1,
    bottom: t == "column" ? e.map.height : 1
  });
  for (let i = 0; i < r.length; i++) {
    const o = e.table.nodeAt(r[i]);
    if (o && o.type !== n.header_cell) return !1;
  }
  return !0;
}
function fi(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? IT(t) : function(n, r) {
    if (!ot(n)) return !1;
    if (r) {
      const i = He(n.schema), o = vt(n), s = n.tr, l = zu("row", o, i), a = zu("column", o, i), c = (t === "column" ? l : t === "row" && a) ? 1 : 0, d = t == "column" ? {
        left: 0,
        top: c,
        right: 1,
        bottom: o.map.height
      } : t == "row" ? {
        left: c,
        top: 0,
        right: o.map.width,
        bottom: 1
      } : o, u = t == "column" ? a ? i.cell : i.header_cell : t == "row" ? l ? i.cell : i.header_cell : i.cell;
      o.map.cellsInRect(d).forEach((f) => {
        const h = f + o.tableStart, p = s.doc.nodeAt(h);
        p && s.setNodeMarkup(h, u, p.attrs);
      }), r(s);
    }
    return !0;
  };
}
fi("row", { useDeprecatedLogic: !0 });
fi("column", { useDeprecatedLogic: !0 });
const _T = fi("cell", { useDeprecatedLogic: !0 });
function DT(t, e) {
  if (e < 0) {
    const n = t.nodeBefore;
    if (n) return t.pos - n.nodeSize;
    for (let r = t.index(-1) - 1, i = t.before(); r >= 0; r--) {
      const o = t.node(-1).child(r), s = o.lastChild;
      if (s) return i - 1 - s.nodeSize;
      i -= o.nodeSize;
    }
  } else {
    if (t.index() < t.parent.childCount - 1) return t.pos + t.nodeAfter.nodeSize;
    const n = t.node(-1);
    for (let r = t.indexAfter(-1), i = t.after(); r < n.childCount; r++) {
      const o = n.child(r);
      if (o.childCount) return i + 1;
      i += o.nodeSize;
    }
  }
  return null;
}
function $u(t) {
  return function(e, n) {
    if (!ot(e)) return !1;
    const r = DT(Os(e), t);
    if (r == null) return !1;
    if (n) {
      const i = e.doc.resolve(r);
      n(e.tr.setSelection(N.between(i, pT(i))).scrollIntoView());
    }
    return !0;
  };
}
function PT(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--) if (n.node(r).type.spec.tableRole == "table")
    return e && e(t.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
  return !1;
}
function Pi(t, e) {
  const n = t.selection;
  if (!(n instanceof oe)) return !1;
  if (e) {
    const r = t.tr, i = He(t.schema).cell.createAndFill().content;
    n.forEachCell((o, s) => {
      o.content.eq(i) || r.replace(r.mapping.map(s + 1), r.mapping.map(s + o.nodeSize - 1), new O(i, 0, 0));
    }), r.docChanged && e(r);
  }
  return !0;
}
function zT(t) {
  if (t.size === 0) return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const i = e.child(0), o = i.type.spec.tableRole, s = i.type.schema, l = [];
  if (o == "row") for (let a = 0; a < e.childCount; a++) {
    let c = e.child(a).content;
    const d = a ? 0 : Math.max(0, n - 1), u = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
    (d || u) && (c = ia(He(s).row, new O(c, d, u)).content), l.push(c);
  }
  else if (o == "cell" || o == "header_cell") l.push(n || r ? ia(He(s).row, new O(e, n, r)).content : e);
  else return null;
  return $T(s, l);
}
function $T(t, e) {
  const n = [];
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    for (let s = o.childCount - 1; s >= 0; s--) {
      const { rowspan: l, colspan: a } = o.child(s).attrs;
      for (let c = i; c < i + l; c++) n[c] = (n[c] || 0) + a;
    }
  }
  let r = 0;
  for (let i = 0; i < n.length; i++) r = Math.max(r, n[i]);
  for (let i = 0; i < n.length; i++)
    if (i >= e.length && e.push(A.empty), n[i] < r) {
      const o = He(t).cell.createAndFill(), s = [];
      for (let l = n[i]; l < r; l++) s.push(o);
      e[i] = e[i].append(A.from(s));
    }
  return {
    height: e.length,
    width: r,
    rows: e
  };
}
function ia(t, e) {
  const n = t.createAndFill();
  return new Ha(n).replace(0, n.content.size, e).doc;
}
function BT({ width: t, height: e, rows: n }, r, i) {
  if (t != r) {
    const o = [], s = [];
    for (let l = 0; l < n.length; l++) {
      const a = n[l], c = [];
      for (let d = o[l] || 0, u = 0; d < r; u++) {
        let f = a.child(u % a.childCount);
        d + f.attrs.colspan > r && (f = f.type.createChecked(Pn(f.attrs, f.attrs.colspan, d + f.attrs.colspan - r), f.content)), c.push(f), d += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++) o[l + h] = (o[l + h] || 0) + f.attrs.colspan;
      }
      s.push(A.from(c));
    }
    n = s, t = r;
  }
  if (e != i) {
    const o = [];
    for (let s = 0, l = 0; s < i; s++, l++) {
      const a = [], c = n[l % e];
      for (let d = 0; d < c.childCount; d++) {
        let u = c.child(d);
        s + u.attrs.rowspan > i && (u = u.type.create({
          ...u.attrs,
          rowspan: Math.max(1, i - u.attrs.rowspan)
        }, u.content)), a.push(u);
      }
      o.push(A.from(a));
    }
    n = o, e = i;
  }
  return {
    width: t,
    height: e,
    rows: n
  };
}
function FT(t, e, n, r, i, o, s) {
  const l = t.doc.type.schema, a = He(l);
  let c, d;
  if (i > e.width) for (let u = 0, f = 0; u < e.height; u++) {
    const h = n.child(u);
    f += h.nodeSize;
    const p = [];
    let m;
    h.lastChild == null || h.lastChild.type == a.cell ? m = c || (c = a.cell.createAndFill()) : m = d || (d = a.header_cell.createAndFill());
    for (let g = e.width; g < i; g++) p.push(m);
    t.insert(t.mapping.slice(s).map(f - 1 + r), p);
  }
  if (o > e.height) {
    const u = [];
    for (let p = 0, m = (e.height - 1) * e.width; p < Math.max(e.width, i); p++) {
      const g = p >= e.width ? !1 : n.nodeAt(e.map[m + p]).type == a.header_cell;
      u.push(g ? d || (d = a.header_cell.createAndFill()) : c || (c = a.cell.createAndFill()));
    }
    const f = a.row.create(null, A.from(u)), h = [];
    for (let p = e.height; p < o; p++) h.push(f);
    t.insert(t.mapping.slice(s).map(r + n.nodeSize - 2), h);
  }
  return !!(c || d);
}
function Bu(t, e, n, r, i, o, s, l) {
  if (s == 0 || s == e.height) return !1;
  let a = !1;
  for (let c = i; c < o; c++) {
    const d = s * e.width + c, u = e.map[d];
    if (e.map[d - e.width] == u) {
      a = !0;
      const f = n.nodeAt(u), { top: h, left: p } = e.findCell(u);
      t.setNodeMarkup(t.mapping.slice(l).map(u + r), null, {
        ...f.attrs,
        rowspan: s - h
      }), t.insert(t.mapping.slice(l).map(e.positionAt(s, p, n)), f.type.createAndFill({
        ...f.attrs,
        rowspan: h + f.attrs.rowspan - s
      })), c += f.attrs.colspan - 1;
    }
  }
  return a;
}
function Fu(t, e, n, r, i, o, s, l) {
  if (s == 0 || s == e.width) return !1;
  let a = !1;
  for (let c = i; c < o; c++) {
    const d = c * e.width + s, u = e.map[d];
    if (e.map[d - 1] == u) {
      a = !0;
      const f = n.nodeAt(u), h = e.colCount(u), p = t.mapping.slice(l).map(u + r);
      t.setNodeMarkup(p, null, Pn(f.attrs, s - h, f.attrs.colspan - (s - h))), t.insert(p + f.nodeSize, f.type.createAndFill(Pn(f.attrs, 0, s - h))), c += f.attrs.rowspan - 1;
    }
  }
  return a;
}
function Uu(t, e, n, r, i) {
  let o = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!o) throw new Error("No table found");
  let s = pe.get(o);
  const { top: l, left: a } = r, c = a + i.width, d = l + i.height, u = t.tr;
  let f = 0;
  function h() {
    if (o = n ? u.doc.nodeAt(n - 1) : u.doc, !o) throw new Error("No table found");
    s = pe.get(o), f = u.mapping.maps.length;
  }
  FT(u, s, o, n, c, d, f) && h(), Bu(u, s, o, n, a, c, l, f) && h(), Bu(u, s, o, n, a, c, d, f) && h(), Fu(u, s, o, n, l, d, a, f) && h(), Fu(u, s, o, n, l, d, c, f) && h();
  for (let p = l; p < d; p++) {
    const m = s.positionAt(p, a, o), g = s.positionAt(p, c, o);
    u.replace(u.mapping.slice(f).map(m + n), u.mapping.slice(f).map(g + n), new O(i.rows[p - l], 0, 0));
  }
  h(), u.setSelection(new oe(u.doc.resolve(n + s.positionAt(l, a, o)), u.doc.resolve(n + s.positionAt(d - 1, c - 1, o)))), e(u);
}
const UT = qa({
  ArrowLeft: zi("horiz", -1),
  ArrowRight: zi("horiz", 1),
  ArrowUp: zi("vert", -1),
  ArrowDown: zi("vert", 1),
  "Shift-ArrowLeft": $i("horiz", -1),
  "Shift-ArrowRight": $i("horiz", 1),
  "Shift-ArrowUp": $i("vert", -1),
  "Shift-ArrowDown": $i("vert", 1),
  Backspace: Pi,
  "Mod-Backspace": Pi,
  Delete: Pi,
  "Mod-Delete": Pi
});
function no(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function zi(t, e) {
  return (n, r, i) => {
    if (!i) return !1;
    const o = n.selection;
    if (o instanceof oe) return no(n, r, $.near(o.$headCell, e));
    if (t != "horiz" && !o.empty) return !1;
    const s = dg(i, t, e);
    if (s == null) return !1;
    if (t == "horiz") return no(n, r, $.near(n.doc.resolve(o.head + e), e));
    {
      const l = n.doc.resolve(s), a = rg(l, t, e);
      let c;
      return a ? c = $.near(a, 1) : e < 0 ? c = $.near(n.doc.resolve(l.before(-1)), -1) : c = $.near(n.doc.resolve(l.after(-1)), 1), no(n, r, c);
    }
  };
}
function $i(t, e) {
  return (n, r, i) => {
    if (!i) return !1;
    const o = n.selection;
    let s;
    if (o instanceof oe) s = o;
    else {
      const a = dg(i, t, e);
      if (a == null) return !1;
      s = new oe(n.doc.resolve(a));
    }
    const l = rg(s.$headCell, t, e);
    return l ? no(n, r, new oe(s.$anchorCell, l)) : !1;
  };
}
function WT(t, e) {
  const n = t.state.doc, r = Dn(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new oe(r))), !0) : !1;
}
function jT(t, e, n) {
  if (!ot(t.state)) return !1;
  let r = zT(n);
  const i = t.state.selection;
  if (i instanceof oe) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [A.from(ia(He(t.state.schema).cell, n))]
    });
    const o = i.$anchorCell.node(-1), s = i.$anchorCell.start(-1), l = pe.get(o).rectBetween(i.$anchorCell.pos - s, i.$headCell.pos - s);
    return r = BT(r, l.right - l.left, l.bottom - l.top), Uu(t.state, t.dispatch, s, l, r), !0;
  } else if (r) {
    const o = Os(t.state), s = o.start(-1);
    return Uu(t.state, t.dispatch, s, pe.get(o.node(-1)).findCell(o.pos - s), r), !0;
  } else return !1;
}
function KT(t, e) {
  var n;
  if (e.button != 0 || e.ctrlKey || e.metaKey) return;
  const r = Wu(t, e.target);
  let i;
  if (e.shiftKey && t.state.selection instanceof oe)
    o(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (i = Dn(t.state.selection.$anchor)) != null && ((n = ol(t, e)) === null || n === void 0 ? void 0 : n.pos) != i.pos)
    o(i, e), e.preventDefault();
  else if (!r) return;
  function o(a, c) {
    let d = ol(t, c);
    const u = Yt.getState(t.state) == null;
    if (!d || !gc(a, d)) if (u) d = a;
    else return;
    const f = new oe(a, d);
    if (u || !t.state.selection.eq(f)) {
      const h = t.state.tr.setSelection(f);
      u && h.setMeta(Yt, a.pos), t.dispatch(h);
    }
  }
  function s() {
    t.root.removeEventListener("mouseup", s), t.root.removeEventListener("dragstart", s), t.root.removeEventListener("mousemove", l), Yt.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(Yt, -1));
  }
  function l(a) {
    const c = a, d = Yt.getState(t.state);
    let u;
    if (d != null) u = t.state.doc.resolve(d);
    else if (Wu(t, c.target) != r && (u = ol(t, e), !u))
      return s();
    u && o(u, c);
  }
  t.root.addEventListener("mouseup", s), t.root.addEventListener("dragstart", s), t.root.addEventListener("mousemove", l);
}
function dg(t, e, n) {
  if (!(t.state.selection instanceof N)) return null;
  const { $head: r } = t.state.selection;
  for (let i = r.depth - 1; i >= 0; i--) {
    const o = r.node(i);
    if ((n < 0 ? r.index(i) : r.indexAfter(i)) != (n < 0 ? 0 : o.childCount)) return null;
    if (o.type.spec.tableRole == "cell" || o.type.spec.tableRole == "header_cell") {
      const s = r.before(i), l = e == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
      return t.endOfTextblock(l) ? s : null;
    }
  }
  return null;
}
function Wu(t, e) {
  for (; e && e != t.dom; e = e.parentNode) if (e.nodeName == "TD" || e.nodeName == "TH") return e;
  return null;
}
function ol(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  if (!n) return null;
  let { inside: r, pos: i } = n;
  return r >= 0 && Dn(t.state.doc.resolve(r)) || Dn(t.state.doc.resolve(i));
}
var qT = class {
  constructor(e, n) {
    this.node = e, this.defaultCellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${n}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), oa(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, oa(e, this.colgroup, this.table, this.defaultCellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function oa(t, e, n, r, i, o) {
  let s = 0, l = !0, a = e.firstChild;
  const c = t.firstChild;
  if (c) {
    for (let u = 0, f = 0; u < c.childCount; u++) {
      const { colspan: h, colwidth: p } = c.child(u).attrs;
      for (let m = 0; m < h; m++, f++) {
        const g = i == f ? o : p && p[m], y = g ? g + "px" : "";
        if (s += g || r, g || (l = !1), a)
          a.style.width != y && (a.style.width = y), a = a.nextSibling;
        else {
          const b = document.createElement("col");
          b.style.width = y, e.appendChild(b);
        }
      }
    }
    for (; a; ) {
      var d;
      const u = a.nextSibling;
      (d = a.parentNode) === null || d === void 0 || d.removeChild(a), a = u;
    }
    l ? (n.style.width = s + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = s + "px");
  }
}
const Fe = new se("tableColumnResizing");
function GT({ handleWidth: t = 5, cellMinWidth: e = 25, defaultCellMinWidth: n = 100, View: r = qT, lastColumnResizable: i = !0 } = {}) {
  const o = new re({
    key: Fe,
    state: {
      init(s, l) {
        var a;
        const c = (a = o.spec) === null || a === void 0 || (a = a.props) === null || a === void 0 ? void 0 : a.nodeViews, d = He(l.schema).table.name;
        return r && c && (c[d] = (u, f) => new r(u, n, f)), new JT(-1, !1);
      },
      apply(s, l) {
        return l.apply(s);
      }
    },
    props: {
      attributes: (s) => {
        const l = Fe.getState(s);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (s, l) => {
          XT(s, l, t, i);
        },
        mouseleave: (s) => {
          ZT(s);
        },
        mousedown: (s, l) => {
          YT(s, l, e, n);
        }
      },
      decorations: (s) => {
        const l = Fe.getState(s);
        if (l && l.activeHandle > -1) return rM(s, l.activeHandle);
      },
      nodeViews: {}
    }
  });
  return o;
}
var JT = class ro {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, r = e.getMeta(Fe);
    if (r && r.setHandle != null) return new ro(r.setHandle, !1);
    if (r && r.setDragging !== void 0) return new ro(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let i = e.mapping.map(n.activeHandle, -1);
      return ra(e.doc.resolve(i)) || (i = -1), new ro(i, n.dragging);
    }
    return n;
  }
};
function XT(t, e, n, r) {
  if (!t.editable) return;
  const i = Fe.getState(t.state);
  if (i && !i.dragging) {
    const o = eM(e.target);
    let s = -1;
    if (o) {
      const { left: l, right: a } = o.getBoundingClientRect();
      e.clientX - l <= n ? s = ju(t, e, "left", n) : a - e.clientX <= n && (s = ju(t, e, "right", n));
    }
    if (s != i.activeHandle) {
      if (!r && s !== -1) {
        const l = t.state.doc.resolve(s), a = l.node(-1), c = pe.get(a), d = l.start(-1);
        if (c.colCount(l.pos - d) + l.nodeAfter.attrs.colspan - 1 == c.width - 1) return;
      }
      ug(t, s);
    }
  }
}
function ZT(t) {
  if (!t.editable) return;
  const e = Fe.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && ug(t, -1);
}
function YT(t, e, n, r) {
  var i;
  if (!t.editable) return !1;
  const o = (i = t.dom.ownerDocument.defaultView) !== null && i !== void 0 ? i : window, s = Fe.getState(t.state);
  if (!s || s.activeHandle == -1 || s.dragging) return !1;
  const l = t.state.doc.nodeAt(s.activeHandle), a = QT(t, s.activeHandle, l.attrs);
  t.dispatch(t.state.tr.setMeta(Fe, { setDragging: {
    startX: e.clientX,
    startWidth: a
  } }));
  function c(u) {
    o.removeEventListener("mouseup", c), o.removeEventListener("mousemove", d);
    const f = Fe.getState(t.state);
    f?.dragging && (tM(t, f.activeHandle, Ku(f.dragging, u, n)), t.dispatch(t.state.tr.setMeta(Fe, { setDragging: null })));
  }
  function d(u) {
    if (!u.which) return c(u);
    const f = Fe.getState(t.state);
    if (f && f.dragging) {
      const h = Ku(f.dragging, u, n);
      qu(t, f.activeHandle, h, r);
    }
  }
  return qu(t, s.activeHandle, a, r), o.addEventListener("mouseup", c), o.addEventListener("mousemove", d), e.preventDefault(), !0;
}
function QT(t, e, { colspan: n, colwidth: r }) {
  const i = r && r[r.length - 1];
  if (i) return i;
  const o = t.domAtPos(e);
  let s = o.node.childNodes[o.offset].offsetWidth, l = n;
  if (r)
    for (let a = 0; a < n; a++) r[a] && (s -= r[a], l--);
  return s / l;
}
function eM(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; ) t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function ju(t, e, n, r) {
  const i = n == "right" ? -r : r, o = t.posAtCoords({
    left: e.clientX + i,
    top: e.clientY
  });
  if (!o) return -1;
  const { pos: s } = o, l = Dn(t.state.doc.resolve(s));
  if (!l) return -1;
  if (n == "right") return l.pos;
  const a = pe.get(l.node(-1)), c = l.start(-1), d = a.map.indexOf(l.pos - c);
  return d % a.width == 0 ? -1 : c + a.map[d - 1];
}
function Ku(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function ug(t, e) {
  t.dispatch(t.state.tr.setMeta(Fe, { setHandle: e }));
}
function tM(t, e, n) {
  const r = t.state.doc.resolve(e), i = r.node(-1), o = pe.get(i), s = r.start(-1), l = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1, a = t.state.tr;
  for (let c = 0; c < o.height; c++) {
    const d = c * o.width + l;
    if (c && o.map[d] == o.map[d - o.width]) continue;
    const u = o.map[d], f = i.nodeAt(u).attrs, h = f.colspan == 1 ? 0 : l - o.colCount(u);
    if (f.colwidth && f.colwidth[h] == n) continue;
    const p = f.colwidth ? f.colwidth.slice() : nM(f.colspan);
    p[h] = n, a.setNodeMarkup(s + u, null, {
      ...f,
      colwidth: p
    });
  }
  a.docChanged && t.dispatch(a);
}
function qu(t, e, n, r) {
  const i = t.state.doc.resolve(e), o = i.node(-1), s = i.start(-1), l = pe.get(o).colCount(i.pos - s) + i.nodeAfter.attrs.colspan - 1;
  let a = t.domAtPos(i.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; ) a = a.parentNode;
  a && oa(o, a.firstChild, a, r, l, n);
}
function nM(t) {
  return Array(t).fill(0);
}
function rM(t, e) {
  const n = [], r = t.doc.resolve(e), i = r.node(-1);
  if (!i) return Z.empty;
  const o = pe.get(i), s = r.start(-1), l = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < o.height; c++) {
    const d = l + c * o.width;
    if ((l == o.width - 1 || o.map[d] != o.map[d + 1]) && (c == 0 || o.map[d] != o.map[d - o.width])) {
      var a;
      const u = o.map[d], f = s + u + i.nodeAt(u).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", !((a = Fe.getState(t)) === null || a === void 0) && a.dragging && n.push(ve.node(s + u, s + u + i.nodeAt(u).nodeSize, { class: "column-resize-dragging" })), n.push(ve.widget(f, h));
    }
  }
  return Z.create(t.doc, n);
}
function iM({ allowTableNodeSelection: t = !1 } = {}) {
  return new re({
    key: Yt,
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const r = e.getMeta(Yt);
        if (r != null) return r == -1 ? null : r;
        if (n == null || !e.docChanged) return n;
        const { deleted: i, pos: o } = e.mapping.mapResult(n);
        return i ? null : o;
      }
    },
    props: {
      decorations: yT,
      handleDOMEvents: { mousedown: KT },
      createSelectionBetween(e) {
        return Yt.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: WT,
      handleKeyDown: UT,
      handlePaste: jT
    },
    appendTransaction(e, n, r) {
      return wT(r, lg(r, n), t);
    }
  });
}
function oM(t, e) {
  const n = Math.min(t.top, e.top), r = Math.max(t.bottom, e.bottom), i = Math.min(t.left, e.left), s = Math.max(t.right, e.right) - i, l = r - n, a = i, c = n;
  return new DOMRect(a, c, s, l);
}
var sM = class {
  constructor({
    editor: t,
    element: e,
    view: n,
    pluginKey: r = "bubbleMenu",
    updateDelay: i = 250,
    resizeDelay: o = 60,
    shouldShow: s,
    appendTo: l,
    getReferencedVirtualElement: a,
    options: c
  }) {
    this.preventHide = !1, this.isVisible = !1, this.scrollTarget = window, this.floatingUIOptions = {
      strategy: "absolute",
      placement: "top",
      offset: 8,
      flip: {},
      shift: {},
      arrow: !1,
      size: !1,
      autoPlacement: !1,
      hide: !1,
      inline: !1,
      onShow: void 0,
      onHide: void 0,
      onUpdate: void 0,
      onDestroy: void 0
    }, this.shouldShow = ({
      view: u,
      state: f,
      from: h,
      to: p
    }) => {
      const { doc: m, selection: g } = f, { empty: y } = g, b = !m.textBetween(h, p).length && ps(f.selection), w = this.element.contains(document.activeElement);
      return !(!(u.hasFocus() || w) || y || b || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.resizeHandler = () => {
      this.resizeDebounceTimer && clearTimeout(this.resizeDebounceTimer), this.resizeDebounceTimer = window.setTimeout(() => {
        this.updatePosition();
      }, this.resizeDelay);
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: u }) => {
      var f;
      if (this.editor.isDestroyed) {
        this.destroy();
        return;
      }
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      u?.relatedTarget && ((f = this.element.parentNode) != null && f.contains(u.relatedTarget)) || u?.relatedTarget !== this.editor.view.dom && this.hide();
    }, this.handleDebouncedUpdate = (u, f) => {
      const h = !f?.selection.eq(u.state.selection), p = !f?.doc.eq(u.state.doc);
      !h && !p || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(u, h, p, f);
      }, this.updateDelay));
    }, this.updateHandler = (u, f, h, p) => {
      const { composing: m } = u;
      if (m || !f && !h)
        return;
      if (!this.getShouldShow(p)) {
        this.hide();
        return;
      }
      this.show(), this.updatePosition();
    }, this.transactionHandler = ({ transaction: u }) => {
      const f = u.getMeta(this.pluginKey);
      f === "updatePosition" ? this.updatePosition() : f && typeof f == "object" && f.type === "updateOptions" ? this.updateOptions(f.options) : f === "hide" ? this.hide() : f === "show" && (this.updatePosition(), this.show());
    };
    var d;
    this.editor = t, this.element = e, this.view = n, this.pluginKey = r, this.updateDelay = i, this.resizeDelay = o, this.appendTo = l, this.scrollTarget = (d = c?.scrollTarget) != null ? d : window, this.getReferencedVirtualElement = a, this.floatingUIOptions = {
      ...this.floatingUIOptions,
      ...c
    }, this.element.tabIndex = 0, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.editor.on("transaction", this.transactionHandler), window.addEventListener("resize", this.resizeHandler), this.scrollTarget.addEventListener("scroll", this.resizeHandler), this.update(n, n.state), this.getShouldShow() && (this.show(), this.updatePosition());
  }
  get middlewares() {
    const t = [];
    return this.floatingUIOptions.flip && t.push(
      Zm(
        typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0
      )
    ), this.floatingUIOptions.shift && t.push(
      Xm(
        typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0
      )
    ), this.floatingUIOptions.offset && t.push(
      Gm(
        typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0
      )
    ), this.floatingUIOptions.arrow && t.push(eg(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && t.push(
      Ym(
        typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0
      )
    ), this.floatingUIOptions.autoPlacement && t.push(
      Jm(
        typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0
      )
    ), this.floatingUIOptions.hide && t.push(
      Qm(
        typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0
      )
    ), this.floatingUIOptions.inline && t.push(
      tg(
        typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0
      )
    ), t;
  }
  get virtualElement() {
    var t, e, n;
    const { selection: r } = this.editor.state, i = (t = this.getReferencedVirtualElement) == null ? void 0 : t.call(this);
    if (i)
      return i;
    if (!((n = (e = this.view) == null ? void 0 : e.dom) != null && n.parentNode))
      return;
    const o = Np(this.view, r.from, r.to);
    let s = {
      getBoundingClientRect: () => o,
      getClientRects: () => [o]
    };
    if (r instanceof z) {
      let l = this.view.nodeDOM(r.from);
      const a = l.dataset.nodeViewWrapper ? l : l.querySelector("[data-node-view-wrapper]");
      a && (l = a), l && (s = {
        getBoundingClientRect: () => l.getBoundingClientRect(),
        getClientRects: () => [l.getBoundingClientRect()]
      });
    }
    if (r instanceof oe) {
      const { $anchorCell: l, $headCell: a } = r, c = l ? l.pos : a.pos, d = a ? a.pos : l.pos, u = this.view.nodeDOM(c), f = this.view.nodeDOM(d);
      if (!u || !f)
        return;
      const h = u === f ? u.getBoundingClientRect() : oM(
        u.getBoundingClientRect(),
        f.getBoundingClientRect()
      );
      s = {
        getBoundingClientRect: () => h,
        getClientRects: () => [h]
      };
    }
    return s;
  }
  updatePosition() {
    if (!this.isVisible)
      return;
    const t = this.virtualElement;
    t && ng(t, this.element, {
      placement: this.floatingUIOptions.placement,
      strategy: this.floatingUIOptions.strategy,
      middleware: this.middlewares
    }).then(({ x: e, y: n, strategy: r, middlewareData: i }) => {
      var o, s;
      if (!(!this.isVisible || this.editor.isDestroyed || !this.element.isConnected)) {
        if ((o = i.hide) != null && o.referenceHidden || (s = i.hide) != null && s.escaped) {
          this.element.style.visibility = "hidden";
          return;
        }
        this.element.style.visibility = "visible", this.element.style.width = "max-content", this.element.style.position = r, this.element.style.left = `${e}px`, this.element.style.top = `${n}px`, this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate();
      }
    });
  }
  update(t, e) {
    const { state: n } = t, r = n.selection.from !== n.selection.to;
    if (this.updateDelay > 0 && r) {
      this.handleDebouncedUpdate(t, e);
      return;
    }
    const i = !e?.selection.eq(t.state.selection), o = !e?.doc.eq(t.state.doc);
    this.updateHandler(t, i, o, e);
  }
  getShouldShow(t) {
    var e;
    const { state: n } = this.view, { selection: r } = n, { ranges: i } = r, o = Math.min(...i.map((a) => a.$from.pos)), s = Math.max(...i.map((a) => a.$to.pos));
    return ((e = this.shouldShow) == null ? void 0 : e.call(this, {
      editor: this.editor,
      element: this.element,
      view: this.view,
      state: n,
      oldState: t,
      from: o,
      to: s
    })) || !1;
  }
  show() {
    var t;
    if (this.isVisible)
      return;
    this.element.style.visibility = "visible", this.element.style.opacity = "1";
    const e = typeof this.appendTo == "function" ? this.appendTo() : this.appendTo;
    (t = e ?? this.view.dom.parentElement) == null || t.appendChild(this.element), this.floatingUIOptions.onShow && this.floatingUIOptions.onShow(), this.isVisible = !0;
  }
  hide() {
    this.isVisible && (this.element.style.visibility = "hidden", this.element.style.opacity = "0", this.element.remove(), this.floatingUIOptions.onHide && this.floatingUIOptions.onHide(), this.isVisible = !1);
  }
  updateOptions(t) {
    var e;
    if (t.updateDelay !== void 0 && (this.updateDelay = t.updateDelay), t.resizeDelay !== void 0 && (this.resizeDelay = t.resizeDelay), t.appendTo !== void 0 && (this.appendTo = t.appendTo), t.getReferencedVirtualElement !== void 0 && (this.getReferencedVirtualElement = t.getReferencedVirtualElement), t.shouldShow !== void 0 && t.shouldShow && (this.shouldShow = t.shouldShow), t.options !== void 0) {
      const n = (e = t.options.scrollTarget) != null ? e : window;
      n !== this.scrollTarget && (this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.scrollTarget = n, this.scrollTarget.addEventListener("scroll", this.resizeHandler)), this.floatingUIOptions = {
        ...this.floatingUIOptions,
        ...t.options
      };
    }
  }
  destroy() {
    this.hide(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), window.removeEventListener("resize", this.resizeHandler), this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler), this.editor.off("transaction", this.transactionHandler), this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy();
  }
}, lM = (t) => new re({
  key: typeof t.pluginKey == "string" ? new se(t.pluginKey) : t.pluginKey,
  view: (e) => new sM({ view: e, ...t })
}), aM = te({
  name: "BubbleMenu",
  inheritAttrs: !1,
  props: {
    pluginKey: {
      type: [String, Object],
      default: void 0
    },
    editor: {
      type: Object,
      required: !0
    },
    updateDelay: {
      type: Number,
      default: void 0
    },
    resizeDelay: {
      type: Number,
      default: void 0
    },
    options: {
      type: Object,
      default: () => ({})
    },
    appendTo: {
      type: [Object, Function],
      default: void 0
    },
    shouldShow: {
      type: Function,
      default: null
    },
    getReferencedVirtualElement: {
      type: Function,
      default: void 0
    }
  },
  setup(t, { slots: e, attrs: n }) {
    var r;
    const i = Y(null), o = (r = t.pluginKey) != null ? r : new se("bubbleMenu");
    return Aa(() => {
      const {
        editor: s,
        options: l,
        resizeDelay: a,
        appendTo: c,
        shouldShow: d,
        getReferencedVirtualElement: u,
        updateDelay: f
      } = t, h = i.value;
      h && (h.style.visibility = "hidden", h.style.position = "absolute", h.remove(), Rf(() => {
        s.registerPlugin(
          lM({
            editor: s,
            element: h,
            options: l,
            pluginKey: o,
            resizeDelay: a,
            appendTo: c,
            shouldShow: d,
            getReferencedVirtualElement: u,
            updateDelay: f
          })
        );
      }));
    }), Ca(() => {
      const { editor: s } = t;
      s.unregisterPlugin(o);
    }), () => {
      var s;
      return zn("div", { ref: i, ...n }, (s = e.default) == null ? void 0 : s.call(e));
    };
  }
}), cM = class {
  constructor({
    editor: t,
    element: e,
    view: n,
    pluginKey: r = "floatingMenu",
    updateDelay: i = 250,
    resizeDelay: o = 60,
    options: s,
    appendTo: l,
    shouldShow: a
  }) {
    this.preventHide = !1, this.isVisible = !1, this.scrollTarget = window, this.shouldShow = ({ view: d, state: u }) => {
      const { selection: f } = u, { $anchor: h, empty: p } = f, m = h.depth === 1, g = h.parent.isTextblock && !h.parent.type.spec.code && !h.parent.textContent && h.parent.childCount === 0 && !this.getTextContent(h.parent);
      return !(!d.hasFocus() || !p || !m || !g || !this.editor.isEditable);
    }, this.floatingUIOptions = {
      strategy: "absolute",
      placement: "right",
      offset: 8,
      flip: {},
      shift: {},
      arrow: !1,
      size: !1,
      autoPlacement: !1,
      hide: !1,
      inline: !1
    }, this.updateHandler = (d, u, f, h) => {
      const { composing: p } = d;
      if (p || !u && !f)
        return;
      if (!this.getShouldShow(h)) {
        this.hide();
        return;
      }
      this.updatePosition(), this.show();
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: d }) => {
      var u;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      d?.relatedTarget && ((u = this.element.parentNode) != null && u.contains(d.relatedTarget)) || d?.relatedTarget !== this.editor.view.dom && this.hide();
    }, this.transactionHandler = ({ transaction: d }) => {
      const u = d.getMeta(this.pluginKey);
      u === "updatePosition" ? this.updatePosition() : u && typeof u == "object" && u.type === "updateOptions" ? this.updateOptions(u.options) : u === "hide" ? this.hide() : u === "show" && (this.updatePosition(), this.show());
    }, this.resizeHandler = () => {
      this.resizeDebounceTimer && clearTimeout(this.resizeDebounceTimer), this.resizeDebounceTimer = window.setTimeout(() => {
        this.updatePosition();
      }, this.resizeDelay);
    };
    var c;
    this.editor = t, this.element = e, this.view = n, this.pluginKey = r, this.updateDelay = i, this.resizeDelay = o, this.appendTo = l, this.scrollTarget = (c = s?.scrollTarget) != null ? c : window, this.floatingUIOptions = {
      ...this.floatingUIOptions,
      ...s
    }, this.element.tabIndex = 0, a && (this.shouldShow = a), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.editor.on("transaction", this.transactionHandler), window.addEventListener("resize", this.resizeHandler), this.scrollTarget.addEventListener("scroll", this.resizeHandler), this.update(n, n.state), this.getShouldShow() && (this.show(), this.updatePosition());
  }
  getTextContent(t) {
    return Lp(t, { textSerializers: Qa(this.editor.schema) });
  }
  get middlewares() {
    const t = [];
    return this.floatingUIOptions.flip && t.push(
      Zm(
        typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0
      )
    ), this.floatingUIOptions.shift && t.push(
      Xm(
        typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0
      )
    ), this.floatingUIOptions.offset && t.push(
      Gm(
        typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0
      )
    ), this.floatingUIOptions.arrow && t.push(eg(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && t.push(
      Ym(
        typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0
      )
    ), this.floatingUIOptions.autoPlacement && t.push(
      Jm(
        typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0
      )
    ), this.floatingUIOptions.hide && t.push(
      Qm(
        typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0
      )
    ), this.floatingUIOptions.inline && t.push(
      tg(
        typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0
      )
    ), t;
  }
  getShouldShow(t) {
    var e;
    const { state: n } = this.view, { selection: r } = n, { ranges: i } = r, o = Math.min(...i.map((a) => a.$from.pos)), s = Math.max(...i.map((a) => a.$to.pos));
    return (e = this.shouldShow) == null ? void 0 : e.call(this, {
      editor: this.editor,
      view: this.view,
      state: n,
      oldState: t,
      from: o,
      to: s
    });
  }
  updateOptions(t) {
    var e;
    if (t.updateDelay !== void 0 && (this.updateDelay = t.updateDelay), t.resizeDelay !== void 0 && (this.resizeDelay = t.resizeDelay), t.appendTo !== void 0 && (this.appendTo = t.appendTo), t.shouldShow !== void 0 && t.shouldShow && (this.shouldShow = t.shouldShow), t.options !== void 0) {
      const n = (e = t.options.scrollTarget) != null ? e : window;
      n !== this.scrollTarget && (this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.scrollTarget = n, this.scrollTarget.addEventListener("scroll", this.resizeHandler)), this.floatingUIOptions = {
        ...this.floatingUIOptions,
        ...t.options
      };
    }
  }
  updatePosition() {
    var t, e;
    if (!((e = (t = this.view) == null ? void 0 : t.dom) != null && e.parentNode))
      return;
    const { selection: n } = this.editor.state, r = Np(this.view, n.from, n.to);
    ng({
      getBoundingClientRect: () => r,
      getClientRects: () => [r]
    }, this.element, {
      placement: this.floatingUIOptions.placement,
      strategy: this.floatingUIOptions.strategy,
      middleware: this.middlewares
    }).then(({ x: o, y: s, strategy: l, middlewareData: a }) => {
      var c, d;
      if ((c = a.hide) != null && c.referenceHidden || (d = a.hide) != null && d.escaped) {
        this.element.style.visibility = "hidden";
        return;
      }
      this.element.style.visibility = "visible", this.element.style.width = "max-content", this.element.style.position = l, this.element.style.left = `${o}px`, this.element.style.top = `${s}px`, this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate();
    });
  }
  update(t, e) {
    const n = !e?.selection.eq(t.state.selection), r = !e?.doc.eq(t.state.doc);
    this.updateHandler(t, n, r, e);
  }
  show() {
    var t;
    if (this.isVisible)
      return;
    this.element.style.visibility = "visible", this.element.style.opacity = "1";
    const e = typeof this.appendTo == "function" ? this.appendTo() : this.appendTo;
    (t = e ?? this.view.dom.parentElement) == null || t.appendChild(this.element), this.floatingUIOptions.onShow && this.floatingUIOptions.onShow(), this.isVisible = !0;
  }
  hide() {
    this.isVisible && (this.element.style.visibility = "hidden", this.element.style.opacity = "0", this.element.remove(), this.floatingUIOptions.onHide && this.floatingUIOptions.onHide(), this.isVisible = !1);
  }
  destroy() {
    this.hide(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), window.removeEventListener("resize", this.resizeHandler), this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler), this.editor.off("transaction", this.transactionHandler), this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy();
  }
}, dM = (t) => new re({
  key: typeof t.pluginKey == "string" ? new se(t.pluginKey) : t.pluginKey,
  view: (e) => new cM({ view: e, ...t })
});
te({
  name: "FloatingMenu",
  inheritAttrs: !1,
  props: {
    pluginKey: {
      // TODO: TypeScript breaks :(
      // type: [String, Object as PropType<Exclude<FloatingMenuPluginProps['pluginKey'], string>>],
      type: null,
      default: void 0
    },
    editor: {
      type: Object,
      required: !0
    },
    updateDelay: {
      type: Number,
      default: void 0
    },
    resizeDelay: {
      type: Number,
      default: void 0
    },
    options: {
      type: Object,
      default: () => ({})
    },
    appendTo: {
      type: [Object, Function],
      default: void 0
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(t, { slots: e, attrs: n }) {
    var r;
    const i = Y(null), o = (r = t.pluginKey) != null ? r : new se("floatingMenu");
    return Aa(() => {
      const { editor: s, updateDelay: l, resizeDelay: a, options: c, appendTo: d, shouldShow: u } = t, f = i.value;
      f && (f.style.visibility = "hidden", f.style.position = "absolute", f.remove(), s.registerPlugin(
        dM({
          pluginKey: o,
          editor: s,
          element: f,
          updateDelay: l,
          resizeDelay: a,
          options: c,
          appendTo: d,
          shouldShow: u
        })
      ));
    }), Ca(() => {
      const { editor: s } = t;
      s.unregisterPlugin(o);
    }), () => {
      var s;
      return zn("div", { ref: i, ...n }, (s = e.default) == null ? void 0 : s.call(e));
    };
  }
});
const uM = /* @__PURE__ */ te({
  __name: "BubbleMenu",
  props: {
    editor: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, { t: n } = Ut(), r = W(() => {
      const l = e.editor.state.selection, a = s(), c = l.node?.type.name === "image", d = l.node?.type.name === "video", u = l instanceof N;
      if (a) return "link";
      if (c) return "image";
      if (d) return "video";
      if (u) return "text";
    }), i = W(() => {
      const { extensions: l = [] } = e.editor.extensionManager, a = l.find((u) => u.name === "base-kit");
      if (!a) return {};
      const { button: c } = a.options?.bubble ?? {};
      return c ? c({
        editor: e.editor,
        extension: a,
        t: T(n)
      }) : {};
    }), o = W(() => r.value ? T(i)?.[r.value] ?? [] : []);
    function s() {
      const { schema: l } = e.editor, a = l.marks.link;
      return a ? e.editor.isActive(a.name) : !1;
    }
    return (l, a) => {
      const c = gi, d = gr, u = mi, f = mr;
      return Vf((R(), U(T(aM), { editor: l.editor }, {
        default: L(() => [
          H(f, { class: "vuetify-pro-tiptap-editor__menu-bubble" }, {
            default: L(() => [
              H(u, { class: "d-flex pa-0" }, {
                default: L(() => [
                  H(d, {
                    density: "compact",
                    flat: "",
                    height: "auto",
                    class: "py-1 ps-1"
                  }, {
                    default: L(() => [
                      (R(!0), de(Le, null, Ze(o.value, (h, p) => (R(), de(Le, { key: p }, [
                        h.type === "divider" ? (R(), U(c, {
                          key: 0,
                          vertical: "",
                          class: "mx-1 me-2"
                        })) : (R(), U(Xr(h.component), er({
                          key: 1,
                          ref_for: !0
                        }, h.componentProps, {
                          editor: l.editor,
                          disabled: l.disabled || h.componentProps?.disabled
                        }), Ta({ _: 2 }, [
                          Ze(h.componentSlots, (m, g, y) => ({
                            name: `${g}`,
                            fn: L((b) => [
                              (R(), U(Xr(m), er({ ref_for: !0 }, b?.props), null, 16))
                            ])
                          }))
                        ]), 1040, ["editor", "disabled"]))
                      ], 64))), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["editor"])), [
        [Nf, o.value.length > 0]
      ]);
    };
  }
}), fM = /* @__PURE__ */ te({
  __name: "TiptapToolbar",
  props: {
    editor: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, { t: n } = Ut(), r = W(() => {
      const o = [...e.editor.extensionManager.extensions].sort((l, a) => {
        const c = l.options.sort ?? -1, d = a.options.sort ?? -1;
        return c - d;
      });
      let s = [];
      for (const l of o) {
        const { button: a, divider: c = !1, spacer: d = !1 } = l.options;
        if (!a || !QC(a)) continue;
        const u = a({
          editor: e.editor,
          extension: l,
          t: T(n)
        });
        if (Array.isArray(u)) {
          const f = u.map((h, p) => ({
            button: h,
            divider: p === u.length - 1 ? c : !1,
            spacer: p === 0 ? d : !1
          }));
          s = [...s, ...f];
          continue;
        }
        s.push({ button: u, divider: c, spacer: d });
      }
      return s;
    });
    return (i, o) => {
      const s = yi, l = gi, a = gr;
      return R(), U(a, er(i.$attrs, {
        density: "compact",
        flat: "",
        height: "auto",
        class: "py-1 ps-1"
      }), {
        default: L(() => [
          (R(!0), de(Le, null, Ze(r.value, (c, d) => (R(), de(Le, { key: d }, [
            c.spacer ? (R(), U(s, { key: 0 })) : $e("", !0),
            (R(), U(Xr(c.button.component), er({ ref_for: !0 }, c.button.componentProps, {
              editor: i.editor,
              disabled: i.disabled || c.button.componentProps?.disabled
            }), Ta({ _: 2 }, [
              Ze(c.button.componentSlots, (u, f, h) => ({
                name: `${f}`,
                fn: L((p) => [
                  (R(), U(Xr(u), er({ ref_for: !0 }, p?.props), null, 16))
                ])
              }))
            ]), 1040, ["editor", "disabled"])),
            c.divider ? (R(), U(l, {
              key: 1,
              vertical: "",
              class: "mx-1 me-2"
            })) : $e("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 16);
    };
  }
}), hM = { class: "text-overline me-4" }, pM = { class: "text-overline" }, DH = /* @__PURE__ */ te({
  inheritAttrs: !1,
  __name: "VuetifyTiptap",
  props: {
    modelValue: { default: "" },
    markdownTheme: { type: [String, Boolean], default: void 0 },
    output: { default: "html" },
    dark: { type: Boolean, default: void 0 },
    dense: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !0 },
    flat: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    label: { default: void 0 },
    hideToolbar: { type: Boolean, default: !1 },
    disableToolbar: { type: Boolean, default: !1 },
    hideBubble: { type: Boolean, default: !1 },
    removeDefaultWrapper: { type: Boolean, default: !1 },
    maxWidth: { default: void 0 },
    minHeight: { default: void 0 },
    maxHeight: { default: void 0 },
    extensions: { default: () => [] },
    editorClass: { default: void 0 },
    errorMessages: { default: () => [] }
  },
  emits: ["enter", "change", "update:modelValue", "update:markdownTheme"],
  setup(t, { expose: e, emit: n }) {
    const r = t, i = n, o = L1(), s = Ma(), { state: l, isFullscreen: a } = fA(), { markdownThemeStyle: c } = Om(
      W(() => r.markdownTheme),
      (v) => {
        i("update:markdownTheme", v);
      }
    ), d = W(() => {
      const v = XC(r.extensions, l.extensions, "name");
      return [...l.extensions.map((k, S) => {
        const C = r.extensions.find((E) => E.name === k.name);
        return C ? k.configure(C.options) : k;
      }), ...v].map((k, S) => k.configure({ sort: S }));
    }), u = Y(r.modelValue), f = new nk({
      content: r.modelValue,
      editorProps: {
        handleKeyDown: Pr(function(v, x) {
          return x.key === "Enter" && o.enter && !x.shiftKey ? (i("enter"), !0) : !1;
        }, Wl)
      },
      onUpdate: Pr(({ editor: v }) => {
        const x = y(v, r.output);
        u.value = x, i("update:modelValue", x), i("change", { editor: v, output: x });
      }, Wl),
      extensions: T(d),
      autofocus: !1,
      editable: !r.disabled,
      injectCSS: !0
    }), { t: h } = Ut(), p = W(() => pr(r.dark) ? r.dark : pr(s.current.value.dark) ? s.current.value.dark : !1), m = W(() => [{
      __dark: T(p),
      ...T(c)
    }, r.editorClass]), g = W(() => {
      const v = $r(r.maxWidth), x = {
        maxWidth: v,
        width: v ? "100%" : void 0,
        margin: v ? "0 auto" : void 0,
        backgroundColor: T(p) ? "#1E1E1E" : "#FFFFFF"
      };
      if (T(a)) return { height: "100%", overflowY: "auto", ...x };
      const k = $r(r.minHeight), S = $r(r.maxHeight);
      return {
        minHeight: k,
        maxHeight: S,
        overflowY: "auto",
        ...x
      };
    });
    function y(v, x) {
      return r.removeDefaultWrapper ? x === "html" ? v.isEmpty ? "" : v.getHTML() : x === "json" ? v.isEmpty ? {} : v.getJSON() : x === "text" ? v.isEmpty ? "" : v.getText() : "" : x === "html" ? v.getHTML() : x === "json" ? v.getJSON() : x === "text" ? v.getText() : "";
    }
    const b = Pr((v) => {
      if (!f) return;
      const x = y(f, r.output);
      if (xu(x, v) || xu(u.value, v)) return;
      const { from: k, to: S } = f.state.selection;
      f.commands.setContent(v, { emitUpdate: !1 }), f.commands.setTextSelection({ from: k, to: S });
    }, sk), w = (v) => f?.setEditable(!v);
    return _t(() => r.modelValue, b), _t(() => r.disabled, w), O1(() => f?.destroy()), e({ editor: f }), (v, x) => {
      const k = y1, S = gi, C = yi, E = gr, _ = mr, I = g1, B = Mf;
      return R(), U(H1, {
        to: "body",
        disabled: !T(a)
      }, [
        T(f) ? (R(), de("div", {
          key: 0,
          class: dt(["vuetify-pro-tiptap", { dense: v.dense }])
        }, [
          H(B, {
            theme: p.value ? "dark" : "light"
          }, {
            default: L(() => [
              v.hideBubble ? $e("", !0) : (R(), U(uM, {
                key: 0,
                editor: T(f),
                disabled: v.disableToolbar
              }, null, 8, ["editor", "disabled"])),
              H(I, {
                class: "pt-0",
                "hide-details": "auto",
                "error-messages": v.errorMessages
              }, {
                default: L(() => [
                  H(_, er({
                    flat: v.flat,
                    outlined: v.outlined,
                    color: p.value ? "grey-darken-4" : "grey-lighten-4"
                  }, v.$attrs, {
                    style: {
                      borderColor: v.$attrs["error-messages"] ? "#ff5252" : void 0,
                      width: "100%"
                    },
                    class: ["vuetify-pro-tiptap-editor", { "vuetify-pro-tiptap-editor--fullscreen": T(a) }]
                  }), {
                    default: L(() => [
                      v.label && !T(a) ? (R(), de(Le, { key: 0 }, [
                        H(k, {
                          class: dt(p.value ? "bg-grey-darken-3" : "bg-grey-lighten-3")
                        }, {
                          default: L(() => [
                            Dt(Ae(v.label), 1)
                          ]),
                          _: 1
                        }, 8, ["class"]),
                        H(S)
                      ], 64)) : $e("", !0),
                      v.hideToolbar ? $e("", !0) : (R(), U(fM, {
                        key: 1,
                        class: "vuetify-pro-tiptap-editor__toolbar",
                        editor: T(f),
                        disabled: v.disableToolbar
                      }, null, 8, ["editor", "disabled"])),
                      ut(v.$slots, "editor", Nc(Ic({ editor: T(f), props: { class: "vuetify-pro-tiptap-editor__content", "data-testid": "value" } })), () => [
                        H(T(rk), {
                          class: dt(["vuetify-pro-tiptap-editor__content", m.value]),
                          style: tr(g.value),
                          editor: T(f),
                          "data-testid": "value"
                        }, null, 8, ["class", "style", "editor"])
                      ]),
                      ut(v.$slots, "bottom", Nc(Ic({ editor: T(f) })), () => [
                        H(E, {
                          class: "px-4",
                          density: "compact",
                          flat: ""
                        }, {
                          default: L(() => [
                            H(C),
                            T(eA)(T(f), "characterCount") ? (R(), de(Le, { key: 0 }, [
                              De("span", hM, Ae(T(f).storage.characterCount.words()) + " " + Ae(T(h)("editor.words")), 1),
                              De("span", pM, Ae(T(f).storage.characterCount.characters()) + " " + Ae(T(h)("editor.characters")), 1)
                            ], 64)) : $e("", !0)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 3
                  }, 16, ["flat", "outlined", "color", "style", "class"])
                ]),
                _: 3
              }, 8, ["error-messages"])
            ]),
            _: 3
          }, 8, ["theme"])
        ], 2)) : $e("", !0)
      ], 8, ["disabled"]);
    };
  }
});
function mM(t, e, n) {
  if (typeof window > "u")
    throw new Error(
      "getHTMLFromFragment can only be used in a browser environment\nIf you want to use this in a Node environment, use the `@tiptap/html/server` import instead."
    );
  const r = window.document.createElement("div");
  return fn.fromSchema(e).serializeFragment(
    t.content,
    {
      document: window.document
    },
    r
  ), r.innerHTML;
}
function gM(t, e) {
  if (typeof window > "u")
    throw new Error(
      "generateHTML can only be used in a browser environment\nIf you want to use this in a Node environment, use the `@tiptap/html/server` import instead."
    );
  const n = Vv(e), r = tn.fromJSON(n, t);
  return mM(r, n);
}
function yM(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Bi = { exports: {} }, ce = {}, Fi = { exports: {} }, bn = {}, Gu;
function fg() {
  if (Gu) return bn;
  Gu = 1;
  function t() {
    var o = {};
    return o["align-content"] = !1, o["align-items"] = !1, o["align-self"] = !1, o["alignment-adjust"] = !1, o["alignment-baseline"] = !1, o.all = !1, o["anchor-point"] = !1, o.animation = !1, o["animation-delay"] = !1, o["animation-direction"] = !1, o["animation-duration"] = !1, o["animation-fill-mode"] = !1, o["animation-iteration-count"] = !1, o["animation-name"] = !1, o["animation-play-state"] = !1, o["animation-timing-function"] = !1, o.azimuth = !1, o["backface-visibility"] = !1, o.background = !0, o["background-attachment"] = !0, o["background-clip"] = !0, o["background-color"] = !0, o["background-image"] = !0, o["background-origin"] = !0, o["background-position"] = !0, o["background-repeat"] = !0, o["background-size"] = !0, o["baseline-shift"] = !1, o.binding = !1, o.bleed = !1, o["bookmark-label"] = !1, o["bookmark-level"] = !1, o["bookmark-state"] = !1, o.border = !0, o["border-bottom"] = !0, o["border-bottom-color"] = !0, o["border-bottom-left-radius"] = !0, o["border-bottom-right-radius"] = !0, o["border-bottom-style"] = !0, o["border-bottom-width"] = !0, o["border-collapse"] = !0, o["border-color"] = !0, o["border-image"] = !0, o["border-image-outset"] = !0, o["border-image-repeat"] = !0, o["border-image-slice"] = !0, o["border-image-source"] = !0, o["border-image-width"] = !0, o["border-left"] = !0, o["border-left-color"] = !0, o["border-left-style"] = !0, o["border-left-width"] = !0, o["border-radius"] = !0, o["border-right"] = !0, o["border-right-color"] = !0, o["border-right-style"] = !0, o["border-right-width"] = !0, o["border-spacing"] = !0, o["border-style"] = !0, o["border-top"] = !0, o["border-top-color"] = !0, o["border-top-left-radius"] = !0, o["border-top-right-radius"] = !0, o["border-top-style"] = !0, o["border-top-width"] = !0, o["border-width"] = !0, o.bottom = !1, o["box-decoration-break"] = !0, o["box-shadow"] = !0, o["box-sizing"] = !0, o["box-snap"] = !0, o["box-suppress"] = !0, o["break-after"] = !0, o["break-before"] = !0, o["break-inside"] = !0, o["caption-side"] = !1, o.chains = !1, o.clear = !0, o.clip = !1, o["clip-path"] = !1, o["clip-rule"] = !1, o.color = !0, o["color-interpolation-filters"] = !0, o["column-count"] = !1, o["column-fill"] = !1, o["column-gap"] = !1, o["column-rule"] = !1, o["column-rule-color"] = !1, o["column-rule-style"] = !1, o["column-rule-width"] = !1, o["column-span"] = !1, o["column-width"] = !1, o.columns = !1, o.contain = !1, o.content = !1, o["counter-increment"] = !1, o["counter-reset"] = !1, o["counter-set"] = !1, o.crop = !1, o.cue = !1, o["cue-after"] = !1, o["cue-before"] = !1, o.cursor = !1, o.direction = !1, o.display = !0, o["display-inside"] = !0, o["display-list"] = !0, o["display-outside"] = !0, o["dominant-baseline"] = !1, o.elevation = !1, o["empty-cells"] = !1, o.filter = !1, o.flex = !1, o["flex-basis"] = !1, o["flex-direction"] = !1, o["flex-flow"] = !1, o["flex-grow"] = !1, o["flex-shrink"] = !1, o["flex-wrap"] = !1, o.float = !1, o["float-offset"] = !1, o["flood-color"] = !1, o["flood-opacity"] = !1, o["flow-from"] = !1, o["flow-into"] = !1, o.font = !0, o["font-family"] = !0, o["font-feature-settings"] = !0, o["font-kerning"] = !0, o["font-language-override"] = !0, o["font-size"] = !0, o["font-size-adjust"] = !0, o["font-stretch"] = !0, o["font-style"] = !0, o["font-synthesis"] = !0, o["font-variant"] = !0, o["font-variant-alternates"] = !0, o["font-variant-caps"] = !0, o["font-variant-east-asian"] = !0, o["font-variant-ligatures"] = !0, o["font-variant-numeric"] = !0, o["font-variant-position"] = !0, o["font-weight"] = !0, o.grid = !1, o["grid-area"] = !1, o["grid-auto-columns"] = !1, o["grid-auto-flow"] = !1, o["grid-auto-rows"] = !1, o["grid-column"] = !1, o["grid-column-end"] = !1, o["grid-column-start"] = !1, o["grid-row"] = !1, o["grid-row-end"] = !1, o["grid-row-start"] = !1, o["grid-template"] = !1, o["grid-template-areas"] = !1, o["grid-template-columns"] = !1, o["grid-template-rows"] = !1, o["hanging-punctuation"] = !1, o.height = !0, o.hyphens = !1, o.icon = !1, o["image-orientation"] = !1, o["image-resolution"] = !1, o["ime-mode"] = !1, o["initial-letters"] = !1, o["inline-box-align"] = !1, o["justify-content"] = !1, o["justify-items"] = !1, o["justify-self"] = !1, o.left = !1, o["letter-spacing"] = !0, o["lighting-color"] = !0, o["line-box-contain"] = !1, o["line-break"] = !1, o["line-grid"] = !1, o["line-height"] = !1, o["line-snap"] = !1, o["line-stacking"] = !1, o["line-stacking-ruby"] = !1, o["line-stacking-shift"] = !1, o["line-stacking-strategy"] = !1, o["list-style"] = !0, o["list-style-image"] = !0, o["list-style-position"] = !0, o["list-style-type"] = !0, o.margin = !0, o["margin-bottom"] = !0, o["margin-left"] = !0, o["margin-right"] = !0, o["margin-top"] = !0, o["marker-offset"] = !1, o["marker-side"] = !1, o.marks = !1, o.mask = !1, o["mask-box"] = !1, o["mask-box-outset"] = !1, o["mask-box-repeat"] = !1, o["mask-box-slice"] = !1, o["mask-box-source"] = !1, o["mask-box-width"] = !1, o["mask-clip"] = !1, o["mask-image"] = !1, o["mask-origin"] = !1, o["mask-position"] = !1, o["mask-repeat"] = !1, o["mask-size"] = !1, o["mask-source-type"] = !1, o["mask-type"] = !1, o["max-height"] = !0, o["max-lines"] = !1, o["max-width"] = !0, o["min-height"] = !0, o["min-width"] = !0, o["move-to"] = !1, o["nav-down"] = !1, o["nav-index"] = !1, o["nav-left"] = !1, o["nav-right"] = !1, o["nav-up"] = !1, o["object-fit"] = !1, o["object-position"] = !1, o.opacity = !1, o.order = !1, o.orphans = !1, o.outline = !1, o["outline-color"] = !1, o["outline-offset"] = !1, o["outline-style"] = !1, o["outline-width"] = !1, o.overflow = !1, o["overflow-wrap"] = !1, o["overflow-x"] = !1, o["overflow-y"] = !1, o.padding = !0, o["padding-bottom"] = !0, o["padding-left"] = !0, o["padding-right"] = !0, o["padding-top"] = !0, o.page = !1, o["page-break-after"] = !1, o["page-break-before"] = !1, o["page-break-inside"] = !1, o["page-policy"] = !1, o.pause = !1, o["pause-after"] = !1, o["pause-before"] = !1, o.perspective = !1, o["perspective-origin"] = !1, o.pitch = !1, o["pitch-range"] = !1, o["play-during"] = !1, o.position = !1, o["presentation-level"] = !1, o.quotes = !1, o["region-fragment"] = !1, o.resize = !1, o.rest = !1, o["rest-after"] = !1, o["rest-before"] = !1, o.richness = !1, o.right = !1, o.rotation = !1, o["rotation-point"] = !1, o["ruby-align"] = !1, o["ruby-merge"] = !1, o["ruby-position"] = !1, o["shape-image-threshold"] = !1, o["shape-outside"] = !1, o["shape-margin"] = !1, o.size = !1, o.speak = !1, o["speak-as"] = !1, o["speak-header"] = !1, o["speak-numeral"] = !1, o["speak-punctuation"] = !1, o["speech-rate"] = !1, o.stress = !1, o["string-set"] = !1, o["tab-size"] = !1, o["table-layout"] = !1, o["text-align"] = !0, o["text-align-last"] = !0, o["text-combine-upright"] = !0, o["text-decoration"] = !0, o["text-decoration-color"] = !0, o["text-decoration-line"] = !0, o["text-decoration-skip"] = !0, o["text-decoration-style"] = !0, o["text-emphasis"] = !0, o["text-emphasis-color"] = !0, o["text-emphasis-position"] = !0, o["text-emphasis-style"] = !0, o["text-height"] = !0, o["text-indent"] = !0, o["text-justify"] = !0, o["text-orientation"] = !0, o["text-overflow"] = !0, o["text-shadow"] = !0, o["text-space-collapse"] = !0, o["text-transform"] = !0, o["text-underline-position"] = !0, o["text-wrap"] = !0, o.top = !1, o.transform = !1, o["transform-origin"] = !1, o["transform-style"] = !1, o.transition = !1, o["transition-delay"] = !1, o["transition-duration"] = !1, o["transition-property"] = !1, o["transition-timing-function"] = !1, o["unicode-bidi"] = !1, o["vertical-align"] = !1, o.visibility = !1, o["voice-balance"] = !1, o["voice-duration"] = !1, o["voice-family"] = !1, o["voice-pitch"] = !1, o["voice-range"] = !1, o["voice-rate"] = !1, o["voice-stress"] = !1, o["voice-volume"] = !1, o.volume = !1, o["white-space"] = !1, o.widows = !1, o.width = !0, o["will-change"] = !1, o["word-break"] = !0, o["word-spacing"] = !0, o["word-wrap"] = !0, o["wrap-flow"] = !1, o["wrap-through"] = !1, o["writing-mode"] = !1, o["z-index"] = !1, o;
  }
  function e(o, s, l) {
  }
  function n(o, s, l) {
  }
  var r = /javascript\s*\:/img;
  function i(o, s) {
    return r.test(s) ? "" : s;
  }
  return bn.whiteList = t(), bn.getDefaultWhiteList = t, bn.onAttr = e, bn.onIgnoreAttr = n, bn.safeAttrValue = i, bn;
}
var sl, Ju;
function hg() {
  return Ju || (Ju = 1, sl = {
    indexOf: function(t, e) {
      var n, r;
      if (Array.prototype.indexOf)
        return t.indexOf(e);
      for (n = 0, r = t.length; n < r; n++)
        if (t[n] === e)
          return n;
      return -1;
    },
    forEach: function(t, e, n) {
      var r, i;
      if (Array.prototype.forEach)
        return t.forEach(e, n);
      for (r = 0, i = t.length; r < i; r++)
        e.call(n, t[r], r, t);
    },
    trim: function(t) {
      return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "");
    },
    trimRight: function(t) {
      return String.prototype.trimRight ? t.trimRight() : t.replace(/(\s*$)/g, "");
    }
  }), sl;
}
var ll, Xu;
function bM() {
  if (Xu) return ll;
  Xu = 1;
  var t = hg();
  function e(n, r) {
    n = t.trimRight(n), n[n.length - 1] !== ";" && (n += ";");
    var i = n.length, o = !1, s = 0, l = 0, a = "";
    function c() {
      if (!o) {
        var f = t.trim(n.slice(s, l)), h = f.indexOf(":");
        if (h !== -1) {
          var p = t.trim(f.slice(0, h)), m = t.trim(f.slice(h + 1));
          if (p) {
            var g = r(s, a.length, p, m, f);
            g && (a += g + "; ");
          }
        }
      }
      s = l + 1;
    }
    for (; l < i; l++) {
      var d = n[l];
      if (d === "/" && n[l + 1] === "*") {
        var u = n.indexOf("*/", l + 2);
        if (u === -1) break;
        l = u + 1, s = l + 1, o = !1;
      } else d === "(" ? o = !0 : d === ")" ? o = !1 : d === ";" ? o || c() : d === `
` && c();
    }
    return t.trim(a);
  }
  return ll = e, ll;
}
var al, Zu;
function vM() {
  if (Zu) return al;
  Zu = 1;
  var t = fg(), e = bM();
  hg();
  function n(o) {
    return o == null;
  }
  function r(o) {
    var s = {};
    for (var l in o)
      s[l] = o[l];
    return s;
  }
  function i(o) {
    o = r(o || {}), o.whiteList = o.whiteList || t.whiteList, o.onAttr = o.onAttr || t.onAttr, o.onIgnoreAttr = o.onIgnoreAttr || t.onIgnoreAttr, o.safeAttrValue = o.safeAttrValue || t.safeAttrValue, this.options = o;
  }
  return i.prototype.process = function(o) {
    if (o = o || "", o = o.toString(), !o) return "";
    var s = this, l = s.options, a = l.whiteList, c = l.onAttr, d = l.onIgnoreAttr, u = l.safeAttrValue, f = e(o, function(h, p, m, g, y) {
      var b = a[m], w = !1;
      if (b === !0 ? w = b : typeof b == "function" ? w = b(g) : b instanceof RegExp && (w = b.test(g)), w !== !0 && (w = !1), g = u(m, g), !!g) {
        var v = {
          position: p,
          sourcePosition: h,
          source: y,
          isWhite: w
        };
        if (w) {
          var x = c(m, g, v);
          return n(x) ? m + ":" + g : x;
        } else {
          var x = d(m, g, v);
          if (!n(x))
            return x;
        }
      }
    });
    return f;
  }, al = i, al;
}
var Yu;
function sa() {
  return Yu || (Yu = 1, function(t, e) {
    var n = fg(), r = vM();
    function i(s, l) {
      var a = new r(l);
      return a.process(s);
    }
    e = t.exports = i, e.FilterCSS = r;
    for (var o in n) e[o] = n[o];
    typeof window < "u" && (window.filterCSS = t.exports);
  }(Fi, Fi.exports)), Fi.exports;
}
var cl, Qu;
function yc() {
  return Qu || (Qu = 1, cl = {
    indexOf: function(t, e) {
      var n, r;
      if (Array.prototype.indexOf)
        return t.indexOf(e);
      for (n = 0, r = t.length; n < r; n++)
        if (t[n] === e)
          return n;
      return -1;
    },
    forEach: function(t, e, n) {
      var r, i;
      if (Array.prototype.forEach)
        return t.forEach(e, n);
      for (r = 0, i = t.length; r < i; r++)
        e.call(n, t[r], r, t);
    },
    trim: function(t) {
      return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "");
    },
    spaceIndex: function(t) {
      var e = /\s|\n|\t/, n = e.exec(t);
      return n ? n.index : -1;
    }
  }), cl;
}
var ef;
function pg() {
  if (ef) return ce;
  ef = 1;
  var t = sa().FilterCSS, e = sa().getDefaultWhiteList, n = yc();
  function r() {
    return {
      a: ["target", "href", "title"],
      abbr: ["title"],
      address: [],
      area: ["shape", "coords", "href", "alt"],
      article: [],
      aside: [],
      audio: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "preload",
        "src"
      ],
      b: [],
      bdi: ["dir"],
      bdo: ["dir"],
      big: [],
      blockquote: ["cite"],
      br: [],
      caption: [],
      center: [],
      cite: [],
      code: [],
      col: ["align", "valign", "span", "width"],
      colgroup: ["align", "valign", "span", "width"],
      dd: [],
      del: ["datetime"],
      details: ["open"],
      div: [],
      dl: [],
      dt: [],
      em: [],
      figcaption: [],
      figure: [],
      font: ["color", "size", "face"],
      footer: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      header: [],
      hr: [],
      i: [],
      img: ["src", "alt", "title", "width", "height", "loading"],
      ins: ["datetime"],
      kbd: [],
      li: [],
      mark: [],
      nav: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      section: [],
      small: [],
      span: [],
      sub: [],
      summary: [],
      sup: [],
      strong: [],
      strike: [],
      table: ["width", "border", "align", "valign"],
      tbody: ["align", "valign"],
      td: ["width", "rowspan", "colspan", "align", "valign"],
      tfoot: ["align", "valign"],
      th: ["width", "rowspan", "colspan", "align", "valign"],
      thead: ["align", "valign"],
      tr: ["rowspan", "align", "valign"],
      tt: [],
      u: [],
      ul: [],
      video: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "playsinline",
        "poster",
        "preload",
        "src",
        "height",
        "width"
      ]
    };
  }
  var i = new t();
  function o(V, X, P) {
  }
  function s(V, X, P) {
  }
  function l(V, X, P) {
  }
  function a(V, X, P) {
  }
  function c(V) {
    return V.replace(u, "&lt;").replace(f, "&gt;");
  }
  function d(V, X, P, G) {
    if (P = _(P), X === "href" || X === "src") {
      if (P = n.trim(P), P === "#") return "#";
      if (!(P.substr(0, 7) === "http://" || P.substr(0, 8) === "https://" || P.substr(0, 7) === "mailto:" || P.substr(0, 4) === "tel:" || P.substr(0, 11) === "data:image/" || P.substr(0, 6) === "ftp://" || P.substr(0, 2) === "./" || P.substr(0, 3) === "../" || P[0] === "#" || P[0] === "/"))
        return "";
    } else if (X === "background") {
      if (b.lastIndex = 0, b.test(P))
        return "";
    } else if (X === "style") {
      if (w.lastIndex = 0, w.test(P) || (v.lastIndex = 0, v.test(P) && (b.lastIndex = 0, b.test(P))))
        return "";
      G !== !1 && (G = G || i, P = G.process(P));
    }
    return P = I(P), P;
  }
  var u = /</g, f = />/g, h = /"/g, p = /&quot;/g, m = /&#([a-zA-Z0-9]*);?/gim, g = /&colon;?/gim, y = /&newline;?/gim, b = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi, w = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, v = /u\s*r\s*l\s*\(.*/gi;
  function x(V) {
    return V.replace(h, "&quot;");
  }
  function k(V) {
    return V.replace(p, '"');
  }
  function S(V) {
    return V.replace(m, function(P, G) {
      return G[0] === "x" || G[0] === "X" ? String.fromCharCode(parseInt(G.substr(1), 16)) : String.fromCharCode(parseInt(G, 10));
    });
  }
  function C(V) {
    return V.replace(g, ":").replace(y, " ");
  }
  function E(V) {
    for (var X = "", P = 0, G = V.length; P < G; P++)
      X += V.charCodeAt(P) < 32 ? " " : V.charAt(P);
    return n.trim(X);
  }
  function _(V) {
    return V = k(V), V = S(V), V = C(V), V = E(V), V;
  }
  function I(V) {
    return V = x(V), V = c(V), V;
  }
  function B() {
    return "";
  }
  function F(V, X) {
    typeof X != "function" && (X = function() {
    });
    var P = !Array.isArray(V);
    function G(ze) {
      return P ? !0 : n.indexOf(V, ze) !== -1;
    }
    var Ie = [], wt = !1;
    return {
      onIgnoreTag: function(ze, xr, kt) {
        if (G(ze))
          if (kt.isClosing) {
            var Sr = "[/removed]", m1 = kt.position + Sr.length;
            return Ie.push([
              wt !== !1 ? wt : kt.position,
              m1
            ]), wt = !1, Sr;
          } else
            return wt || (wt = kt.position), "[removed]";
        else
          return X(ze, xr, kt);
      },
      remove: function(ze) {
        var xr = "", kt = 0;
        return n.forEach(Ie, function(Sr) {
          xr += ze.slice(kt, Sr[0]), kt = Sr[1];
        }), xr += ze.slice(kt), xr;
      }
    };
  }
  function j(V) {
    for (var X = "", P = 0; P < V.length; ) {
      var G = V.indexOf("<!--", P);
      if (G === -1) {
        X += V.slice(P);
        break;
      }
      X += V.slice(P, G);
      var Ie = V.indexOf("-->", G);
      if (Ie === -1)
        break;
      P = Ie + 3;
    }
    return X;
  }
  function K(V) {
    var X = V.split("");
    return X = X.filter(function(P) {
      var G = P.charCodeAt(0);
      return G === 127 ? !1 : G <= 31 ? G === 10 || G === 13 : !0;
    }), X.join("");
  }
  return ce.whiteList = r(), ce.getDefaultWhiteList = r, ce.onTag = o, ce.onIgnoreTag = s, ce.onTagAttr = l, ce.onIgnoreTagAttr = a, ce.safeAttrValue = d, ce.escapeHtml = c, ce.escapeQuote = x, ce.unescapeQuote = k, ce.escapeHtmlEntities = S, ce.escapeDangerHtml5Entities = C, ce.clearNonPrintableCharacter = E, ce.friendlyAttrValue = _, ce.escapeAttrValue = I, ce.onIgnoreTagStripAll = B, ce.StripTagBody = F, ce.stripCommentTag = j, ce.stripBlankChar = K, ce.attributeWrapSign = '"', ce.cssFilter = i, ce.getDefaultCSSWhiteList = e, ce;
}
var Ui = {}, tf;
function mg() {
  if (tf) return Ui;
  tf = 1;
  var t = yc();
  function e(u) {
    var f = t.spaceIndex(u), h;
    return f === -1 ? h = u.slice(1, -1) : h = u.slice(1, f + 1), h = t.trim(h).toLowerCase(), h.slice(0, 1) === "/" && (h = h.slice(1)), h.slice(-1) === "/" && (h = h.slice(0, -1)), h;
  }
  function n(u) {
    return u.slice(0, 2) === "</";
  }
  function r(u, f, h) {
    var p = "", m = 0, g = !1, y = !1, b = 0, w = u.length, v = "", x = "";
    e: for (b = 0; b < w; b++) {
      var k = u.charAt(b);
      if (g === !1) {
        if (k === "<") {
          g = b;
          continue;
        }
      } else if (y === !1) {
        if (k === "<") {
          p += h(u.slice(m, b)), g = b, m = b;
          continue;
        }
        if (k === ">" || b === w - 1) {
          p += h(u.slice(m, g)), x = u.slice(g, b + 1), v = e(x), p += f(
            g,
            p.length,
            v,
            x,
            n(x)
          ), m = b + 1, g = !1;
          continue;
        }
        if (k === '"' || k === "'")
          for (var S = 1, C = u.charAt(b - S); C.trim() === "" || C === "="; ) {
            if (C === "=") {
              y = k;
              continue e;
            }
            C = u.charAt(b - ++S);
          }
      } else if (k === y) {
        y = !1;
        continue;
      }
    }
    return m < w && (p += h(u.substr(m))), p;
  }
  var i = /[^a-zA-Z0-9\\_:.-]/gim;
  function o(u, f) {
    var h = 0, p = 0, m = [], g = !1, y = u.length;
    function b(S, C) {
      if (S = t.trim(S), S = S.replace(i, "").toLowerCase(), !(S.length < 1)) {
        var E = f(S, C || "");
        E && m.push(E);
      }
    }
    for (var w = 0; w < y; w++) {
      var v = u.charAt(w), x, k;
      if (g === !1 && v === "=") {
        g = u.slice(h, w), h = w + 1, p = u.charAt(h) === '"' || u.charAt(h) === "'" ? h : l(u, w + 1);
        continue;
      }
      if (g !== !1 && w === p) {
        if (k = u.indexOf(v, w + 1), k === -1)
          break;
        x = t.trim(u.slice(p + 1, k)), b(g, x), g = !1, w = k, h = w + 1;
        continue;
      }
      if (/\s|\n|\t/.test(v))
        if (u = u.replace(/\s|\n|\t/g, " "), g === !1)
          if (k = s(u, w), k === -1) {
            x = t.trim(u.slice(h, w)), b(x), g = !1, h = w + 1;
            continue;
          } else {
            w = k - 1;
            continue;
          }
        else if (k = a(u, w - 1), k === -1) {
          x = t.trim(u.slice(h, w)), x = d(x), b(g, x), g = !1, h = w + 1;
          continue;
        } else
          continue;
    }
    return h < u.length && (g === !1 ? b(u.slice(h)) : b(g, d(t.trim(u.slice(h))))), t.trim(m.join(" "));
  }
  function s(u, f) {
    for (; f < u.length; f++) {
      var h = u[f];
      if (h !== " ")
        return h === "=" ? f : -1;
    }
  }
  function l(u, f) {
    for (; f < u.length; f++) {
      var h = u[f];
      if (h !== " ")
        return h === "'" || h === '"' ? f : -1;
    }
  }
  function a(u, f) {
    for (; f > 0; f--) {
      var h = u[f];
      if (h !== " ")
        return h === "=" ? f : -1;
    }
  }
  function c(u) {
    return u[0] === '"' && u[u.length - 1] === '"' || u[0] === "'" && u[u.length - 1] === "'";
  }
  function d(u) {
    return c(u) ? u.substr(1, u.length - 2) : u;
  }
  return Ui.parseTag = r, Ui.parseAttr = o, Ui;
}
var dl, nf;
function wM() {
  if (nf) return dl;
  nf = 1;
  var t = sa().FilterCSS, e = pg(), n = mg(), r = n.parseTag, i = n.parseAttr, o = yc();
  function s(u) {
    return u == null;
  }
  function l(u) {
    var f = o.spaceIndex(u);
    if (f === -1)
      return {
        html: "",
        closing: u[u.length - 2] === "/"
      };
    u = o.trim(u.slice(f + 1, -1));
    var h = u[u.length - 1] === "/";
    return h && (u = o.trim(u.slice(0, -1))), {
      html: u,
      closing: h
    };
  }
  function a(u) {
    var f = {};
    for (var h in u)
      f[h] = u[h];
    return f;
  }
  function c(u) {
    var f = {};
    for (var h in u)
      Array.isArray(u[h]) ? f[h.toLowerCase()] = u[h].map(function(p) {
        return p.toLowerCase();
      }) : f[h.toLowerCase()] = u[h];
    return f;
  }
  function d(u) {
    u = a(u || {}), u.stripIgnoreTag && (u.onIgnoreTag && console.error(
      'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
    ), u.onIgnoreTag = e.onIgnoreTagStripAll), u.whiteList || u.allowList ? u.whiteList = c(u.whiteList || u.allowList) : u.whiteList = e.whiteList, this.attributeWrapSign = u.singleQuotedAttributeValue === !0 ? "'" : e.attributeWrapSign, u.onTag = u.onTag || e.onTag, u.onTagAttr = u.onTagAttr || e.onTagAttr, u.onIgnoreTag = u.onIgnoreTag || e.onIgnoreTag, u.onIgnoreTagAttr = u.onIgnoreTagAttr || e.onIgnoreTagAttr, u.safeAttrValue = u.safeAttrValue || e.safeAttrValue, u.escapeHtml = u.escapeHtml || e.escapeHtml, this.options = u, u.css === !1 ? this.cssFilter = !1 : (u.css = u.css || {}, this.cssFilter = new t(u.css));
  }
  return d.prototype.process = function(u) {
    if (u = u || "", u = u.toString(), !u) return "";
    var f = this, h = f.options, p = h.whiteList, m = h.onTag, g = h.onIgnoreTag, y = h.onTagAttr, b = h.onIgnoreTagAttr, w = h.safeAttrValue, v = h.escapeHtml, x = f.attributeWrapSign, k = f.cssFilter;
    h.stripBlankChar && (u = e.stripBlankChar(u)), h.allowCommentTag || (u = e.stripCommentTag(u));
    var S = !1;
    h.stripIgnoreTagBody && (S = e.StripTagBody(
      h.stripIgnoreTagBody,
      g
    ), g = S.onIgnoreTag);
    var C = r(
      u,
      function(E, _, I, B, F) {
        var j = {
          sourcePosition: E,
          position: _,
          isClosing: F,
          isWhite: Object.prototype.hasOwnProperty.call(p, I)
        }, K = m(I, B, j);
        if (!s(K)) return K;
        if (j.isWhite) {
          if (j.isClosing)
            return "</" + I + ">";
          var V = l(B), X = p[I], P = i(V.html, function(G, Ie) {
            var wt = o.indexOf(X, G) !== -1, ze = y(I, G, Ie, wt);
            return s(ze) ? wt ? (Ie = w(I, G, Ie, k), Ie ? G + "=" + x + Ie + x : G) : (ze = b(I, G, Ie, wt), s(ze) ? void 0 : ze) : ze;
          });
          return B = "<" + I, P && (B += " " + P), V.closing && (B += " /"), B += ">", B;
        } else
          return K = g(I, B, j), s(K) ? v(B) : K;
      },
      v
    );
    return S && (C = S.remove(C)), C;
  }, dl = d, dl;
}
var rf;
function kM() {
  return rf || (rf = 1, function(t, e) {
    var n = pg(), r = mg(), i = wM();
    function o(l, a) {
      var c = new i(a);
      return c.process(l);
    }
    e = t.exports = o, e.filterXSS = o, e.FilterXSS = i, function() {
      for (var l in n)
        e[l] = n[l];
      for (var a in r)
        e[a] = r[a];
    }(), typeof window < "u" && (window.filterXSS = t.exports);
    function s() {
      return typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope;
    }
    s() && (self.filterXSS = t.exports);
  }(Bi, Bi.exports)), Bi.exports;
}
var xM = kM();
const SM = /* @__PURE__ */ yM(xM), CM = {
  a: ["href", "title", "target"],
  span: ["style"],
  blockquote: ["class", "style"],
  p: ["class", "style"],
  hr: [],
  pre: [],
  code: [],
  strong: [],
  img: ["src", "alt", "title", "width", "height", "style", "data-display"],
  label: ["contenteditable"],
  input: ["type", "value", "checked"],
  div: ["class", "style"],
  iframe: ["src", "allowfullscreen", "frameborder", "width", "height"],
  em: [],
  s: [],
  mark: ["class", "style"],
  sub: ["class", "style"],
  sup: ["class", "style"],
  h1: ["class", "style"],
  h2: ["class", "style"],
  h3: ["class", "style"],
  h4: ["class", "style"],
  h5: ["class", "style"],
  h6: ["class", "style"],
  ul: ["class", "data-type"],
  li: ["class", "data-checked", "itemtypename"],
  ol: [],
  u: [],
  table: ["class", "style"],
  colgroup: [],
  col: ["style"],
  tbody: ["class", "style"],
  tr: ["class", "style"],
  th: ["class", "style", "colspan", "rowspan"],
  td: ["class", "style", "colspan", "rowspan"],
  br: []
}, AM = ["innerHTML"], PH = /* @__PURE__ */ te({
  __name: "VuetifyViewer",
  props: {
    value: { default: "" },
    dark: { type: Boolean, default: void 0 },
    dense: { type: Boolean, default: !1 },
    markdownTheme: { type: [String, Boolean], default: void 0 },
    xss: { type: [Boolean, Array], default: !0 },
    xssOptions: { default: () => CM },
    extensions: { default: () => [] }
  },
  setup(t) {
    const e = t, { state: n } = vs(), r = Ma(), { markdownThemeStyle: i } = Om(W(() => e.markdownTheme)), o = W(() => [...n.extensions, ...e.extensions]), s = W(() => pr(e.dark) ? e.dark : pr(r.current.value.dark) ? r.current.value.dark : !1), l = W(() => ({
      __dark: T(s),
      dense: e.dense,
      view: !0,
      ...T(i)
    })), a = W(() => zr(e.value) ? e.value : gM(e.value, T(o))), c = W(() => {
      if (e.xss === !1)
        return T(a);
      const d = T(a).replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/").replace("https://vimeo.com/", "https://player.vimeo.com/video/"), u = e.xssOptions;
      return SM(d, { whiteList: u, css: !1 });
    });
    return (d, u) => (R(), de("div", {
      class: dt(["vuetify-pro-tiptap-editor__content", l.value]),
      style: { width: "100%" }
    }, [
      ut(d.$slots, "before"),
      De("div", {
        class: "content",
        innerHTML: c.value
      }, null, 8, AM),
      ut(d.$slots, "after")
    ], 2));
  }
});
function TM(t = {}) {
  return new re({
    view(e) {
      return new MM(e, t);
    }
  });
}
class MM {
  constructor(e, n) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = n.width) !== null && r !== void 0 ? r : 1, this.color = n.color === !1 ? void 0 : n.color || "black", this.class = n.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => {
      let o = (s) => {
        this[i](s);
      };
      return e.dom.addEventListener(i, o), { name: i, handler: o };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: n }) => this.editorView.dom.removeEventListener(e, n));
  }
  update(e, n) {
    this.cursorPos != null && n.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), n = !e.parent.inlineContent, r, i = this.editorView.dom, o = i.getBoundingClientRect(), s = o.width / i.offsetWidth, l = o.height / i.offsetHeight;
    if (n) {
      let u = e.nodeBefore, f = e.nodeAfter;
      if (u || f) {
        let h = this.editorView.nodeDOM(this.cursorPos - (u ? u.nodeSize : 0));
        if (h) {
          let p = h.getBoundingClientRect(), m = u ? p.bottom : p.top;
          u && f && (m = (m + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
          let g = this.width / 2 * l;
          r = { left: p.left, right: p.right, top: m - g, bottom: m + g };
        }
      }
    }
    if (!r) {
      let u = this.editorView.coordsAtPos(this.cursorPos), f = this.width / 2 * s;
      r = { left: u.left - f, right: u.left + f, top: u.top, bottom: u.bottom };
    }
    let a = this.editorView.dom.offsetParent;
    this.element || (this.element = a.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", n), this.element.classList.toggle("prosemirror-dropcursor-inline", !n);
    let c, d;
    if (!a || a == document.body && getComputedStyle(a).position == "static")
      c = -pageXOffset, d = -pageYOffset;
    else {
      let u = a.getBoundingClientRect(), f = u.width / a.offsetWidth, h = u.height / a.offsetHeight;
      c = u.left - a.scrollLeft * f, d = u.top - a.scrollTop * h;
    }
    this.element.style.left = (r.left - c) / s + "px", this.element.style.top = (r.top - d) / l + "px", this.element.style.width = (r.right - r.left) / s + "px", this.element.style.height = (r.bottom - r.top) / l + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let n = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = n && n.inside >= 0 && this.editorView.state.doc.nodeAt(n.inside), i = r && r.type.spec.disableDropCursor, o = typeof i == "function" ? i(this.editorView, n, e) : i;
    if (n && !o) {
      let s = n.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = uh(this.editorView.state.doc, s, this.editorView.dragging.slice);
        l != null && (s = l);
      }
      this.setCursor(s), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
  }
}
class he extends $ {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, n) {
    let r = e.resolve(n.map(this.head));
    return he.valid(r) ? new he(r) : $.near(r);
  }
  content() {
    return O.empty;
  }
  eq(e) {
    return e instanceof he && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new he(e.resolve(n.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new bc(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let n = e.parent;
    if (n.inlineContent || !EM(e) || !LM(e))
      return !1;
    let r = n.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = n.contentMatchAt(e.index()).defaultType;
    return i && i.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, n, r = !1) {
    e: for (; ; ) {
      if (!r && he.valid(e))
        return e;
      let i = e.pos, o = null;
      for (let s = e.depth; ; s--) {
        let l = e.node(s);
        if (n > 0 ? e.indexAfter(s) < l.childCount : e.index(s) > 0) {
          o = l.child(n > 0 ? e.indexAfter(s) : e.index(s) - 1);
          break;
        } else if (s == 0)
          return null;
        i += n;
        let a = e.doc.resolve(i);
        if (he.valid(a))
          return a;
      }
      for (; ; ) {
        let s = n > 0 ? o.firstChild : o.lastChild;
        if (!s) {
          if (o.isAtom && !o.isText && !z.isSelectable(o)) {
            e = e.doc.resolve(i + o.nodeSize * n), r = !1;
            continue e;
          }
          break;
        }
        o = s, i += n;
        let l = e.doc.resolve(i);
        if (he.valid(l))
          return l;
      }
      return null;
    }
  }
}
he.prototype.visible = !1;
he.findFrom = he.findGapCursorFrom;
$.jsonID("gapcursor", he);
class bc {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new bc(e.map(this.pos));
  }
  resolve(e) {
    let n = e.resolve(this.pos);
    return he.valid(n) ? new he(n) : $.near(n);
  }
}
function gg(t) {
  return t.isAtom || t.spec.isolating || t.spec.createGapCursor;
}
function EM(t) {
  for (let e = t.depth; e >= 0; e--) {
    let n = t.index(e), r = t.node(e);
    if (n == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(n - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || gg(i.type))
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function LM(t) {
  for (let e = t.depth; e >= 0; e--) {
    let n = t.indexAfter(e), r = t.node(e);
    if (n == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(n); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || gg(i.type))
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function OM() {
  return new re({
    props: {
      decorations: NM,
      createSelectionBetween(t, e, n) {
        return e.pos == n.pos && he.valid(n) ? new he(n) : null;
      },
      handleClick: RM,
      handleKeyDown: HM,
      handleDOMEvents: { beforeinput: VM }
    }
  });
}
const HM = qa({
  ArrowLeft: Wi("horiz", -1),
  ArrowRight: Wi("horiz", 1),
  ArrowUp: Wi("vert", -1),
  ArrowDown: Wi("vert", 1)
});
function Wi(t, e) {
  const n = t == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, o) {
    let s = r.selection, l = e > 0 ? s.$to : s.$from, a = s.empty;
    if (s instanceof N) {
      if (!o.endOfTextblock(n) || l.depth == 0)
        return !1;
      a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = he.findGapCursorFrom(l, e, a);
    return c ? (i && i(r.tr.setSelection(new he(c))), !0) : !1;
  };
}
function RM(t, e, n) {
  if (!t || !t.editable)
    return !1;
  let r = t.state.doc.resolve(e);
  if (!he.valid(r))
    return !1;
  let i = t.posAtCoords({ left: n.clientX, top: n.clientY });
  return i && i.inside > -1 && z.isSelectable(t.state.doc.nodeAt(i.inside)) ? !1 : (t.dispatch(t.state.tr.setSelection(new he(r))), !0);
}
function VM(t, e) {
  if (e.inputType != "insertCompositionText" || !(t.state.selection instanceof he))
    return !1;
  let { $from: n } = t.state.selection, r = n.parent.contentMatchAt(n.index()).findWrapping(t.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = A.empty;
  for (let s = r.length - 1; s >= 0; s--)
    i = A.from(r[s].createAndFill(null, i));
  let o = t.state.tr.replace(n.pos, n.pos, new O(i, 0, 0));
  return o.setSelection(N.near(o.doc.resolve(n.pos + 1))), t.dispatch(o), !1;
}
function NM(t) {
  if (!(t.selection instanceof he))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", Z.create(t.doc, [ve.widget(t.selection.head, e, { key: "gapcursor" })]);
}
var Co = 200, ke = function() {
};
ke.prototype.append = function(e) {
  return e.length ? (e = ke.from(e), !this.length && e || e.length < Co && this.leafAppend(e) || this.length < Co && e.leafPrepend(this) || this.appendInner(e)) : this;
};
ke.prototype.prepend = function(e) {
  return e.length ? ke.from(e).append(this) : this;
};
ke.prototype.appendInner = function(e) {
  return new IM(this, e);
};
ke.prototype.slice = function(e, n) {
  return e === void 0 && (e = 0), n === void 0 && (n = this.length), e >= n ? ke.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, n));
};
ke.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
ke.prototype.forEach = function(e, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = this.length), n <= r ? this.forEachInner(e, n, r, 0) : this.forEachInvertedInner(e, n, r, 0);
};
ke.prototype.map = function(e, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(o, s) {
    return i.push(e(o, s));
  }, n, r), i;
};
ke.from = function(e) {
  return e instanceof ke ? e : e && e.length ? new yg(e) : ke.empty;
};
var yg = /* @__PURE__ */ function(t) {
  function e(r) {
    t.call(this), this.values = r;
  }
  t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
  var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, o) {
    return i == 0 && o == this.length ? this : new e(this.values.slice(i, o));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, o, s, l) {
    for (var a = o; a < s; a++)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, o, s, l) {
    for (var a = o - 1; a >= s; a--)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= Co)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= Co)
      return new e(i.flatten().concat(this.values));
  }, n.length.get = function() {
    return this.values.length;
  }, n.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, n), e;
}(ke);
ke.empty = new yg([]);
var IM = /* @__PURE__ */ function(t) {
  function e(n, r) {
    t.call(this), this.left = n, this.right = r, this.length = n.length + r.length, this.depth = Math.max(n.depth, r.depth) + 1;
  }
  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, o, s) {
    var l = this.left.length;
    if (i < l && this.left.forEachInner(r, i, Math.min(o, l), s) === !1 || o > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, o) - l, s + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, o, s) {
    var l = this.left.length;
    if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(o, l) - l, s + l) === !1 || o < l && this.left.forEachInvertedInner(r, Math.min(i, l), o, s) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var o = this.left.length;
    return i <= o ? this.left.slice(r, i) : r >= o ? this.right.slice(r - o, i - o) : this.left.slice(r, o).append(this.right.slice(0, i - o));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(ke);
const _M = 500;
class Ye {
  constructor(e, n) {
    this.items = e, this.eventCount = n;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, n) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, o;
    n && (i = this.remapping(r, this.items.length), o = i.maps.length);
    let s = e.tr, l, a, c = [], d = [];
    return this.items.forEach((u, f) => {
      if (!u.step) {
        i || (i = this.remapping(r, f + 1), o = i.maps.length), o--, d.push(u);
        return;
      }
      if (i) {
        d.push(new st(u.map));
        let h = u.step.map(i.slice(o)), p;
        h && s.maybeStep(h).doc && (p = s.mapping.maps[s.mapping.maps.length - 1], c.push(new st(p, void 0, void 0, c.length + d.length))), o--, p && i.appendMap(p, o);
      } else
        s.maybeStep(u.step);
      if (u.selection)
        return l = i ? u.selection.map(i.slice(o)) : u.selection, a = new Ye(this.items.slice(0, r).append(d.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: s, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, n, r, i) {
    let o = [], s = this.eventCount, l = this.items, a = !i && l.length ? l.get(l.length - 1) : null;
    for (let d = 0; d < e.steps.length; d++) {
      let u = e.steps[d].invert(e.docs[d]), f = new st(e.mapping.maps[d], u, n), h;
      (h = a && a.merge(f)) && (f = h, d ? o.pop() : l = l.slice(0, l.length - 1)), o.push(f), n && (s++, n = void 0), i || (a = f);
    }
    let c = s - r.depth;
    return c > PM && (l = DM(l, c), s -= c), new Ye(l.append(o), s);
  }
  remapping(e, n) {
    let r = new ei();
    return this.items.forEach((i, o) => {
      let s = i.mirrorOffset != null && o - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, s);
    }, e, n), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Ye(this.items.append(e.map((n) => new st(n))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, n) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - n), o = e.mapping, s = e.steps.length, l = this.eventCount;
    this.items.forEach((f) => {
      f.selection && l--;
    }, i);
    let a = n;
    this.items.forEach((f) => {
      let h = o.getMirror(--a);
      if (h == null)
        return;
      s = Math.min(s, h);
      let p = o.maps[h];
      if (f.step) {
        let m = e.steps[h].invert(e.docs[h]), g = f.selection && f.selection.map(o.slice(a + 1, h));
        g && l++, r.push(new st(p, m, g));
      } else
        r.push(new st(p));
    }, i);
    let c = [];
    for (let f = n; f < s; f++)
      c.push(new st(o.maps[f]));
    let d = this.items.slice(0, i).append(c).append(r), u = new Ye(d, l);
    return u.emptyItemCount() > _M && (u = u.compress(this.items.length - r.length)), u;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((n) => {
      n.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let n = this.remapping(0, e), r = n.maps.length, i = [], o = 0;
    return this.items.forEach((s, l) => {
      if (l >= e)
        i.push(s), s.selection && o++;
      else if (s.step) {
        let a = s.step.map(n.slice(r)), c = a && a.getMap();
        if (r--, c && n.appendMap(c, r), a) {
          let d = s.selection && s.selection.map(n.slice(r));
          d && o++;
          let u = new st(c.invert(), a, d), f, h = i.length - 1;
          (f = i.length && i[h].merge(u)) ? i[h] = f : i.push(u);
        }
      } else s.map && r--;
    }, this.items.length, 0), new Ye(ke.from(i.reverse()), o);
  }
}
Ye.empty = new Ye(ke.empty, 0);
function DM(t, e) {
  let n;
  return t.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return n = i, !1;
  }), t.slice(n);
}
class st {
  constructor(e, n, r, i) {
    this.map = e, this.step = n, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let n = e.step.merge(this.step);
      if (n)
        return new st(n.getMap().invert(), n, this.selection);
    }
  }
}
class Jt {
  constructor(e, n, r, i, o) {
    this.done = e, this.undone = n, this.prevRanges = r, this.prevTime = i, this.prevComposition = o;
  }
}
const PM = 20;
function zM(t, e, n, r) {
  let i = n.getMeta(Ln), o;
  if (i)
    return i.historyState;
  n.getMeta(FM) && (t = new Jt(t.done, t.undone, null, 0, -1));
  let s = n.getMeta("appendedTransaction");
  if (n.steps.length == 0)
    return t;
  if (s && s.getMeta(Ln))
    return s.getMeta(Ln).redo ? new Jt(t.done.addTransform(n, void 0, r, io(e)), t.undone, of(n.mapping.maps), t.prevTime, t.prevComposition) : new Jt(t.done, t.undone.addTransform(n, void 0, r, io(e)), null, t.prevTime, t.prevComposition);
  if (n.getMeta("addToHistory") !== !1 && !(s && s.getMeta("addToHistory") === !1)) {
    let l = n.getMeta("composition"), a = t.prevTime == 0 || !s && t.prevComposition != l && (t.prevTime < (n.time || 0) - r.newGroupDelay || !$M(n, t.prevRanges)), c = s ? ul(t.prevRanges, n.mapping) : of(n.mapping.maps);
    return new Jt(t.done.addTransform(n, a ? e.selection.getBookmark() : void 0, r, io(e)), Ye.empty, c, n.time, l ?? t.prevComposition);
  } else return (o = n.getMeta("rebased")) ? new Jt(t.done.rebased(n, o), t.undone.rebased(n, o), ul(t.prevRanges, n.mapping), t.prevTime, t.prevComposition) : new Jt(t.done.addMaps(n.mapping.maps), t.undone.addMaps(n.mapping.maps), ul(t.prevRanges, n.mapping), t.prevTime, t.prevComposition);
}
function $M(t, e) {
  if (!e)
    return !1;
  if (!t.docChanged)
    return !0;
  let n = !1;
  return t.mapping.maps[0].forEach((r, i) => {
    for (let o = 0; o < e.length; o += 2)
      r <= e[o + 1] && i >= e[o] && (n = !0);
  }), n;
}
function of(t) {
  let e = [];
  for (let n = t.length - 1; n >= 0 && e.length == 0; n--)
    t[n].forEach((r, i, o, s) => e.push(o, s));
  return e;
}
function ul(t, e) {
  if (!t)
    return null;
  let n = [];
  for (let r = 0; r < t.length; r += 2) {
    let i = e.map(t[r], 1), o = e.map(t[r + 1], -1);
    i <= o && n.push(i, o);
  }
  return n;
}
function BM(t, e, n) {
  let r = io(e), i = Ln.get(e).spec.config, o = (n ? t.undone : t.done).popEvent(e, r);
  if (!o)
    return null;
  let s = o.selection.resolve(o.transform.doc), l = (n ? t.done : t.undone).addTransform(o.transform, e.selection.getBookmark(), i, r), a = new Jt(n ? l : o.remaining, n ? o.remaining : l, null, 0, -1);
  return o.transform.setSelection(s).setMeta(Ln, { redo: n, historyState: a });
}
let fl = !1, sf = null;
function io(t) {
  let e = t.plugins;
  if (sf != e) {
    fl = !1, sf = e;
    for (let n = 0; n < e.length; n++)
      if (e[n].spec.historyPreserveItems) {
        fl = !0;
        break;
      }
  }
  return fl;
}
const Ln = new se("history"), FM = new se("closeHistory");
function UM(t = {}) {
  return t = {
    depth: t.depth || 100,
    newGroupDelay: t.newGroupDelay || 500
  }, new re({
    key: Ln,
    state: {
      init() {
        return new Jt(Ye.empty, Ye.empty, null, 0, -1);
      },
      apply(e, n, r) {
        return zM(n, r, e, t);
      }
    },
    config: t,
    props: {
      handleDOMEvents: {
        beforeinput(e, n) {
          let r = n.inputType, i = r == "historyUndo" ? vg : r == "historyRedo" ? wg : null;
          return !i || !e.editable ? !1 : (n.preventDefault(), i(e.state, e.dispatch));
        }
      }
    }
  });
}
function bg(t, e) {
  return (n, r) => {
    let i = Ln.getState(n);
    if (!i || (t ? i.undone : i.done).eventCount == 0)
      return !1;
    if (r) {
      let o = BM(i, n, t);
      o && r(e ? o.scrollIntoView() : o);
    }
    return !0;
  };
}
const vg = bg(!1, !0), wg = bg(!0, !0);
var WM = J.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      autoTrim: !0,
      mode: "textSize",
      textCounter: (t) => t.length,
      wordCounter: (t) => t.split(" ").filter((e) => e !== "").length
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (t) => {
      const e = t?.node || this.editor.state.doc;
      if ((t?.mode || this.options.mode) === "textSize") {
        const r = e.textBetween(0, e.content.size, void 0, " ");
        return this.options.textCounter(r);
      }
      return e.nodeSize;
    }, this.storage.words = (t) => {
      const e = t?.node || this.editor.state.doc, n = e.textBetween(0, e.content.size, " ", " ");
      return this.options.wordCounter(n);
    };
  },
  addProseMirrorPlugins() {
    let t = !1;
    return [
      new re({
        key: new se("characterCount"),
        appendTransaction: (e, n, r) => {
          if (t)
            return;
          const i = this.options.limit, o = this.options.autoTrim;
          if (i == null || i === 0 || o === !1) {
            t = !0;
            return;
          }
          const s = this.storage.characters({ node: r.doc });
          if (s > i) {
            const l = s - i, a = 0, c = l;
            console.warn(
              `[CharacterCount] Initial content exceeded limit of ${i} characters. Content was automatically trimmed.`
            );
            const d = r.tr.deleteRange(a, c);
            return t = !0, d;
          }
          t = !0;
        },
        filterTransaction: (e, n) => {
          const r = this.options.limit;
          if (!e.docChanged || r === 0 || r === null || r === void 0)
            return !0;
          const i = this.storage.characters({ node: n.doc }), o = this.storage.characters({ node: e.doc });
          if (o <= r || i > r && o > r && o <= i)
            return !0;
          if (i > r && o > r && o > i || !e.getMeta("paste"))
            return !1;
          const l = e.selection.$head.pos, a = o - r, c = l - a, d = l;
          return e.deleteRange(c, d), !(this.storage.characters({ node: e.doc }) > r);
        }
      })
    ];
  }
}), jM = J.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [TM(this.options)];
  }
}), KM = J.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [
      new re({
        key: new se("focus"),
        props: {
          decorations: ({ doc: t, selection: e }) => {
            const { isEditable: n, isFocused: r } = this.editor, { anchor: i } = e, o = [];
            if (!n || !r)
              return Z.create(t, []);
            let s = 0;
            this.options.mode === "deepest" && t.descendants((a, c) => {
              if (a.isText)
                return;
              if (!(i >= c && i <= c + a.nodeSize - 1))
                return !1;
              s += 1;
            });
            let l = 0;
            return t.descendants((a, c) => {
              if (a.isText || !(i >= c && i <= c + a.nodeSize - 1))
                return !1;
              if (l += 1, this.options.mode === "deepest" && s - l > 0 || this.options.mode === "shallowest" && l > 1)
                return this.options.mode === "deepest";
              o.push(
                ve.node(c, c + a.nodeSize, {
                  class: this.options.className
                })
              );
            }), Z.create(t, o);
          }
        }
      })
    ];
  }
}), qM = J.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [OM()];
  },
  extendNodeSchema(t) {
    var e;
    const n = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      allowGapCursor: (e = Q(D(t, "allowGapCursor", n))) != null ? e : null
    };
  }
}), kg = "placeholder", lf = new se("tiptap__placeholder");
function xg(t) {
  const {
    editor: e,
    placeholder: n,
    dataAttribute: r,
    pos: i,
    node: o,
    isEmptyDoc: s,
    hasAnchor: l,
    classes: { emptyNode: a, emptyEditor: c }
  } = t, d = [a];
  return s && d.push(c), ve.node(i, i + o.nodeSize, {
    class: d.join(" "),
    [r]: typeof n == "function" ? n({
      editor: e,
      node: o,
      pos: i,
      hasAnchor: l
    }) : n
  });
}
function Sg(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Cg({
  editor: t,
  options: e,
  dataAttribute: n,
  doc: r,
  selection: i,
  from: o,
  to: s
}) {
  const { anchor: l } = i, a = [], c = t.isEmpty;
  return r.nodesBetween(o, s, (d, u) => {
    const f = l >= u && l <= u + d.nodeSize, h = !d.isLeaf && Si(d);
    return d.type.isTextblock && (f || !e.showOnlyCurrent) && h && a.push(
      xg({
        editor: t,
        isEmptyDoc: c,
        dataAttribute: n,
        hasAnchor: f,
        placeholder: e.placeholder,
        classes: {
          emptyEditor: e.emptyEditorClass,
          emptyNode: Sg(e.emptyNodeClass, {
            editor: t,
            node: d,
            pos: u,
            hasAnchor: f
          })
        },
        node: d,
        pos: u
      })
    ), e.includeChildren;
  }), a;
}
function Ag({
  editor: t,
  options: e,
  dataAttribute: n,
  doc: r,
  selection: i
}) {
  if (!(t.isEditable || !e.showOnlyWhenEditable))
    return null;
  const { anchor: s } = i, l = [], a = t.isEmpty;
  if (e.showOnlyCurrent && !e.includeChildren) {
    const d = r.resolve(s), u = d.depth > 0 ? d.node(1) : d.nodeAfter, f = d.depth > 0 ? d.before(1) : s;
    if (u && u.type.isTextblock && Si(u)) {
      const h = s >= f && s <= f + u.nodeSize;
      l.push(
        xg({
          editor: t,
          isEmptyDoc: a,
          dataAttribute: n,
          hasAnchor: h,
          placeholder: e.placeholder,
          classes: {
            emptyEditor: e.emptyEditorClass,
            emptyNode: Sg(e.emptyNodeClass, {
              editor: t,
              node: u,
              pos: f,
              hasAnchor: h
            })
          },
          node: u,
          pos: f
        })
      );
    }
  } else
    l.push(
      ...Cg({
        editor: t,
        options: e,
        dataAttribute: n,
        doc: r,
        selection: i,
        from: 0,
        to: r.content.size
      })
    );
  return Z.create(r, l);
}
function Br(t, e) {
  var n;
  const r = t.resolve(e);
  if (r.depth === 0) {
    const s = (n = r.nodeAfter) != null ? n : r.nodeBefore;
    if (!s)
      return { from: e, to: e };
    const l = r.nodeAfter ? e : e - s.nodeSize;
    return { from: l, to: l + s.nodeSize };
  }
  const i = r.before(1), o = r.node(1);
  return { from: i, to: i + o.nodeSize };
}
function Fr(t, e) {
  return {
    from: Math.max(0, e.from - 1),
    to: Math.min(t.content.size, e.to - 1)
  };
}
function GM(t, e, n) {
  const r = [];
  return t.forEach((i, o) => {
    const s = o, l = s + i.nodeSize, a = s + 1, c = l + 1;
    a < n && c > e && r.push({ from: s, to: l });
  }), r;
}
function JM(t) {
  if (t.length === 0)
    return [];
  const e = [...t].sort((r, i) => r.from - i.from), n = [{ ...e[0] }];
  for (let r = 1; r < e.length; r += 1) {
    const i = n[n.length - 1], o = e[r];
    o.from <= i.to ? i.to = Math.max(i.to, o.to) : n.push({ ...o });
  }
  return n;
}
function XM(t, e) {
  const n = GM(t, e.from, e.to);
  return n.push(Fr(t, Br(t, e.from))), e.to > e.from ? n.push(
    Fr(
      t,
      Br(t, Math.min(e.to, t.content.size + 1) - 1)
    )
  ) : e.from < t.content.size + 1 && n.push(
    Fr(
      t,
      Br(t, Math.min(e.from + 1, t.content.size))
    )
  ), n;
}
function ZM(t, e, n) {
  const r = [];
  if (t.docChanged) {
    const i = ys(t);
    for (const o of i)
      r.push(...XM(n.doc, o.newRange));
  }
  return t.selectionSet && (r.push(
    Fr(
      n.doc,
      Br(n.doc, t.mapping.map(e.selection.anchor))
    )
  ), r.push(
    Fr(
      n.doc,
      Br(n.doc, n.selection.anchor)
    )
  )), JM(r);
}
function YM(t, e, n) {
  const r = Math.max(0, Math.min(t, n.content.size)), i = Math.max(r, Math.min(e, n.content.size));
  return { from: r, to: i };
}
function QM({
  decorations: t,
  ranges: e,
  editor: n,
  options: r,
  dataAttribute: i,
  doc: o,
  selection: s
}) {
  let l = t;
  for (const a of e) {
    const { from: c, to: d } = YM(a.from, a.to, o), u = l.find(c, d).filter((h) => h.from >= c && h.to <= d);
    u.length && (l = l.remove(u));
    const f = Cg({
      editor: n,
      options: r,
      dataAttribute: i,
      doc: o,
      selection: s,
      from: c,
      to: d
    });
    f.length && (l = l.add(o, f));
  }
  return l;
}
function eE({
  editor: t,
  options: e,
  dataAttribute: n
}) {
  return {
    init(r, i) {
      const o = Ag({
        editor: t,
        options: e,
        dataAttribute: n,
        doc: i.doc,
        selection: i.selection
      });
      return o ?? Z.empty;
    },
    apply(r, i, o, s) {
      if (!r.docChanged && !r.selectionSet)
        return i;
      const l = i.map(r.mapping, r.doc), a = ZM(r, o, s);
      return QM({
        decorations: l,
        ranges: a,
        editor: t,
        options: e,
        dataAttribute: n,
        doc: s.doc,
        selection: s.selection
      });
    }
  };
}
function tE(t) {
  return t.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").replace(/^[0-9-]+/, "").replace(/^-+/, "").toLowerCase();
}
function nE({ editor: t, options: e }) {
  const n = e.dataAttribute ? `data-${tE(e.dataAttribute)}` : `data-${kg}`, r = e.showOnlyCurrent && !e.includeChildren;
  return new re({
    key: lf,
    ...r ? {} : {
      state: eE({ editor: t, options: e, dataAttribute: n })
    },
    props: {
      decorations: r ? ({ doc: i, selection: o }) => Ag({ editor: t, options: e, dataAttribute: n, doc: i, selection: o }) : (i) => {
        var o;
        return e.showOnlyWhenEditable && !t.isEditable ? Z.empty : (o = lf.getState(i)) != null ? o : Z.empty;
      }
    }
  });
}
var rE = J.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      dataAttribute: kg,
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [nE({ editor: this.editor, options: this.options })];
  }
});
function la(t, e) {
  return !t.selection.empty && !Hp(t.selection) && e.isEditable;
}
function iE(t, e) {
  return la(t, e) && !e.isFocused && !e.view.dragging;
}
function oE() {
  var t;
  (t = window.getSelection()) == null || t.removeAllRanges();
}
function sE(t) {
  t.focus();
}
J.create({
  name: "selection",
  addOptions() {
    return {
      className: "selection"
    };
  },
  addProseMirrorPlugins() {
    const { editor: t, options: e } = this;
    return [
      new re({
        key: new se("selection"),
        props: {
          decorations(n) {
            return iE(n, t) ? Z.create(n.doc, [
              ve.inline(n.selection.from, n.selection.to, {
                class: e.className
              })
            ]) : null;
          },
          handleDOMEvents: {
            blur(n) {
              return la(n.state, t) && oE(), !1;
            },
            focus(n) {
              return la(n.state, t) && requestAnimationFrame(() => {
                !t.isDestroyed && n.hasFocus() && sE(n);
              }), !1;
            }
          }
        }
      })
    ];
  }
});
var lE = "skipTrailingNode";
function af({
  types: t,
  node: e
}) {
  return e && Array.isArray(t) && t.includes(e.type) || e?.type === t;
}
J.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: void 0,
      notAfter: []
    };
  },
  addProseMirrorPlugins() {
    var t;
    const e = new se(this.name), n = this.options.node || ((t = this.editor.schema.topNodeType.contentMatch.defaultType) == null ? void 0 : t.name) || "paragraph", r = Object.entries(this.editor.schema.nodes).map(([, i]) => i).filter((i) => (this.options.notAfter || []).concat(n).includes(i.name));
    return [
      new re({
        key: e,
        appendTransaction: (i, o, s) => {
          const { doc: l, tr: a, schema: c } = s, d = e.getState(s), u = l.content.size, f = c.nodes[n];
          if (!i.some((h) => h.getMeta(lE)) && d)
            return a.insert(u, f.create());
        },
        state: {
          init: (i, o) => {
            const s = o.tr.doc.lastChild;
            return !af({ node: s, types: r });
          },
          apply: (i, o) => {
            if (!i.docChanged || i.getMeta("__uniqueIDTransaction"))
              return o;
            const s = i.doc.lastChild;
            return !af({ node: s, types: r });
          }
        }
      })
    ];
  }
});
var aE = J.create({
  name: "undoRedo",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: t, dispatch: e }) => vg(t, e),
      redo: () => ({ state: t, dispatch: e }) => wg(t, e)
    };
  },
  addProseMirrorPlugins() {
    return [UM(this.options)];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), cE = be.create({
  name: "doc",
  topNode: !0,
  content: "block+",
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `

`) : ""
}), dE = KM, uE = be.create({
  name: "hardBreak",
  markdownTokenName: "br",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  linebreakReplacement: !0,
  parseHTML() {
    return [{ tag: "br" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["br", ne(this.options.HTMLAttributes, t)];
  },
  renderText() {
    return `
`;
  },
  renderMarkdown: () => `  
`,
  parseMarkdown: () => ({
    type: "hardBreak"
  }),
  addCommands() {
    return {
      setHardBreak: () => ({ commands: t, chain: e, state: n, editor: r }) => t.first([
        () => t.exitCode(),
        () => t.command(() => {
          const { selection: i, storedMarks: o } = n;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: s } = this.options, { splittableMarks: l } = r.extensionManager, a = o || i.$to.parentOffset && i.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: d }) => {
            if (d && a && s) {
              const u = a.filter(
                (f) => l.includes(f.type.name)
              );
              c.ensureMarks(u);
            }
            return !0;
          }).scrollIntoView().run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), fE = Object.defineProperty, hE = (t, e) => {
  for (var n in e)
    fE(t, n, { get: e[n], enumerable: !0 });
}, pE = "listItem", cf = "textStyle", df = /^\s*([-+*])\s$/, Tg = be.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [{ tag: "ul" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", ne(this.options.HTMLAttributes, t), 0];
  },
  markdownTokenName: "list",
  parseMarkdown: (t, e) => t.type !== "list" || t.ordered ? [] : {
    type: "bulletList",
    content: t.items ? e.parseChildren(t.items) : []
  },
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `
`) : "",
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(pE, this.editor.getAttributes(cf)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let t = hr({
      find: df,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = hr({
      find: df,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(cf),
      editor: this.editor
    })), [t];
  }
}), mE = (t, e, n) => {
  const { selection: r } = t;
  if (!r.empty)
    return null;
  const { $from: i } = r;
  if (!i.parent.isTextblock || i.parentOffset !== i.parent.content.size)
    return null;
  let o = -1;
  for (let h = i.depth; h > 0; h -= 1)
    if (i.node(h).type.name === e) {
      o = h;
      break;
    }
  if (o < 0)
    return null;
  const s = i.node(o), l = i.index(o);
  if (l + 1 >= s.childCount)
    return null;
  const a = s.child(l + 1);
  if (!n.includes(a.type.name))
    return null;
  const c = t.schema.nodes[e];
  let d = !1;
  if (a.forEach((h) => {
    h.type === c && h.childCount > 1 && (d = !0);
  }), !d)
    return null;
  const u = t.doc.resolve(i.after()).nodeAfter;
  if (!u || !n.includes(u.type.name))
    return null;
  const f = [];
  return u.forEach((h) => {
    f.push(h);
  }), f.length === 0 ? null : {
    listItemDepth: o,
    nestedList: u,
    nestedListPos: i.after(),
    insertPos: i.after(o),
    items: f
  };
}, gE = (t, e, n, r) => {
  const i = mE(t, n, r);
  if (!i)
    return !1;
  const { selection: o } = t, { nestedList: s, nestedListPos: l, insertPos: a, items: c } = i, d = t.tr;
  d.delete(l, l + s.nodeSize);
  const u = d.mapping.map(a);
  return d.insert(u, A.from(c)), d.setSelection(o.map(d.doc, d.mapping)), e && e(d), !0;
}, yE = (t, e, n) => gE(t.state, t.view.dispatch, e, n), Mg = (t, e) => J.create({
  name: `${t}BranchingDeleteKeymap`,
  priority: 101,
  addKeyboardShortcuts() {
    const n = () => yE(this.editor, t, e);
    return {
      Delete: n,
      "Mod-Delete": n
    };
  }
}), Eg = [
  [1e3, "m"],
  [900, "cm"],
  [500, "d"],
  [400, "cd"],
  [100, "c"],
  [90, "xc"],
  [50, "l"],
  [40, "xl"],
  [10, "x"],
  [9, "ix"],
  [5, "v"],
  [4, "iv"],
  [1, "i"]
], ji = "abcdefghijklmnopqrstuvwxyz", bE = "[a-zA-Z]{1,2}", Lg = String.raw`\d+|[ivxlcdmIVXLCDM]+|${bE}`;
function Hs(t) {
  let e = t, n = "";
  for (const [r, i] of Eg)
    for (; e >= r; )
      n += i, e -= r;
  return n;
}
function vc(t) {
  return Hs(t).toUpperCase();
}
function Og(t) {
  const e = t.toLowerCase();
  let n = 0, r = 0;
  for (; n < e.length; ) {
    let i = !1;
    for (const [o, s] of Eg)
      if (e.startsWith(s, n)) {
        r += o, n += s.length, i = !0;
        break;
      }
    if (!i)
      return 0;
  }
  return r;
}
function vE(t) {
  if (!/^[ivxlcdmIVXLCDM]+$/.test(t))
    return !1;
  const e = Og(t);
  return e <= 0 ? !1 : (t === t.toLowerCase() ? Hs(e) : vc(e)) === t;
}
function wE(t) {
  const e = t.toLowerCase();
  if (e.length === 1)
    return e.charCodeAt(0) - 97 + 1;
  if (e.length === 2) {
    const n = e.charCodeAt(0) - 97, r = e.charCodeAt(1) - 97;
    return (n + 1) * 26 + r + 1;
  }
  return 0;
}
function Ao(t) {
  if (t <= 26)
    return ji[t - 1];
  const e = Math.floor((t - 1) / 26) - 1, n = (t - 1) % 26;
  return e < 0 ? ji[n] : ji[e] + ji[n];
}
function Rs(t) {
  if (!(!t || /^\d+$/.test(t))) {
    if (vE(t))
      return t === t.toLowerCase() ? "i" : "I";
    if (/^[a-z]{1,2}$/.test(t))
      return "a";
    if (/^[A-Z]{1,2}$/.test(t))
      return "A";
  }
}
function wc(t) {
  if (/^\d+$/.test(t))
    return parseInt(t, 10);
  const e = Rs(t);
  if (e === "i" || e === "I")
    return Og(t);
  if (e === "a" || e === "A") {
    const r = wE(t);
    return r > 0 ? r : 1;
  }
  const n = parseInt(t, 10);
  return Number.isNaN(n) ? 1 : n;
}
function kE(t, e) {
  if (t === "numeric")
    return String(e);
  switch (t) {
    case "a":
      return Ao(e);
    case "A":
      return Ao(e).toUpperCase();
    case "i":
      return Hs(e);
    case "I":
      return vc(e);
    default:
      return String(e);
  }
}
function xE(t) {
  var e;
  if (t.length === 0)
    return !1;
  const n = (e = Rs(t[0])) != null ? e : "numeric", r = wc(t[0]);
  if (r < 1)
    return !1;
  for (let i = 0; i < t.length; i++) {
    const o = kE(n, r + i);
    if (t[i] !== o)
      return !1;
  }
  return !0;
}
function SE(t) {
  return {
    type: Rs(t),
    start: wc(t)
  };
}
function CE(t) {
  const { type: e, start: n } = SE(t), r = {};
  return e && (r.type = e), n !== 1 && (r.start = n), r;
}
function AE(t, e, n = ". ") {
  const r = e + 1;
  if (!t || t === "1")
    return `${r}${n}`;
  switch (t) {
    case "a":
      return `${Ao(r)}${n}`;
    case "A":
      return `${Ao(r).toUpperCase()}${n}`;
    case "i":
      return `${Hs(r)}${n}`;
    case "I":
      return `${vc(r)}${n}`;
    default:
      return `${r}${n}`;
  }
}
function TE(t) {
  var e, n;
  const r = (e = t.tokens) == null ? void 0 : e[0];
  return !!(t.text && ((n = t.tokens) == null ? void 0 : n.length) === 1 && r?.type === "list" && r.ordered && r.raw === t.text);
}
function ME(t, e) {
  return e.tokenizeInline ? e.parseInline(e.tokenizeInline(t)) : e.parseInline([
    {
      type: "text",
      raw: t,
      text: t
    }
  ]);
}
var Hg = be.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["li", ne(this.options.HTMLAttributes, t), 0];
  },
  markdownTokenName: "list_item",
  parseMarkdown: (t, e) => {
    var n;
    if (t.type !== "list_item")
      return [];
    const r = (n = e.parseBlockChildren) != null ? n : e.parseChildren;
    let i = [];
    if (t.tokens && t.tokens.length > 0) {
      if (TE(t))
        return {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: ME(t.text || "", e)
            }
          ]
        };
      if (t.tokens.some((s) => s.type === "paragraph"))
        i = r(t.tokens);
      else {
        const s = t.tokens[0];
        if (s && s.type === "text" && s.tokens && s.tokens.length > 0) {
          if (i = [
            {
              type: "paragraph",
              content: e.parseInline(s.tokens)
            }
          ], t.tokens.length > 1) {
            const a = t.tokens.slice(1), c = r(a);
            i.push(...c);
          }
        } else
          i = r(t.tokens);
      }
    }
    return i.length === 0 && (i = [
      {
        type: "paragraph",
        content: []
      }
    ]), {
      type: "listItem",
      content: i
    };
  },
  renderMarkdown: (t, e, n) => rc(
    t,
    e,
    (r) => {
      var i, o, s, l;
      if (r.parentType === "bulletList")
        return "- ";
      if (r.parentType === "orderedList") {
        const a = ((o = (i = r.meta) == null ? void 0 : i.parentAttrs) == null ? void 0 : o.start) || 1, c = (l = (s = r.meta) == null ? void 0 : s.parentAttrs) == null ? void 0 : l.type, d = a - 1 + (r.index || 0);
        return AE(c, d, ". ");
      }
      return "- ";
    },
    n
  ),
  addExtensions() {
    return [
      Mg(this.name, [
        this.options.bulletListTypeName,
        this.options.orderedListTypeName
      ])
    ];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), EE = {};
hE(EE, {
  findListItemPos: () => Vs,
  getNextListDepth: () => kc,
  handleBackspace: () => aa,
  handleDelete: () => ca,
  handleTab: () => Ig,
  hasListBefore: () => Rg,
  hasListItemAfter: () => LE,
  hasListItemBefore: () => OE,
  listItemHasSubList: () => HE,
  nextListIsDeeper: () => Vg,
  nextListIsHigher: () => Ng
});
var Vs = (t, e) => {
  const { $from: n } = e.selection, r = ye(t, e.schema);
  let i = null, o = n.depth, s = n.pos, l = null;
  for (; o > 0 && l === null; )
    i = n.node(o), i.type === r ? l = o : (o -= 1, s -= 1);
  return l === null ? null : { $pos: e.doc.resolve(s), depth: l };
}, kc = (t, e) => {
  const n = Vs(t, e);
  if (!n)
    return !1;
  const [, r] = Dv(e, t, n.$pos.pos + 4);
  return r;
}, Rg = (t, e, n) => {
  const { $anchor: r } = t.selection, i = Math.max(0, r.pos - 2), o = t.doc.resolve(i).node();
  return !(!o || !n.includes(o.type.name));
}, aa = (t, e, n) => {
  if (t.commands.undoInputRule())
    return !0;
  if (t.state.selection.from !== t.state.selection.to)
    return !1;
  if (!Pt(t.state, e) && Rg(t.state, e, n)) {
    const { $anchor: o } = t.state.selection, s = t.state.doc.resolve(o.before() - 1), l = [];
    s.node().descendants((d, u) => {
      d.type.name === e && l.push({ node: d, pos: u });
    });
    const a = l.at(-1);
    if (!a)
      return !1;
    const c = t.state.doc.resolve(s.start() + a.pos + 1);
    return t.chain().cut({ from: o.start() - 1, to: o.end() + 1 }, c.end()).joinForward().run();
  }
  if (!Pt(t.state, e) || !Fv(t.state))
    return !1;
  const { $from: r } = t.state.selection, i = r.depth - 1;
  return r.node(i).type !== t.schema.nodes[e] || r.index(i) !== 0 ? !1 : t.chain().liftListItem(e).run();
}, Vg = (t, e) => {
  const n = kc(t, e), r = Vs(t, e);
  return !r || !n ? !1 : n > r.depth;
}, Ng = (t, e) => {
  const n = kc(t, e), r = Vs(t, e);
  return !r || !n ? !1 : n < r.depth;
}, ca = (t, e) => {
  if (!Pt(t.state, e) || !Bv(t.state, e))
    return !1;
  const { selection: n } = t.state, { $from: r, $to: i } = n;
  return !n.empty && r.sameParent(i) ? !1 : Vg(e, t.state) ? t.chain().focus(t.state.selection.from + 4).lift(e).joinBackward().run() : Ng(e, t.state) ? t.chain().joinForward().joinBackward().run() : t.commands.joinItemForward();
}, Ig = (t, e, n) => {
  const { state: r } = t, { selection: i } = r;
  if (!i.empty) return !1;
  const { $from: o } = i;
  if (o.parentOffset !== 0 || !o.parent.isTextblock || Pt(r, e)) return !1;
  const s = Pv(o);
  if (!s || !n.includes(s.type.name)) return !1;
  const l = s.lastChild;
  if (!l || l.type.name !== e) return !1;
  const a = o.parent;
  if (!l.canReplace(l.childCount, l.childCount, A.from(a)))
    return !1;
  const c = o.before(), d = o.after(), u = c - 2;
  return t.commands.command(({ tr: f, dispatch: h }) => (h && (f.delete(c, d).insert(u, A.from(a)), f.setSelection(N.create(f.doc, u + 1)), f.scrollIntoView()), !0));
}, LE = (t, e) => {
  var n;
  const { $anchor: r } = e.selection, i = e.doc.resolve(r.pos - r.parentOffset - 2);
  return !(i.index() === i.parent.childCount - 1 || ((n = i.nodeAfter) == null ? void 0 : n.type.name) !== t);
}, OE = (t, e) => {
  var n;
  const { $anchor: r } = e.selection, i = e.doc.resolve(r.pos - 2);
  return !(i.index() === 0 || ((n = i.nodeBefore) == null ? void 0 : n.type.name) !== t);
}, HE = (t, e, n) => {
  if (!n)
    return !1;
  const r = ye(t, e.schema);
  let i = !1;
  return n.descendants((o) => {
    o.type === r && (i = !0);
  }), i;
}, RE = J.create({
  name: "listKeymap",
  addOptions() {
    return {
      listTypes: [
        {
          itemName: "listItem",
          wrapperNames: ["bulletList", "orderedList"]
        },
        {
          itemName: "taskItem",
          wrapperNames: ["taskList"]
        }
      ]
    };
  },
  addKeyboardShortcuts() {
    return {
      Delete: ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: n }) => {
          t.state.schema.nodes[n] !== void 0 && ca(t, n) && (e = !0);
        }), e;
      },
      "Mod-Delete": ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: n }) => {
          t.state.schema.nodes[n] !== void 0 && ca(t, n) && (e = !0);
        }), e;
      },
      Backspace: ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
          t.state.schema.nodes[n] !== void 0 && aa(t, n, r) && (e = !0);
        }), e;
      },
      "Mod-Backspace": ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
          t.state.schema.nodes[n] !== void 0 && aa(t, n, r) && (e = !0);
        }), e;
      },
      Tab: ({ editor: t }) => {
        for (const { itemName: e, wrapperNames: n } of this.options.listTypes)
          if (t.state.schema.nodes[e] !== void 0 && Ig(t, e, n))
            return !0;
        return !1;
      }
    };
  }
}), da = new RegExp(
  `^(\\s*)(${Lg})([.)])\\s+(.*)$`
), VE = /^\s/, Yn = {
  heading: /^#{1,6}(?:\s|$)/,
  bulletItem: /^[-+*]\s+/,
  codeFence: /^(?:```|~~~)/,
  blockMath: /^\$\$/,
  thematicBreak: /^(?:(?:-[ \t]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})$/
};
function NE(t) {
  return da.test(t.trimStart());
}
function IE(t) {
  const e = t.trimStart();
  return Yn.bulletItem.test(e) || NE(e) || Yn.heading.test(e) || // dash breaks are excluded: "---" directly below paragraph text is a
  // setext heading underline, not a thematic break
  Yn.thematicBreak.test(e) && !e.startsWith("-") || // oxlint-disable-next-line prefer-string-starts-ends-with
  /^>\s?/.test(e) || Yn.codeFence.test(e) || Yn.blockMath.test(e);
}
function _E(t) {
  return Object.values(Yn).some((e) => e.test(t));
}
function DE(t) {
  const e = [], n = [];
  let r = !1;
  return t.forEach((i) => {
    if (r) {
      n.push(i);
      return;
    }
    if (i.trim() === "") {
      r = !0, n.push(i);
      return;
    }
    if (e.length > 0 && IE(i)) {
      r = !0, n.push(i);
      return;
    }
    e.push(i);
  }), {
    paragraphLines: e,
    blockLines: n
  };
}
function PE(t) {
  const e = [];
  let n = 0, r = 0;
  for (; n < t.length; ) {
    const i = t[n], o = i.match(da);
    if (!o)
      break;
    const [, s, l, a, c] = o, d = s.length, u = parseInt(l, 10), f = isNaN(u) ? Rs(l) : void 0, h = isNaN(u) ? wc(l) : u, p = [c];
    let m = n + 1;
    const g = [i];
    let y = !1;
    for (; m < t.length; ) {
      const b = t[m];
      if (b.match(da))
        break;
      if (b.trim() === "")
        g.push(b), p.push(""), y = !0, m += 1;
      else if (b.match(VE)) {
        const v = b.length - b.trimStart().length, x = d + l.length + 1;
        g.push(b), p.push(b.slice(Math.min(v, x))), m += 1;
      } else {
        if (y || _E(b))
          break;
        g.push(b), p.push(b), m += 1;
      }
    }
    e.push({
      indent: d,
      number: h,
      type: f,
      content: p.join(`
`).trim(),
      contentLines: p,
      raw: g.join(`
`)
    }), r = m, n = m;
  }
  return [e, r];
}
var zE = new RegExp(
  `^(${Lg})([.)])\\s+(.+)$`
);
function $E(t) {
  const e = t.split(`
`).filter((o) => o.trim().length > 0);
  if (e.length === 0)
    return null;
  const n = [];
  for (const o of e) {
    const s = o.trim().match(zE);
    if (!s)
      return null;
    n.push({
      marker: s[1],
      content: s[3]
    });
  }
  const r = n.map((o) => o.marker);
  return xE(r) ? {
    type: "orderedList",
    attrs: CE(n[0].marker),
    content: n.map((o) => ({
      type: "listItem",
      content: [
        {
          type: "paragraph",
          content: [{ type: "text", text: o.content }]
        }
      ]
    }))
  } : null;
}
function _g(t, e, n) {
  const r = [];
  let i = 0;
  for (; i < t.length; ) {
    const o = t[i];
    if (o.indent === e) {
      const { paragraphLines: s, blockLines: l } = DE(o.contentLines), a = s.join(`
`).trim(), c = [];
      a && c.push({
        type: "paragraph",
        raw: a,
        tokens: n.inlineTokens(a)
      });
      const d = l.join(`
`).trim();
      if (d) {
        const h = n.blockTokens(d);
        c.push(...h);
      }
      let u = i + 1;
      const f = [];
      for (; u < t.length && t[u].indent > e; )
        f.push(t[u]), u += 1;
      if (f.length > 0) {
        const h = Math.min(...f.map((m) => m.indent)), p = _g(f, h, n);
        c.push({
          type: "list",
          ordered: !0,
          start: f[0].number,
          typeMarker: f[0].type,
          items: p,
          raw: f.map((m) => m.raw).join(`
`)
        });
      }
      r.push({
        type: "list_item",
        raw: o.raw,
        tokens: c
      }), i = u;
    } else
      i += 1;
  }
  return r;
}
function BE(t, e) {
  return t.map((n) => {
    if (n.type !== "list_item")
      return e.parseChildren([n])[0];
    const r = [];
    return n.tokens && n.tokens.length > 0 && n.tokens.forEach((i) => {
      if (i.type === "paragraph" || i.type === "list" || i.type === "blockquote" || i.type === "code")
        r.push(...e.parseChildren([i]));
      else if (i.type === "text" && i.tokens) {
        const o = e.parseChildren([i]);
        r.push({
          type: "paragraph",
          content: o
        });
      } else {
        const o = e.parseChildren([i]);
        o.length > 0 && r.push(...o);
      }
    }), {
      type: "listItem",
      content: r
    };
  });
}
var FE = "listItem", uf = "textStyle", ff = /^(\d+)\.\s$/;
function hf(t) {
  const e = t.match(/list-style-type\s*:\s*([^;]+)/i);
  if (!e)
    return null;
  switch (e[1].trim().toLowerCase()) {
    case "upper-roman":
      return "I";
    case "lower-roman":
      return "i";
    case "upper-alpha":
    case "upper-latin":
      return "A";
    case "lower-alpha":
    case "lower-latin":
      return "a";
    default:
      return null;
  }
}
var Dg = be.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (t) => t.hasAttribute("start") ? parseInt(t.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("type");
          if (e)
            return e;
          const n = t.getAttribute("style");
          if (n) {
            const i = hf(n);
            if (i)
              return i;
          }
          const r = t.querySelector("li");
          if (r) {
            const i = r.getAttribute("style");
            if (i) {
              const o = hf(i);
              if (o)
                return o;
            }
          }
          return null;
        }
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    const { start: e, type: n, ...r } = t, i = ne(this.options.HTMLAttributes, r);
    return e !== 1 && (i.start = e), n && n !== "1" && (i.type = n), ["ol", i, 0];
  },
  markdownTokenName: "list",
  parseMarkdown: (t, e) => {
    if (t.type !== "list" || !t.ordered)
      return [];
    const n = t.start || 1, r = t.typeMarker, i = t.items ? BE(t.items, e) : [], o = {};
    return n !== 1 && (o.start = n), r && (o.type = r), Object.keys(o).length > 0 ? {
      type: "orderedList",
      attrs: o,
      content: i
    } : {
      type: "orderedList",
      content: i
    };
  },
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `
`) : "",
  markdownTokenizer: {
    name: "orderedList",
    level: "block",
    // marked already breaks paragraphs before a start-of-line list marker. It
    // probes this with `src.slice(1)`, so any marker it surfaces here is
    // mid-line (like the "216)" in "(216) 555-1234") and must not start a list.
    // We still define the callback so marked does not fall back to probing
    // `tokenize`, which would re-introduce the mid-line split.
    start: () => -1,
    tokenize: (t, e, n) => {
      var r, i;
      const o = t.split(`
`), [s, l] = PE(o);
      if (s.length === 0)
        return;
      const a = _g(s, s[0].indent, n);
      if (a.length === 0)
        return;
      const c = ((r = s[0]) == null ? void 0 : r.number) || 1, d = (i = s[0]) == null ? void 0 : i.type;
      return {
        type: "list",
        ordered: !0,
        start: c,
        typeMarker: d,
        items: a,
        raw: o.slice(0, l).join(`
`)
      };
    }
  },
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(FE, this.editor.getAttributes(uf)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addProseMirrorPlugins() {
    return [
      new re({
        props: {
          handlePaste: (t, e) => {
            var n, r;
            const i = (n = e.clipboardData) == null ? void 0 : n.getData("text/html");
            if (i?.trim())
              return !1;
            const o = (r = e.clipboardData) == null ? void 0 : r.getData("text/plain");
            if (!o)
              return !1;
            const s = $E(o);
            if (!s)
              return !1;
            try {
              const l = t.state.schema.nodeFromJSON(s), a = t.state.tr.replaceSelectionWith(l);
              return t.dispatch(a), !0;
            } catch {
              return !1;
            }
          }
        }
      })
    ];
  },
  addInputRules() {
    const t = (n, r) => (!r.attrs.type || r.attrs.type === "1") && r.childCount + r.attrs.start === +n[1];
    let e = hr({
      find: ff,
      type: this.type,
      getAttributes: (n) => ({ start: +n[1] }),
      joinPredicate: t
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (e = hr({
      find: ff,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (n) => ({ start: +n[1], ...this.editor.getAttributes(uf) }),
      joinPredicate: t,
      editor: this.editor
    })), [e];
  }
}), UE = /^\s*(\[([( |x])?\])\s$/, WE = "position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0", jE = (t, e, n) => {
  var r;
  return ((r = n?.checkboxLabel) == null ? void 0 : r.call(n, t, e)) || `Task item checkbox for ${t.textContent || "empty task item"}`;
}, Pg = be.create({
  name: "taskItem",
  addOptions() {
    return {
      nested: !1,
      HTMLAttributes: {},
      taskListTypeName: "taskList",
      a11y: void 0
    };
  },
  content() {
    return this.options.nested ? "paragraph block*" : "paragraph+";
  },
  defining: !0,
  addAttributes() {
    return {
      checked: {
        default: !1,
        keepOnSplit: !1,
        parseHTML: (t) => {
          const e = t.getAttribute("data-checked");
          return e === "" || e === "true";
        },
        renderHTML: (t) => ({
          "data-checked": t.checked
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: `li[data-type="${this.name}"]`,
        priority: 51,
        contentElement: (t) => {
          var e;
          return (e = t.querySelector("div")) != null ? e : t;
        }
      }
    ];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [
      "li",
      ne(this.options.HTMLAttributes, e, {
        "data-type": this.name
      }),
      [
        "label",
        [
          "input",
          {
            type: "checkbox",
            checked: t.attrs.checked ? "checked" : null
          }
        ],
        ["span"]
      ],
      ["div", 0]
    ];
  },
  parseMarkdown: (t, e) => {
    const n = [];
    if (t.tokens && t.tokens.length > 0 ? n.push(e.createNode("paragraph", {}, e.parseInline(t.tokens))) : t.text ? n.push(e.createNode("paragraph", {}, [e.createNode("text", { text: t.text })])) : n.push(e.createNode("paragraph", {}, [])), t.nestedTokens && t.nestedTokens.length > 0) {
      const r = e.parseChildren(t.nestedTokens);
      n.push(...r);
    }
    return e.createNode("taskItem", { checked: t.checked || !1 }, n);
  },
  renderMarkdown: (t, e) => {
    var n;
    const i = `- [${(n = t.attrs) != null && n.checked ? "x" : " "}] `;
    return rc(t, e, i);
  },
  addExtensions() {
    return this.options.nested ? [Mg(this.name, [this.options.taskListTypeName])] : [];
  },
  addKeyboardShortcuts() {
    const t = {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
    return this.options.nested ? {
      ...t,
      Tab: () => this.editor.commands.sinkListItem(this.name)
    } : t;
  },
  addNodeView() {
    return ({ node: t, HTMLAttributes: e, getPos: n, editor: r }) => {
      const i = document.createElement("li"), o = document.createElement("label"), s = document.createElement("span"), l = document.createElement("input"), a = document.createElement("div");
      s.style.cssText = WE;
      const c = (u) => {
        const f = jE(u, u.attrs.checked, this.options.a11y);
        l.setAttribute("aria-label", f), s.textContent = f;
      };
      c(t), o.contentEditable = "false", l.type = "checkbox", l.addEventListener("mousedown", (u) => u.preventDefault()), l.addEventListener("change", (u) => {
        if (!r.isEditable && !this.options.onReadOnlyChecked) {
          l.checked = !l.checked;
          return;
        }
        const { checked: f } = u.target;
        r.isEditable && typeof n == "function" && r.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: h }) => {
          const p = n();
          if (typeof p != "number")
            return !1;
          const m = h.doc.nodeAt(p);
          return h.setNodeMarkup(p, void 0, {
            ...m?.attrs,
            checked: f
          }), !0;
        }).run(), !r.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(t, f) || (l.checked = !l.checked));
      }), Object.entries(this.options.HTMLAttributes).forEach(([u, f]) => {
        i.setAttribute(u, f);
      }), i.dataset.checked = t.attrs.checked, l.checked = t.attrs.checked, o.append(l, s), i.append(o, a), Object.entries(e).forEach(([u, f]) => {
        i.setAttribute(u, f);
      });
      let d = new Set(Object.keys(e));
      return {
        dom: i,
        contentDOM: a,
        update: (u) => {
          if (u.type !== this.type)
            return !1;
          i.dataset.checked = u.attrs.checked, l.checked = u.attrs.checked, c(u);
          const f = r.extensionManager.attributes, h = fr(u, f), p = new Set(Object.keys(h)), m = this.options.HTMLAttributes;
          return d.forEach((g) => {
            p.has(g) || (g in m ? i.setAttribute(g, m[g]) : i.removeAttribute(g));
          }), Object.entries(h).forEach(([g, y]) => {
            y == null ? g in m ? i.setAttribute(g, m[g]) : i.removeAttribute(g) : i.setAttribute(g, y);
          }), d = p, !0;
        }
      };
    };
  },
  addInputRules() {
    return [
      hr({
        find: UE,
        type: this.type,
        getAttributes: (t) => ({
          checked: t[t.length - 1] === "x"
        })
      })
    ];
  }
}), zg = be.create({
  name: "taskList",
  addOptions() {
    return {
      itemTypeName: "taskItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      {
        tag: `ul[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "ul",
      ne(this.options.HTMLAttributes, t, { "data-type": this.name }),
      0
    ];
  },
  parseMarkdown: (t, e) => e.createNode("taskList", {}, e.parseChildren(t.items || [])),
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `
`) : "",
  markdownTokenizer: {
    name: "taskList",
    level: "block",
    start(t) {
      var e;
      const n = (e = t.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)) == null ? void 0 : e.index;
      return n !== void 0 ? n : -1;
    },
    tokenize(t, e, n) {
      const r = (o) => {
        const s = Fl(
          o,
          {
            itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
            extractItemData: (l) => ({
              indentLevel: l[1].length,
              mainContent: l[4],
              checked: l[3].toLowerCase() === "x"
            }),
            createToken: (l, a) => ({
              type: "taskItem",
              raw: "",
              mainContent: l.mainContent,
              indentLevel: l.indentLevel,
              checked: l.checked,
              text: l.mainContent,
              tokens: n.inlineTokens(l.mainContent),
              nestedTokens: a
            }),
            // Allow recursive nesting
            customNestedParser: r
          },
          n
        );
        if (s) {
          const l = {
            type: "taskList",
            raw: s.raw,
            items: s.items
          }, a = o.slice(s.raw.length);
          return a.trim() ? [l, ...n.blockTokens(a)] : [l];
        }
        return n.blockTokens(o);
      }, i = Fl(
        t,
        {
          itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
          extractItemData: (o) => ({
            indentLevel: o[1].length,
            mainContent: o[4],
            checked: o[3].toLowerCase() === "x"
          }),
          createToken: (o, s) => ({
            type: "taskItem",
            raw: "",
            mainContent: o.mainContent,
            indentLevel: o.indentLevel,
            checked: o.checked,
            text: o.mainContent,
            tokens: n.inlineTokens(o.mainContent),
            nestedTokens: s
          }),
          // Use the recursive parser for nested content
          customNestedParser: r
        },
        n
      );
      if (i)
        return {
          type: "taskList",
          raw: i.raw,
          items: i.items
        };
    }
  },
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleTaskList: () => ({ commands: t }) => t.toggleList(this.name, this.options.itemTypeName)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
    };
  }
});
J.create({
  name: "listKit",
  addExtensions() {
    const t = [];
    return this.options.bulletList !== !1 && t.push(Tg.configure(this.options.bulletList)), this.options.listItem !== !1 && t.push(Hg.configure(this.options.listItem)), this.options.listKeymap !== !1 && t.push(RE.configure(this.options.listKeymap)), this.options.orderedList !== !1 && t.push(Dg.configure(this.options.orderedList)), this.options.taskItem !== !1 && t.push(Pg.configure(this.options.taskItem)), this.options.taskList !== !1 && t.push(zg.configure(this.options.taskList)), t;
  }
});
var KE = be.create({
  name: "text",
  group: "inline",
  parseMarkdown: (t) => ({
    type: "text",
    text: t.text || ""
  }),
  renderMarkdown: (t) => t.text || ""
}), qE = 20, $g = (t, e = 0) => {
  const n = [];
  return !t.children.length || e > qE || Array.from(t.children).forEach((r) => {
    r.tagName === "SPAN" ? n.push(r) : r.children.length && n.push(...$g(r, e + 1));
  }), n;
}, GE = (t) => {
  if (!t.children.length)
    return;
  const e = $g(t);
  e && e.forEach((n) => {
    var r, i;
    const o = n.getAttribute("style"), s = (i = (r = n.parentElement) == null ? void 0 : r.closest("span")) == null ? void 0 : i.getAttribute("style");
    n.setAttribute("style", `${s};${o}`);
  });
}, Bg = it.create({
  name: "textStyle",
  priority: 101,
  addOptions() {
    return {
      HTMLAttributes: {},
      mergeNestedSpanStyles: !0
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        consuming: !1,
        getAttrs: (t) => t.hasAttribute("style") ? (this.options.mergeNestedSpanStyles && GE(t), {}) : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["span", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      toggleTextStyle: (t) => ({ commands: e }) => e.toggleMark(this.name, t),
      removeEmptyTextStyle: () => ({ tr: t }) => {
        const { selection: e } = t;
        return t.doc.nodesBetween(e.from, e.to, (n, r) => {
          if (n.isTextblock)
            return !0;
          n.marks.filter((i) => i.type === this.type).some((i) => Object.values(i.attrs).some((o) => !!o)) || t.removeMark(r, r + n.nodeSize, this.type);
        }), !0;
      }
    };
  }
}), JE = J.create({
  name: "backgroundColor",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          backgroundColor: {
            default: null,
            parseHTML: (t) => {
              var e;
              const n = (e = vr(t, "background-color")) != null ? e : t.style.backgroundColor;
              return n?.replace(/['"]+/g, "");
            },
            renderHTML: (t) => t.backgroundColor ? {
              style: `background-color: ${t.backgroundColor}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setBackgroundColor: (t) => ({ chain: e }) => e().setMark("textStyle", { backgroundColor: t }).run(),
      unsetBackgroundColor: () => ({ chain: t }) => t().setMark("textStyle", { backgroundColor: null }).removeEmptyTextStyle().run()
    };
  }
}), Fg = J.create({
  name: "color",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            parseHTML: (t) => {
              var e;
              const n = (e = vr(t, "color")) != null ? e : t.style.color;
              return n?.replace(/['"]+/g, "");
            },
            renderHTML: (t) => t.color ? {
              style: `color: ${t.color}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setColor: (t) => ({ chain: e }) => e().setMark("textStyle", { color: t }).run(),
      unsetColor: () => ({ chain: t }) => t().setMark("textStyle", { color: null }).removeEmptyTextStyle().run()
    };
  }
}), Ug = J.create({
  name: "fontFamily",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            // Prefer the raw inline `style` attribute so unquoted or
            // single-quoted multi-word names are preserved instead of being
            // canonicalized by `element.style.fontFamily`, which forces double
            // quotes that then get HTML-encoded to `&quot;` on serialization.
            parseHTML: (t) => {
              var e;
              return (e = vr(t, "font-family")) != null ? e : t.style.fontFamily;
            },
            renderHTML: (t) => t.fontFamily ? {
              style: `font-family: ${t.fontFamily}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontFamily: (t) => ({ chain: e }) => e().setMark("textStyle", { fontFamily: t }).run(),
      unsetFontFamily: () => ({ chain: t }) => t().setMark("textStyle", { fontFamily: null }).removeEmptyTextStyle().run()
    };
  }
}), XE = J.create({
  name: "fontSize",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            // Prefer the raw inline `style` attribute so the original format
            // is preserved instead of the canonicalized value returned by
            // `element.style.fontSize`.
            parseHTML: (t) => {
              var e;
              return (e = vr(t, "font-size")) != null ? e : t.style.fontSize;
            },
            renderHTML: (t) => t.fontSize ? {
              style: `font-size: ${t.fontSize}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (t) => ({ chain: e }) => e().setMark("textStyle", { fontSize: t }).run(),
      unsetFontSize: () => ({ chain: t }) => t().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
    };
  }
}), ZE = J.create({
  name: "lineHeight",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: null,
            // Prefer the raw inline `style` attribute so the original format
            // is preserved instead of the canonicalized value returned by
            // `element.style.lineHeight`.
            parseHTML: (t) => {
              var e;
              return (e = vr(t, "line-height")) != null ? e : t.style.lineHeight;
            },
            renderHTML: (t) => t.lineHeight ? {
              style: `line-height: ${t.lineHeight}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setLineHeight: (t) => ({ chain: e }) => e().setMark("textStyle", { lineHeight: t }).run(),
      unsetLineHeight: () => ({ chain: t }) => t().setMark("textStyle", { lineHeight: null }).removeEmptyTextStyle().run()
    };
  }
});
J.create({
  name: "textStyleKit",
  addExtensions() {
    const t = [];
    return this.options.backgroundColor !== !1 && t.push(JE.configure(this.options.backgroundColor)), this.options.color !== !1 && t.push(Fg.configure(this.options.color)), this.options.fontFamily !== !1 && t.push(Ug.configure(this.options.fontFamily)), this.options.fontSize !== !1 && t.push(XE.configure(this.options.fontSize)), this.options.lineHeight !== !1 && t.push(ZE.configure(this.options.lineHeight)), this.options.textStyle !== !1 && t.push(Bg.configure(this.options.textStyle)), t;
  }
});
var YE = "M19,12H17V15H14V17H19V12M7,9H10V7H5V12H7V9M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H21V19Z", QE = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", e2 = "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z", t2 = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", n2 = "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M11 8H9V10C9 11.1 8.1 12 7 12C8.1 12 9 12.9 9 14V16H11V18H9C7.9 18 7 17.1 7 16V15C7 13.9 6.1 13 5 13V11C6.1 11 7 10.1 7 9V8C7 6.9 7.9 6 9 6H11V8M19 13C17.9 13 17 13.9 17 15V16C17 17.1 16.1 18 15 18H13V16H15V14C15 12.9 15.9 12 17 12C15.9 12 15 11.1 15 10V8H13V6H15C16.1 6 17 6.9 17 8V9C17 10.1 17.9 11 19 11V13Z", r2 = "M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z", i2 = "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z", o2 = "M13.09 20H6L12 14L13.88 15.88C14.5 14.9 15.36 14.1 16.4 13.6L18 12V13.09C18.33 13.04 18.66 13 19 13C19.34 13 19.67 13.04 20 13.09V8L14 2H6C4.89 2 4 2.89 4 4V20C4 21.1 4.89 22 6 22H13.81C13.46 21.39 13.21 20.72 13.09 20M13 3.5L18.5 9H13V3.5M8 9C9.11 9 10 9.9 10 11S9.11 13 8 13 6 12.11 6 11 6.9 9 8 9M20 15V18H23V20H20V23H18V20H15V18H18V15H20Z", pf = "M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z", s2 = "M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z", l2 = "M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z", a2 = "M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z", c2 = "M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z", d2 = "M6,5V5.18L8.82,8H11.22L10.5,9.68L12.6,11.78L14.21,8H20V5H6M3.27,5L2,6.27L8.97,13.24L6.5,19H9.5L11.07,15.34L16.73,21L18,19.73L3.55,5.27L3.27,5Z", u2 = "M4,17L6.75,14.25L6.72,14.23C6.14,13.64 6.14,12.69 6.72,12.11L11.46,7.37L15.7,11.61L10.96,16.35C10.39,16.93 9.46,16.93 8.87,16.37L8.24,17H4M15.91,2.91C16.5,2.33 17.45,2.33 18.03,2.91L20.16,5.03C20.74,5.62 20.74,6.57 20.16,7.16L16.86,10.45L12.62,6.21L15.91,2.91Z", f2 = "M3,7H9V13H3V7M3,3H21V5H3V3M21,7V9H11V7H21M21,11V13H11V11H21M3,15H17V17H3V15M3,19H21V21H3V19Z", h2 = "M3,7H9V13H3V7M3,3H21V5H3V3M21,11V13H11V11H21M3,15H17V17H3V15M3,19H21V21H3V19Z", p2 = "M15,7H21V13H15V7M3,3H21V5H3V3M13,7V9H3V7H13M9,11V13H3V11H9M3,15H17V17H3V15M3,19H21V21H3V19Z", m2 = "M17,8H20V20H21V21H17V20H18V17H14L12.5,20H14V21H10V20H11L17,8M18,9L14.5,16H18V9M5,3H10C11.11,3 12,3.89 12,5V16H9V11H6V16H3V5C3,3.89 3.89,3 5,3M6,5V9H9V5H6Z", g2 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z", y2 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M21,18H15A2,2 0 0,1 13,16C13,15.47 13.2,15 13.54,14.64L18.41,9.41C18.78,9.05 19,8.55 19,8A2,2 0 0,0 17,6A2,2 0 0,0 15,8H13A4,4 0 0,1 17,4A4,4 0 0,1 21,8C21,9.1 20.55,10.1 19.83,10.83L15,16H21V18Z", b2 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V15H15V16H19V12H15V10H19V6H15V7H13V6A2,2 0 0,1 15,4Z", v2 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M18,18V13H13V11L18,4H20V11H21V13H20V18H18M18,11V7.42L15.45,11H18Z", w2 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H20V6H15V10H17A4,4 0 0,1 21,14A4,4 0 0,1 17,18H15A2,2 0 0,1 13,16V15H15V16H17A2,2 0 0,0 19,14A2,2 0 0,0 17,12H15A2,2 0 0,1 13,10V6A2,2 0 0,1 15,4Z", k2 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V7H19V6H15V10H19A2,2 0 0,1 21,12V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V6A2,2 0 0,1 15,4M15,12V16H19V12H15Z", x2 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M13,8H15.31L15.63,5H17.63L17.31,8H19.31L19.63,5H21.63L21.31,8H23V10H21.1L20.9,12H23V14H20.69L20.37,17H18.37L18.69,14H16.69L16.37,17H14.37L14.69,14H13V12H14.9L15.1,10H13V8M17.1,10L16.9,12H18.9L19.1,10H17.1Z", S2 = "M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M3,21H21V19H3M3,12L7,16V8M11,17H21V15H11V17Z", C2 = "M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M11,17H21V15H11M3,8V16L7,12M3,21H21V19H3V21Z", A2 = "M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z", T2 = "M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z", M2 = "M21,19V17H8V19H21M21,13V11H8V13H21M8,7H21V5H8V7M4,5V7H6V5H4M3,5A1,1 0 0,1 4,4H6A1,1 0 0,1 7,5V7A1,1 0 0,1 6,8H4A1,1 0 0,1 3,7V5M4,11V13H6V11H4M3,11A1,1 0 0,1 4,10H6A1,1 0 0,1 7,11V13A1,1 0 0,1 6,14H4A1,1 0 0,1 3,13V11M4,17V19H6V17H4M3,17A1,1 0 0,1 4,16H6A1,1 0 0,1 7,17V19A1,1 0 0,1 6,20H4A1,1 0 0,1 3,19V17Z", E2 = "M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z", L2 = "M13,4A4,4 0 0,1 17,8A4,4 0 0,1 13,12H11V18H9V4H13M13,10A2,2 0 0,0 15,8A2,2 0 0,0 13,6H11V10H13Z", O2 = "M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z", H2 = "M2 4V7H7V19H10V7H15V4H2M21 9H12V12H15V19H18V12H21V9Z", R2 = "M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z", V2 = "M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,21.03H16.97V20.03L17.86,19.23C18.62,18.58 19.18,18.04 19.56,17.6C19.93,17.16 20.12,16.75 20.13,16.36C20.14,16.08 20.05,15.85 19.86,15.66C19.68,15.5 19.39,15.38 19,15.38C18.69,15.38 18.42,15.44 18.16,15.56L17.5,15.94L17.05,14.77C17.32,14.56 17.64,14.38 18.03,14.24C18.42,14.1 18.85,14 19.32,14C20.1,14.04 20.7,14.25 21.1,14.66C21.5,15.07 21.72,15.59 21.72,16.23C21.71,16.79 21.53,17.31 21.18,17.78C20.84,18.25 20.42,18.7 19.91,19.14L19.27,19.66V19.68H21.85V21.03Z", N2 = "M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,9H16.97V8L17.86,7.18C18.62,6.54 19.18,6 19.56,5.55C19.93,5.11 20.12,4.7 20.13,4.32C20.14,4.04 20.05,3.8 19.86,3.62C19.68,3.43 19.39,3.34 19,3.33C18.69,3.34 18.42,3.4 18.16,3.5L17.5,3.89L17.05,2.72C17.32,2.5 17.64,2.33 18.03,2.19C18.42,2.05 18.85,2 19.32,2C20.1,2 20.7,2.2 21.1,2.61C21.5,3 21.72,3.54 21.72,4.18C21.71,4.74 21.53,5.26 21.18,5.73C20.84,6.21 20.42,6.66 19.91,7.09L19.27,7.61V7.63H21.85V9Z", I2 = "M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z", _2 = "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z", D2 = "M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z", P2 = "M18 15V18H15V20H18V23H20V20H23V18H20V15H18M13.3 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V13.3C20.4 13.1 19.7 13 19 13C17.9 13 16.8 13.3 15.9 13.9L14.5 12L11 16.5L8.5 13.5L5 18H13.1C13 18.3 13 18.7 13 19C13 19.7 13.1 20.4 13.3 21Z", z2 = "M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z", $2 = "M2,5.27L3.28,4L20,20.72L18.73,22L13.9,17.17L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L12.5,15.76L10.88,14.15C10.87,14.39 10.77,14.64 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C8.12,13.77 7.63,12.37 7.72,11L2,5.27M12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.79,8.97L9.38,7.55L12.71,4.22M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.2,10.54 16.61,12.5 16.06,14.23L14.28,12.46C14.23,11.78 13.94,11.11 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z", mf = "M10.6 13.4A1 1 0 0 1 9.2 14.8A4.8 4.8 0 0 1 9.2 7.8L12.7 4.2A5.1 5.1 0 0 1 19.8 4.2A5.1 5.1 0 0 1 19.8 11.3L18.3 12.8A6.4 6.4 0 0 0 17.9 10.4L18.4 9.9A3.2 3.2 0 0 0 18.4 5.6A3.2 3.2 0 0 0 14.1 5.6L10.6 9.2A2.9 2.9 0 0 0 10.6 13.4M23 18V20H20V23H18V20H15V18H18V15H20V18M16.2 13.7A4.8 4.8 0 0 0 14.8 9.2A1 1 0 0 0 13.4 10.6A2.9 2.9 0 0 1 13.4 14.8L9.9 18.4A3.2 3.2 0 0 1 5.6 18.4A3.2 3.2 0 0 1 5.6 14.1L6.1 13.7A7.3 7.3 0 0 1 5.7 11.2L4.2 12.7A5.1 5.1 0 0 0 4.2 19.8A5.1 5.1 0 0 0 11.3 19.8L13.1 18A6 6 0 0 1 16.2 13.7Z", B2 = "M19,13H5V11H19V13Z", F2 = "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z", U2 = "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z", W2 = "M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z", j2 = "M9 7V17H15V15H11V7H9Z", K2 = "M9 7C7.9 7 7 7.9 7 9V17H9V9H11V16H13V9H15V17H17V9C17 7.9 16.11 7 15 7H9Z", q2 = "M11 7C9.9 7 9 7.9 9 9V11C9 12.11 9.9 13 11 13H13V15H9V17H13C14.11 17 15 16.11 15 15V13C15 11.9 14.11 11 13 11H11V9H15V7H11Z", G2 = "M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z", J2 = "M11,2A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H2V2H11M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M15,11H18V8H20V11H23V13H20V16H18V13H15V11Z", X2 = "M13,2A2,2 0 0,0 11,4V20A2,2 0 0,0 13,22H22V2H13M20,10V14H13V10H20M20,16V20H13V16H20M20,4V8H13V4H20M9,11H6V8H4V11H1V13H4V16H6V13H9V11Z", Z2 = "M4,2H11A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M17.59,12L15,9.41L16.41,8L19,10.59L21.59,8L23,9.41L20.41,12L23,14.59L21.59,16L19,13.41L16.41,16L15,14.59L17.59,12Z", Y2 = "M5,10H3V4H11V6H5V10M19,18H13V20H21V14H19V18M5,18V14H3V20H11V18H5M21,4H13V6H19V10H21V4M8,13V15L11,12L8,9V11H3V13H8M16,11V9L13,12L16,15V13H21V11H16Z", Q2 = "M18,14H20V17H23V19H20V22H18V19H15V17H18V14M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z", eL = "M15.46,15.88L16.88,14.46L19,16.59L21.12,14.46L22.54,15.88L20.41,18L22.54,20.12L21.12,21.54L19,19.41L16.88,21.54L15.46,20.12L17.59,18L15.46,15.88M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z", tL = "M22,10A2,2 0 0,1 20,12H4A2,2 0 0,1 2,10V3H4V5H8V3H10V5H14V3H16V5H20V3H22V10M4,10H8V7H4V10M10,10H14V7H10V10M20,10V7H16V10H20M11,14H13V17H16V19H13V22H11V19H8V17H11V14Z", nL = "M22,14A2,2 0 0,0 20,12H4A2,2 0 0,0 2,14V21H4V19H8V21H10V19H14V21H16V19H20V21H22V14M4,14H8V17H4V14M10,14H14V17H10V14M20,14V17H16V14H20M11,10H13V7H16V5H13V2H11V5H8V7H11V10Z", rL = "M9.41,13L12,15.59L14.59,13L16,14.41L13.41,17L16,19.59L14.59,21L12,18.41L9.41,21L8,19.59L10.59,17L8,14.41L9.41,13M22,9A2,2 0 0,1 20,11H4A2,2 0 0,1 2,9V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V9M4,9H8V6H4V9M10,9H14V6H10V9M16,9H20V6H16V9Z", iL = "M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z", oL = "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z", sL = "M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5M14,13H11V16H9V13H6V11H9V8H11V11H14V13Z", lL = "M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z";
const aL = {
  bold: c2,
  italic: A2,
  underline: I2,
  strike: R2,
  color: lL,
  highlight: u2,
  heading: x2,
  textAlign: pf,
  fontFamily: m2,
  fontSize: H2,
  subscript: V2,
  superscript: N2,
  bulletList: T2,
  orderedList: E2,
  taskList: M2,
  indent: C2,
  outdent: S2,
  link: mf,
  fileImagePlus: o2,
  image: P2,
  video: sL,
  table: G2,
  blockquote: O2,
  horizontalRule: B2,
  code: r2,
  codeBlock: n2,
  clear: d2,
  undo: oL,
  redo: W2,
  markdownTheme: U2,
  fullscreen: _2,
  // heading
  h1: g2,
  h2: y2,
  h3: b2,
  h4: v2,
  h5: w2,
  h6: k2,
  p: L2,
  // textAlign
  left: l2,
  center: pf,
  right: a2,
  justify: s2,
  // no tollbar icon
  circle: e2,
  close: t2,
  fullscreenExit: D2,
  linkVariant: mf,
  linkVariantOff: $2,
  openInNew: F2,
  formatFloatLeft: f2,
  formatFloatNone: h2,
  formatFloatRight: p2,
  sizeS: q2,
  sizeM: K2,
  sizeL: j2,
  aspectRatio: YE,
  delete: i2,
  text: iL,
  htmlView: z2,
  // table
  tablePlus: Q2,
  tableRemove: eL,
  tableColumnPlusAfter: J2,
  tableColumnPlusBefore: X2,
  tableColumnRemove: Z2,
  tableRowPlusAfter: tL,
  tableRowPlusBefore: nL,
  tableRowRemove: rL,
  tableMergeCells: Y2,
  check: QE
};
function ue(t) {
  if (t)
    return `svg:${aL[t]}`;
}
const ee = /* @__PURE__ */ te({
  __name: "ActionButton",
  props: {
    icon: { default: void 0 },
    tooltip: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    color: { default: void 0 },
    action: { type: Function, default: void 0 },
    isActive: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, n = W(() => ue(e.icon));
    return (r, i) => {
      const o = un, s = Ef, l = yr;
      return R(), U(l, {
        class: dt(["rounded me-1 ms-0", {
          "v-btn--active": r.isActive?.()
        }]),
        density: "comfortable",
        size: "small",
        disabled: r.disabled,
        color: r.color,
        icon: "",
        onClick: r.action
      }, {
        default: L(() => [
          n.value ? (R(), U(o, {
            key: 0,
            icon: n.value
          }, null, 8, ["icon"])) : $e("", !0),
          H(s, {
            eager: !1,
            activator: "parent",
            location: "top",
            text: e.tooltip
          }, null, 8, ["text"]),
          ut(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "color", "class", "onClick"]);
    };
  }
}), cL = (t) => {
  const e = ["float-left", "float-none", "float-right"], n = [
    "formatFloatLeft",
    "formatFloatNone",
    "formatFloatRight"
  ], r = ["left", "inline", "right"];
  return e.map((i, o) => ({
    type: i,
    component: ee,
    componentProps: {
      tooltip: `editor.image.${i.replace("-", ".")}.tooltip`,
      icon: n[o],
      action: () => t.chain().focus().updateImage({ display: r[o] }).run(),
      isActive: () => t.isActive("image", { display: r[o] })
    }
  }));
}, dL = (t) => {
  const e = ["size-small", "size-medium", "size-large"], n = ["sizeS", "sizeM", "sizeL"];
  return e.map((r, i) => ({
    type: `image-${r}`,
    component: ee,
    componentProps: {
      tooltip: `editor.${r.replace("-", ".")}.tooltip`,
      icon: n[i],
      action: () => t.chain().focus().updateImage({ width: vo[r], height: null }).run(),
      isActive: () => t.isActive("image", { width: vo[r] })
    }
  }));
}, uL = (t) => {
  const e = ["size-small", "size-medium", "size-large"], n = ["sizeS", "sizeM", "sizeL"];
  return e.map((r, i) => ({
    type: `video-${r}`,
    component: ee,
    componentProps: {
      tooltip: `editor.${r.replace("-", ".")}.tooltip`,
      icon: n[i],
      action: () => t.chain().focus().updateVideo({ width: wo[r] }).run(),
      isActive: () => t.isActive("video", { width: wo[r] })
    }
  }));
}, fL = (t) => [
  ...cL(t),
  ...dL(t),
  ...uL(t),
  {
    type: "image-aspect-ratio",
    component: ee,
    componentProps: {
      tooltip: "editor.image.dialog.form.aspectRatio",
      icon: "aspectRatio",
      action: () => {
        const e = t.isActive("image", { lockAspectRatio: !0 });
        t.chain().focus().updateImage({
          lockAspectRatio: !e,
          height: e ? void 0 : null
        }).run();
      },
      isActive: () => t.isActive("image", { lockAspectRatio: !0 })
    }
  },
  {
    type: "unlink",
    component: ee,
    componentProps: {
      tooltip: "editor.link.unlink.tooltip",
      icon: "linkVariantOff",
      action: () => {
        const { href: e } = t.getAttributes("link");
        t.chain().extendMarkRange("link", { href: e }).unsetLink().focus().run();
      }
    }
  },
  {
    type: "link-open",
    component: ee,
    componentProps: {
      tooltip: "editor.link.open",
      icon: "openInNew",
      action: () => {
        const { href: e } = t.getAttributes("link");
        zr(e) && e && window.open(e, "_blank");
      }
    }
  },
  {
    type: "remove",
    component: ee,
    componentProps: {
      tooltip: "editor.remove",
      icon: "delete",
      action: () => {
        const { state: e, dispatch: n } = t.view;
        Va(e, n);
      }
    }
  }
], hL = (t, e, { editor: n, extension: r, t: i }) => {
  const { extensions: o = [] } = n.extensionManager, s = {};
  for (const l of Object.keys(t)) {
    const a = t[l];
    if (!a) continue;
    const c = [];
    for (const f of a) {
      if (f === "divider") {
        if (c[c.length - 1]?.type === "divider") continue;
        c.push({
          type: "divider",
          component: void 0,
          componentProps: {}
        });
        continue;
      }
      const h = e.find((m) => m.type === f);
      if (h) {
        c.push({
          ...h,
          componentProps: {
            ...h.componentProps,
            tooltip: h.componentProps.tooltip ? i(h.componentProps.tooltip) : void 0
          },
          componentSlots: h.componentSlots
        });
        continue;
      }
      const p = o.find((m) => m.name === f);
      if (p) {
        const { button: m } = p.options, g = m({ editor: n, extension: p, t: i });
        c.push({
          type: f,
          component: g.component,
          componentProps: g.componentProps,
          componentSlots: g.componentSlots
        });
        continue;
      }
    }
    const d = c[c.length - 1], u = c[0];
    d?.type === "divider" && c.pop(), u?.type === "divider" && c.shift(), s[l] = c;
  }
  return s;
};
var Ki = "&nbsp;", hl = " ", pL = be.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [{ tag: "p" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["p", ne(this.options.HTMLAttributes, t), 0];
  },
  parseMarkdown: (t, e) => {
    const n = t.tokens || [];
    if (n.length === 1 && n[0].type === "image")
      return e.parseChildren([n[0]]);
    const r = e.parseInline(n);
    return n.length === 1 && n[0].type === "text" && (n[0].raw === Ki || n[0].text === Ki || n[0].raw === hl || n[0].text === hl) && r.length === 1 && r[0].type === "text" && (r[0].text === Ki || r[0].text === hl) ? e.createNode("paragraph", void 0, []) : e.createNode("paragraph", void 0, r);
  },
  renderMarkdown: (t, e, n) => {
    var r, i;
    if (!t)
      return "";
    const o = Array.isArray(t.content) ? t.content : [];
    if (o.length === 0) {
      const s = Array.isArray((r = n?.previousNode) == null ? void 0 : r.content) ? n.previousNode.content : [];
      return ((i = n?.previousNode) == null ? void 0 : i.type) === "paragraph" && s.length === 0 ? Ki : "";
    }
    return e.renderChildren(o);
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: t }) => t.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
});
class mL {
  globalAttributes = ["class", "style", "id", "data-*"];
  // 默认属性
  isInitialized = !1;
  /**
   * 注册全局允许的属性（通常由 HtmlView 扩展调用）
   */
  registerGlobalAttributes(e) {
    e && e.length > 0 && (this.globalAttributes = [...e], this.isInitialized = !0, console.log(
      "Global allowedAttributes registered:",
      this.globalAttributes
    ));
  }
  /**
   * 获取全局允许的属性
   */
  getGlobalAttributes() {
    return [...this.globalAttributes];
  }
  /**
   * 检查是否已初始化
   */
  isGlobalInitialized() {
    return this.isInitialized;
  }
  /**
   * 重置注册表（用于测试）
   */
  reset() {
    this.globalAttributes = ["class", "style", "id"], this.isInitialized = !1;
  }
}
const xc = new mL();
function gL(t) {
  xc.registerGlobalAttributes(t);
}
function gf() {
  return xc.getGlobalAttributes();
}
function yL() {
  return xc.isGlobalInitialized();
}
function Me(t, e, n) {
  let r;
  n && n.length > 0 ? r = n : r = gf(), console.log(`Adding common attributes to ${e}:`, {
    local: n,
    global: gf(),
    final: r,
    globalInitialized: yL()
  });
  const i = t ? { ...t } : {};
  return r.forEach((o) => {
    i[o] || (i[o] = {
      default: null,
      parseHTML: (s) => s.getAttribute(o) || null,
      renderHTML: (s) => s[o] ? { [o]: s[o] } : {}
    });
  }), i;
}
const bL = /* @__PURE__ */ pL.extend({
  addAttributes() {
    return Me(
      this.parent?.(),
      "paragraph",
      this.options.allowedAttributes
    );
  }
}), zH = /* @__PURE__ */ J.create({
  name: "base-kit",
  addOptions() {
    return {
      ...this.parent?.(),
      bubble: {
        list: dk,
        defaultBubbleList: fL,
        button: ({ editor: t, extension: e, t: n }) => {
          const { list: r = {}, defaultBubbleList: i } = e.options?.bubble ?? {}, o = i?.(t) ?? [];
          return hL(r, o, {
            editor: t,
            extension: e,
            t: n
          });
        }
      }
    };
  },
  addExtensions() {
    const t = [];
    return this.options.placeholder !== !1 && t.push(
      rE.configure({
        placeholder: "",
        ...this.options.placeholder
      })
    ), this.options.focus !== !1 && t.push(
      dE.configure({
        className: "focus",
        ...this.options.focus
      })
    ), this.options.document !== !1 && t.push(cE.configure()), this.options.text !== !1 && t.push(KE.configure()), this.options.gapcursor !== !1 && t.push(qM.configure()), this.options.dropcursor !== !1 && t.push(jM.configure(this.options.dropcursor)), this.options.characterCount !== !1 && t.push(WM.configure(this.options.characterCount)), this.options.paragraph !== !1 && t.push(bL.configure(this.options.paragraph)), this.options.hardBreak !== !1 && t.push(uE.configure(this.options.hardBreak)), this.options.listItem !== !1 && t.push(Hg.configure(this.options.listItem)), this.options.textStyle !== !1 && t.push(Bg.configure(this.options.textStyle)), t;
  }
});
function vL(t, e, n) {
  if (t === "slot")
    return 0;
  if (t instanceof Function)
    return t(e);
  const { children: r, ...i } = e ?? {};
  if (t === "svg")
    throw new Error(
      "SVG elements are not supported in the JSX syntax, use the array syntax instead"
    );
  return [t, i, r];
}
var To = (t, e) => vL(t, e), wL = (t, e) => {
  var n;
  const { state: r } = t, { selection: i } = r;
  if (!i.empty) return !1;
  const { $from: o } = i;
  if (o.parentOffset !== 0) return !1;
  const s = o.depth - 1;
  if (s < 0) return !1;
  const l = o.node(s), a = o.index(s);
  if (a === 0) return !1;
  if (l.type === e)
    return t.commands.lift(e.name);
  const c = l.child(a - 1);
  if (c.type !== e || !((n = c.lastChild) != null && n.isTextblock))
    return !1;
  const f = o.before() - 1 - 1;
  return t.commands.command(({ tr: h, dispatch: p }) => {
    if (!p)
      return !0;
    const m = o.parent.content, g = new O(m, 0, 0);
    return h.replace(f, o.after(), g), h.setSelection(N.create(h.doc, f + m.size)), h.scrollIntoView(), p(h), !0;
  });
}, kL = /^\s*>\s$/, xL = be.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [{ tag: "blockquote" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return /* @__PURE__ */ To("blockquote", { ...ne(this.options.HTMLAttributes, t), children: /* @__PURE__ */ To("slot", {}) });
  },
  parseMarkdown: (t, e) => {
    var n;
    const r = (n = e.parseBlockChildren) != null ? n : e.parseChildren;
    return e.createNode("blockquote", void 0, r(t.tokens || []));
  },
  renderMarkdown: (t, e) => {
    if (!t.content)
      return "";
    const n = ">", r = [];
    return t.content.forEach((i, o) => {
      var s, l;
      const d = ((l = (s = e.renderChild) == null ? void 0 : s.call(e, i, o)) != null ? l : e.renderChildren([i])).split(`
`).map((u) => u.trim() === "" ? n : `${n} ${u}`);
      r.push(d.join(`
`));
    }), r.join(`
${n}
`);
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: t }) => t.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: t }) => t.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: t }) => t.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote(),
      Backspace: () => wL(this.editor, this.type)
    };
  },
  addInputRules() {
    return [
      hr({
        find: kL,
        type: this.type
      })
    ];
  }
});
const $H = /* @__PURE__ */ xL.extend({
  addAttributes() {
    return Me(
      this.parent?.(),
      "blockquote",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {
        class: "blockquote"
      },
      button: ({ editor: t, t: e }) => ({
        component: ee,
        componentProps: {
          action: () => t.chain().focus().toggleBlockquote().run(),
          isActive: () => t.isActive("blockquote") || !1,
          disabled: !t.can().toggleBlockquote(),
          icon: "blockquote",
          tooltip: e("editor.blockquote.tooltip")
        }
      })
    };
  }
});
var SL = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, CL = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, AL = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, TL = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, ML = it.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (t) => t.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return /* @__PURE__ */ To("strong", { ...ne(this.options.HTMLAttributes, t), children: /* @__PURE__ */ To("slot", {}) });
  },
  markdownTokenName: "strong",
  parseMarkdown: (t, e) => e.applyMark("bold", e.parseInline(t.tokens || [])),
  markdownOptions: {
    htmlReopen: {
      open: "<strong>",
      close: "</strong>"
    }
  },
  renderMarkdown: (t, e) => `**${e.renderChildren(t)}**`,
  addCommands() {
    return {
      setBold: () => ({ commands: t }) => t.setMark(this.name),
      toggleBold: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetBold: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      dn({
        find: SL,
        type: this.type
      }),
      dn({
        find: AL,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      zt({
        find: CL,
        type: this.type
      }),
      zt({
        find: TL,
        type: this.type
      })
    ];
  }
});
const BH = /* @__PURE__ */ ML.extend({
  addAttributes() {
    return Me(
      this.parent?.(),
      "bold",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: ee,
        componentProps: {
          action: () => t.chain().focus().toggleBold().run(),
          isActive: () => t.isActive("bold") || !1,
          disabled: !t.can().toggleBold(),
          icon: "bold",
          tooltip: e("editor.bold.tooltip")
        }
      })
    };
  }
}), FH = /* @__PURE__ */ Tg.extend({
  addAttributes() {
    return Me(
      this.parent?.(),
      "bulletList",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: ee,
        componentProps: {
          action: () => t.chain().focus().toggleBulletList().run(),
          isActive: () => t.isActive("bulletList") || !1,
          disabled: !t.can().toggleBulletList(),
          icon: "bulletList",
          tooltip: e("editor.bulletlist.tooltip")
        }
      })
    };
  }
}), UH = /* @__PURE__ */ be.create({
  name: "clear",
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: ee,
        componentProps: {
          action: () => t.chain().focus().clearNodes().unsetAllMarks().run(),
          disabled: !t.can().chain().focus().clearNodes().unsetAllMarks().run(),
          icon: "clear",
          tooltip: e("editor.clear.tooltip")
        }
      })
    };
  }
});
var EL = (t) => {
  const e = /`([^`]+)`(?!`)$/.exec(t);
  return !e || e.index > 0 && t[e.index - 1] === "`" ? null : {
    index: e.index,
    text: e[0],
    replaceWith: e[1]
  };
}, LL = (t) => {
  const e = /`([^`]+)`(?!`)/g, n = [];
  let r;
  for (; (r = e.exec(t)) !== null; )
    r.index > 0 && t[r.index - 1] === "`" || n.push({
      index: r.index,
      text: r[0],
      replaceWith: r[1]
    });
  return n;
}, OL = it.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [{ tag: "code" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["code", ne(this.options.HTMLAttributes, t), 0];
  },
  markdownTokenName: "codespan",
  parseMarkdown: (t, e) => e.applyMark("code", [{ type: "text", text: t.text || "" }]),
  renderMarkdown: (t, e) => t.content ? `\`${e.renderChildren(t.content)}\`` : "",
  addCommands() {
    return {
      setCode: () => ({ commands: t }) => t.setMark(this.name),
      toggleCode: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetCode: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      dn({
        find: EL,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      zt({
        find: LL,
        type: this.type
      })
    ];
  }
});
const WH = /* @__PURE__ */ OL.extend({
  addAttributes() {
    return Me(
      this.parent?.(),
      "code",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: ee,
        componentProps: {
          action: () => t.chain().focus().toggleCode().run(),
          isActive: () => t.isActive("code") || !1,
          disabled: !t.can().toggleCode(),
          icon: "code",
          tooltip: e("editor.code.tooltip")
        }
      })
    };
  }
});
var pl = 4, HL = /^```([a-z]+)?[\s\n]$/, RL = /^~~~([a-z]+)?[\s\n]$/, VL = be.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      exitOnArrowUp: !0,
      defaultLanguage: null,
      enableTabIndentation: !1,
      tabSize: pl,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: (t) => {
          var e;
          const { languageClassPrefix: n } = this.options;
          if (!n)
            return null;
          const o = [...((e = t.firstElementChild) == null ? void 0 : e.classList) || []].filter((s) => s.startsWith(n)).map((s) => s.replace(n, ""))[0];
          return o || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [
      "pre",
      ne(this.options.HTMLAttributes, e),
      [
        "code",
        {
          class: t.attrs.language ? this.options.languageClassPrefix + t.attrs.language : null
        },
        0
      ]
    ];
  },
  markdownTokenName: "code",
  parseMarkdown: (t, e) => {
    var n, r;
    return ((n = t.raw) == null ? void 0 : n.startsWith("```")) === !1 && ((r = t.raw) == null ? void 0 : r.startsWith("~~~")) === !1 && t.codeBlockStyle !== "indented" ? [] : e.createNode(
      "codeBlock",
      { language: t.lang || null },
      t.text ? [e.createTextNode(t.text)] : []
    );
  },
  renderMarkdown: (t, e) => {
    var n;
    let r = "";
    const i = ((n = t.attrs) == null ? void 0 : n.language) || "";
    return t.content ? r = [`\`\`\`${i}`, e.renderChildren(t.content), "```"].join(`
`) : r = `\`\`\`${i}

\`\`\``, r;
  },
  addCommands() {
    return {
      setCodeBlock: (t) => ({ commands: e }) => e.setNode(this.name, t),
      toggleCodeBlock: (t) => ({ commands: e }) => e.toggleNode(this.name, "paragraph", t)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: t, $anchor: e } = this.editor.state.selection, n = e.pos === 1;
        return !t || e.parent.type.name !== this.name ? !1 : n || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // handle tab indentation
      Tab: ({ editor: t }) => {
        var e;
        if (!this.options.enableTabIndentation)
          return !1;
        const n = (e = this.options.tabSize) != null ? e : pl, { state: r } = t, { selection: i } = r, { $from: o, empty: s } = i;
        if (o.parent.type !== this.type)
          return !1;
        const l = " ".repeat(n);
        return s ? t.commands.insertContent(l) : t.commands.command(({ tr: a }) => {
          const { from: c, to: d } = i, h = r.doc.textBetween(c, d, `
`, `
`).split(`
`).map((p) => l + p).join(`
`);
          return a.replaceWith(c, d, r.schema.text(h)), !0;
        });
      },
      // handle shift+tab reverse indentation
      "Shift-Tab": ({ editor: t }) => {
        var e;
        if (!this.options.enableTabIndentation)
          return !1;
        const n = (e = this.options.tabSize) != null ? e : pl, { state: r } = t, { selection: i } = r, { $from: o, empty: s } = i;
        return o.parent.type !== this.type ? !1 : s ? t.commands.command(({ tr: l }) => {
          var a;
          const { pos: c } = o, d = o.start(), u = o.end(), h = r.doc.textBetween(d, u, `
`, `
`).split(`
`);
          let p = 0, m = 0;
          const g = c - d;
          for (let k = 0; k < h.length; k += 1) {
            if (m + h[k].length >= g) {
              p = k;
              break;
            }
            m += h[k].length + 1;
          }
          const b = ((a = h[p].match(/^ */)) == null ? void 0 : a[0]) || "", w = Math.min(b.length, n);
          if (w === 0)
            return !0;
          let v = d;
          for (let k = 0; k < p; k += 1)
            v += h[k].length + 1;
          return l.delete(v, v + w), c - v <= w && l.setSelection(N.create(l.doc, v)), !0;
        }) : t.commands.command(({ tr: l }) => {
          const { from: a, to: c } = i, f = r.doc.textBetween(a, c, `
`, `
`).split(`
`).map((h) => {
            var p;
            const m = ((p = h.match(/^ */)) == null ? void 0 : p[0]) || "", g = Math.min(m.length, n);
            return h.slice(g);
          }).join(`
`);
          return l.replaceWith(a, c, r.schema.text(f)), !0;
        });
      },
      // exit node on triple enter
      Enter: ({ editor: t }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: e } = t, { selection: n } = e, { $from: r, empty: i } = n;
        if (!i || r.parent.type !== this.type)
          return !1;
        const o = r.parentOffset === r.parent.nodeSize - 2, s = r.parent.textContent.endsWith(`

`);
        return !o || !s ? !1 : t.chain().command(({ tr: l }) => (l.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      // exit node on arrow up if there is no node before it
      ArrowUp: ({ editor: t }) => {
        if (!this.options.exitOnArrowUp)
          return !1;
        const { state: e } = t, { selection: n } = e, { $from: r, empty: i } = n;
        if (!i || r.parent.type !== this.type || r.parentOffset !== 0)
          return !1;
        const o = r.before();
        return o > 0 ? !1 : t.commands.insertDefaultBlock({ pos: o });
      },
      // exit node on arrow down
      ArrowDown: ({ editor: t }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = t, { selection: n, doc: r } = e, { $from: i, empty: o } = n;
        if (!o || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
          return !1;
        const l = i.after();
        return l === void 0 ? !1 : r.nodeAt(l) ? t.commands.command(({ tr: c }) => (c.setSelection($.near(r.resolve(l))), !0)) : t.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      Ul({
        find: HL,
        type: this.type,
        getAttributes: (t) => ({
          language: t[1]
        })
      }),
      Ul({
        find: RL,
        type: this.type,
        getAttributes: (t) => ({
          language: t[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new re({
        key: new se("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (t, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const n = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), i = r ? JSON.parse(r) : void 0, o = i?.mode;
            if (!n || !o)
              return !1;
            const { tr: s, schema: l } = t.state, a = l.text(n.replace(/\r\n?/g, `
`));
            return s.replaceSelectionWith(this.type.create({ language: o }, a)), s.selection.$from.parent.type !== this.type && s.setSelection(
              N.near(s.doc.resolve(Math.max(0, s.selection.from - 2)))
            ), s.setMeta("paste", !0), t.dispatch(s), !0;
          }
        }
      })
    ];
  }
});
const jH = /* @__PURE__ */ VL.extend({
  addAttributes() {
    return Me(
      this.parent?.(),
      "codeBlock",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: ee,
        componentProps: {
          action: () => t.chain().focus().toggleCodeBlock().run(),
          isActive: () => t.isActive("codeBlock") || !1,
          disabled: !t.can().toggleCodeBlock(),
          icon: "codeBlock",
          tooltip: e("editor.codeblock.tooltip")
        }
      })
    };
  }
}), Wg = /* @__PURE__ */ te({
  __name: "ColorPicker",
  props: {
    modelValue: { default: "" },
    nudgeLeft: { default: 0 },
    nudgeTop: { default: 0 },
    more: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = Y(""), o = Y(!1);
    _t(o, (l) => {
      i.value = n.modelValue;
    });
    function s(l) {
      r("update:modelValue", l), r("change", l), i.value = l, o.value = !1;
    }
    return (l, a) => {
      const c = un, d = yr, u = ka, f = b1, h = wa, p = ts;
      return R(), U(p, {
        modelValue: o.value,
        "onUpdate:modelValue": a[2] || (a[2] = (m) => o.value = m),
        "nudge-left": l.nudgeLeft || 255,
        "nudge-top": l.nudgeTop || 42,
        "close-on-content-click": !1,
        transition: "scale-transition",
        origin: l.nudgeLeft ? "top left" : "top right",
        activator: "parent"
      }, {
        default: L(() => [
          H(h, null, {
            default: L(() => [
              H(f, {
                class: "d-flex flex-wrap justify-between ma-1",
                fluid: "",
                "max-width": 230
              }, {
                default: L(() => [
                  (R(!0), de(Le, null, Ze(T(lk), (m) => (R(), U(d, {
                    key: m,
                    flat: "",
                    icon: "",
                    density: "compact",
                    onClick: (g) => s(m)
                  }, {
                    default: L(() => [
                      H(c, {
                        icon: T(ue)("circle"),
                        color: m
                      }, null, 8, ["icon", "color"])
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 128)),
                  H(u, {
                    modelValue: i.value,
                    "onUpdate:modelValue": a[0] || (a[0] = (m) => i.value = m),
                    class: "mt-2 mx-1",
                    "append-inner-icon": T(ue)("check"),
                    density: "compact",
                    label: "HEX",
                    variant: "outlined",
                    flat: "",
                    "hide-details": "",
                    "single-line": "",
                    clearable: "",
                    "onClick:appendInner": a[1] || (a[1] = (m) => s(i.value))
                  }, Ta({ _: 2 }, [
                    i.value ? {
                      name: "prepend-inner",
                      fn: L(() => [
                        H(c, {
                          class: "opacity-100",
                          icon: T(ue)("circle"),
                          color: i.value
                        }, null, 8, ["icon", "color"])
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["modelValue", "append-inner-icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "nudge-left", "nudge-top", "origin"]);
    };
  }
}), NL = /* @__PURE__ */ te({
  __name: "ColorActionButton",
  props: {
    editor: {},
    icon: { default: void 0 },
    tooltip: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    action: { type: Function, default: void 0 },
    isActive: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, { state: n } = dc();
    function r(i) {
      e.action?.(i);
    }
    return $n(() => {
      const { color: i } = e.editor.getAttributes("textStyle");
      n.color = i;
    }), (i, o) => (R(), U(ee, {
      icon: i.icon,
      tooltip: i.tooltip,
      disabled: i.disabled,
      color: T(n).color,
      "is-active": i.isActive
    }, {
      default: L(() => [
        H(Wg, {
          modelValue: T(n).color,
          "onUpdate:modelValue": o[0] || (o[0] = (s) => T(n).color = s),
          activator: "parent",
          "nudge-top": -4,
          "nudge-left": 8,
          onChange: r
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }, 8, ["icon", "tooltip", "disabled", "color", "is-active"]));
  }
}), KH = /* @__PURE__ */ Fg.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: NL,
        componentProps: {
          action: (n) => {
            typeof n == "string" && t.chain().focus().setColor(n).run();
          },
          isActive: () => {
            const { color: n } = t.getAttributes("textStyle");
            return n && t.isActive({ color: n }) || !1;
          },
          disabled: !t.can().setColor(""),
          icon: "color",
          tooltip: e("editor.color.tooltip")
        }
      })
    };
  }
}), Ai = /* @__PURE__ */ te({
  __name: "ActionMenuButton",
  props: {
    editor: {},
    disabled: { type: Boolean, default: !1 },
    color: { default: void 0 },
    maxHeight: { default: void 0 },
    icon: { default: void 0 },
    tooltip: { default: "" },
    items: { default: () => [] }
  },
  setup(t) {
    const e = t, n = Y(!1), r = W(() => {
      const i = e.items.find((s) => s.isActive());
      return i && !i.default ? {
        ...i,
        icon: i.icon ? i.icon : e.icon
      } : {
        title: e.tooltip,
        icon: e.icon,
        isActive: () => !1
      };
    });
    return (i, o) => {
      const s = un, l = Of, a = Lf, c = gi, d = wa, u = ts;
      return R(), U(ee, {
        icon: r.value.icon,
        tooltip: r.value.title,
        disabled: i.disabled,
        color: i.color,
        "is-active": r.value.isActive
      }, {
        default: L(() => [
          H(u, {
            modelValue: n.value,
            "onUpdate:modelValue": o[0] || (o[0] = (f) => n.value = f),
            activator: "parent"
          }, {
            default: L(() => [
              H(d, {
                density: "compact",
                "max-height": i.maxHeight
              }, {
                default: L(() => [
                  (R(!0), de(Le, null, Ze(i.items, (f, h) => (R(), de(Le, { key: h }, [
                    H(a, {
                      active: f.isActive(),
                      disabled: f.disabled,
                      onClick: f.action
                    }, {
                      prepend: L(() => [
                        f.icon ? (R(), U(s, {
                          key: 0,
                          icon: T(ue)(f.icon)
                        }, null, 8, ["icon"])) : $e("", !0)
                      ]),
                      default: L(() => [
                        H(l, {
                          style: tr(f.style)
                        }, {
                          default: L(() => [
                            Dt(Ae(f.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["style"])
                      ]),
                      _: 2
                    }, 1032, ["active", "disabled", "onClick"]),
                    f.divider ? (R(), U(c, { key: 0 })) : $e("", !0)
                  ], 64))), 128))
                ]),
                _: 1
              }, 8, ["max-height"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["icon", "tooltip", "disabled", "color", "is-active"]);
    };
  }
}), qH = /* @__PURE__ */ Ug.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      fontFamilies: ak,
      button: ({ editor: t, extension: e, t: n }) => {
        const i = (e.options?.fontFamilies || []).map((s) => ({
          title: n(s.title),
          isActive: () => {
            const { fontFamily: l } = t.getAttributes("textStyle");
            return s.value === jl && l === void 0 ? !0 : t.isActive({ fontFamily: s.value }) || !1;
          },
          action: () => {
            if (s.value === jl) {
              t.chain().focus().unsetFontFamily().run();
              return;
            }
            t.chain().focus().setFontFamily(s.value).run();
          },
          disabled: !t.can().setFontFamily(s.value),
          style: { fontFamily: s.value },
          divider: s.divider ?? !1,
          default: s.default ?? !1
        })), o = i.filter((s) => s.disabled).length === i.length;
        return {
          component: Ai,
          componentProps: {
            icon: "fontFamily",
            tooltip: n("editor.fontFamily.tooltip"),
            disabled: o,
            items: i,
            maxHeight: 280
          }
        };
      }
    };
  }
}), GH = /* @__PURE__ */ J.create({
  name: "fontSize",
  addOptions() {
    return {
      ...this.parent?.(),
      types: ["textStyle"],
      fontSizes: [...ck],
      button: ({ editor: t, extension: e, t: n }) => {
        const r = e.options?.fontSizes || [], i = [Kn, ...r].map((s) => ({
          title: s === Kn ? n("editor.default") : String(s),
          isActive: () => {
            const { fontSize: l } = t.getAttributes("textStyle");
            return s === Kn && l === void 0 ? !0 : t.isActive({ fontSize: String(s) }) || !1;
          },
          action: () => {
            if (s === Kn) {
              t.chain().focus().unsetFontSize().run();
              return;
            }
            t.chain().focus().setFontSize(String(s)).run();
          },
          disabled: !t.can().setFontSize(String(s)),
          divider: s === Kn,
          default: s === Kn
        })), o = i.filter((s) => s.disabled).length === i.length;
        return {
          component: Ai,
          componentProps: {
            icon: "fontSize",
            tooltip: n("editor.fontSize.tooltip"),
            disabled: o,
            items: i,
            maxHeight: 280
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (t) => {
              const n = (t.style.fontSize || "").match(/^(\d+(\.\d+)?)(px|em|rem|%)?$/);
              return n ? n[0] : "";
            },
            renderHTML: (t) => t.fontSize ? {
              style: `font-size: ${$r(t.fontSize)}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (t) => ({ chain: e }) => e().setMark("textStyle", { fontSize: t }).run(),
      unsetFontSize: () => ({ chain: t }) => t().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
    };
  }
}), IL = /* @__PURE__ */ te({
  __name: "FullscreenActionButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    color: { default: void 0 },
    isActive: { type: Function, default: void 0 },
    useWindow: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, { t: n } = Ut(), { state: r, toggleFullscreen: i } = dc(), { isFullscreen: o, enter: s, exit: l } = uA();
    _t(o, (u) => {
      !u && r.isFullscreen && e.useWindow && d();
    });
    const a = W(() => {
      const u = r.isFullscreen ? "editor.fullscreen.tooltip.exit" : "editor.fullscreen.tooltip.fullscreen";
      return T(n)(u);
    }), c = W(() => {
      const u = r.isFullscreen ? "fullscreenExit" : "fullscreen";
      return ue(u);
    });
    function d(u = !1) {
      i(), r.isFullscreen ? (document.documentElement.classList.add("overflow-y-hidden"), u && s()) : (document.documentElement.classList.remove("overflow-y-hidden"), u && l());
    }
    return (u, f) => {
      const h = un, p = Ef, m = yr;
      return R(), U(m, {
        class: dt(["rounded me-1 ms-0", {
          "v-btn--active": u.isActive?.()
        }]),
        density: "comfortable",
        size: "small",
        disabled: u.disabled,
        color: u.color,
        icon: "",
        onClick: f[0] || (f[0] = (g) => d(u.useWindow))
      }, {
        default: L(() => [
          H(h, { icon: c.value }, null, 8, ["icon"]),
          H(p, {
            eager: !1,
            activator: "parent",
            location: "top",
            text: a.value
          }, null, 8, ["text"]),
          ut(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "color", "class"]);
    };
  }
}), JH = /* @__PURE__ */ J.create({
  name: "fullscreen",
  addOptions() {
    return {
      ...this.parent?.(),
      useWindow: !1,
      button: ({ editor: t, extension: e, t: n }) => ({
        component: IL,
        componentProps: {
          useWindow: e.options.useWindow ?? !1
        }
      })
    };
  }
});
var _L = be.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((t) => ({
      tag: `h${t}`,
      attrs: { level: t }
    }));
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0]}`, ne(this.options.HTMLAttributes, e), 0];
  },
  parseMarkdown: (t, e) => e.createNode(
    "heading",
    { level: t.depth || 1 },
    e.parseInline(t.tokens || [])
  ),
  renderMarkdown: (t, e) => {
    var n;
    const r = (n = t.attrs) != null && n.level ? parseInt(t.attrs.level, 10) : 1, i = "#".repeat(r);
    return t.content ? `${i} ${e.renderChildren(t.content)}` : "";
  },
  addCommands() {
    return {
      setHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.setNode(this.name, t) : !1,
      toggleHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.toggleNode(this.name, "paragraph", t) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce(
      (t, e) => ({
        ...t,
        [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
      }),
      {}
    );
  },
  addInputRules() {
    return this.options.levels.map((t) => Ul({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${t}})\\s$`),
      type: this.type,
      getAttributes: {
        level: t
      }
    }));
  }
});
const XH = /* @__PURE__ */ _L.extend({
  addAttributes() {
    return Me(
      this.parent?.(),
      "heading",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      levels: [1, 2, 3, 4, 5, 6],
      button: ({ editor: t, extension: e, t: n }) => {
        const { extensions: r = [] } = t.extensionManager ?? [], i = e.options?.levels || [], o = r.find(
          (a) => a.name === "base-kit"
        ), s = i.map((a) => ({
          action: () => t.chain().focus().toggleHeading({ level: a }).run(),
          isActive: () => t.isActive("heading", { level: a }) || !1,
          disabled: !t.can().toggleHeading({ level: a }),
          icon: `h${a}`,
          title: n(`editor.heading.h${a}.tooltip`)
        }));
        o && o.options.paragraph !== !1 && s.unshift({
          action: () => t.chain().focus().setParagraph().run(),
          isActive: () => t.isActive("paragraph") || !1,
          disabled: !t.can().setParagraph(),
          icon: "p",
          title: n("editor.paragraph.tooltip"),
          divider: !0
        });
        const l = s.filter((a) => a.disabled).length === s.length;
        return {
          component: Ai,
          componentProps: {
            icon: "heading",
            tooltip: n("editor.heading.tooltip"),
            disabled: l,
            items: s
          }
        };
      }
    };
  }
});
var DL = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, PL = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, zL = it.create({
  name: "highlight",
  addOptions() {
    return {
      multicolor: !1,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return this.options.multicolor ? {
      color: {
        default: null,
        // Prefer `data-color` (set by our own `renderHTML`) for lossless
        // round-trips. Otherwise parse the raw inline `style` attribute so
        // the original color format (e.g. `#rrggbb`) is preserved instead of
        // the canonicalized `rgb(...)` value from `element.style.backgroundColor`.
        parseHTML: (t) => t.getAttribute("data-color") || vr(t, "background-color") || t.style.backgroundColor,
        renderHTML: (t) => t.color ? {
          "data-color": t.color,
          style: `background-color: ${t.color}; color: inherit`
        } : {}
      }
    } : {};
  },
  parseHTML() {
    return [
      {
        tag: "mark"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["mark", ne(this.options.HTMLAttributes, t), 0];
  },
  renderMarkdown: (t, e) => `==${e.renderChildren(t)}==`,
  parseMarkdown: (t, e) => e.applyMark("highlight", e.parseInline(t.tokens || [])),
  markdownTokenizer: {
    name: "highlight",
    level: "inline",
    start: (t) => t.indexOf("=="),
    tokenize(t, e, n) {
      const i = /^(==)([^=]+)(==)/.exec(t);
      if (i) {
        const o = i[2].trim(), s = n.inlineTokens(o);
        return {
          type: "highlight",
          raw: i[0],
          text: o,
          tokens: s
        };
      }
    }
  },
  addCommands() {
    return {
      setHighlight: (t) => ({ commands: e }) => e.setMark(this.name, t),
      toggleHighlight: (t) => ({ commands: e }) => e.toggleMark(this.name, t),
      unsetHighlight: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-h": () => this.editor.commands.toggleHighlight()
    };
  },
  addInputRules() {
    return [
      dn({
        find: DL,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      zt({
        find: PL,
        type: this.type
      })
    ];
  }
});
const $L = /* @__PURE__ */ te({
  __name: "HighlightActionButton",
  props: {
    editor: {},
    icon: { default: void 0 },
    tooltip: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    action: { type: Function, default: void 0 },
    isActive: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, { state: n } = dc();
    function r(i) {
      e.action?.(i);
    }
    return $n(() => {
      const { color: i } = e.editor.getAttributes("highlight");
      n.highlight = i;
    }), (i, o) => (R(), U(ee, {
      icon: i.icon,
      tooltip: i.tooltip,
      disabled: i.disabled,
      color: T(n).highlight,
      "is-active": i.isActive
    }, {
      default: L(() => [
        H(Wg, {
          modelValue: T(n).highlight,
          "onUpdate:modelValue": o[0] || (o[0] = (s) => T(n).highlight = s),
          activator: "parent",
          "nudge-top": -4,
          "nudge-left": 8,
          onChange: r
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }, 8, ["icon", "tooltip", "disabled", "color", "is-active"]));
  }
}), ZH = /* @__PURE__ */ zL.extend({
  addAttributes() {
    return Me(
      this.parent?.(),
      "highlight",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      multicolor: !0,
      button: ({ editor: t, t: e }) => ({
        component: $L,
        componentProps: {
          action: (n) => {
            typeof n == "string" && t.chain().focus().setHighlight({ color: n }).run();
          },
          isActive: () => t.isActive("highlight") || !1,
          disabled: !t.can().setHighlight(),
          icon: "highlight",
          tooltip: e("editor.highlight.tooltip")
        }
      })
    };
  }
}), YH = /* @__PURE__ */ aE.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      depth: 10,
      button: ({ editor: t, t: e }) => ["undo", "redo"].map((r) => ({
        component: ee,
        componentProps: {
          action: () => {
            r === "undo" && t.chain().focus().undo().run(), r === "redo" && t.chain().focus().redo().run();
          },
          disabled: !t.can()[r](),
          icon: r,
          tooltip: e(`editor.${r}.tooltip`)
        }
      }))
    };
  }
});
var BL = be.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {},
      nextNodeType: "paragraph"
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["hr", ne(this.options.HTMLAttributes, t)];
  },
  markdownTokenName: "hr",
  parseMarkdown: (t, e) => e.createNode("horizontalRule"),
  renderMarkdown: () => "---",
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: t, state: e }) => {
        if (!Hw(e, e.schema.nodes[this.name]))
          return !1;
        const { selection: n } = e, { $to: r } = n, i = t();
        return Hp(n) ? i.insertContentAt(r.pos, {
          type: this.name
        }) : i.insertContent({ type: this.name }), i.command(({ state: o, tr: s, dispatch: l }) => {
          if (l) {
            const { $to: a } = s.selection, c = a.end();
            if (a.nodeAfter)
              a.nodeAfter.isTextblock ? s.setSelection(N.create(s.doc, a.pos + 1)) : a.nodeAfter.isBlock ? s.setSelection(z.create(s.doc, a.pos)) : s.setSelection(N.create(s.doc, a.pos));
            else {
              const d = o.schema.nodes[this.options.nextNodeType] || a.parent.type.contentMatch.defaultType, u = d?.create();
              u && (s.insert(c, u), s.setSelection(N.create(s.doc, c + 1)));
            }
            s.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      rm({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
});
const QH = /* @__PURE__ */ BL.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: ee,
        componentProps: {
          action: () => t.chain().focus().setHorizontalRule().run(),
          disabled: !t.can().setHorizontalRule(),
          icon: "horizontalRule",
          tooltip: e("editor.horizontalrule.tooltip")
        }
      })
    };
  }
});
function FL(t) {
  const e = t.view.dom, n = e.parentElement;
  if (!n) return null;
  window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
  const r = document.createElement("div");
  r.className = "tiptap-html-overlay", r.style.position = "absolute", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.height = "100%", r.style.backgroundColor = "#f8f9fa", r.style.zIndex = "10", r.style.display = "flex", r.style.flexDirection = "column", r.style.boxSizing = "border-box", r.style.border = "1px solid #ddd";
  const i = document.createElement("textarea");
  i.className = "tiptap-html-editor", i.style.width = "100%", i.style.height = "100%", i.style.padding = "12px", i.style.border = "none", i.style.resize = "none", i.style.fontFamily = "monospace", i.style.fontSize = "14px", i.style.backgroundColor = "transparent", i.style.flex = "1", i.style.outline = "none", i.style.color = "#333";
  const o = t.getHTML();
  t.storage.htmlView.editorContent = o;
  const s = UL(o);
  i.value = s, t.storage.htmlView.htmlContent = s, r.appendChild(i), n.style.position = "relative";
  const l = e.offsetWidth, a = e.offsetHeight;
  return r.style.width = `${l}px`, r.style.height = `${a}px`, r.style.minHeight = `${a}px`, r.style.transition = "none", n.appendChild(r), setTimeout(() => {
    i.focus({ preventScroll: !0 }), console.log("Switched to HTML view mode");
  }, 10), i.addEventListener("input", () => {
    t.storage.htmlView.htmlContent = i.value;
    try {
      t.storage.htmlView.isUpdatingFromHTML = !0;
      const c = jg(i.value);
      t.commands.setContent(c, { emitUpdate: !1 });
      const d = t.state.tr;
      d.setMeta("preventUpdate", !1), d.setMeta("addToHistory", !1), t.view.dispatch(d), t.options.onUpdate && t.options.onUpdate({
        editor: t,
        transaction: d,
        appendedTransactions: []
      });
    } catch (c) {
      console.error("Error syncing HTML to editor:", c);
    } finally {
      requestAnimationFrame(() => {
        t.storage.htmlView.isUpdatingFromHTML = !1;
      });
    }
  }), r;
}
function UL(t) {
  return t.replace(/<div class="tiptap-html-overlay"[^>]*>[\s\S]*?<\/div>/gi, "").replace(
    /<textarea class="tiptap-html-editor"[^>]*>[\s\S]*?<\/textarea>/gi,
    ""
  );
}
function jg(t) {
  return t.replace(/<div class="tiptap-html-overlay"[^>]*>[\s\S]*?<\/div>/gi, "").replace(
    /<textarea class="tiptap-html-editor"[^>]*>[\s\S]*?<\/textarea>/gi,
    ""
  );
}
function WL(t) {
  try {
    window.tiptapGlobalState === void 0 && (window.tiptapGlobalState = {}), window.tiptapGlobalState.htmlModeActive = !0;
    const e = new CustomEvent("tiptap-html-mode-changed", {
      detail: { isHtmlMode: !0 }
    });
    document.dispatchEvent(e);
    const n = document.querySelector(".vuetify-pro-tiptap");
    n && n.classList.add("html-view-active"), setTimeout(() => {
      document.querySelectorAll(".v-toolbar button").forEach((i) => {
        const o = i.querySelector(".v-icon svg");
        o && ((o.querySelector("path")?.getAttribute("d") || "").includes(
          "M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z"
        ) ? (i.setAttribute("data-htmlview-btn", "true"), i.style.pointerEvents = "auto", i.style.opacity = "1", i.style.cursor = "pointer", i.style.backgroundColor = "rgba(25, 118, 210, 0.12)", i.style.zIndex = "10000", i.removeAttribute("disabled")) : (i.style.pointerEvents = "none", i.style.opacity = "0.4", i.style.cursor = "not-allowed", i.setAttribute("disabled", "true")));
      });
    }, 50), console.log("All editor tools have been disabled");
  } catch (e) {
    console.error("Failed to disable toolbar buttons:", e);
  }
}
function jL(t) {
  try {
    window.tiptapGlobalState !== void 0 && (window.tiptapGlobalState.htmlModeActive = !1);
    const e = new CustomEvent("tiptap-html-mode-changed", {
      detail: { isHtmlMode: !1 }
    });
    document.dispatchEvent(e);
    const n = document.querySelector(".vuetify-pro-tiptap");
    n && n.classList.remove("html-view-active"), document.querySelectorAll(".v-toolbar button").forEach((i) => {
      i.removeAttribute("disabled"), i.removeAttribute("aria-disabled"), i instanceof HTMLElement && (i.style.pointerEvents = "", i.style.opacity = "", i.style.backgroundColor = "", i.style.cursor = "", i.style.zIndex = "", i.style.position = "", i.style.border = "", i.onclick = null);
    }), console.log("All editor tools have been enabled");
  } catch (e) {
    console.error("Failed to enable toolbar buttons:", e);
  }
}
function KL(t) {
  try {
    const n = t.view.dom.parentElement;
    let r = 0, i = 0, o = 0;
    n && (console.log(n, "editorParent"), r = n.offsetWidth, i = n.offsetHeight, o = n.scrollHeight);
    const s = t.extensionManager.extensions;
    for (const a of s)
      a.name !== "htmlView" && a.options && typeof a.options.enable == "boolean" && (t.storage.htmlView.disabledExtensions || (t.storage.htmlView.disabledExtensions = {}), t.storage.htmlView.disabledExtensions[a.name] = a.options.enable, a.options.enable = !1);
    n && (n.style.setProperty(
      "--tiptap-editor-width",
      `${r}px`
    ), n.style.setProperty(
      "--tiptap-editor-height",
      `${i}px`
    ), n.style.setProperty(
      "--tiptap-editor-scroll-height",
      `${o}px`
    ), n.classList.add("tiptap-preserve-dimensions")), WL(t);
    const l = FL(t);
    if (l) {
      t.storage.htmlView.overlayElement = l, t.storage.htmlView.isHtmlMode = !0;
      const a = t.view.dom;
      a.parentElement && a.parentElement.classList.add("html-view-mode");
    }
  } catch (e) {
    console.error("Failed to switch to HTML view:", e);
  }
}
function qL(t) {
  try {
    const e = t.storage.htmlView.htmlContent;
    t.storage.htmlView.overlayElement && (t.storage.htmlView.overlayElement.remove(), t.storage.htmlView.overlayElement = null), jL(t);
    const n = t.view.dom;
    if (n.parentElement && (n.parentElement.classList.remove("html-view-mode"), n.parentElement.classList.remove(
      "tiptap-preserve-dimensions"
    ), setTimeout(() => {
      n.parentElement && (n.parentElement.style.removeProperty(
        "--tiptap-editor-width"
      ), n.parentElement.style.removeProperty(
        "--tiptap-editor-height"
      ), n.parentElement.style.removeProperty(
        "--tiptap-editor-scroll-height"
      ));
    }, 50)), e && e.trim() !== "") {
      const i = jg(e);
      t.storage.htmlView.isUpdatingFromHTML = !0, t.commands.setContent(i);
      const o = t.state.tr;
      o.setMeta("preventUpdate", !1), o.setMeta("addToHistory", !1), t.view.dispatch(o), t.options.onUpdate && t.options.onUpdate({
        editor: t,
        transaction: o,
        appendedTransactions: []
      }), requestAnimationFrame(() => {
        t.storage.htmlView.isUpdatingFromHTML = !1;
      }), console.log("Applied HTML to editor");
    }
    const r = t.extensionManager.extensions;
    if (t.storage.htmlView.disabledExtensions) {
      for (const i of r)
        i.name !== "htmlView" && i.options && typeof i.options.enable == "boolean" && t.storage.htmlView.disabledExtensions[i.name] !== void 0 && (i.options.enable = t.storage.htmlView.disabledExtensions[i.name]);
      t.storage.htmlView.disabledExtensions = {};
    }
    t.storage.htmlView.isHtmlMode = !1, console.log("Switched back to rich text mode");
  } catch (e) {
    console.error("Error applying HTML:", e), t.storage.htmlView.overlayElement && (t.storage.htmlView.overlayElement.remove(), t.storage.htmlView.overlayElement = null), t.storage.htmlView.isHtmlMode = !1;
  }
}
const eR = /* @__PURE__ */ J.create({
  name: "htmlView",
  // Store the HTML view state
  addStorage() {
    return {
      isHtmlMode: !1,
      editorContent: "",
      htmlContent: "",
      overlayElement: null,
      isUpdatingFromHTML: !1,
      disabledExtensions: {},
      // Add storage for dimensions
      originalWidth: 0,
      originalHeight: 0,
      originalScrollHeight: 0
    };
  },
  // Add custom CSS for HTML view mode
  addGlobalAttributes() {
    const t = document.createElement("style");
    return t.textContent = `
      .html-view-mode .ProseMirror {
        display: none !important;
      }
      .tiptap-html-overlay {
        border-radius: 0 !important;
        /* Prevent flickering by using proper dimensions and transitions */
        box-sizing: border-box !important;
        transition: none !important;
      }
      /* Ensure the editor container doesn't resize during transition */
      .vuetify-pro-tiptap.html-view-mode {
        height: var(--tiptap-editor-height) !important;
        display: block !important;
      }
      .html-view-mode .ProseMirror-focused {
        outline: none !important;
      }
      /* Preserve dimensions to prevent layout shifts */
      .tiptap-preserve-dimensions {
        min-height: var(--tiptap-editor-height) !important;
        height: var(--tiptap-editor-height) !important;
        width: var(--tiptap-editor-width) !important;
        transition: none !important;
      }
      /* Ensure textarea in HTML view keeps the exact same dimensions */
      .tiptap-html-editor {
        min-height: var(--tiptap-editor-scroll-height, 100%) !important;
        height: var(--tiptap-editor-scroll-height, 100%) !important;
        width: var(--tiptap-editor-width, 100%) !important;
      }
      /* Disable all other buttons in HTML mode - stronger version */
      .html-view-active .v-toolbar button {
        opacity: 0.4 !important;
        cursor: not-allowed !important;
        background-color: #f0f0f0 !important;
        pointer-events: none !important;
      }
      /* Ensure HTML view button is always clickable */
      .html-view-active .v-toolbar button[data-htmlview-btn="true"] {
        opacity: 1 !important;
        cursor: pointer !important;
        background-color: rgba(25, 118, 210, 0.12) !important;
        border: 1px solid rgba(25, 118, 210, 0.5) !important;
        z-index: 1000 !important;
        position: relative !important;
        pointer-events: auto !important;
      }
    `, document.head.appendChild(t), [];
  },
  addOptions() {
    return {
      ...this.parent?.(),
      // Default allowedAttributes that can be overridden
      allowedAttributes: [],
      button: ({ editor: t, t: e, extension: n }) => (n.options.allowedAttributes && gL(n.options.allowedAttributes), {
        component: ee,
        componentProps: {
          action: () => {
            if (t.storage.htmlView.isHtmlMode)
              qL(t);
            else {
              const o = t.view.dom.parentElement;
              o && (t.storage.htmlView.originalWidth = o.offsetWidth, t.storage.htmlView.originalHeight = o.offsetHeight, t.storage.htmlView.originalScrollHeight = o.scrollHeight, console.log(
                "Captured original dimensions before HTML mode:",
                t.storage.htmlView.originalWidth,
                t.storage.htmlView.originalHeight,
                t.storage.htmlView.originalScrollHeight
              )), KL(t);
            }
          },
          isActive: () => t.storage.htmlView.isHtmlMode || !1,
          icon: "htmlView",
          tooltip: e("editor.htmlview.tooltip"),
          // Other plugin buttons should be disabled when HTML view is enabled
          onRender: () => {
            const r = (i) => {
              document.querySelectorAll(".v-toolbar button").forEach((l) => {
                const a = l.querySelector(".v-icon svg");
                if (a) {
                  const c = a.querySelector("path");
                  c && c.getAttribute("d")?.includes(
                    "M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z"
                  ) && l.setAttribute("data-htmlview-btn", "true");
                }
              }), document.querySelectorAll(
                ".vuetify-pro-tiptap .v-toolbar button"
              ).forEach((l) => {
                const a = l.hasAttribute("data-htmlview-btn");
                i.detail.isHtmlMode ? a ? (l.removeAttribute("disabled"), l.removeAttribute("aria-disabled"), l.style.pointerEvents = "auto", l.style.opacity = "1", l.style.backgroundColor = "rgba(25, 118, 210, 0.12)", l.style.border = "1px solid rgba(25, 118, 210, 0.5)", l.style.zIndex = "1000", l.style.position = "relative", l.style.cursor = "pointer") : (l.setAttribute("disabled", "true"), l.setAttribute("aria-disabled", "true"), l.style.pointerEvents = "none", l.style.opacity = "0.4", l.style.backgroundColor = "#f0f0f0", l.style.cursor = "not-allowed", l instanceof HTMLElement && (l.onclick = function(c) {
                  return c.preventDefault(), c.stopPropagation(), !1;
                })) : (l.removeAttribute("disabled"), l.removeAttribute("aria-disabled"), l.style.pointerEvents = "", l.style.opacity = "", l.style.backgroundColor = "", l.style.border = "", l.style.position = "", l.style.zIndex = "", l.style.cursor = "", l instanceof HTMLElement && (l.onclick = null));
              });
            };
            return document.addEventListener(
              "tiptap-html-mode-changed",
              r
            ), {
              element: document.createElement("div"),
              onMount: (i) => {
                const o = i.closest("button");
                o && (o.setAttribute("data-htmlview-btn", "true"), console.log("HTML view button has been marked"));
              },
              onDestroy: () => {
                document.removeEventListener(
                  "tiptap-html-mode-changed",
                  r
                );
              }
            };
          }
        }
      })
    };
  },
  // Cleanup function to ensure switching back to normal mode and removing any temporary elements
  onDestroy() {
    const t = this.editor;
    t.storage.htmlView.isHtmlMode && t.storage.htmlView.overlayElement && (t.storage.htmlView.overlayElement.remove(), t.storage.htmlView.overlayElement = null);
  },
  // Handle editor update events
  onUpdate() {
    return ({ editor: t }) => !(t.storage.htmlView.isHtmlMode && !t.storage.htmlView.isUpdatingFromHTML);
  }
});
var GL = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, JL = be.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {},
      resize: !1
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      },
      width: {
        default: null
      },
      height: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["img", ne(this.options.HTMLAttributes, t)];
  },
  parseMarkdown: (t, e) => e.createNode("image", {
    src: t.href,
    title: t.title,
    alt: t.text
  }),
  renderMarkdown: (t) => {
    var e, n, r, i, o, s;
    const l = (n = (e = t.attrs) == null ? void 0 : e.src) != null ? n : "", a = (i = (r = t.attrs) == null ? void 0 : r.alt) != null ? i : "", c = (s = (o = t.attrs) == null ? void 0 : o.title) != null ? s : "";
    return c ? `![${a}](${l} "${c}")` : `![${a}](${l})`;
  },
  addNodeView() {
    if (!this.options.resize || !this.options.resize.enabled || typeof document > "u")
      return null;
    const { directions: t, minWidth: e, minHeight: n, alwaysPreserveAspectRatio: r } = this.options.resize, i = /* @__PURE__ */ new Set(["src", "width", "height"]);
    return ({ node: o, getPos: s, HTMLAttributes: l, editor: a }) => {
      const c = document.createElement("img");
      c.draggable = !1;
      const d = ne(this.options.HTMLAttributes, l);
      Object.entries(d).forEach(([y, b]) => {
        if (b != null)
          switch (y) {
            case "src":
            case "width":
            case "height":
              break;
            default:
              c.setAttribute(y, b);
              break;
          }
      }), d.src !== null && (c.src = d.src);
      let u = { ...l };
      const f = (y) => {
        if (typeof y == "string" && y !== "") {
          c.getAttribute("src") !== y && (c.src = y);
          return;
        }
        c.hasAttribute("src") && c.removeAttribute("src"), c.src !== "" && (c.src = "");
      };
      f(l.src);
      const h = (y) => {
        if (y.type !== o.type)
          return !1;
        const b = a.extensionManager.attributes.filter(
          (v) => v.type === y.type.name
        ), w = fr(y, b);
        return Object.keys(u).forEach((v) => {
          !i.has(v) && !(v in w) && c.removeAttribute(v);
        }), Object.entries(w).forEach(([v, x]) => {
          i.has(v) || (x != null ? c.setAttribute(v, x) : c.removeAttribute(v));
        }), f(w.src), u = w, !0;
      }, p = new ek({
        element: c,
        editor: a,
        node: o,
        getPos: s,
        onResize: (y, b) => {
          c.style.width = `${y}px`, c.style.height = `${b}px`;
        },
        onCommit: (y, b) => {
          const w = s();
          w !== void 0 && this.editor.chain().setNodeSelection(w).updateAttributes(this.name, {
            width: y,
            height: b
          }).run();
        },
        onUpdate: h,
        options: {
          directions: t,
          min: {
            width: e,
            height: n
          },
          preserveAspectRatio: r === !0
        }
      }), m = p.dom, g = () => {
        m.style.visibility = "", m.style.pointerEvents = "";
      };
      return m.style.visibility = "hidden", m.style.pointerEvents = "none", c.complete && c.naturalWidth > 0 ? g() : (c.onload = g, c.onerror = g), p;
    };
  },
  addCommands() {
    return {
      setImage: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: t
      })
    };
  },
  addInputRules() {
    return [
      rm({
        find: GL,
        type: this.type,
        getAttributes: (t) => {
          const [, , e, n, r] = t;
          return { src: n, alt: e, title: r };
        }
      })
    ];
  }
});
const XL = /* @__PURE__ */ te({
  __name: "ImageUpload",
  props: {
    modelValue: { default: () => ({}) },
    upload: { type: Function, default: void 0 },
    t: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = Y(!1), o = W({
      get: () => n.modelValue,
      set: (l) => r("update:modelValue", l)
    }), s = async (l) => {
      const a = l instanceof File ? l : l[0];
      if (!a)
        throw new Error("No files to upload");
      try {
        i.value = !0;
        const c = await n.upload?.(a);
        if (!c)
          throw new Error("No link received after upload");
        o.value = {
          ...T(o),
          src: c
        };
      } catch (c) {
        Nm.error(`Failed to execute upload file: ${c}`);
      } finally {
        i.value = !1;
      }
    };
    return (l, a) => {
      const c = v1, d = ka, u = rs, f = ns;
      return R(), U(f, { disabled: i.value }, {
        default: L(() => [
          H(c, {
            modelValue: o.value.file,
            "onUpdate:modelValue": [
              a[0] || (a[0] = (h) => o.value.file = h),
              s
            ],
            label: l.t("editor.image.dialog.form.file"),
            accept: "image/*",
            loading: i.value,
            "prepend-icon": T(ue)("fileImagePlus"),
            "onClick:clear": a[1] || (a[1] = (h) => o.value.src = void 0)
          }, null, 8, ["modelValue", "label", "loading", "prepend-icon"]),
          H(d, {
            modelValue: o.value.src,
            "onUpdate:modelValue": a[2] || (a[2] = (h) => o.value.src = h),
            label: l.t("editor.image.dialog.form.link"),
            disabled: "",
            autofocus: "",
            "prepend-icon": T(ue)("linkVariant")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          H(d, {
            modelValue: o.value.alt,
            "onUpdate:modelValue": a[3] || (a[3] = (h) => o.value.alt = h),
            label: l.t("editor.image.dialog.form.alt"),
            "prepend-icon": T(ue)("text")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          H(u, {
            modelValue: o.value.lockAspectRatio,
            "onUpdate:modelValue": a[4] || (a[4] = (h) => o.value.lockAspectRatio = h),
            label: l.t("editor.image.dialog.form.aspectRatio")
          }, null, 8, ["modelValue", "label"])
        ]),
        _: 1
      }, 8, ["disabled"]);
    };
  }
}), ZL = /* @__PURE__ */ te({
  __name: "ImageUrl",
  props: {
    modelValue: { default: () => ({}) },
    t: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = W({
      get: () => n.modelValue,
      set: (o) => r("update:modelValue", o)
    });
    return (o, s) => {
      const l = ka, a = rs, c = ns;
      return R(), U(c, null, {
        default: L(() => [
          H(l, {
            modelValue: i.value.src,
            "onUpdate:modelValue": s[0] || (s[0] = (d) => i.value.src = d),
            label: o.t("editor.image.dialog.form.link"),
            autofocus: "",
            "prepend-icon": T(ue)("linkVariant")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          H(l, {
            modelValue: i.value.alt,
            "onUpdate:modelValue": s[1] || (s[1] = (d) => i.value.alt = d),
            label: o.t("editor.image.dialog.form.alt"),
            "prepend-icon": T(ue)("text")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          H(a, {
            modelValue: i.value.lockAspectRatio,
            "onUpdate:modelValue": s[2] || (s[2] = (d) => i.value.lockAspectRatio = d),
            label: o.t("editor.image.dialog.form.aspectRatio")
          }, null, 8, ["modelValue", "label"])
        ]),
        _: 1
      });
    };
  }
}), YL = { class: "headline" }, QL = /* @__PURE__ */ te({
  __name: "ImageDialog",
  props: {
    value: { default: () => ({}) },
    editor: {},
    upload: { type: Function, default: void 0 },
    imageTabs: { default: () => [] },
    hiddenTabs: { default: () => [] },
    destroy: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, { t: n } = Ut(), r = Y(!1), i = Y(!1), o = Y({}), s = W(() => [...[
      {
        name: T(n)("editor.image.dialog.tab.url"),
        type: "url",
        component: ZL
      },
      {
        name: T(n)("editor.image.dialog.tab.upload"),
        type: "upload",
        component: XL
      }
    ].filter((f) => f.type ? !e.hiddenTabs.includes(f.type) : f), ...e.imageTabs]), l = W(() => {
      const { src: d } = T(o);
      return !(typeof d == "string" && d !== "");
    });
    async function a() {
      const { src: d, lockAspectRatio: u, height: f } = T(o);
      d && (e.editor.chain().focus().setImage({
        ...T(o),
        src: d,
        height: u ? void 0 : f
      }).run(), c());
    }
    function c() {
      r.value = !1, o.value = {}, setTimeout(() => e.destroy?.(), 300);
    }
    return _t(
      () => e.value,
      (d) => {
        o.value = {
          ...T(o),
          ...d
        };
      },
      { immediate: !0, deep: !0 }
    ), (d, u) => {
      const f = yi, h = un, p = yr, m = gr, g = k1, y = w1, b = S1, w = x1, v = mi, x = Sa, k = mr, S = xa;
      return R(), U(S, {
        modelValue: r.value,
        "onUpdate:modelValue": u[3] || (u[3] = (C) => r.value = C),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": c
      }, {
        default: L(() => [
          H(k, null, {
            default: L(() => [
              H(m, {
                class: "px-6",
                density: "compact"
              }, {
                default: L(() => [
                  De("span", YL, Ae(T(n)("editor.image.dialog.title")), 1),
                  H(f),
                  H(p, {
                    class: "mx-0",
                    icon: "",
                    onClick: c
                  }, {
                    default: L(() => [
                      H(h, {
                        icon: T(ue)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              H(y, {
                modelValue: i.value,
                "onUpdate:modelValue": u[0] || (u[0] = (C) => i.value = C)
              }, {
                default: L(() => [
                  (R(!0), de(Le, null, Ze(s.value, (C, E) => (R(), U(g, {
                    key: E,
                    value: E
                  }, {
                    default: L(() => [
                      Dt(Ae(C.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue"]),
              H(v, null, {
                default: L(() => [
                  H(w, {
                    modelValue: i.value,
                    "onUpdate:modelValue": u[2] || (u[2] = (C) => i.value = C)
                  }, {
                    default: L(() => [
                      (R(!0), de(Le, null, Ze(s.value, (C, E) => (R(), U(b, {
                        key: E,
                        value: E
                      }, {
                        default: L(() => [
                          (R(), U(Xr(C.component), {
                            modelValue: o.value,
                            "onUpdate:modelValue": u[1] || (u[1] = (_) => o.value = _),
                            upload: d.upload,
                            t: T(n)
                          }, null, 8, ["modelValue", "upload", "t"]))
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              H(x, null, {
                default: L(() => [
                  H(p, {
                    disabled: l.value,
                    onClick: a
                  }, {
                    default: L(() => [
                      Dt(Ae(T(n)("editor.image.dialog.button.apply")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), eO = ["src", "alt"], tO = {
  key: 0,
  class: "image-resizer"
}, nO = ["onMousedown"], rO = /* @__PURE__ */ te({
  __name: "ImageView",
  props: {
    ...sm,
    selected: {
      type: Boolean,
      required: !0
    }
  },
  setup(t) {
    const e = t, n = {
      TOP_LEFT: "tl",
      TOP_RIGHT: "tr",
      BOTTOM_LEFT: "bl",
      BOTTOM_RIGHT: "br"
    }, r = Y({
      width: qd,
      height: qd
    }), i = Y({
      width: 0,
      height: 0
    }), o = Y([
      n.TOP_LEFT,
      n.TOP_RIGHT,
      n.BOTTOM_LEFT,
      n.BOTTOM_RIGHT
    ]), s = Y(!1), l = Y({
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      dir: ""
    }), a = W(() => {
      const { src: k, alt: S, width: C, height: E } = e.node.attrs, _ = Zl(C) ? `${C}px` : C, I = Zl(E) ? `${E}px` : E;
      return {
        src: k || void 0,
        alt: S || void 0,
        style: {
          width: _ || void 0,
          height: I || void 0
        }
      };
    }), c = W(() => e.node.attrs.display || void 0), d = W(() => e.node.attrs.lockAspectRatio ?? !0), u = W(() => typeof T(c) == "string" ? ["image-view", `image-view--${T(c)}`] : ["image-view"]), f = W(() => {
      const {
        style: { width: k }
      } = T(a);
      return { width: k === "100%" ? k : void 0 };
    });
    function h(k) {
      i.value = {
        width: k.target.width,
        height: k.target.height
      };
    }
    function p() {
      const { editor: k, getPos: S } = e, C = S();
      C !== void 0 && k.commands.setNodeSelection(C);
    }
    const m = Pr(function() {
      const { editor: k } = e, { width: S } = getComputedStyle(k.view.dom);
      r.value.width = Number.parseInt(S, 10);
    }, Gd);
    function g(k, S) {
      k.preventDefault(), k.stopPropagation(), l.value.x = k.clientX, l.value.y = k.clientY;
      const C = T(i).width, E = T(i).height, _ = C / E;
      let I = Number(e.node.attrs.width), B = Number(e.node.attrs.height);
      const F = T(r).width;
      I && !B ? (I = I > F ? F : I, B = Math.round(I / _)) : B && !I ? (I = Math.round(B * _), I = I > F ? F : I) : !I && !B ? (I = C > F ? F : C, B = Math.round(I / _)) : I = I > F ? F : I, l.value.w = I, l.value.h = B, l.value.dir = S, s.value = !0, w();
    }
    const y = Pr(function(k) {
      if (k.preventDefault(), k.stopPropagation(), !T(s)) return;
      const { x: S, y: C, w: E, h: _, dir: I } = T(l), B = (k.clientX - S) * (/l/.test(I) ? -1 : 1), F = (k.clientY - C) * (/t/.test(I) ? -1 : 1), j = YC(E + B, Kd, T(r).width), K = T(d) ? null : Math.max(_ + F, Kd);
      e.updateAttributes({
        width: j,
        height: K
      });
    }, Gd);
    function b(k) {
      k.preventDefault(), k.stopPropagation(), T(s) && (s.value = !1, l.value = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }, v(), p());
    }
    function w() {
      document?.addEventListener("mousemove", y, !0), document?.addEventListener("mouseup", b, !0);
    }
    function v() {
      document?.removeEventListener("mousemove", y, !0), document?.removeEventListener("mouseup", b, !0);
    }
    const x = new ResizeObserver(() => m());
    return $n((k) => {
      T(x).observe(e.editor.view.dom), k(() => {
        T(x).disconnect();
      });
    }), (k, S) => (R(), U(T(om), {
      as: "span",
      class: dt(u.value),
      style: tr(f.value)
    }, {
      default: L(() => [
        De("div", {
          draggable: "true",
          "data-drag-handle": "",
          class: dt([{
            "image-view__body--focused": t.selected,
            "image-view__body--resizing": s.value
          }, "image-view__body"]),
          style: tr(f.value)
        }, [
          De("img", {
            src: a.value.src,
            alt: a.value.alt,
            style: tr(a.value.style),
            class: "image-view__body__image",
            onLoad: h,
            onClick: p
          }, null, 44, eO),
          k.editor.view.editable ? Vf((R(), de("div", tO, [
            (R(!0), de(Le, null, Ze(o.value, (C) => (R(), de("span", {
              key: C,
              class: dt([`image-resizer__handler--${C}`, "image-resizer__handler"]),
              onMousedown: (E) => g(E, C)
            }, null, 42, nO))), 128))
          ], 512)), [
            [Nf, t.selected || s.value]
          ]) : $e("", !0)
        ], 6)
      ]),
      _: 1
    }, 8, ["class", "style"]));
  }
}), Sc = /* @__PURE__ */ te({
  __name: "OriginalThemeProvider",
  setup(t) {
    const { global: { name: e } } = Ma();
    return (n, r) => {
      const i = Mf;
      return R(), U(i, { theme: T(e) }, {
        default: L(() => [
          ut(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["theme"]);
    };
  }
}), iO = /* @__PURE__ */ te({
  __name: "ImageActionButton",
  props: {
    editor: {},
    upload: { type: Function, default: void 0 },
    imageTabs: { default: () => [] },
    hiddenTabs: { default: () => [] },
    icon: { default: void 0 },
    tooltip: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    color: { default: void 0 },
    action: { type: Function, default: void 0 },
    isActive: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, n = Y({});
    function r() {
      const o = e.editor?.view.state.selection?.node?.attrs ?? {};
      o?.src && (n.value.src = o.src), o?.alt && (n.value.alt = o.alt), o?.title && (n.value.title = o.title), o?.width && (n.value.width = o.width), o?.height && (n.value.height = o.height), o?.display && (n.value.display = o.display), n.value.lockAspectRatio = o.lockAspectRatio ?? !0;
    }
    return (i, o) => (R(), U(ee, {
      icon: i.icon,
      tooltip: i.tooltip,
      disabled: i.disabled,
      color: i.color,
      "is-active": i.isActive,
      action: r
    }, {
      default: L(() => [
        H(Sc, null, {
          default: L(() => [
            ut(i.$slots, "dialog", {
              props: { editor: i.editor, value: n.value, imageTabs: i.imageTabs, hiddenTabs: i.hiddenTabs, upload: i.upload }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["icon", "tooltip", "disabled", "color", "is-active"]));
  }
}), tR = /* @__PURE__ */ JL.extend({
  addAttributes() {
    return {
      ...Me(
        this.parent?.(),
        "image",
        this.options.allowedAttributes
      ),
      src: {
        default: null
      },
      alt: {
        default: null
      },
      lockAspectRatio: {
        default: !0
      },
      width: {
        default: this.options.width
      },
      height: {
        default: null
      },
      display: {
        default: this.options.display,
        renderHTML: ({ display: t }) => t ? {
          "data-display": t
        } : {},
        parseHTML: (t) => t.getAttribute("data-display") || "inline"
      }
    };
  },
  addNodeView() {
    return lm(rO);
  },
  addCommands() {
    return {
      ...this.parent?.(),
      updateImage: (t) => ({ commands: e }) => e.updateAttributes(this.name, t)
    };
  },
  addOptions() {
    return {
      ...this.parent?.(),
      upload: void 0,
      width: vo["size-large"],
      display: "inline",
      imageTabs: [],
      hiddenTabs: [],
      inline: !0,
      dialogComponent: () => QL,
      button: ({ editor: t, extension: e, t: n }) => {
        const { upload: r, imageTabs: i, hiddenTabs: o, dialogComponent: s } = e.options;
        return {
          component: iO,
          componentProps: {
            editor: t,
            upload: r,
            imageTabs: i,
            hiddenTabs: o,
            isActive: () => t.isActive("image") || !1,
            disabled: !t.can().setImage({}),
            icon: "image",
            tooltip: n("editor.image.tooltip")
          },
          componentSlots: {
            dialog: s()
          }
        };
      }
    };
  }
}), nR = /* @__PURE__ */ J.create({
  name: "indent",
  addOptions() {
    return {
      divider: !1,
      spacer: !1,
      button: ({ editor: t, t: e }) => {
        const n = ["outdent", "indent"], r = {
          indent: "sinkListItem",
          outdent: "liftListItem"
        };
        return n.map((i) => ({
          component: ee,
          componentProps: {
            action: () => {
              i === "indent" && t.chain().focus().sinkListItem("listItem").run(), i === "outdent" && t.chain().focus().liftListItem("listItem").run();
            },
            disabled: !t.can()[r[i]]("listItem"),
            icon: i,
            tooltip: e(`editor.${i}.tooltip`)
          }
        }));
      }
    };
  }
});
var oO = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, sO = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, lO = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, aO = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, cO = it.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (t) => t.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["em", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: t }) => t.setMark(this.name),
      toggleItalic: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetItalic: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  markdownTokenName: "em",
  parseMarkdown: (t, e) => e.applyMark("italic", e.parseInline(t.tokens || [])),
  markdownOptions: {
    htmlReopen: {
      open: "<em>",
      close: "</em>"
    }
  },
  renderMarkdown: (t, e) => `*${e.renderChildren(t)}*`,
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      dn({
        find: oO,
        type: this.type
      }),
      dn({
        find: lO,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      zt({
        find: sO,
        type: this.type
      }),
      zt({
        find: aO,
        type: this.type
      })
    ];
  }
});
const rR = /* @__PURE__ */ cO.extend({
  addAttributes() {
    return Me(
      this.parent?.(),
      "italic",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: ee,
        componentProps: {
          action: () => t.chain().focus().toggleItalic().run(),
          isActive: () => t.isActive("italic") || !1,
          disabled: !t.can().toggleItalic(),
          icon: "italic",
          tooltip: e("editor.italic.tooltip")
        }
      })
    };
  }
}), dO = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", uO = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", ua = "numeric", fa = "ascii", ha = "alpha", Ur = "asciinumeric", Hr = "alphanumeric", pa = "domain", Kg = "emoji", fO = "scheme", hO = "slashscheme", ml = "whitespace";
function pO(t, e) {
  return t in e || (e[t] = []), e[t];
}
function Sn(t, e, n) {
  e[ua] && (e[Ur] = !0, e[Hr] = !0), e[fa] && (e[Ur] = !0, e[ha] = !0), e[Ur] && (e[Hr] = !0), e[ha] && (e[Hr] = !0), e[Hr] && (e[pa] = !0), e[Kg] && (e[pa] = !0);
  for (const r in e) {
    const i = pO(r, n);
    i.indexOf(t) < 0 && i.push(t);
  }
}
function mO(t, e) {
  const n = {};
  for (const r in e)
    e[r].indexOf(t) >= 0 && (n[r] = !0);
  return n;
}
function _e(t = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = t;
}
_e.groups = {};
_e.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(t) {
    const e = this, n = e.j[t];
    if (n)
      return n;
    for (let r = 0; r < e.jr.length; r++) {
      const i = e.jr[r][0], o = e.jr[r][1];
      if (o && i.test(t))
        return o;
    }
    return e.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(t, e = !1) {
    return e ? t in this.j : !!this.go(t);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(t, e, n, r) {
    for (let i = 0; i < t.length; i++)
      this.tt(t[i], e, n, r);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(t, e, n, r) {
    r = r || _e.groups;
    let i;
    return e && e.j ? i = e : (i = new _e(e), n && r && Sn(e, n, r)), this.jr.push([t, i]), i;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(t, e, n, r) {
    let i = this;
    const o = t.length;
    if (!o)
      return i;
    for (let s = 0; s < o - 1; s++)
      i = i.tt(t[s]);
    return i.tt(t[o - 1], e, n, r);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(t, e, n, r) {
    r = r || _e.groups;
    const i = this;
    if (e && e.j)
      return i.j[t] = e, e;
    const o = e;
    let s, l = i.go(t);
    if (l ? (s = new _e(), Object.assign(s.j, l.j), s.jr.push.apply(s.jr, l.jr), s.jd = l.jd, s.t = l.t) : s = new _e(), o) {
      if (r)
        if (s.t && typeof s.t == "string") {
          const a = Object.assign(mO(s.t, r), n);
          Sn(o, a, r);
        } else n && Sn(o, n, r);
      s.t = o;
    }
    return i.j[t] = s, s;
  }
};
const q = (t, e, n, r, i) => t.ta(e, n, r, i), fe = (t, e, n, r, i) => t.tr(e, n, r, i), yf = (t, e, n, r, i) => t.ts(e, n, r, i), M = (t, e, n, r, i) => t.tt(e, n, r, i), Mt = "WORD", ma = "UWORD", qg = "ASCIINUMERICAL", Gg = "ALPHANUMERICAL", hi = "LOCALHOST", ga = "TLD", ya = "UTLD", oo = "SCHEME", Qn = "SLASH_SCHEME", Cc = "NUM", ba = "WS", Ac = "NL", Wr = "OPENBRACE", jr = "CLOSEBRACE", Mo = "OPENBRACKET", Eo = "CLOSEBRACKET", Lo = "OPENPAREN", Oo = "CLOSEPAREN", Ho = "OPENANGLEBRACKET", Ro = "CLOSEANGLEBRACKET", Vo = "FULLWIDTHLEFTPAREN", No = "FULLWIDTHRIGHTPAREN", Io = "LEFTCORNERBRACKET", _o = "RIGHTCORNERBRACKET", Do = "LEFTWHITECORNERBRACKET", Po = "RIGHTWHITECORNERBRACKET", zo = "FULLWIDTHLESSTHAN", $o = "FULLWIDTHGREATERTHAN", Bo = "AMPERSAND", Fo = "APOSTROPHE", Uo = "ASTERISK", Xt = "AT", Wo = "BACKSLASH", jo = "BACKTICK", Ko = "CARET", Cn = "COLON", Tc = "COMMA", qo = "DOLLAR", lt = "DOT", Go = "EQUALS", Mc = "EXCLAMATION", Ke = "HYPHEN", Kr = "PERCENT", Jo = "PIPE", Xo = "PLUS", Zo = "POUND", qr = "QUERY", Ec = "QUOTE", Jg = "FULLWIDTHMIDDLEDOT", Lc = "SEMI", at = "SLASH", Gr = "TILDE", Yo = "UNDERSCORE", Xg = "EMOJI", Qo = "SYM";
var Zg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Gg,
  AMPERSAND: Bo,
  APOSTROPHE: Fo,
  ASCIINUMERICAL: qg,
  ASTERISK: Uo,
  AT: Xt,
  BACKSLASH: Wo,
  BACKTICK: jo,
  CARET: Ko,
  CLOSEANGLEBRACKET: Ro,
  CLOSEBRACE: jr,
  CLOSEBRACKET: Eo,
  CLOSEPAREN: Oo,
  COLON: Cn,
  COMMA: Tc,
  DOLLAR: qo,
  DOT: lt,
  EMOJI: Xg,
  EQUALS: Go,
  EXCLAMATION: Mc,
  FULLWIDTHGREATERTHAN: $o,
  FULLWIDTHLEFTPAREN: Vo,
  FULLWIDTHLESSTHAN: zo,
  FULLWIDTHMIDDLEDOT: Jg,
  FULLWIDTHRIGHTPAREN: No,
  HYPHEN: Ke,
  LEFTCORNERBRACKET: Io,
  LEFTWHITECORNERBRACKET: Do,
  LOCALHOST: hi,
  NL: Ac,
  NUM: Cc,
  OPENANGLEBRACKET: Ho,
  OPENBRACE: Wr,
  OPENBRACKET: Mo,
  OPENPAREN: Lo,
  PERCENT: Kr,
  PIPE: Jo,
  PLUS: Xo,
  POUND: Zo,
  QUERY: qr,
  QUOTE: Ec,
  RIGHTCORNERBRACKET: _o,
  RIGHTWHITECORNERBRACKET: Po,
  SCHEME: oo,
  SEMI: Lc,
  SLASH: at,
  SLASH_SCHEME: Qn,
  SYM: Qo,
  TILDE: Gr,
  TLD: ga,
  UNDERSCORE: Yo,
  UTLD: ya,
  UWORD: ma,
  WORD: Mt,
  WS: ba
});
const St = /[a-z]/, Tr = new RegExp("\\p{L}", "u"), gl = new RegExp("\\p{Emoji}", "u"), Ct = /\d/, yl = /\s/, bf = "\r", bl = `
`, gO = "️", yO = "‍", vl = "￼";
let qi = null, Gi = null;
function bO(t = []) {
  const e = {};
  _e.groups = e;
  const n = new _e();
  qi == null && (qi = vf(dO)), Gi == null && (Gi = vf(uO)), M(n, "'", Fo), M(n, "{", Wr), M(n, "}", jr), M(n, "[", Mo), M(n, "]", Eo), M(n, "(", Lo), M(n, ")", Oo), M(n, "<", Ho), M(n, ">", Ro), M(n, "（", Vo), M(n, "）", No), M(n, "「", Io), M(n, "」", _o), M(n, "『", Do), M(n, "』", Po), M(n, "＜", zo), M(n, "＞", $o), M(n, "&", Bo), M(n, "*", Uo), M(n, "@", Xt), M(n, "`", jo), M(n, "^", Ko), M(n, ":", Cn), M(n, ",", Tc), M(n, "$", qo), M(n, ".", lt), M(n, "=", Go), M(n, "!", Mc), M(n, "-", Ke), M(n, "%", Kr), M(n, "|", Jo), M(n, "+", Xo), M(n, "#", Zo), M(n, "?", qr), M(n, '"', Ec), M(n, "/", at), M(n, ";", Lc), M(n, "~", Gr), M(n, "_", Yo), M(n, "\\", Wo), M(n, "・", Jg);
  const r = fe(n, Ct, Cc, {
    [ua]: !0
  });
  fe(r, Ct, r);
  const i = fe(r, St, qg, {
    [Ur]: !0
  }), o = fe(r, Tr, Gg, {
    [Hr]: !0
  }), s = fe(n, St, Mt, {
    [fa]: !0
  });
  fe(s, Ct, i), fe(s, St, s), fe(i, Ct, i), fe(i, St, i);
  const l = fe(n, Tr, ma, {
    [ha]: !0
  });
  fe(l, St), fe(l, Ct, o), fe(l, Tr, l), fe(o, Ct, o), fe(o, St), fe(o, Tr, o);
  const a = M(n, bl, Ac, {
    [ml]: !0
  }), c = M(n, bf, ba, {
    [ml]: !0
  }), d = fe(n, yl, ba, {
    [ml]: !0
  });
  M(n, vl, d), M(c, bl, a), M(c, vl, d), fe(c, yl, d), M(d, bf), M(d, bl), fe(d, yl, d), M(d, vl, d);
  const u = fe(n, gl, Xg, {
    [Kg]: !0
  });
  M(u, "#"), fe(u, gl, u), M(u, gO, u);
  const f = M(u, yO);
  M(f, "#"), fe(f, gl, u);
  const h = [[St, s], [Ct, i]], p = [[St, null], [Tr, l], [Ct, o]];
  for (let m = 0; m < qi.length; m++)
    jt(n, qi[m], ga, Mt, h);
  for (let m = 0; m < Gi.length; m++)
    jt(n, Gi[m], ya, ma, p);
  Sn(ga, {
    tld: !0,
    ascii: !0
  }, e), Sn(ya, {
    utld: !0,
    alpha: !0
  }, e), jt(n, "file", oo, Mt, h), jt(n, "mailto", oo, Mt, h), jt(n, "http", Qn, Mt, h), jt(n, "https", Qn, Mt, h), jt(n, "ftp", Qn, Mt, h), jt(n, "ftps", Qn, Mt, h), Sn(oo, {
    scheme: !0,
    ascii: !0
  }, e), Sn(Qn, {
    slashscheme: !0,
    ascii: !0
  }, e), t = t.sort((m, g) => m[0] > g[0] ? 1 : -1);
  for (let m = 0; m < t.length; m++) {
    const g = t[m][0], b = t[m][1] ? {
      [fO]: !0
    } : {
      [hO]: !0
    };
    g.indexOf("-") >= 0 ? b[pa] = !0 : St.test(g) ? Ct.test(g) ? b[Ur] = !0 : b[fa] = !0 : b[ua] = !0, yf(n, g, g, b);
  }
  return yf(n, "localhost", hi, {
    ascii: !0
  }), n.jd = new _e(Qo), {
    start: n,
    tokens: Object.assign({
      groups: e
    }, Zg)
  };
}
function Yg(t, e) {
  const n = vO(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), r = n.length, i = [];
  let o = 0, s = 0;
  for (; s < r; ) {
    let l = t, a = null, c = 0, d = null, u = -1, f = -1;
    for (; s < r && (a = l.go(n[s])); )
      l = a, l.accepts() ? (u = 0, f = 0, d = l) : u >= 0 && (u += n[s].length, f++), c += n[s].length, o += n[s].length, s++;
    o -= u, s -= f, c -= u, i.push({
      t: d.t,
      // token type/name
      v: e.slice(o - c, o),
      // string value
      s: o - c,
      // start index
      e: o
      // end index (excluding)
    });
  }
  return i;
}
function vO(t) {
  const e = [], n = t.length;
  let r = 0;
  for (; r < n; ) {
    let i = t.charCodeAt(r), o, s = i < 55296 || i > 56319 || r + 1 === n || (o = t.charCodeAt(r + 1)) < 56320 || o > 57343 ? t[r] : t.slice(r, r + 2);
    e.push(s), r += s.length;
  }
  return e;
}
function jt(t, e, n, r, i) {
  let o;
  const s = e.length;
  for (let l = 0; l < s - 1; l++) {
    const a = e[l];
    t.j[a] ? o = t.j[a] : (o = new _e(r), o.jr = i.slice(), t.j[a] = o), t = o;
  }
  return o = new _e(n), o.jr = i.slice(), t.j[e[s - 1]] = o, o;
}
function vf(t) {
  const e = [], n = [];
  let r = 0, i = "0123456789";
  for (; r < t.length; ) {
    let o = 0;
    for (; i.indexOf(t[r + o]) >= 0; )
      o++;
    if (o > 0) {
      e.push(n.join(""));
      for (let s = parseInt(t.substring(r, r + o), 10); s > 0; s--)
        n.pop();
      r += o;
    } else
      n.push(t[r]), r++;
  }
  return e;
}
const pi = {
  defaultProtocol: "http",
  events: null,
  format: wf,
  formatHref: wf,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function Oc(t, e = null) {
  let n = Object.assign({}, pi);
  t && (n = Object.assign(n, t instanceof Oc ? t.o : t));
  const r = n.ignoreTags, i = [];
  for (let o = 0; o < r.length; o++)
    i.push(r[o].toUpperCase());
  this.o = n, e && (this.defaultRender = e), this.ignoreTags = i;
}
Oc.prototype = {
  o: pi,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(t) {
    return t;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(t) {
    return this.get("validate", t.toString(), t);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(t, e, n) {
    const r = e != null;
    let i = this.o[t];
    return i && (typeof i == "object" ? (i = n.t in i ? i[n.t] : pi[t], typeof i == "function" && r && (i = i(e, n))) : typeof i == "function" && r && (i = i(e, n.t, n)), i);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(t, e, n) {
    let r = this.o[t];
    return typeof r == "function" && e != null && (r = r(e, n.t, n)), r;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(t) {
    const e = t.render(this);
    return (this.get("render", null, t) || this.defaultRender)(e, t.t, t);
  }
};
function wf(t) {
  return t;
}
function Qg(t, e) {
  this.t = "token", this.v = t, this.tk = e;
}
Qg.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(t) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(t) {
    const e = this.toString(), n = t.get("truncate", e, this), r = t.get("format", e, this);
    return n && r.length > n ? r.substring(0, n) + "…" : r;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(t) {
    return t.get("formatHref", this.toHref(t.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(t = pi.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(t),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(t) {
    return {
      type: this.t,
      value: this.toFormattedString(t),
      isLink: this.isLink,
      href: this.toFormattedHref(t),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(t) {
    return t.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(t) {
    const e = this, n = this.toHref(t.get("defaultProtocol")), r = t.get("formatHref", n, this), i = t.get("tagName", n, e), o = this.toFormattedString(t), s = {}, l = t.get("className", n, e), a = t.get("target", n, e), c = t.get("rel", n, e), d = t.getObj("attributes", n, e), u = t.getObj("events", n, e);
    return s.href = r, l && (s.class = l), a && (s.target = a), c && (s.rel = c), d && Object.assign(s, d), {
      tagName: i,
      attributes: s,
      content: o,
      eventListeners: u
    };
  }
};
function Ns(t, e) {
  class n extends Qg {
    constructor(i, o) {
      super(i, o), this.t = t;
    }
  }
  for (const r in e)
    n.prototype[r] = e[r];
  return n.t = t, n;
}
const wO = Ns("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), kf = Ns("text"), kO = Ns("nl"), Ji = Ns("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(t = pi.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${t}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const t = this.tk;
    return t.length >= 2 && t[0].t !== hi && t[1].t === Cn;
  }
}), je = (t) => new _e(t);
function xO({
  groups: t
}) {
  const e = t.domain.concat([Bo, Uo, Xt, Wo, jo, Ko, qo, Go, Ke, Cc, Kr, Jo, Xo, Zo, at, Qo, Gr, Yo]), n = [Fo, Cn, Tc, lt, Mc, Kr, qr, Ec, Lc, Ho, Ro, Wr, jr, Eo, Mo, Lo, Oo, Vo, No, Io, _o, Do, Po, zo, $o], r = [Bo, Fo, Uo, Wo, jo, Ko, qo, Go, Ke, Wr, jr, Kr, Jo, Xo, Zo, qr, at, Qo, Gr, Yo], i = je(), o = M(i, Gr);
  q(o, r, o), q(o, t.domain, o);
  const s = je(), l = je(), a = je();
  q(i, t.domain, s), q(i, t.scheme, l), q(i, t.slashscheme, a), q(s, r, o), q(s, t.domain, s);
  const c = M(s, Xt);
  M(o, Xt, c), M(l, Xt, c), M(a, Xt, c);
  const d = M(o, lt);
  q(d, r, o), q(d, t.domain, o);
  const u = je();
  q(c, t.domain, u), q(u, t.domain, u);
  const f = M(u, lt);
  q(f, t.domain, u);
  const h = je(wO);
  q(f, t.tld, h), q(f, t.utld, h), M(c, hi, h);
  const p = M(u, Ke);
  M(p, Ke, p), q(p, t.domain, u), q(h, t.domain, u), M(h, lt, f), M(h, Ke, p);
  const m = M(s, Ke), g = M(s, lt);
  M(m, Ke, m), q(m, t.domain, s), q(g, r, o), q(g, t.domain, s);
  const y = je(Ji);
  q(g, t.tld, y), q(g, t.utld, y), q(y, t.domain, s), q(y, r, o), M(y, lt, g), M(y, Ke, m), M(y, Xt, c);
  const b = M(y, Cn), w = je(Ji);
  q(b, t.numeric, w);
  const v = je(Ji), x = je();
  q(v, e, v), q(v, n, x), q(x, e, v), q(x, n, x), M(y, at, v), M(w, at, v);
  const k = M(l, Cn), S = M(a, Cn), C = M(S, at), E = M(C, at);
  q(l, t.domain, s), M(l, lt, g), M(l, Ke, m), q(a, t.domain, s), M(a, lt, g), M(a, Ke, m), q(k, t.domain, v), M(k, at, v), M(k, qr, v), q(E, t.domain, v), q(E, e, v), M(E, at, v);
  const _ = [
    [Wr, jr],
    // {}
    [Mo, Eo],
    // []
    [Lo, Oo],
    // ()
    [Ho, Ro],
    // <>
    [Vo, No],
    // （）
    [Io, _o],
    // 「」
    [Do, Po],
    // 『』
    [zo, $o]
    // ＜＞
  ];
  for (let I = 0; I < _.length; I++) {
    const [B, F] = _[I], j = M(v, B);
    M(x, B, j);
    const K = je(Ji);
    q(j, e, K);
    const V = je();
    q(j, n, V), M(j, F, v), q(K, e, K), q(K, n, V), q(V, e, K), q(V, n, V), M(K, F, v), M(V, F, v);
  }
  return M(i, hi, y), M(i, Ac, kO), {
    start: i,
    tokens: Zg
  };
}
function SO(t, e, n) {
  let r = n.length, i = 0, o = [], s = [];
  for (; i < r; ) {
    let l = t, a = null, c = null, d = 0, u = null, f = -1;
    for (; i < r && !(a = l.go(n[i].t)); )
      s.push(n[i++]);
    for (; i < r && (c = a || l.go(n[i].t)); )
      a = null, l = c, l.accepts() ? (f = 0, u = l) : f >= 0 && f++, i++, d++;
    if (f < 0)
      i -= d, i < r && (s.push(n[i]), i++);
    else {
      s.length > 0 && (o.push(wl(kf, e, s)), s = []), i -= f, d -= f;
      const h = u.t, p = n.slice(i - d, i);
      o.push(wl(h, e, p));
    }
  }
  return s.length > 0 && o.push(wl(kf, e, s)), o;
}
function wl(t, e, n) {
  const r = n[0].s, i = n[n.length - 1].e, o = e.slice(r, i);
  return new t(o, n);
}
const CO = typeof console < "u" && console && console.warn || (() => {
}), AO = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", ae = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function TO() {
  return _e.groups = {}, ae.scanner = null, ae.parser = null, ae.tokenQueue = [], ae.pluginQueue = [], ae.customSchemes = [], ae.initialized = !1, ae;
}
function xf(t, e = !1) {
  if (ae.initialized && CO(`linkifyjs: already initialized - will not register custom scheme "${t}" ${AO}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  ae.customSchemes.push([t, e]);
}
function MO() {
  ae.scanner = bO(ae.customSchemes);
  for (let t = 0; t < ae.tokenQueue.length; t++)
    ae.tokenQueue[t][1]({
      scanner: ae.scanner
    });
  ae.parser = xO(ae.scanner.tokens);
  for (let t = 0; t < ae.pluginQueue.length; t++)
    ae.pluginQueue[t][1]({
      scanner: ae.scanner,
      parser: ae.parser
    });
  return ae.initialized = !0, ae;
}
function Hc(t) {
  return ae.initialized || MO(), SO(ae.parser.start, t, Yg(ae.scanner.start, t));
}
Hc.scan = Yg;
function e1(t, e = null, n = null) {
  if (e && typeof e == "object") {
    if (n)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    n = e, e = null;
  }
  const r = new Oc(n), i = Hc(t), o = [];
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    l.isLink && (!e || l.t === e) && r.check(l) && o.push(l.toFormattedObject(r));
  }
  return o;
}
var Rc = "[\0-   ᠎ -\u2029 　]", EO = new RegExp(Rc), LO = new RegExp(`${Rc}$`), OO = new RegExp(Rc, "g");
function HO(t) {
  return t.length === 1 ? t[0].isLink : t.length === 3 && t[1].isLink ? ["()", "[]"].includes(t[0].value + t[2].value) : !1;
}
function RO(t) {
  return new re({
    key: new se("autolink"),
    appendTransaction: (e, n, r) => {
      const i = e.some((c) => c.docChanged) && !n.doc.eq(r.doc), o = e.some(
        (c) => c.getMeta("preventAutolink")
      );
      if (!i || o)
        return;
      const { tr: s } = r, l = Cp(n.doc, [...e]);
      if (ys(l).forEach(({ newRange: c }) => {
        const d = Ev(
          r.doc,
          c,
          (h) => h.isTextblock
        );
        let u, f;
        if (d.length > 1)
          u = d[0], f = r.doc.textBetween(
            u.pos,
            u.pos + u.node.nodeSize,
            void 0,
            " "
          );
        else if (d.length) {
          const h = r.doc.textBetween(c.from, c.to, " ", " ");
          if (!LO.test(h))
            return;
          u = d[0], f = r.doc.textBetween(
            u.pos,
            c.to,
            void 0,
            " "
          );
        }
        if (u && f) {
          const h = f.split(EO).filter(Boolean);
          if (h.length <= 0)
            return !1;
          const p = h[h.length - 1], m = u.pos + f.lastIndexOf(p);
          if (!p)
            return !1;
          const g = Hc(p).map(
            (y) => y.toObject(t.defaultProtocol)
          );
          if (!HO(g))
            return !1;
          g.filter((y) => y.isLink).map((y) => ({
            ...y,
            from: m + y.start + 1,
            to: m + y.end + 1
          })).filter((y) => r.schema.marks.code ? !r.doc.rangeHasMark(y.from, y.to, r.schema.marks.code) : !0).filter((y) => t.validate(y.value)).filter((y) => t.shouldAutoLink(y.value)).forEach((y) => {
            ec(y.from, y.to, r.doc).some(
              (b) => b.mark.type === t.type
            ) || s.addMark(
              y.from,
              y.to,
              t.type.create({
                href: y.href
              })
            );
          });
        }
      }), !!s.steps.length)
        return s;
    }
  });
}
function VO(t) {
  return new re({
    key: new se("handleClickLink"),
    props: {
      handleClick: (e, n, r) => {
        var i, o;
        if (r.button !== 0 || !e.editable)
          return !1;
        let s = null;
        if (r.target instanceof HTMLAnchorElement)
          s = r.target;
        else {
          const a = r.target;
          if (!a)
            return !1;
          const c = t.editor.view.dom;
          s = a.closest("a"), s && !c.contains(s) && (s = null);
        }
        if (!s)
          return !1;
        let l = !1;
        if (t.enableClickSelection && (l = t.editor.commands.extendMarkRange(t.type.name)), t.openOnClick) {
          const a = Op(e.state, t.type.name), c = (i = s.href) != null ? i : a.href, d = (o = s.target) != null ? o : a.target;
          c && (window.open(c, d), l = !0);
        }
        return l;
      }
    }
  });
}
var NO = /\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)$/, IO = /\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)/g;
function t1(t, e) {
  let n = 0;
  for (let r = e - 1; r >= 0 && t[r] === "\\"; r -= 1)
    n += 1;
  return n % 2 === 1;
}
function _O(t, e) {
  let n = 0, r = 0;
  for (; r < e; ) {
    if (t[r] !== "`") {
      r += 1;
      continue;
    }
    if (n === 0 && t1(t, r)) {
      r += 1;
      continue;
    }
    let i = 0;
    for (; r < e && t[r] === "`"; )
      i += 1, r += 1;
    n === 0 ? n = i : i === n && (n = 0);
  }
  return n > 0;
}
function n1(t, e, n) {
  var r, i;
  const [, o, s] = e;
  return (e.index ? t[e.index - 1] : void 0) === "!" || t1(t, (r = e.index) != null ? r : 0) || _O(t, (i = e.index) != null ? i : 0) ? !1 : !!o.trim() && n(s);
}
function r1(t) {
  var e, n;
  const [r, i, o, , s, l, a] = t, c = (e = s ?? l) != null ? e : a;
  return {
    index: (n = t.index) != null ? n : 0,
    text: r,
    replaceWith: i,
    data: {
      href: o,
      // an empty title ("") counts as no title, as in CommonMark
      title: c || null,
      markdown: !0
    }
  };
}
function DO(t, e) {
  return t.index < e.index + e.text.length && e.index < t.index + t.text.length;
}
function i1(t) {
  var e, n, r;
  return {
    href: (e = t.data) == null ? void 0 : e.href,
    title: (r = (n = t.data) == null ? void 0 : n.title) != null ? r : null
  };
}
function PO(t) {
  const e = dn({
    find: (n) => {
      const r = NO.exec(n);
      return !r || !n1(n, r, t.isAllowedHref) ? null : r1(r);
    },
    type: t.type,
    getAttributes: i1
  });
  return new Ci({
    find: e.find,
    handler: (n) => {
      const r = e.handler(n);
      return r !== null && n.state.tr.steps.length && n.state.tr.setMeta("preventAutolink", !0), r;
    }
  });
}
function zO(t) {
  const e = zt({
    find: (n) => {
      var r, i;
      const o = [];
      for (const l of n.matchAll(IO))
        n1(n, l, t.isAllowedHref) && o.push(r1(l));
      const s = ((i = (r = t.findPlainUrls) == null ? void 0 : r.call(t, n)) != null ? i : []).filter(
        (l) => !o.some((a) => DO(a, l))
      );
      return [...o, ...s];
    },
    type: t.type,
    getAttributes: i1
  });
  return new Wp({
    find: e.find,
    handler: (n) => {
      var r;
      const i = e.handler(n);
      return i !== null && n.state.tr.steps.length && ((r = n.match.data) != null && r.markdown) && n.state.tr.setMeta("preventAutolink", !0), i;
    }
  });
}
function $O(t) {
  return new re({
    key: new se("handlePasteLink"),
    props: {
      handlePaste: (e, n, r) => {
        const { shouldAutoLink: i } = t, { state: o } = e, { selection: s } = o, { empty: l } = s;
        if (l)
          return !1;
        let a = "";
        r.content.forEach((d) => {
          a += d.textContent;
        });
        const c = e1(a, { defaultProtocol: t.defaultProtocol }).find(
          (d) => d.isLink && d.value === a
        );
        return !a || !c || i !== void 0 && !i(c.value) ? !1 : t.editor.commands.setMark(t.type, {
          href: c.href
        });
      }
    }
  });
}
function At(t, e) {
  const n = [
    "http",
    "https",
    "ftp",
    "ftps",
    "mailto",
    "tel",
    "callto",
    "sms",
    "cid",
    "xmpp"
  ];
  return e && e.forEach((r) => {
    const i = typeof r == "string" ? r : r.scheme;
    i && n.push(i);
  }), !t || t.replace(OO, "").match(
    new RegExp(
      `^(?:(?:${n.map((r) => r.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|")}):|[^a-z]|[a-z0-9+.\\-]+(?:[^a-z+.\\-:]|$))`,
      "i"
    )
  );
}
var BO = it.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn(
      "The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead."
    )), this.options.protocols.forEach((t) => {
      if (typeof t == "string") {
        xf(t);
        return;
      }
      xf(t.scheme, t.optionalSlashes);
    });
  },
  onDestroy() {
    TO();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      enableClickSelection: !1,
      linkOnPaste: !0,
      markdownLinks: !1,
      // TODO (major) - default to true on next major version
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (t, e) => !!At(t, e.protocols),
      validate: (t) => !!t,
      shouldAutoLink: (t) => {
        const e = /^[a-z][a-z0-9+.-]*:\/\//i.test(t), n = /^[a-z][a-z0-9+.-]*:/i.test(t);
        if (e || n && !t.includes("@"))
          return !0;
        const i = (t.includes("@") ? t.split("@").pop() : t).split(/[/?#:]/)[0];
        return !(/^\d{1,3}(\.\d{1,3}){3}$/.test(i) || !/\./.test(i));
      }
    };
  },
  addAttributes() {
    var t, e, n;
    return {
      href: {
        default: null,
        parseHTML(r) {
          return r.getAttribute("href");
        }
      },
      target: {
        // Coerce `undefined` to `null` because `undefined` is an invalid attribute value
        default: (t = this.options.HTMLAttributes.target) != null ? t : null
      },
      rel: {
        // Coerce `undefined` to `null` because `undefined` is an invalid attribute value
        default: (e = this.options.HTMLAttributes.rel) != null ? e : null
      },
      class: {
        // Coerce `undefined` to `null` because `undefined` is an invalid attribute value
        default: (n = this.options.HTMLAttributes.class) != null ? n : null
      },
      title: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (t) => {
          const e = t.getAttribute("href");
          return !e || !this.options.isAllowedUri(e, {
            defaultValidate: (n) => !!At(n, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return this.options.isAllowedUri(t.href, {
      defaultValidate: (e) => !!At(e, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", ne(this.options.HTMLAttributes, t), 0] : ["a", ne(this.options.HTMLAttributes, { ...t, href: "" }), 0];
  },
  markdownTokenName: "link",
  parseMarkdown: (t, e) => e.applyMark("link", e.parseInline(t.tokens || []), {
    href: t.href,
    title: t.title || null
  }),
  renderMarkdown: (t, e) => {
    var n, r, i, o;
    const s = (r = (n = t.attrs) == null ? void 0 : n.href) != null ? r : "", l = (o = (i = t.attrs) == null ? void 0 : i.title) != null ? o : "", a = e.renderChildren(t);
    return l ? `[${a}](${s} "${l}")` : `[${a}](${s})`;
  },
  addCommands() {
    return {
      setLink: (t) => ({ chain: e }) => {
        const { href: n } = t;
        return this.options.isAllowedUri(n, {
          defaultValidate: (r) => !!At(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().setMark(this.name, t).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (t) => ({ chain: e }) => {
        const { href: n } = t || {};
        return n && !this.options.isAllowedUri(n, {
          defaultValidate: (r) => !!At(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? !1 : e().toggleMark(this.name, t, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run();
      },
      unsetLink: () => ({ chain: t }) => t().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addInputRules() {
    return this.options.markdownLinks ? [
      PO({
        type: this.type,
        isAllowedHref: (t) => this.options.isAllowedUri(t, {
          defaultValidate: (e) => !!At(e, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        })
      })
    ] : [];
  },
  addPasteRules() {
    const t = (e) => {
      const n = [];
      if (e) {
        const { protocols: r, defaultProtocol: i } = this.options;
        e1(e).filter(
          (s) => s.isLink && this.options.isAllowedUri(s.value, {
            defaultValidate: (l) => !!At(l, r),
            protocols: r,
            defaultProtocol: i
          })
        ).forEach((s) => {
          this.options.shouldAutoLink(s.value) && n.push({
            text: s.value,
            data: {
              href: s.href
            },
            index: s.start
          });
        });
      }
      return n;
    };
    return this.options.markdownLinks ? [
      zO({
        type: this.type,
        isAllowedHref: (e) => this.options.isAllowedUri(e, {
          defaultValidate: (n) => !!At(n, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }),
        findPlainUrls: t
      })
    ] : [
      zt({
        find: t,
        type: this.type,
        getAttributes: (e) => {
          var n;
          return {
            href: (n = e.data) == null ? void 0 : n.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const t = [], { protocols: e, defaultProtocol: n } = this.options;
    return this.options.autolink && t.push(
      RO({
        type: this.type,
        defaultProtocol: this.options.defaultProtocol,
        validate: (r) => this.options.isAllowedUri(r, {
          defaultValidate: (i) => !!At(i, e),
          protocols: e,
          defaultProtocol: n
        }),
        shouldAutoLink: this.options.shouldAutoLink
      })
    ), t.push(
      VO({
        type: this.type,
        editor: this.editor,
        openOnClick: this.options.openOnClick === "whenNotEditable" ? !0 : this.options.openOnClick,
        enableClickSelection: this.options.enableClickSelection
      })
    ), this.options.linkOnPaste && t.push(
      $O({
        editor: this.editor,
        defaultProtocol: this.options.defaultProtocol,
        type: this.type,
        shouldAutoLink: this.options.shouldAutoLink
      })
    ), t;
  }
});
function o1(t, e) {
  let n = [];
  return t.includes("hrefRules") && (n = W(() => e.hrefRules ? Array.isArray(e.hrefRules) ? e.hrefRules : typeof e.hrefRules == "string" && e.hrefRules.startsWith("[") && e.hrefRules.endsWith("]") ? new Function(`return ${e.hrefRules}`)() : e.hrefRules : [])), {
    evalHrefRules: n
  };
}
const FO = { class: "headline" }, UO = /* @__PURE__ */ te({
  __name: "LinkDialog",
  props: {
    value: { default: void 0 },
    target: { default: "_blank" },
    rel: { default: void 0 },
    editor: {},
    destroy: { type: Function, default: void 0 },
    hrefRules: { default: "" }
  },
  setup(t) {
    const e = t, { t: n } = Ut(), r = () => ({
      href: "",
      target: "_blank",
      rel: ""
    }), i = Y(r()), o = Y(), { evalHrefRules: s } = o1(["hrefRules"], e), l = Y(!1), a = W(() => {
      const { href: u, target: f, rel: h } = i.value;
      return u ? e.value === u && e.target === f && e.rel === h : !0;
    });
    async function c() {
      const { valid: u } = await o.value.validate();
      if (!u) return;
      const { href: f, target: h, rel: p } = i.value;
      f && e.editor.chain().focus().extendMarkRange("link").setLink({ href: f, target: h, rel: p }).run(), d();
    }
    function d() {
      l.value = !1, i.value = r(), setTimeout(() => e.destroy?.(), 300);
    }
    return _t(l, (u) => {
      u && (console.log("props", e), i.value = {
        href: e.value,
        target: e.target,
        rel: e.rel
      });
    }), (u, f) => {
      const h = yi, p = un, m = yr, g = gr, y = If("vx-field"), b = rs, w = mi, v = Sa, x = ns, k = mr, S = xa;
      return R(), U(S, {
        modelValue: l.value,
        "onUpdate:modelValue": f[4] || (f[4] = (C) => l.value = C),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": d
      }, {
        default: L(() => [
          H(k, null, {
            default: L(() => [
              H(g, {
                class: "px-6",
                density: "compact"
              }, {
                default: L(() => [
                  De("span", FO, Ae(T(n)("editor.link.dialog.title")), 1),
                  H(h),
                  H(m, {
                    class: "mx-0",
                    icon: "",
                    onClick: d
                  }, {
                    default: L(() => [
                      H(p, {
                        icon: T(ue)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              H(x, {
                ref_key: "form",
                ref: o,
                onSubmit: f[3] || (f[3] = _f((C) => c(), ["prevent"]))
              }, {
                default: L(() => [
                  H(w, null, {
                    default: L(() => [
                      H(y, {
                        modelValue: i.value.href,
                        "onUpdate:modelValue": f[0] || (f[0] = (C) => i.value.href = C),
                        rules: T(s),
                        label: T(n)("editor.link.dialog.link"),
                        autofocus: ""
                      }, null, 8, ["modelValue", "rules", "label"]),
                      H(y, {
                        modelValue: i.value.rel,
                        "onUpdate:modelValue": f[1] || (f[1] = (C) => i.value.rel = C),
                        label: T(n)("editor.link.dialog.rel"),
                        "hide-details": ""
                      }, null, 8, ["modelValue", "label"]),
                      H(b, {
                        modelValue: i.value.target,
                        "onUpdate:modelValue": f[2] || (f[2] = (C) => i.value.target = C),
                        label: T(n)("editor.link.dialog.openInNewTab"),
                        color: "primary",
                        "false-value": "_self",
                        "true-value": "_blank",
                        "hide-details": ""
                      }, null, 8, ["modelValue", "label"])
                    ]),
                    _: 1
                  }),
                  H(v, null, {
                    default: L(() => [
                      H(m, {
                        disabled: a.value,
                        type: "submit",
                        class: "ml-auto"
                      }, {
                        default: L(() => [
                          Dt(Ae(T(n)("editor.link.dialog.button.apply")), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 512)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), WO = /* @__PURE__ */ te({
  __name: "LinkActionButton",
  props: {
    editor: {},
    icon: { default: void 0 },
    tooltip: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    color: { default: void 0 },
    action: { type: Function, default: void 0 },
    isActive: { type: Function, default: void 0 },
    hrefRules: { default: "" }
  },
  setup(t) {
    const e = t, n = Y({
      href: void 0,
      target: void 0,
      rel: void 0
    });
    function r() {
      const { href: i, target: o, rel: s } = e.editor.getAttributes("link");
      n.value = {
        href: i,
        target: o,
        rel: s
      };
    }
    return (i, o) => (R(), U(ee, {
      icon: i.icon,
      tooltip: i.tooltip,
      disabled: i.disabled,
      color: i.color,
      "is-active": i.isActive,
      action: r
    }, {
      default: L(() => [
        H(Sc, null, {
          default: L(() => [
            ut(i.$slots, "dialog", {
              props: { editor: i.editor, value: n.value.href, hrefRules: e.hrefRules, ...n.value }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["icon", "tooltip", "disabled", "color", "is-active"]));
  }
}), iR = /* @__PURE__ */ BO.extend({
  addAttributes() {
    return Me(
      this.parent?.(),
      "link",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      openOnClick: !1,
      hrefRules: '[value => !/^http:\\/\\//.test(value) || "URL should not start with http://"]',
      dialogComponent: () => UO,
      button: ({ editor: t, extension: e, t: n }) => {
        const { dialogComponent: r, hrefRules: i } = e.options;
        return {
          component: WO,
          componentProps: {
            hrefRules: i,
            isActive: () => t.isActive("link") || !1,
            disabled: !t.can().setLink({ href: "" }),
            icon: "link",
            tooltip: n("editor.link.tooltip")
          },
          componentSlots: {
            dialog: r()
          }
        };
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.parent?.() || [],
      new re({
        props: {
          handleClick(t, e) {
            const { schema: n, doc: r, tr: i } = t.state, o = hs(r.resolve(e), n.marks.link);
            if (!o) return !1;
            const s = r.resolve(o.from), l = r.resolve(o.to), a = i.setSelection(
              new N(s, l)
            );
            return t.dispatch(a), !0;
          }
        }
      })
    ];
  }
}), oR = /* @__PURE__ */ J.create({
  name: "markdownTheme",
  addOptions() {
    return {
      ...this.parent?.(),
      markdownThemes: Jd,
      button: ({ editor: t, extension: e, t: n }) => {
        const { state: r } = vs(), o = [...Jd, ...e.options.markdownThemes].map((s) => ({
          title: n(s.title),
          isActive: () => r.defaultMarkdownTheme === s.value,
          action: () => {
            r.defaultMarkdownTheme = s.value;
          },
          divider: s.divider ?? !1,
          default: s.default ?? !1
        }));
        return {
          component: Ai,
          componentProps: {
            icon: "markdownTheme",
            tooltip: n("editor.markdownTheme.tooltip"),
            items: o
          }
        };
      }
    };
  }
}), sR = /* @__PURE__ */ Dg.extend({
  addAttributes() {
    return Me(
      this.parent?.(),
      "orderedList",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: ee,
        componentProps: {
          action: () => t.chain().focus().toggleOrderedList().run(),
          isActive: () => t.isActive("orderedList") || !1,
          disabled: !t.can().toggleOrderedList(),
          icon: "orderedList",
          tooltip: e("editor.orderedlist.tooltip")
        }
      })
    };
  }
});
var jO = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, KO = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, qO = it.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (t) => t.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["s", ne(this.options.HTMLAttributes, t), 0];
  },
  markdownTokenName: "del",
  parseMarkdown: (t, e) => e.applyMark("strike", e.parseInline(t.tokens || [])),
  renderMarkdown: (t, e) => `~~${e.renderChildren(t)}~~`,
  addCommands() {
    return {
      setStrike: () => ({ commands: t }) => t.setMark(this.name),
      toggleStrike: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetStrike: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      dn({
        find: jO,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      zt({
        find: KO,
        type: this.type
      })
    ];
  }
});
const lR = /* @__PURE__ */ qO.extend({
  addAttributes() {
    return Me(
      this.parent?.(),
      "strike",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: ee,
        componentProps: {
          action: () => t.chain().focus().toggleStrike().run(),
          isActive: () => t.isActive("strike") || !1,
          disabled: !t.can().toggleStrike(),
          icon: "strike",
          tooltip: e("editor.strike.tooltip")
        }
      })
    };
  }
});
var GO = it.create({
  name: "subscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sub"
      },
      {
        style: "vertical-align",
        getAttrs(t) {
          return t !== "sub" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["sub", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setSubscript: () => ({ commands: t }) => t.setMark(this.name),
      toggleSubscript: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetSubscript: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-,": () => this.editor.commands.toggleSubscript()
    };
  }
}), JO = it.create({
  name: "superscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sup"
      },
      {
        style: "vertical-align",
        getAttrs(t) {
          return t !== "super" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["sup", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setSuperscript: () => ({ commands: t }) => t.setMark(this.name),
      toggleSuperscript: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetSuperscript: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-.": () => this.editor.commands.toggleSuperscript()
    };
  }
});
const aR = /* @__PURE__ */ J.create({
  name: "subAndSuperScript",
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, extension: e, t: n }) => {
        const r = e.options.subscript, i = e.options.superscript, o = {
          component: ee,
          componentProps: {
            action: () => t.chain().focus().toggleSubscript().run(),
            isActive: () => t.isActive("subscript") || !1,
            disabled: !t.can().toggleSubscript(),
            icon: "subscript",
            tooltip: n("editor.subscript.tooltip")
          }
        }, s = {
          component: ee,
          componentProps: {
            action: () => t.chain().focus().toggleSuperscript().run(),
            isActive: () => t.isActive("superscript") || !1,
            disabled: !t.can().toggleSuperscript(),
            icon: "superscript",
            tooltip: n("editor.superscript.tooltip")
          }
        }, l = [];
        return r !== !1 && l.push(o), i !== !1 && l.push(s), l;
      }
    };
  },
  addExtensions() {
    const t = [];
    return this.options.subscript !== !1 && t.push(GO.configure(this.options.subscript)), this.options.superscript !== !1 && t.push(JO.configure(this.options.superscript)), t;
  }
});
function es(t) {
  return t === "left" || t === "right" || t === "center" ? t : null;
}
function XO(t) {
  const e = (t.style.textAlign || "").trim().toLowerCase(), n = (t.getAttribute("align") || "").trim().toLowerCase();
  return es(e || n);
}
function ZO(t) {
  return es(t?.align);
}
function s1() {
  return {
    default: null,
    parseHTML: (t) => XO(t),
    renderHTML: (t) => t.align ? {
      style: `text-align: ${t.align}`
    } : {}
  };
}
function YO(t) {
  var e;
  const n = t.parentElement, r = t.closest("table");
  if (!n || !r)
    return null;
  const i = Array.from(n.children).indexOf(t), o = (e = r.querySelectorAll("colgroup > col")[i]) == null ? void 0 : e.getAttribute("width");
  return o ? [parseInt(o, 10)] : null;
}
function l1(t) {
  const e = t.getAttribute("colwidth");
  return e ? e.split(",").map((n) => parseInt(n, 10)) : YO(t);
}
var QO = /[ \t\r\n\f]+/g;
function a1(t) {
  var e;
  return t.children.length > 0 ? !1 : ((e = t.textContent) != null ? e : "").replace(QO, "") === "";
}
function c1(t) {
  const e = t.createAndFill();
  if (!e)
    throw new Error(`[tiptap error]: "${t.name}" has no default content to backfill.`);
  return e.content;
}
var d1 = be.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: l1
      },
      align: s1()
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [
      {
        // Backfill empty cells; non-empty cells fall through to the rule below.
        tag: "td",
        getAttrs: (t) => a1(t) ? {} : !1,
        getContent: (t, e) => c1(e.nodes[this.name])
      },
      { tag: "td" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["td", ne(this.options.HTMLAttributes, t), 0];
  }
}), u1 = be.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: l1
      },
      align: s1()
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [
      {
        // Backfill empty cells; non-empty cells fall through to the rule below.
        tag: "th",
        getAttrs: (t) => a1(t) ? {} : !1,
        getContent: (t, e) => c1(e.nodes[this.name])
      },
      { tag: "th" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["th", ne(this.options.HTMLAttributes, t), 0];
  }
}), f1 = be.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [{ tag: "tr" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["tr", ne(this.options.HTMLAttributes, t), 0];
  }
});
function va(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function Sf(t, e, n, r, i, o) {
  var s;
  let l = 0, a = !0, c = e.firstChild;
  const d = t.firstChild;
  if (d !== null)
    for (let f = 0, h = 0; f < d.childCount; f += 1) {
      const { colspan: p, colwidth: m } = d.child(f).attrs;
      for (let g = 0; g < p; g += 1, h += 1) {
        const y = i === h ? o : m && m[g], b = y ? `${y}px` : "";
        if (l += y || r, y || (a = !1), c) {
          if (c.style.width !== b) {
            const [w, v] = va(r, y);
            c.style.setProperty(w, v);
          }
          c = c.nextSibling;
        } else {
          const w = document.createElement("col"), [v, x] = va(r, y);
          w.style.setProperty(v, x), e.appendChild(w);
        }
      }
    }
  for (; c; ) {
    const f = c.nextSibling;
    (s = c.parentNode) == null || s.removeChild(c), c = f;
  }
  const u = t.attrs.style && typeof t.attrs.style == "string" && /\bwidth\s*:/i.test(t.attrs.style);
  a && !u ? (n.style.width = `${l}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${l}px`);
}
var eH = class {
  constructor(t, e, n, r = {}) {
    this.node = t, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table"));
    for (const [i, o] of Object.entries(r))
      o != null && (i === "style" ? this.table.style.cssText = String(o) : this.table.setAttribute(i, String(o)));
    t.attrs.style && (this.table.style.cssText = t.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Sf(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.type !== this.node.type ? !1 : (this.node = t, Sf(t, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(t) {
    const e = t.target, n = this.dom.contains(e), r = this.contentDOM.contains(e);
    return !!(n && !r && (t.type === "attributes" || t.type === "childList" || t.type === "characterData"));
  }
};
function tH(t, e, n, r) {
  let i = 0, o = !0;
  const s = [], l = t.firstChild;
  if (!l)
    return {};
  for (let u = 0, f = 0; u < l.childCount; u += 1) {
    const { colspan: h, colwidth: p } = l.child(u).attrs;
    for (let m = 0; m < h; m += 1, f += 1) {
      const g = n === f ? r : p && p[m];
      i += g || e, g || (o = !1);
      const [y, b] = va(e, g);
      s.push(["col", { style: `${y}: ${b}` }]);
    }
  }
  const a = o ? `${i}px` : "", c = o ? "" : `${i}px`;
  return { colgroup: ["colgroup", {}, ...s], tableWidth: a, tableMinWidth: c };
}
function Cf(t, e) {
  return t.createAndFill();
}
function nH(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function rH(t, e, n, r, i) {
  const o = nH(t), s = [], l = [];
  for (let c = 0; c < n; c += 1) {
    const d = Cf(o.cell);
    if (d && l.push(d), r) {
      const u = Cf(o.header_cell);
      u && s.push(u);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1)
    a.push(o.row.createChecked(null, r && c === 0 ? s : l));
  return o.table.createChecked(null, a);
}
function iH(t) {
  return t instanceof oe;
}
var Xi = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!iH(e))
    return !1;
  let n = 0;
  const r = si(e.ranges[0].$from, (o) => o.type.name === "table");
  return r?.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
};
function Af(t, e) {
  const n = t.mapping.map(e), r = si(
    t.selection.$from,
    (s) => s.type.name === "table"
  );
  if (r?.pos === n)
    return;
  const i = t.doc.nodeAt(n);
  if (!i)
    return;
  const o = n + i.nodeSize - 1;
  t.setSelection(N.near(t.doc.resolve(o), -1));
}
var oH = "";
function sH(t) {
  let e = "", n = 0;
  for (; n < t.length; ) {
    if (t[n] === "\\" && n + 1 < t.length) {
      e += t[n] + t[n + 1], n += 2;
      continue;
    }
    if (t[n] !== "`") {
      e += t[n++];
      continue;
    }
    let r = 0;
    for (; n + r < t.length && t[n + r] === "`"; ) r += 1;
    let i = n + r, o = !1;
    for (; i < t.length; ) {
      if (t[i] !== "`") {
        i += 1;
        continue;
      }
      let s = 0;
      for (; i + s < t.length && t[i + s] === "`"; ) s += 1;
      if (s === r) {
        const l = t.slice(n + r, i);
        e += t.slice(n, n + r) + l.replace(/\\\||\|/g, (a) => a === "|" ? "\\|" : a) + t.slice(i, i + r), n = i + r, o = !0;
        break;
      }
      i += s;
    }
    o || (e += t.slice(n, n + r), n += r);
  }
  return e;
}
function lH(t) {
  return t.split(`
`).map((e) => !e.includes("|") || !e.includes("`") ? e : sH(e)).join(`
`);
}
function aH(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}
function cH(t, e, n = {}) {
  var r;
  const i = (r = n.cellLineSeparator) != null ? r : oH;
  if (!t || !t.content || t.content.length === 0)
    return "";
  const o = [];
  t.content.forEach((m) => {
    const g = [];
    m.content && m.content.forEach((y) => {
      let b = "";
      y.content && Array.isArray(y.content) && y.content.length > 1 ? b = y.content.map(
        (S) => e.renderChildren(S)
      ).join(i) : b = y.content ? e.renderChildren(y.content) : "";
      const w = aH(
        b.split(i).join(`
`).replace(/[ \t]*\r?\n[ \t]*/g, "<br>")
      ), v = y.type === "tableHeader", x = ZO(y.attrs);
      g.push({ text: w, isHeader: v, align: x });
    }), o.push(g);
  });
  const s = o.reduce((m, g) => Math.max(m, g.length), 0);
  if (s === 0)
    return "";
  const l = Array.from({ length: s }).fill(0);
  o.forEach((m) => {
    var g;
    for (let y = 0; y < s; y += 1) {
      const w = (((g = m[y]) == null ? void 0 : g.text) || "").length;
      w > l[y] && (l[y] = w), l[y] < 3 && (l[y] = 3);
    }
  });
  const a = (m, g) => m + " ".repeat(Math.max(0, g - m.length)), c = o[0], d = c.some((m) => m.isHeader), u = Array.from({
    length: s
  }).fill(null);
  o.forEach((m) => {
    var g;
    for (let y = 0; y < s; y += 1)
      !u[y] && ((g = m[y]) != null && g.align) && (u[y] = m[y].align);
  });
  let f = `
`;
  const h = Array.from({ length: s }).map(
    (m, g) => d && c[g] && c[g].text || ""
  );
  return f += `| ${h.map((m, g) => a(m, l[g])).join(" | ")} |
`, f += `| ${l.map((m, g) => {
    const y = Math.max(3, m), b = u[g];
    return b === "left" ? `:${"-".repeat(y)}` : b === "right" ? `${"-".repeat(y)}:` : b === "center" ? `:${"-".repeat(y)}:` : "-".repeat(y);
  }).join(" | ")} |
`, (d ? o.slice(1) : o).forEach((m) => {
    f += `| ${Array.from({ length: s }).fill(0).map((g, y) => a(m[y] && m[y].text || "", l[y])).join(" | ")} |
`;
  }), f;
}
var dH = cH, h1 = be.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      renderWrapper: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: eH,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    const { colgroup: n, tableWidth: r, tableMinWidth: i } = tH(t, this.options.cellMinWidth), o = e.style;
    function s() {
      return o || (r ? `width: ${r}` : `min-width: ${i}`);
    }
    const l = [
      "table",
      ne(this.options.HTMLAttributes, e, {
        style: s()
      }),
      n,
      ["tbody", 0]
    ];
    return this.options.renderWrapper ? ["div", { class: "tableWrapper" }, l] : l;
  },
  parseMarkdown: (t, e) => {
    const n = [], r = Array.isArray(t.align) ? t.align : [];
    if (t.header) {
      const i = [];
      t.header.forEach((o, s) => {
        var l;
        const a = es((l = r[s]) != null ? l : o.align), c = a ? { align: a } : {};
        i.push(
          e.createNode("tableHeader", c, [
            { type: "paragraph", content: e.parseInline(o.tokens) }
          ])
        );
      }), n.push(e.createNode("tableRow", {}, i));
    }
    return t.rows && t.rows.forEach((i) => {
      const o = [];
      i.forEach((s, l) => {
        var a;
        const c = es((a = r[l]) != null ? a : s.align), d = c ? { align: c } : {};
        o.push(
          e.createNode("tableCell", d, [
            { type: "paragraph", content: e.parseInline(s.tokens) }
          ])
        );
      }), n.push(e.createNode("tableRow", {}, o));
    }), e.createNode("table", void 0, n);
  },
  renderMarkdown: (t, e) => dH(t, e),
  markdownTokenizer: {
    name: "table",
    level: "block",
    start: (t) => {
      const e = t.split(`
`);
      if (e.length < 2) return -1;
      const n = e[1];
      return !/^[ \t|:]*-[ \t|:-]*$/.test(n) || !n.includes("|") ? -1 : e[0].includes("|") ? 0 : -1;
    },
    tokenize(t, e, n) {
      const r = t.indexOf(`

`), i = r >= 0 ? t.slice(0, r) : t, o = i.split(`
`);
      if (o.length < 2) return;
      const s = o[1];
      if (!/^[ \t|:]*-[ \t|:-]*$/.test(s) || !s.includes("|")) return;
      const l = lH(i);
      if (l === i) return;
      const c = n.blockTokens(l)[0];
      if (c?.type !== "table" || !c.raw) return;
      const d = c.raw.split(`
`).length, u = t.split(`
`).slice(0, d).join(`
`);
      return { ...c, raw: u };
    }
  },
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: i, editor: o }) => {
        const s = rH(o.schema, t, e, n);
        if (i) {
          const l = r.selection.from + 1;
          r.replaceSelectionWith(s).scrollIntoView().setSelection(N.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => ST(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => CT(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => {
        const n = si(
          t.selection.$from,
          (r) => r.type.name === "table"
        );
        return TT(
          t,
          e && ((r) => {
            n && Af(r, n.pos), e(r);
          })
        );
      },
      addRowBefore: () => ({ state: t, dispatch: e }) => ET(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => LT(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => {
        const n = si(
          t.selection.$from,
          (r) => r.type.name === "table"
        );
        return HT(
          t,
          e && ((r) => {
            n && Af(r, n.pos), e(r);
          })
        );
      },
      deleteTable: () => ({ state: t, dispatch: e }) => PT(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => Du(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => Pu(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => fi("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => fi("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => _T(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => Du(t, e) ? !0 : Pu(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => NT(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => $u(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => $u(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && lg(t), !0),
      setCellSelection: (t) => ({ tr: e, dispatch: n }) => {
        if (n) {
          const r = oe.create(e.doc, t.anchorCell, t.headCell);
          e.setSelection(r);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: Xi,
      "Mod-Backspace": Xi,
      Delete: Xi,
      "Mod-Delete": Xi
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        GT({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      iM({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  addNodeView() {
    const t = this.options.resizable && this.editor.isEditable, e = this.options.View;
    return t || !e ? null : ({ node: n, view: r, HTMLAttributes: i }) => {
      const o = ne(this.options.HTMLAttributes, i);
      return new e(n, this.options.cellMinWidth, r, o);
    };
  },
  extendNodeSchema(t) {
    const e = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      tableRole: Q(D(t, "tableRole", e))
    };
  }
});
J.create({
  name: "tableKit",
  addExtensions() {
    const t = [];
    return this.options.table !== !1 && t.push(h1.configure(this.options.table)), this.options.tableCell !== !1 && t.push(d1.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(u1.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(f1.configure(this.options.tableRow)), t;
  }
});
const uH = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, fH = /CrOS/, hH = /android|ipad|playbook|silk/i;
function Tf(t = {}) {
  let e = t.ua || typeof navigator < "u" && navigator.userAgent;
  return e && typeof e == "object" && e.headers && typeof e.headers["user-agent"] == "string" && (e = e.headers["user-agent"]), typeof e != "string" ? !1 : !!(uH.test(e) && !fH.test(e) || t.tablet && hH.test(e) || t.tablet && t.featureDetect && navigator && navigator.maxTouchPoints > 1 && e.includes("Macintosh") && e.includes("Safari"));
}
const pH = ["onMouseover", "onMousedown"], mH = /* @__PURE__ */ te({
  __name: "CreateTablePopover",
  emits: ["create-table"],
  setup(t, { emit: e }) {
    const n = e, { t: r } = Ut(), i = Y(!1), o = Y(!0), s = Jr({
      rows: Tf() ? Ii : Ni,
      cols: Tf() ? Ii : Ni
    }), l = Jr({
      rows: _i,
      cols: _i
    });
    function a(u, f) {
      u === s.rows && (s.rows = Math.min(u + 1, Ii)), f === s.cols && (s.cols = Math.min(f + 1, Ii)), l.rows = u, l.cols = f;
    }
    function c(u, f) {
      n("create-table", { rows: u, cols: f, withHeaderRow: T(o) }), d();
    }
    function d() {
      i.value = !1, o.value = !0, s.rows = Ni, s.cols = Ni, l.rows = _i, l.cols = _i;
    }
    return (u, f) => {
      const h = rs, p = mi, m = C1, g = mr, y = ts;
      return R(), U(y, {
        modelValue: i.value,
        "onUpdate:modelValue": f[1] || (f[1] = (b) => i.value = b),
        location: "end bottom",
        "open-on-click": "",
        "open-on-hover": "",
        "close-on-content-click": !1,
        activator: "parent"
      }, {
        default: L(() => [
          H(g, {
            density: "compact",
            class: "table-grid-size-editor"
          }, {
            default: L(() => [
              H(p, { class: "pa-2 pb-0" }, {
                default: L(() => [
                  H(h, {
                    modelValue: o.value,
                    "onUpdate:modelValue": f[0] || (f[0] = (b) => o.value = b),
                    density: "compact",
                    "hide-details": "",
                    label: T(r)("editor.table.menu.insert_table.with_header_row")
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }),
              H(p, { class: "d-flex flex-column flex-wrap justify-space-between pa-2" }, {
                default: L(() => [
                  (R(!0), de(Le, null, Ze(s.rows, (b) => (R(), de("div", {
                    key: "r" + b,
                    class: "d-flex"
                  }, [
                    (R(!0), de(Le, null, Ze(s.cols, (w) => (R(), de("div", {
                      key: "c" + w,
                      class: dt([{
                        "table-grid-size-editor__cell--selected": w <= l.cols && b <= l.rows
                      }, "pa-1"]),
                      onMouseover: (v) => a(b, w),
                      onMousedown: (v) => c(b, w)
                    }, [...f[2] || (f[2] = [
                      De("div", { class: "table-grid-size-editor__cell__inner" }, null, -1)
                    ])], 42, pH))), 128))
                  ]))), 128))
                ]),
                _: 1
              }),
              H(m, { class: "pt-0 pb-2" }, {
                default: L(() => [
                  Dt(Ae(l.rows) + " x " + Ae(l.cols), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), gH = /* @__PURE__ */ te({
  __name: "TableMenu",
  props: {
    editor: {},
    activator: { default: void 0 }
  },
  setup(t) {
    const e = t, { t: n } = Ut(), r = Y(!1), i = W(() => {
      const l = !e.editor.isActive("table");
      return [
        {
          type: "item",
          key: "insert-table",
          title: T(n)("editor.table.menu.insert_table"),
          icon: ue("tablePlus")
        },
        {
          type: "divider"
        },
        {
          type: "item",
          key: "add-column-before",
          title: T(n)("editor.table.menu.add_column_before"),
          icon: ue("tableColumnPlusBefore"),
          disabled: l
        },
        {
          type: "item",
          key: "add-column-after",
          title: T(n)("editor.table.menu.add_column_after"),
          icon: ue("tableColumnPlusAfter"),
          disabled: l
        },
        {
          type: "item",
          key: "delete-column",
          title: T(n)("editor.table.menu.delete_column"),
          icon: ue("tableColumnRemove"),
          disabled: l
        },
        {
          type: "divider"
        },
        {
          type: "item",
          key: "add-row-before",
          title: T(n)("editor.table.menu.add_row_before"),
          icon: ue("tableRowPlusBefore"),
          disabled: l
        },
        {
          type: "item",
          key: "add-row-after",
          title: T(n)("editor.table.menu.add_row_after"),
          icon: ue("tableRowPlusAfter"),
          disabled: l
        },
        {
          type: "item",
          key: "delete-row",
          title: T(n)("editor.table.menu.delete_row"),
          icon: ue("tableRowRemove"),
          disabled: l
        },
        {
          type: "divider"
        },
        {
          type: "item",
          key: "merge-or-split-cells",
          title: T(n)("editor.table.menu.merge_or_split_cells"),
          icon: ue("tableMergeCells"),
          disabled: l
        },
        {
          type: "divider"
        },
        {
          type: "item",
          key: "delete-table",
          title: T(n)("editor.table.menu.delete_table"),
          icon: ue("tableRemove"),
          disabled: l
        }
      ];
    });
    function o(l, a) {
      if (!l) return;
      const { editor: c } = e;
      ({
        "insert-table": () => c.chain().focus().insertTable({ ...a }).run(),
        "add-column-before": () => c.chain().focus().addColumnBefore().run(),
        "add-column-after": () => c.chain().focus().addColumnAfter().run(),
        "delete-column": () => c.chain().focus().deleteColumn().run(),
        "add-row-before": () => c.chain().focus().addRowBefore().run(),
        "add-row-after": () => c.chain().focus().addRowAfter().run(),
        "delete-row": () => c.chain().focus().deleteRow().run(),
        "merge-or-split-cells": () => c.chain().focus().mergeOrSplit().run(),
        "delete-table": () => c.chain().focus().deleteTable().run()
      })[l]?.();
    }
    function s(l) {
      o("insert-table", l), r.value = !1;
    }
    return (l, a) => {
      const c = un, d = Of, u = Lf, f = gi, h = wa, p = ts;
      return R(), U(p, {
        modelValue: r.value,
        "onUpdate:modelValue": a[0] || (a[0] = (m) => r.value = m),
        activator: "parent"
      }, {
        default: L(() => [
          H(h, { density: "compact" }, {
            default: L(() => [
              (R(!0), de(Le, null, Ze(i.value, (m, g) => (R(), de(Le, null, [
                m.key === "insert-table" ? (R(), U(u, {
                  key: g,
                  disabled: m.disabled
                }, {
                  prepend: L(() => [
                    H(c, {
                      icon: m.icon
                    }, null, 8, ["icon"])
                  ]),
                  default: L(() => [
                    H(d, null, {
                      default: L(() => [
                        Dt(Ae(m.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    m.key === "insert-table" ? (R(), U(mH, {
                      key: g,
                      onCreateTable: s
                    })) : $e("", !0)
                  ]),
                  _: 2
                }, 1032, ["disabled"])) : m.type === "item" ? (R(), U(u, {
                  key: "item-" + g,
                  disabled: m.disabled,
                  onClick: (y) => o(m.key)
                }, {
                  prepend: L(() => [
                    H(c, {
                      icon: m.icon
                    }, null, 8, ["icon"])
                  ]),
                  default: L(() => [
                    H(d, null, {
                      default: L(() => [
                        Dt(Ae(m.title), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"])) : (R(), U(f, {
                  key: "divider-" + g
                }))
              ], 64))), 256))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), yH = /* @__PURE__ */ te({
  __name: "TableActionButton",
  props: {
    editor: {},
    icon: { default: void 0 },
    tooltip: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    color: { default: void 0 },
    action: { type: Function, default: void 0 },
    isActive: { type: Function, default: void 0 }
  },
  setup(t) {
    return (e, n) => (R(), U(ee, {
      icon: e.icon,
      tooltip: e.tooltip,
      disabled: e.disabled,
      color: e.color,
      action: e.action,
      "is-active": e.isActive
    }, {
      default: L(() => [
        H(gH, {
          editor: e.editor,
          activator: "parent"
        }, null, 8, ["editor"])
      ]),
      _: 1
    }, 8, ["icon", "tooltip", "disabled", "color", "action", "is-active"]));
  }
}), cR = /* @__PURE__ */ h1.extend({
  addAttributes() {
    return Me(
      this.parent?.(),
      "table",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {
        class: "table-wrapper"
      },
      button: ({ editor: t, t: e }) => ({
        component: yH,
        componentProps: {
          isActive: () => t.isActive("table") || !1,
          disabled: !t.can().insertTable(),
          icon: "table",
          tooltip: e("editor.table.tooltip")
        }
      })
    };
  },
  addExtensions() {
    return [
      f1.configure(this.options.tableRow),
      u1.configure(this.options.tableHeader),
      d1.configure(this.options.tableCell)
    ];
  }
}), dR = /* @__PURE__ */ zg.extend({
  addAttributes() {
    return Me(
      this.parent?.(),
      "taskList",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {
        class: "task-list"
      },
      taskItem: {
        HTMLAttributes: {
          class: "task-list-item"
        }
      },
      button: ({ editor: t, t: e }) => ({
        component: ee,
        componentProps: {
          action: () => t.chain().focus().toggleTaskList().run(),
          isActive: () => t.isActive("taskList") || !1,
          disabled: !t.can().toggleTaskList(),
          icon: "taskList",
          tooltip: e("editor.tasklist.tooltip")
        }
      })
    };
  },
  addExtensions() {
    return [Pg.configure(this.options.taskItem)];
  }
});
var bH = J.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: null
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (t) => {
              const e = t.style.textAlign;
              return this.options.alignments.includes(e) ? e : this.options.defaultAlignment;
            },
            renderHTML: (t) => t.textAlign ? { style: `text-align: ${t.textAlign}` } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (t) => ({ commands: e }) => this.options.alignments.includes(t) ? this.options.types.map((n) => e.updateAttributes(n, { textAlign: t })).some((n) => n) : !1,
      unsetTextAlign: () => ({ commands: t }) => this.options.types.map((e) => t.resetAttributes(e, "textAlign")).some((e) => e),
      toggleTextAlign: (t) => ({ editor: e, commands: n }) => this.options.alignments.includes(t) ? e.isActive({ textAlign: t }) ? n.unsetTextAlign() : n.setTextAlign(t) : !1
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
    };
  }
});
const uR = /* @__PURE__ */ bH.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      types: ["heading", "paragraph", "image"],
      button: ({ editor: t, extension: e, t: n }) => {
        const i = (e.options?.alignments || []).map((s) => ({
          title: n(`editor.textalign.${s}.tooltip`),
          icon: s,
          isActive: () => t.isActive({ textAlign: s }) || !1,
          action: () => t.chain().focus().setTextAlign(s).run(),
          disabled: !t.can().setTextAlign(s)
        })), o = i.filter((s) => s.disabled).length === i.length;
        return {
          component: Ai,
          componentProps: {
            icon: "center",
            tooltip: n("editor.textalign.tooltip"),
            disabled: o,
            items: i
          }
        };
      }
    };
  }
});
var vH = it.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (t) => t.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["u", ne(this.options.HTMLAttributes, t), 0];
  },
  parseMarkdown(t, e) {
    return e.applyMark(this.name || "underline", e.parseInline(t.tokens || []));
  },
  renderMarkdown(t, e) {
    return `++${e.renderChildren(t)}++`;
  },
  markdownTokenizer: {
    name: "underline",
    level: "inline",
    start(t) {
      return t.indexOf("++");
    },
    tokenize(t, e, n) {
      const i = /^(\+\+)([\s\S]+?)(\+\+)/.exec(t);
      if (!i)
        return;
      const o = i[2].trim();
      return {
        type: "underline",
        raw: i[0],
        text: o,
        tokens: n.inlineTokens(o)
      };
    }
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: t }) => t.setMark(this.name),
      toggleUnderline: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetUnderline: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
});
const fR = /* @__PURE__ */ vH.extend({
  addAttributes() {
    return Me(
      this.parent?.(),
      "underline",
      this.options.allowedAttributes
    );
  },
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: ee,
        componentProps: {
          action: () => t.chain().focus().toggleUnderline().run(),
          isActive: () => t.isActive("underline") || !1,
          disabled: !t.can().toggleUnderline(),
          icon: "underline",
          tooltip: e("editor.underline.tooltip")
        }
      })
    };
  }
}), wH = { class: "headline" }, kH = /* @__PURE__ */ te({
  __name: "VideoDialog",
  props: {
    value: { default: void 0 },
    editor: {},
    destroy: { type: Function, default: void 0 },
    hrefRules: { default: "" }
  },
  setup(t) {
    const e = t, { t: n } = Ut(), r = Y(""), i = Y(!1), o = Y(), { evalHrefRules: s } = o1(["hrefRules"], e), l = W(() => e.value === r.value || !T(r));
    async function a() {
      const { valid: d } = await o.value.validate();
      d && (T(r) && e.editor.chain().focus().setVideo({ src: r.value }).run(), c());
    }
    function c() {
      i.value = !1, r.value = "", setTimeout(() => e.destroy?.(), 300);
    }
    return $n(() => {
      e.value && (r.value = e.value);
    }), (d, u) => {
      const f = yi, h = un, p = yr, m = gr, g = If("vx-field"), y = mi, b = Sa, w = ns, v = mr, x = xa;
      return R(), U(x, {
        modelValue: i.value,
        "onUpdate:modelValue": u[1] || (u[1] = (k) => i.value = k),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": c
      }, {
        default: L(() => [
          H(v, null, {
            default: L(() => [
              H(m, {
                class: "px-6",
                density: "compact"
              }, {
                default: L(() => [
                  De("span", wH, Ae(T(n)("editor.video.dialog.title")), 1),
                  H(f),
                  H(p, {
                    class: "mx-0",
                    icon: "",
                    onClick: c
                  }, {
                    default: L(() => [
                      H(h, {
                        icon: T(ue)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              H(w, {
                ref_key: "form",
                ref: o,
                onSubmit: _f(a, ["prevent"])
              }, {
                default: L(() => [
                  H(y, null, {
                    default: L(() => [
                      H(g, {
                        modelValue: r.value,
                        "onUpdate:modelValue": u[0] || (u[0] = (k) => r.value = k),
                        rules: T(s),
                        label: T(n)("editor.video.dialog.link"),
                        autofocus: ""
                      }, null, 8, ["modelValue", "rules", "label"])
                    ]),
                    _: 1
                  }),
                  H(b, null, {
                    default: L(() => [
                      H(p, {
                        disabled: l.value,
                        type: "submit",
                        class: "ml-auto"
                      }, {
                        default: L(() => [
                          Dt(Ae(T(n)("editor.video.dialog.button.apply")), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 512)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), p1 = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e)
    n[r] = i;
  return n;
}, xH = {}, SH = { style: { display: "flex", "align-items": "center", "justify-content": "center", background: "rgb(221 221 221)" } };
function CH(t, e) {
  return R(), de("div", SH, [...e[0] || (e[0] = [
    De("svg", {
      t: "1738756119280",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "4198",
      width: "200",
      height: "200"
    }, [
      De("path", {
        d: "M757.333333 554.666667a202.666667 202.666667 0 1 1 0 405.333333 202.666667 202.666667 0 0 1 0-405.333333zM789.333333 106.666667a128 128 0 0 1 128 128v304.064a254.72 254.72 0 0 0-141.013333-47.936L768 490.666667h-21.333333c-56.362667 0-108.458667 18.218667-150.741334 49.066666l-143.957333-87.296-2.474667-1.365333a30.549333 30.549333 0 0 0-39.829333 12.330667 31.936 31.936 0 0 0-4.16 12.714666l-0.170667 3.370667v235.690667l0.106667 2.709333A31.125333 31.125333 0 0 0 436.202667 746.666667c4.437333 0 8.810667-0.981333 12.842666-2.858667l2.922667-1.557333 40.32-24.490667c-0.725333 6.336-1.194667 12.736-1.429333 19.2L490.666667 746.666667v21.333333c0 55.744 17.813333 107.306667 48.064 149.333333H234.666667a128 128 0 0 1-128-128V234.666667a128 128 0 0 1 128-128h554.666666z m-32 725.333333a32 32 0 1 0 0 64 32 32 0 0 0 0-64z m0-213.333333a32 32 0 0 0-31.850666 28.928L725.333333 650.666667v106.666666a32 32 0 0 0 63.850667 3.072L789.333333 757.333333v-106.666666a32 32 0 0 0-32-32zM241.578667 170.666667H234.666667a64 64 0 0 0-63.893334 60.245333L170.666667 234.666667v42.666666h132.501333l-61.589333-106.666666zM789.333333 170.666667h-89.92l61.589334 106.666666H853.333333v-42.666666a64 64 0 0 0-60.245333-63.893334L789.333333 170.666667z m-163.818666 0h-118.058667l61.589333 106.666666h118.058667l-61.589333-106.666666z m-191.957334 0h-118.058666l61.589333 106.666666h118.058667l-61.589334-106.666666z",
        fill: "#cccccc",
        "p-id": "4199"
      })
    ], -1)
  ])]);
}
const AH = /* @__PURE__ */ p1(xH, [["render", CH]]), TH = { class: "iframe-container" }, MH = ["src", "width", "height", "frameborder", "allowfullscreen"], EH = /* @__PURE__ */ te({
  __name: "VideoNodeView",
  props: sm,
  setup(t) {
    const e = t, n = Y(!1), r = Y(null), i = (o) => {
      console.error("Video iframe error:", o), n.value = !0;
    };
    return (o, s) => (R(), U(T(om), {
      class: "iframe-wrapper",
      "data-video": ""
    }, {
      default: L(() => [
        De("div", {
          style: tr(`position: relative; overflow: hidden; display: flex; flex: 1; max-width: ${e.HTMLAttributes.width};`)
        }, [
          s[0] || (s[0] = De("div", { style: `flex: 1; padding-bottom: ${9 / 16 * 100}%;` }, null, -1)),
          De("div", TH, [
            n.value || !e.HTMLAttributes.src ? (R(), U(AH, {
              key: 0,
              style: { position: "absolute", top: "0", left: "0", width: "100%", height: "100%" },
              message: "Video loading failed. Please check the URL or permissions."
            })) : n.value ? $e("", !0) : (R(), de("iframe", {
              key: 1,
              ref_key: "iframeRef",
              ref: r,
              src: e.HTMLAttributes.src,
              width: e.HTMLAttributes.width,
              height: e.HTMLAttributes.height,
              frameborder: e.HTMLAttributes.frameborder,
              allowfullscreen: e.HTMLAttributes.allowfullscreen,
              style: { position: "absolute", top: "0", left: "0", width: "100%", height: "100%" },
              onError: i
            }, null, 40, MH))
          ])
        ], 4)
      ]),
      _: 1
    }));
  }
}), LH = /* @__PURE__ */ p1(EH, [["__scopeId", "data-v-fd153073"]]), OH = /* @__PURE__ */ te({
  __name: "VideoActionButton",
  props: {
    editor: {},
    hrefRules: { default: "" },
    icon: { default: void 0 },
    tooltip: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    color: { default: void 0 },
    action: { type: Function, default: void 0 },
    isActive: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, n = Y(void 0);
    function r() {
      const { src: i } = e.editor.getAttributes("video");
      n.value = i;
    }
    return (i, o) => (R(), U(ee, {
      icon: i.icon,
      tooltip: i.tooltip,
      disabled: i.disabled,
      color: i.color,
      "is-active": i.isActive,
      action: r
    }, {
      default: L(() => [
        H(Sc, null, {
          default: L(() => [
            ut(i.$slots, "dialog", {
              props: { editor: i.editor, hrefRules: e.hrefRules, value: n.value }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["icon", "tooltip", "disabled", "color", "is-active"]));
  }
});
function HH(t) {
  return t = String(t), t = t.replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/"), t = t.replace("https://vimeo.com/", "https://player.vimeo.com/video/"), /^https?:\/\/www\.bilibili\.com\/video\/.*/i.test(t) && (t = t.replace(/\?.*$/i, "").replace(
    "https://www.bilibili.com/video/",
    "https://player.bilibili.com/player.html?bvid="
  )), t.includes("drive.google.com") && (t = t.replace("/view", "/preview")), t;
}
const hR = /* @__PURE__ */ be.create({
  name: "video",
  group: "block",
  atom: !0,
  draggable: !0,
  addAttributes() {
    return {
      ...Me(
        this.parent?.(),
        "video",
        this.options.allowedAttributes
      ),
      src: {
        default: null,
        renderHTML: ({ src: t }) => ({
          src: t ? HH(t) : null
        })
      },
      width: {
        default: this.options.width,
        renderHTML: ({ width: t }) => ({
          width: $r(t)
        })
      },
      frameborder: {
        default: this.options.frameborder ? 1 : 0,
        parseHTML: () => this.options.frameborder ? 1 : 0
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-video] iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    const { width: e = "100%" } = t ?? {};
    return [
      "div",
      { "data-video": "" },
      [
        "iframe",
        {
          ...t,
          width: "100%",
          height: "100%"
        }
      ]
    ];
  },
  addNodeView() {
    return lm(LH);
  },
  addCommands() {
    return {
      setVideo: (t) => ({ commands: e }) => (console.log("Inserting video with options:", t), e.insertContent({
        type: this.name,
        attrs: t
      })),
      updateVideo: (t) => ({ commands: e }) => (console.log("Updating video with options:", t), e.updateAttributes(this.name, t))
    };
  },
  addOptions() {
    return {
      divider: !1,
      spacer: !1,
      allowFullscreen: !0,
      frameborder: !1,
      width: wo["size-medium"],
      hrefRules: '[value => !/^http:\\/\\//.test(value) || "URL should not start with http://"]',
      HTMLAttributes: {
        class: "iframe-wrapper",
        style: "display: flex;justify-content: center;"
      },
      dialogComponent: () => kH,
      button: ({ editor: t, extension: e, t: n }) => {
        const { dialogComponent: r, hrefRules: i } = e.options;
        return {
          component: OH,
          componentProps: {
            hrefRules: i,
            isActive: () => t.isActive("video") || !1,
            icon: "video",
            tooltip: n("editor.video.tooltip")
          },
          componentSlots: {
            dialog: r()
          },
          disabled: !t.can().setVideo({})
        };
      }
    };
  }
}), pR = (t) => (n) => {
  const { lang: r, markdownTheme: i, components: o = {}, extensions: s } = t || {};
  r && Ql.setLang(r), Object.keys(o).forEach((l) => n.component(l, o[l])), uk({
    defaultLang: r,
    defaultMarkdownTheme: i,
    extensions: s
  });
};
export {
  ee as ActionButton,
  zH as BaseKit,
  $H as Blockquote,
  BH as Bold,
  FH as BulletList,
  UH as Clear,
  WH as Code,
  jH as CodeBlock,
  KH as Color,
  Zn as DEFAULT_LOCALE,
  vA as DEFAULT_LOCALE_MESSAGE,
  qH as FontFamily,
  GH as FontSize,
  JH as Fullscreen,
  XH as Heading,
  ZH as Highlight,
  YH as History,
  QH as HorizontalRule,
  eR as HtmlView,
  tR as Image,
  nR as Indent,
  rR as Italic,
  iR as Link,
  wA as Locale,
  oR as MarkdownTheme,
  sR as OrderedList,
  bL as Paragraph,
  lR as Strike,
  aR as SubAndSuperScript,
  cR as Table,
  dR as TaskList,
  uR as TextAlign,
  fR as Underline,
  hR as Video,
  DH as VuetifyTiptap,
  PH as VuetifyViewer,
  pR as createVuetifyProTipTap,
  pA as de,
  fL as defaultBubbleList,
  mA as en,
  gA as it,
  Ql as locale,
  yA as nl,
  vs as useContext,
  Ut as useLocale,
  bA as zhHans
};
