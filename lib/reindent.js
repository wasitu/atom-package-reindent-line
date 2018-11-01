"use babel";

import { Point } from "atom";

export default class Reindent {
  reindent() {
    // make this all one undo/redo-able event
    atom.workspace.getActiveTextEditor().transact(
      function () {
        this.editor = atom.workspace.getActiveTextEditor();

        let range = this.editor.getSelectedBufferRange()
        for (let row = range.start.row; row < range.end.row + 1; row++) {
          let point = new Point(row, 0)
          this.editor.selectLine(row)
          this.editor.autoIndentSelectedRows()
          console.log(point)
          // let line = this.editor.lineTextForScreenRow(point.row)
          //
          // this.editor.setCursorBufferPosition(point)
          // this.editor.deleteLine()
          // if (point.row == 0) {
          //   this.editor.insertText(line.replace(/^\s+/, ''), {normalizeLineEndings: false})
          //   this.editor.insertNewline()
          //   this.editor.moveUp()
          // }
          // else if (point.row == this.editor.getLineCount()) {
          //   this.editor.moveToEndOfLine()
          //   this.editor.insertNewline()
          //   this.editor.insertText(line.replace(/^\s+/, ''))
          // }
          // else {
          //   this.editor.moveUp()
          //   this.editor.moveToEndOfLine()
          //   this.editor.insertNewline()
          //   this.editor.insertText(line.replace(/^\s+/, ''))
          // }
          // this.editor.moveToFirstCharacterOfLine()
        }
      }
    )
  }
}
