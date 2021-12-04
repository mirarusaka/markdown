import Dexie from 'dexie'

//Dexieはindexdb(ブラウザ上に存在するDB)を操作するライブラリ。
//以下のコードは、そいつに保存するデータをTypeScriptのデータ型で定義しているもの。
export interface MemoRecord {
  datetime: string
  title: string
  text: string
}

//インスタンス生成(引数はDB名)
const database = new Dexie('markdown-editor')
database.version(1).stores({ memos: '&datetime' })
const memos: Dexie.Table<MemoRecord, string> = database.table('memos')

export const putMemo = async (title: string, text: string): Promise<void> => {
    const datetime = new Date().toISOString()
    await memos.put({ datetime, title, text })
  }