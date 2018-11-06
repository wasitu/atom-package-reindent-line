"use babel";

import { Point } from "atom";

export default class Reindent {
  reindent() {
    // make this all one undo/redo-able event
    atom.workspace.getActiveTextEditor().transact(
      function () {
        this.editor = atom.workspace.getActiveTextEditor();
        this.editor.autoIndentSelectedRows()
      }
    )
  }
}
