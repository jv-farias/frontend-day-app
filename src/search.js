import { renderTopic, renderTalk } from "./Components.js";
import { repositorioTalks, withTopics } from "./Data.js";
import { talkHasText } from "./Utils.js";

// funcoes auxiliares
export async function search(type = 'all', text = '') {
  // perguntar ao dados
  const data = await repositorioTalks(type);
  const all = type === 'saved' ? data : withTopics(data);
  const list = text ? all.filter((talk) => talkHasText(talk, text)) : all;


  const sorted = list.sort((a, b) => a.hour.localeCompare(b.hour));
  const itens = sorted.map((item) => item.type === 'topic' ? renderTopic(item) : renderTalk(item)
  );

  return itens.join('');
}
