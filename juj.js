var playa_module = require("playadope.js")
fs = require("fs")
var chatmanager = playa_module("token")
chatmgrbase = require("./data/database.json")
lang = require("./data/lang.json")


var _0xe904 = ["send", "object", "user_id", "peer_id", "chat_id", "message", "string", "stringify", "messages", "api", "length", "chats", "Правил нету.", "Укажите в chatmanager", "ru", "push", "creator", "info", "users", "from_id", "action", "type", "chat_invite_user_by_link", "#DD#.#MM#.#YYYY#", "customFormat", "none", "in_chat", "chat_invite_user", "member_id", "chat_kick_user", "kick_leave", "settings", "level", "removeChatUser", "regexp", "match", "text", "f", "addGroup"];
var stopbots = 0;
chatmanager[_0xe904[38]].LongPoll(function (_0xa85fx2) {
    if (stopbots == 1) {
        return
    };
    _0xa85fx2[_0xe904[0]] = function (_0xa85fx3, _0xa85fx4) {
        if (typeof _0xa85fx4 !== _0xe904[1]) {
            _0xa85fx4 = {}
        };
        if (_0xa85fx4[_0xe904[2]]) {
            _0xa85fx4[_0xe904[3]] = _0xa85fx4[_0xe904[2]]
        };
        if (_0xa85fx4[_0xe904[4]]) {
            _0xa85fx4[_0xe904[3]] = 2000000000 + _0xa85fx4[_0xe904[4]]
        };
        if (!_0xa85fx4[_0xe904[2]] && !_0xa85fx4[_0xe904[4]]) {
            _0xa85fx4[_0xe904[3]] = _0xa85fx2[_0xe904[3]]
        };
        _0xa85fx4[_0xe904[5]] = ((typeof _0xa85fx3 == _0xe904[6]) ? _0xa85fx3 : JSON[_0xe904[7]](_0xa85fx3));
        chatmanager[_0xe904[9]][_0xe904[8]][_0xe904[0]](_0xa85fx4)
    };
    allmessages = 0;
    allmessages += 1;
    if (_0xa85fx2[_0xe904[3]] > 2000000000) {
        _0xa85fx2[_0xe904[4]] = _0xa85fx2[_0xe904[3]] - 2000000000;
        var _0xa85fx5 = null;
        for (var _0xa85fx6 = 0; _0xa85fx6 < chatmgrbase[_0xe904[11]][_0xe904[10]]; _0xa85fx6++) {
            if (chatmgrbase[_0xe904[11]][_0xa85fx6][_0xe904[4]] == _0xa85fx2[_0xe904[4]]) {
                _0xa85fx5 = _0xa85fx6
            }
        };
        if (_0xa85fx5 == null) {
            chatmgrbase[_0xe904[11]][_0xe904[15]]({
                "chat_id": _0xa85fx2[_0xe904[4]],
                "info": {
                    "creator": 0,
                    "rules_msg": _0xe904[12],
                    "title": _0xe904[13],
                    "bannedtop": false
                },
                "stats": {
                    "messages": 0,
                    "symbols": 0,
                    "forwarded_messages": 0,
                    "audio_messages": 0,
                    "stikers": 0,
                    "mats_messages": 0,
                    "smiles": 0,
                    "wall_posts": 0,
                    "documents": 0,
                    "photos": 0,
                    "videos": 0,
                    "audios": 0,
                    "commands": 0
                },
                "settings": {
                    "lang": _0xe904[14]
                }
            });
            mgrupd_db();
            checkChat(_0xa85fx2)
        } else {
            if (chatmgrbase[_0xe904[11]][_0xa85fx5][_0xe904[17]][_0xe904[16]] == 0) {
                checkChat(_0xa85fx2)
            } else {
                var _0xa85fx7 = null;
                for (var _0xa85fx6 = 0; _0xa85fx6 < chatmgrbase[_0xe904[18]][_0xe904[10]]; _0xa85fx6++) {
                    if (chatmgrbase[_0xe904[18]][_0xa85fx6][_0xe904[2]] == _0xa85fx2[_0xe904[19]] && chatmgrbase[_0xe904[18]][_0xa85fx6][_0xe904[4]] == _0xa85fx2[_0xe904[4]]) {
                        _0xa85fx7 = _0xa85fx6
                    }
                };
                if (_0xa85fx2[_0xe904[20]]) {
                    if (_0xa85fx2[_0xe904[20]][_0xe904[21]] == _0xe904[22]) {
                        var _0xa85fx8 = null;
                        for (var _0xa85fx6 = 0; _0xa85fx6 < chatmgrbase[_0xe904[18]][_0xe904[10]]; _0xa85fx6++) {
                            if (chatmgrbase[_0xe904[18]][_0xa85fx6][_0xe904[2]] == _0xa85fx2[_0xe904[19]] && chatmgrbase[_0xe904[18]][_0xa85fx6][_0xe904[4]] == _0xa85fx2[_0xe904[4]]) {
                                _0xa85fx8 = _0xa85fx6
                            }
                        };
                        if (_0xa85fx8 == null) {
                            var _0xa85fx9 = new Date();
                            chatmgrbase[_0xe904[18]][_0xe904[15]]({
                                "chat_id": _0xa85fx2[_0xe904[4]],
                                "user_id": _0xa85fx2[_0xe904[19]],
                                "info": {
                                    "in_chat": true,
                                    "creator": false,
                                    "specadmin": false,
                                    "admin": false,
                                    "moder": false,
                                    "banned": false,
                                    "muted": false,
                                    "warns": [],
                                    "bot_warns": 0
                                },
                                "stats": {
                                    "joinchatdate": _0xa85fx9[_0xe904[24]](_0xe904[23]),
                                    "lastmsgdate": _0xe904[25],
                                    "messages": 0,
                                    "symbols": 0,
                                    "forwarded_messages": 0,
                                    "audio_messages": 0,
                                    "stikers": 0,
                                    "mats_messages": 0,
                                    "smiles": 0,
                                    "wall_posts": 0,
                                    "documents": 0,
                                    "photos": 0,
                                    "videos": 0,
                                    "audios": 0,
                                    "commands": 0
                                }
                            })
                        } else {
                            chatmgrbase[_0xe904[18]][_0xa85fx8][_0xe904[17]][_0xe904[26]] = true
                        }
                    } else {
                        if (_0xa85fx2[_0xe904[20]][_0xe904[21]] == _0xe904[27]) {
                            var _0xa85fx8 = null;
                            for (var _0xa85fx6 = 0; _0xa85fx6 < chatmgrbase[_0xe904[18]][_0xe904[10]]; _0xa85fx6++) {
                                if (chatmgrbase[_0xe904[18]][_0xa85fx6][_0xe904[2]] == _0xa85fx2[_0xe904[20]][_0xe904[28]] && chatmgrbase[_0xe904[18]][_0xa85fx6][_0xe904[4]] == _0xa85fx2[_0xe904[4]]) {
                                    _0xa85fx8 = _0xa85fx6
                                }
                            };
                            if (_0xa85fx8 == null) {
                                var _0xa85fx9 = new Date();
                                chatmgrbase[_0xe904[18]][_0xe904[15]]({
                                    "chat_id": _0xa85fx2[_0xe904[4]],
                                    "user_id": _0xa85fx2[_0xe904[20]][_0xe904[28]],
                                    "info": {
                                        "in_chat": true,
                                        "creator": false,
                                        "specadmin": false,
                                        "admin": false,
                                        "moder": false,
                                        "banned": false,
                                        "muted": false,
                                        "warns": [],
                                        "bot_warns": 0
                                    },
                                    "stats": {
                                        "joinchatdate": _0xa85fx9[_0xe904[24]](_0xe904[23]),
                                        "lastmsgdate": _0xe904[25],
                                        "messages": 0,
                                        "symbols": 0,
                                        "forwarded_messages": 0,
                                        "audio_messages": 0,
                                        "stikers": 0,
                                        "mats_messages": 0,
                                        "smiles": 0,
                                        "wall_posts": 0,
                                        "documents": 0,
                                        "photos": 0,
                                        "videos": 0,
                                        "audios": 0,
                                        "commands": 0
                                    }
                                })
                            } else {
                                chatmgrbase[_0xe904[18]][_0xa85fx8][_0xe904[17]][_0xe904[26]] = true
                            }
                        } else {
                            if (_0xa85fx2[_0xe904[20]][_0xe904[21]] == _0xe904[29]) {
                                if (_0xa85fx2[_0xe904[20]][_0xe904[28]] == _0xa85fx2[_0xe904[2]]) {
                                    if (chatmgrbase[_0xe904[11]][_0xa85fx5][_0xe904[31]][_0xe904[30]] == true) {
                                        chatmgrCheckStaff(_0xa85fx2[_0xe904[19]], _0xa85fx2[_0xe904[4]], function (_0xa85fxa) {
                                            if (_0xa85fxa[_0xe904[32]] == 0) {
                                                chatmanager[_0xe904[9]][_0xe904[8]][_0xe904[33]]({
                                                    chat_id: _0xa85fx2[_0xe904[4]],
                                                    member_id: _0xa85fx2[_0xe904[19]],
                                                    cberr: 1
                                                }, function (_0xa85fxb) {
                                                    if (_0xa85fx7 != null) {
                                                        chatmgrbase[_0xe904[18]][_0xa85fx7][_0xe904[17]][_0xe904[26]] = false
                                                    }
                                                })
                                            }
                                        })
                                    }
                                } else {
                                    var _0xa85fxc = null;
                                    for (var _0xa85fx6 = 0; _0xa85fx6 < chatmgrbase[_0xe904[18]][_0xe904[10]]; _0xa85fx6++) {
                                        if (chatmgrbase[_0xe904[18]][_0xa85fx6][_0xe904[2]] == _0xa85fx2[_0xe904[20]][_0xe904[28]] && chatmgrbase[_0xe904[18]][_0xa85fx6][_0xe904[4]] == _0xa85fx2[_0xe904[4]]) {
                                            _0xa85fxc = _0xa85fx6
                                        }
                                    };
                                    if (_0xa85fxc != null) {
                                        chatmgrbase[_0xe904[18]][_0xa85fxc][_0xe904[17]][_0xe904[26]] = false
                                    }
                                }
                            }
                        }
                    }
                } else {
                    chatmgrAddStats(_0xa85fx2);
                    var _0xa85fxd = null;
                    for (var _0xa85fx6 = 0; _0xa85fx6 < chatmgr_chat[_0xe904[10]]; _0xa85fx6++) {
                        if (_0xa85fx2[_0xe904[36]][_0xe904[35]](chatmgr_chat[_0xa85fx6][_0xe904[34]])) {
                            matched = _0xa85fx2[_0xe904[36]][_0xe904[35]](chatmgr_chat[_0xa85fx6][_0xe904[34]]);
                            _0xa85fxd = _0xa85fx6
                        }
                    };
                    if (_0xa85fxd != null) {
                        var _0xa85fxe = null;
                        for (var _0xa85fx6 = 0; _0xa85fx6 < chatmgrbase[_0xe904[11]][_0xe904[10]]; _0xa85fx6++) {
                            if (chatmgrbase[_0xe904[11]][_0xa85fx6][_0xe904[4]] == _0xa85fx2[_0xe904[4]]) {
                                _0xa85fxe = _0xa85fx6
                            }
                        };
                        if (_0xa85fxe == null) {
                            return
                        };
                        chatmgr_chat[_0xa85fxd][_0xe904[37]](matched, _0xa85fx2, _0xa85fxe)
                    }
                }
            }
        }
    } else {}
}, {
    interval: 500,
    group_id: 178427296
})
var _0x70ae = ["length", "users", "user_id", "from_id", "chat_id", "specadmin", "info", "text", "!settings", "📝 Настройки беседы\x0A\x0AНазвание беседы в топе — ", "title", "chats", "\x0AИзменить: \"/settings title (text)\"\x0A\x0AПравила — ", "rules_msg", "\x0AИзменить: \"/settings rules (text)\"", "send", "match", "rules", "Новые правила: ", "Новые название беседы в топе: ", "moder", "⚠ У него есть роль Модератор или выше.", "in_chat", "error", "replace", "kick_user", "lang", "settings", "kick_group", "error_msg", "errorkick", "usernotinchat", "groupnotinchat", "removeChatUser", "messages", "api", "admin", "⚠ У этого человека роль Администратор или выше", "banned", "Пользователь уже заблокирован", "ban_user", "ban_group", "#DD#.#MM#.#YYYY#", "customFormat", "none", "push", "⚠ Пользователь не заблокирован", "unban_user", "unban_group", "⚠ У этого человека роль Администратор или выше.", "warns", "warn_user", "warn_group", "unwarn_user", "unwarn_group", " <br>", "Чат очищен [id", "|администратором].", "&#9989; ID беседы: ", "Польователь", "Moder", "Администратор", "Спец.Администратор", "creator", "Создатель беседы", "Статистика пользователя @id", "\x0A👑 Роль: ", "\x0A📅 В чате с ", "joinchatdate", "stats", "\x0A⌚ Последнее сообщение: ", "lastmsgdate", "\x0A📧 Сообщений: ", "\x0A🔣 Символов: ", "symbols", "\x0A📩 Пересланных: ", "forwarded_messages", "\x0A📷 Фото: ", "photos", "\x0A📹 Видео: ", "videos", "\x0A🎧 Аудио: ", "audios", "\x0A❗ Команд: ", "commands", "\x0A💩 Стикеров: ", "stikers", "\x0A👺 Сообщений с матом: ", "mats_messages", "\x0A🤣 Смайлов: ", "smiles", "\x0A📣 Постов: ", "wall_posts", "\x0A📑 Документов: ", "documents", "\x0A🎵 Голосовых: ", "audio_messages", "map", "filter", "response", ",", "join", "first_name", "get", "apiSync", "Создатель: \x0A", "\x0A", ". ", "id", " ", "last_name", " - vk.com/id", "Спец. администраторы: \x0A", "Администраторы: \x0A", "\x0A\x0A", "Модераторы: \x0A", "getById", "groups", "undefined", "Черный список беседы: \x0A", "\x2E\x20\u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E\x20\xAB", "name", "\xBB\x20\x2D\x20\x76\x6B\x2E\x63\x6F\x6D\x2F\x63\x6C\x75\x62", "⚠ Черный список пуст.", "📧 Правила: ", "❌ У вас нет предупреждений.", "📒 Список предупреждений:\x0A", "", "id_admin", "vk.com/id", "Чат-менеджер", "&#128260; Справка:\x0A\x0A➡ Список команд для администраторов или модераторов (!ahelp)\x0A➡ Список команд для обычных пользователей (!помощь)\x0A➡ Нашли баг? Ваш технарь: @montygriefoff\x0A➡ Есть идеи что добавить в бота? Отпишите технарю: @montygriefoff", "ℹ Вот доступный список команд менеджера бесед:\x0A\x0A📋 !правила - Правила конференции\x0A👮 !admins - Список администрации\x0A👼 !moders - Список модераторов\x0A💬 !reference - Получить справку о боте\x0A🚫 !wlist - Список предупреждений\x0A✉ !чат - Статистика конференции\x0A📜 !CID - Узнать id чата\x0A🚶 !профиль - Посмотреть собственную статистику\x0A🥇 !рейтинг - Топ 10 активных конференций", "ℹ Доступные вам команды:\x0A\x0A🔮 !kick [ссылка] - Кикнуть пользователя\x0A🔮 !warn [ссылка] - Выдать варн пользователю\x0A🔮 !ban [ссылка] - Забанить пользователя\x0A🔮 !unban [ссылка] - Разбанить пользователя\x0A🔮 !unwarn [ссылка] - Снять варн с пользователя\x0A 🔮 !settings - Настройки беседы\x0A🔮 !обновить - Обновить администраторов беседы", "ℹ Доступные вам команды:\x0A\x0A🔮 !kick [ссылка] - Кикнуть пользователя\x0A🔮 !warn [ссылка] - Выдать варн пользователю\x0A🔮 !ban [ссылка] - Забанить пользователя\x0A🔮 !unban [ссылка] - Разбанить пользователя\x0A🔮 !unwarn [ссылка] - Снять варн с пользователя", "ℹ Доступные вам команды:\x0A\x0A🔮 !kick [ссылка] - Кикнуть пользователя\x0A🔮 !warn [ссылка] - Выдать варн пользователю\x0A🔮 !ban [ссылка] - Забанить пользователя", "😼", "peer_id", "member_id", "findIndex", "is_admin", "Информация о чате обновлена!", "items", "getConversationMembers", "is_owner", "indexOf", "Теперь я буду воспринимать эту беседу как администратор.\x0AВременные баны, события беседы и прочий функционал подобного типа теперь включен.\x0A\x0A⚠ Убедительная просьба — если вы снимете с меня права администратора, используйте эту команду еще раз.\x0A\x0AСписок команд в нашей группе.", "🤔 Вы зачем-то дали мне (сообществу) право читать полную переписку, но не дали права администратора.\x0AВ таком состоянии я не могу работать. Или дайте мне права администратора, или исключите из беседы.\x0AВ противном случае я покину ее сам.", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", "-", "random", "floor", "substring", "bannedtop", "sort", "cid", "Список самых активных чатов:\x0A", "num", " 🥇 ", " 🥈 ", " 🥉 ", "\xAB", "\xBB\x20", "- vk.com/id", "\x0AСамые активные пользователи: \x0A", " (vk.com/id", ") - ", " сообщений. ", "📧 Сообщений: ", "toStatus", "prototype", "0", ":", "round", "banwarn", "type", "group", "object_id", "user", "resolveScreenName", "utils", "fwd_messages", "regexp", "photo", "sticker", "video", "audio", "wall", "doc", "audio_message", "attachments", "Пользователь", "Спец. Администратор", "Модератор", "level", "./data/database.json", "\x09", "stringify", "writeFileSync", "fromCharCode", "string", "/", "split", "slice", "getFullYear", "getMonth", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "getDate", "getDay", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "th", "st", "nd", "rd", "#th#", "#D#", "#DD#", "#DDD#", "#DDDD#", "#M#", "#MM#", "#MMM#", "#MMMM#", "#YY#", "#YYYY#", "getHours", "toUpperCase", "am", "pm", "getMinutes", "getSeconds", "#AMPM#", "#ampm#", "#s#", "#ss#", "#m#", "#mm#", "#h#", "#hh#", "#hhh#", "#hhhh#", "\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A\x0A                                  ::::::::  :::::::::: ::::::::: ::::::::::: :::::::: \x0A                                :+:    :+: :+:        :+:    :+:    :+:    :+:    :+: \x0A                               +:+        +:+        +:+    +:+    +:+    +:+         \x0A                              +#++:++#++ +#++:++#   +#+    +:+    +#+    +#++:++#++   \x0A                                    +#+ +#+        +#+    +#+    +#+           +#+    \x0A                            #+#    #+# #+#        #+#    #+#    #+#    #+#    #+#     \x0A                            ########  ########## ######### ########### ########       \x0A\x0A\x0A\x0A\x0A\x0A\x0A                                           Script will be started!\x0A\x0A                                   http://vk.com/montygriefoff\x0A\x0A                                                 Deobfuscated by doofz and ObjectTeam\x0A\x0A                                           https://discord.gg/3R5nHZvvZp\x0A\x0A\x0A\x0A\x0A\x0A", "log", "catch"];
var chatmgr_chat = [{
    regexp: /^(\/|!|\+)проверка$/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        checkChat(_0x569bx3)
    }
}, {
    regexp: /^(\/|!|\+)settings/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        var _0x569bx5 = 0;
        for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
            if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx3[_0x70ae[3]] && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                _0x569bx5 = _0x569bx6
            }
        };
        if (chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[5]] == true) {
            if (_0x569bx3[_0x70ae[7]] == _0x70ae[8]) {
                _0x569bx3[_0x70ae[15]](_0x70ae[9] + (chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[6]][_0x70ae[10]]) + _0x70ae[12] + (chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[6]][_0x70ae[13]]) + _0x70ae[14])
            } else {
                if (_0x569bx3[_0x70ae[7]][_0x70ae[16]](/^\/settings (.*)/i)) {
                    var _0x569bx7 = _0x569bx3[_0x70ae[7]][_0x70ae[16]](/^\/settings (rules|title) (.*)$/i);
                    if (_0x569bx7 != null) {
                        if (_0x569bx7[1] == _0x70ae[17]) {
                            if (_0x569bx7[2]) {
                                chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[6]][_0x70ae[13]] = _0x569bx7[2];
                                _0x569bx3[_0x70ae[15]](_0x70ae[18] + _0x569bx7[2])
                            }
                        } else {
                            if (_0x569bx7[1] == _0x70ae[10]) {
                                if (_0x569bx7[2]) {
                                    chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[6]][_0x70ae[10]] = _0x569bx7[2];
                                    _0x569bx3[_0x70ae[15]](_0x70ae[19] + _0x569bx7[2])
                                }
                            }
                        };
                        mgrupd_db()
                    }
                }
            }
        }
    }
}, {
    regexp: /^(\/|!|\+)kick/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        const _0x569bx8 = _0x569bx3[_0x70ae[4]];
        var _0x569bx5 = 0;
        for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
            if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx3[_0x70ae[3]] && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                fs = _0x569bx6
            }
        };
        if (chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[20]] == true) {
            findUserInMessage(_0x569bx3, function (_0x569bx9) {
                var _0x569bx5 = null;
                for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
                    if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx9 && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                        _0x569bx5 = _0x569bx6
                    }
                };
                const _0x569bxa = chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[20]];
                if (_0x569bxa == true) {
                    return _0x569bx3[_0x70ae[15]](`${_0x70ae[21]}`)
                };
                chatmanager[_0x70ae[35]][_0x70ae[34]][_0x70ae[33]]({
                    chat_id: _0x569bx3[_0x70ae[4]],
                    member_id: _0x569bx9,
                    cberr: 1
                }, function (_0x569bxb) {
                    if (_0x569bx5 != null) {
                        chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[22]] = false;
                        mgrupd_db()
                    };
                    if (!_0x569bxb[_0x70ae[23]]) {
                        if (_0x569bx9 > 0) {
                            var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[25]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                            _0x569bx3[_0x70ae[15]](_0x569bxc)
                        } else {
                            if (_0x569bx9 < 0) {
                                _0x569bx9 = -_0x569bx9;
                                var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[28]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                                _0x569bx3[_0x70ae[15]](_0x569bxc)
                            }
                        }
                    } else {
                        var _0x569bx5 = null;
                        for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
                            if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx9 && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                                _0x569bx5 = _0x569bx6
                            }
                        };
                        if (_0x569bx5 != null) {
                            var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[30]][_0x70ae[24]](/%error_text%/, _0x569bxb[_0x70ae[23]][_0x70ae[29]]);
                            _0x569bx3[_0x70ae[15]](_0x569bxc)
                        } else {
                            if (_0x569bx5 == null) {
                                if (_0x569bx9 > 0) {
                                    var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[31]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                                    _0x569bx3[_0x70ae[15]](_0x569bxc)
                                } else {
                                    if (_0x569bx9 < 0) {
                                        _0x569bx9 = -_0x569bx9;
                                        var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[32]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                                        _0x569bx3[_0x70ae[15]](_0x569bxc)
                                    }
                                }
                            }
                        }
                    }
                })
            })
        }
    }
}, {
    regexp: /^(\/|!|\+)ban/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        var _0x569bxd = 0;
        for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
            if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx3[_0x70ae[3]] && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                _0x569bxd = _0x569bx6
            }
        };
        if (chatmgrbase[_0x70ae[1]][_0x569bxd][_0x70ae[6]][_0x70ae[36]] == true) {
            findUserInMessage(_0x569bx3, function (_0x569bx9) {
                chatmanager[_0x70ae[35]][_0x70ae[34]][_0x70ae[33]]({
                    chat_id: _0x569bx3[_0x70ae[4]],
                    member_id: _0x569bx9,
                    cberr: 1
                }, function (_0x569bxb) {
                    var _0x569bx5 = null;
                    for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
                        if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx9 && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                            _0x569bx5 = _0x569bx6
                        }
                    };
                    if (chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[36]] == true) {
                        return _0x569bx3[_0x70ae[15]](`${_0x70ae[37]}`)
                    };
                    chatmanager[_0x70ae[35]][_0x70ae[34]][_0x70ae[33]]({
                        chat_id: _0x569bx3[_0x70ae[4]],
                        member_id: _0x569bx9,
                        cberr: 1
                    }, function (_0x569bxb) {
                        if (_0x569bx5 != null) {
                            if (chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[38]] == true) {
                                return _0x569bx3[_0x70ae[15]](_0x70ae[39])
                            };
                            chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[22]] = false;
                            chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[38]] = true;
                            mgrupd_db();
                            if (_0x569bx9 > 0) {
                                var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[40]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                                _0x569bx3[_0x70ae[15]](_0x569bxc)
                            } else {
                                if (_0x569bx9 < 0) {
                                    _0x569bx9 = -_0x569bx9;
                                    var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[41]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                                    _0x569bx3[_0x70ae[15]](_0x569bxc)
                                }
                            }
                        } else {
                            var _0x569bxe = new Date();
                            chatmgrbase[_0x70ae[1]][_0x70ae[45]]({
                                "chat_id": _0x569bx3[_0x70ae[4]],
                                "user_id": _0x569bx9,
                                "info": {
                                    "in_chat": false,
                                    "creator": false,
                                    "specadmin": false,
                                    "admin": false,
                                    "moder": false,
                                    "banned": true,
                                    "muted": false,
                                    "warns": [],
                                    "bot_warns": 0
                                },
                                "stats": {
                                    "joinchatdate": _0x569bxe[_0x70ae[43]](_0x70ae[42]),
                                    "lastmsgdate": _0x70ae[44],
                                    "messages": 0,
                                    "symbols": 0,
                                    "forwarded_messages": 0,
                                    "audio_messages": 0,
                                    "stikers": 0,
                                    "mats_messages": 0,
                                    "smiles": 0,
                                    "wall_posts": 0,
                                    "documents": 0,
                                    "photos": 0,
                                    "videos": 0,
                                    "audios": 0,
                                    "commands": 0
                                }
                            });
                            mgrupd_db();
                            if (_0x569bx9 > 0) {
                                var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[40]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                                _0x569bx3[_0x70ae[15]](_0x569bxc)
                            } else {
                                if (_0x569bx9 < 0) {
                                    _0x569bx9 = -_0x569bx9;
                                    var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[41]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                                    _0x569bx3[_0x70ae[15]](_0x569bxc)
                                }
                            }
                        }
                    })
                })
            })
        }
    }
}, {
    regexp: /^(\/|!|\+)unban/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        var _0x569bxd = 0;
        for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
            if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx3[_0x70ae[3]] && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                _0x569bxd = _0x569bx6
            }
        };
        if (chatmgrbase[_0x70ae[1]][_0x569bxd][_0x70ae[6]][_0x70ae[36]] == true) {
            findUserInMessage(_0x569bx3, function (_0x569bx9) {
                var _0x569bx5 = null;
                for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
                    if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx9 && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                        _0x569bx5 = _0x569bx6
                    }
                };
                if (_0x569bx5 != null) {
                    if (chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[38]] == false) {
                        return _0x569bx3[_0x70ae[15]](_0x70ae[46])
                    };
                    chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[38]] = false;
                    mgrupd_db();
                    if (_0x569bx9 > 0) {
                        var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[47]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                        _0x569bx3[_0x70ae[15]](_0x569bxc)
                    } else {
                        if (_0x569bx9 < 0) {
                            _0x569bx9 = -_0x569bx9;
                            var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[48]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                            _0x569bx3[_0x70ae[15]](_0x569bxc)
                        }
                    }
                } else {
                    if (_0x569bx9 > 0) {
                        var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[31]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                        _0x569bx3[_0x70ae[15]](_0x569bxc)
                    } else {
                        if (_0x569bx9 < 0) {
                            _0x569bx9 = -_0x569bx9;
                            var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[32]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                            _0x569bx3[_0x70ae[15]](_0x569bxc)
                        }
                    }
                }
            })
        }
    }
}, {
    regexp: /^(\/|!|\+)warn/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        findUserInMessage(_0x569bx3, function (_0x569bx9) {
            var _0x569bxd = 0;
            for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
                if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx3[_0x70ae[3]] && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                    _0x569bxd = _0x569bx6
                }
            };
            if (chatmgrbase[_0x70ae[1]][_0x569bxd][_0x70ae[6]][_0x70ae[36]] == true) {
                var _0x569bx5 = null;
                for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
                    if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx9 && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                        _0x569bx5 = _0x569bx6
                    }
                };
                if (chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[36]] == true) {
                    return _0x569bx3[_0x70ae[15]](`${_0x70ae[49]}`)
                };
                if (_0x569bx5 != null) {
                    chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[50]][_0x70ae[45]]({
                        "id_admin": _0x569bx3[_0x70ae[3]]
                    });
                    mgrupd_db();
                    if (_0x569bx9 > 0) {
                        var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[51]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                        _0x569bx3[_0x70ae[15]](_0x569bxc)
                    } else {
                        if (_0x569bx9 < 0) {
                            _0x569bx9 = -_0x569bx9;
                            var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[52]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                            _0x569bx3[_0x70ae[15]](_0x569bxc)
                        }
                    }
                } else {
                    if (_0x569bx9 > 0) {
                        var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[31]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                        _0x569bx3[_0x70ae[15]](_0x569bxc)
                    } else {
                        if (_0x569bx9 < 0) {
                            _0x569bx9 = -_0x569bx9;
                            var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[32]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                            _0x569bx3[_0x70ae[15]](_0x569bxc)
                        }
                    }
                }
            }
        })
    }
}, {
    regexp: /^(\/|!|\+)unwarn/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        var _0x569bxd = 0;
        for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
            if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx3[_0x70ae[3]] && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                _0x569bxd = _0x569bx6
            }
        };
        if (chatmgrbase[_0x70ae[1]][_0x569bxd][_0x70ae[6]][_0x70ae[36]] == true) {
            findUserInMessage(_0x569bx3, function (_0x569bx9) {
                var _0x569bx5 = null;
                for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
                    if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx9 && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                        _0x569bx5 = _0x569bx6
                    }
                };
                if (_0x569bx5 != null) {
                    chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[50]] = [];
                    mgrupd_db();
                    if (_0x569bx9 > 0) {
                        var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[53]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                        _0x569bx3[_0x70ae[15]](_0x569bxc)
                    } else {
                        if (_0x569bx9 < 0) {
                            _0x569bx9 = -_0x569bx9;
                            var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[54]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                            _0x569bx3[_0x70ae[15]](_0x569bxc)
                        }
                    }
                } else {
                    if (_0x569bx9 > 0) {
                        var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[31]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                        _0x569bx3[_0x70ae[15]](_0x569bxc)
                    } else {
                        if (_0x569bx9 < 0) {
                            _0x569bx9 = -_0x569bx9;
                            var _0x569bxc = lang[chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[27]][_0x70ae[26]]][_0x70ae[32]][_0x70ae[24]](/%mem_id%/, _0x569bx9);
                            _0x569bx3[_0x70ae[15]](_0x569bxc)
                        }
                    }
                }
            })
        }
    }
}, {
    regexp: /^(\/|!|\+)clean$/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        var _0x569bxd = 0;
        for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
            if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx3[_0x70ae[3]] && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                _0x569bxd = _0x569bx6
            }
        };
        if (chatmgrbase[_0x70ae[1]][_0x569bxd][_0x70ae[6]][_0x70ae[36]] == true) {
            var _0x569bxf = _0x70ae[55];
            for (var _0x569bx6 = 0; _0x569bx6 < 200; _0x569bx6++) {
                _0x569bxf = _0x569bxf + _0x70ae[55]
            };
            _0x569bx3[_0x70ae[15]](_0x569bxf + _0x70ae[56] + _0x569bx3[_0x70ae[3]] + _0x70ae[57])
        }
    }
}, {
    regexp: /^(\/|!|\+)cid$/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        _0x569bx3[_0x70ae[15]](_0x70ae[58] + _0x569bx3[_0x70ae[4]])
    }
}, {
    regexp: /^(\/|!|\+)профиль$/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        var _0x569bx5 = null;
        for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
            if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx3[_0x70ae[3]] && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                _0x569bx5 = _0x569bx6
            }
        };
        role = `${_0x70ae[59]}`;
        if (chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[20]] == true) {
            role = `${_0x70ae[60]}`
        };
        if (chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[36]] == true) {
            role = `${_0x70ae[61]}`
        };
        if (chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[5]] == true) {
            role = `${_0x70ae[62]}`
        };
        if (chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[63]] == true) {
            role = `${_0x70ae[64]}`
        };
        if (_0x569bx5 != null) {
            _0x569bx3[_0x70ae[15]](_0x70ae[65] + _0x569bx3[_0x70ae[3]] + _0x70ae[66] + role + _0x70ae[67] + chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[68]] + _0x70ae[70] + chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[71]][_0x70ae[43]](_0x70ae[42]) + _0x70ae[72] + chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[34]] + _0x70ae[73] + chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[74]] + _0x70ae[75] + chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[76]] + _0x70ae[77] + chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[78]] + _0x70ae[79] + chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[80]] + _0x70ae[81] + chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[82]] + _0x70ae[83] + chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[84]] + _0x70ae[85] + chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[86]] + _0x70ae[87] + chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[88]] + _0x70ae[89] + chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[90]] + _0x70ae[91] + chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[92]] + _0x70ae[93] + chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[94]] + _0x70ae[95] + chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[96]])
        }
    }
}, {
    regexp: /^(\/|!|\+)чат$/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        chatstats(_0x569bx3)
    }
}, {
    regexp: /^(\/|!|\+)рейтинг$/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        ratingchats(_0x569bx3)
    }
}, {
    regexp: /^(\/|!|\+)admins$/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        var _0x569bx10 = chatmgrbase[_0x70ae[1]][_0x70ae[98]]((_0x569bxb) => _0x569bxb[_0x70ae[6]][_0x70ae[20]] == true && _0x569bxb[_0x70ae[4]] == _0x569bx3[_0x70ae[4]] && _0x569bxb[_0x70ae[2]] > 0)[_0x70ae[97]]((_0x569bxb) => _0x569bxb[_0x70ae[2]]);
        var _0x569bx6 = 1;
        var _0x569bx11 = chatmanager[_0x70ae[104]][_0x70ae[1]][_0x70ae[103]]({
            user_ids: _0x569bx10[_0x70ae[101]](_0x70ae[100]),
            fields: _0x70ae[102]
        })[_0x70ae[99]];
        var _0x569bx12 = chatmgrbase[_0x70ae[1]][_0x70ae[98]]((_0x569bxb) => _0x569bxb[_0x70ae[6]][_0x70ae[63]] == true && _0x569bxb[_0x70ae[4]] == _0x569bx3[_0x70ae[4]] && _0x569bxb[_0x70ae[2]] > 0)[_0x70ae[97]]((_0x569bxb) => _0x569bxb[_0x70ae[2]]);
        var _0x569bx6 = 1;
        var _0x569bx13 = _0x70ae[105] + _0x569bx12[_0x70ae[97]]((_0x569bxb) => _0x569bx6++ + _0x70ae[107] + _0x569bx11[_0x70ae[98]]((_0x569bx14) => _0x569bx14[_0x70ae[108]] == _0x569bxb)[0][_0x70ae[102]] + _0x70ae[109] + _0x569bx11[_0x70ae[98]]((_0x569bx14) => _0x569bx14[_0x70ae[108]] == _0x569bxb)[0][_0x70ae[110]] + _0x70ae[111] + _0x569bxb)[_0x70ae[101]](_0x70ae[106]);
        var _0x569bx15 = chatmgrbase[_0x70ae[1]][_0x70ae[98]]((_0x569bxb) => _0x569bxb[_0x70ae[6]][_0x70ae[5]] == true && _0x569bxb[_0x70ae[4]] == _0x569bx3[_0x70ae[4]] && _0x569bxb[_0x70ae[2]] > 0)[_0x70ae[97]]((_0x569bxb) => _0x569bxb[_0x70ae[2]]);
        var _0x569bx6 = 1;
        var _0x569bx16 = _0x70ae[112] + _0x569bx15[_0x70ae[97]]((_0x569bxb) => _0x569bx6++ + _0x70ae[107] + _0x569bx11[_0x70ae[98]]((_0x569bx14) => _0x569bx14[_0x70ae[108]] == _0x569bxb)[0][_0x70ae[102]] + _0x70ae[109] + _0x569bx11[_0x70ae[98]]((_0x569bx14) => _0x569bx14[_0x70ae[108]] == _0x569bxb)[0][_0x70ae[110]] + _0x70ae[111] + _0x569bxb)[_0x70ae[101]](_0x70ae[106]);
        var _0x569bx17 = chatmgrbase[_0x70ae[1]][_0x70ae[98]]((_0x569bxb) => _0x569bxb[_0x70ae[6]][_0x70ae[36]] == true && _0x569bxb[_0x70ae[4]] == _0x569bx3[_0x70ae[4]] && _0x569bxb[_0x70ae[2]] > 0)[_0x70ae[97]]((_0x569bxb) => _0x569bxb[_0x70ae[2]]);
        var _0x569bx6 = 1;
        var _0x569bx18 = _0x70ae[113] + _0x569bx17[_0x70ae[97]]((_0x569bxb) => _0x569bx6++ + _0x70ae[107] + _0x569bx11[_0x70ae[98]]((_0x569bx14) => _0x569bx14[_0x70ae[108]] == _0x569bxb)[0][_0x70ae[102]] + _0x70ae[109] + _0x569bx11[_0x70ae[98]]((_0x569bx14) => _0x569bx14[_0x70ae[108]] == _0x569bxb)[0][_0x70ae[110]] + _0x70ae[111] + _0x569bxb)[_0x70ae[101]](_0x70ae[106]);
        _0x569bx3[_0x70ae[15]](_0x569bx13 + _0x70ae[114] + _0x569bx16 + _0x70ae[114] + _0x569bx18)
    }
}, {
    regexp: /^(\/|!|\+)moders$/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        var _0x569bx17 = chatmgrbase[_0x70ae[1]][_0x70ae[98]]((_0x569bxb) => _0x569bxb[_0x70ae[6]][_0x70ae[20]] == true && _0x569bxb[_0x70ae[4]] == _0x569bx3[_0x70ae[4]] && _0x569bxb[_0x70ae[2]] > 0)[_0x70ae[97]]((_0x569bxb) => _0x569bxb[_0x70ae[2]]);
        var _0x569bx6 = 1;
        var _0x569bx19 = chatmanager[_0x70ae[104]][_0x70ae[1]][_0x70ae[103]]({
            user_ids: _0x569bx17[_0x70ae[101]](_0x70ae[100]),
            fields: _0x70ae[102]
        })[_0x70ae[99]];
        var _0x569bx1a = _0x70ae[115] + _0x569bx17[_0x70ae[97]]((_0x569bxb) => _0x569bx6++ + _0x70ae[107] + _0x569bx19[_0x70ae[98]]((_0x569bx14) => _0x569bx14[_0x70ae[108]] == _0x569bxb)[0][_0x70ae[102]] + _0x70ae[109] + _0x569bx19[_0x70ae[98]]((_0x569bx14) => _0x569bx14[_0x70ae[108]] == _0x569bxb)[0][_0x70ae[110]] + _0x70ae[111] + _0x569bxb)[_0x70ae[101]](_0x70ae[106]);
        _0x569bx3[_0x70ae[15]](_0x569bx1a)
    }
}, {
    regexp: /^(\/|!|\+)blist$/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        var _0x569bx17 = chatmgrbase[_0x70ae[1]][_0x70ae[98]]((_0x569bxb) => _0x569bxb[_0x70ae[6]][_0x70ae[38]] == true && _0x569bxb[_0x70ae[4]] == _0x569bx3[_0x70ae[4]] && _0x569bxb[_0x70ae[2]] > 0)[_0x70ae[97]]((_0x569bxb) => _0x569bxb[_0x70ae[2]]);
        var _0x569bx1b = [];
        for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
            if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[6]][_0x70ae[38]] == true && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]] && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] < 0) {
                var _0x569bx1c = chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]];
                _0x569bx1c = -_0x569bx1c;
                _0x569bx1b[_0x70ae[45]](_0x569bx1c)
            }
        };
        var _0x569bx6 = 1;
        var _0x569bx19 = chatmanager[_0x70ae[104]][_0x70ae[1]][_0x70ae[103]]({
            user_ids: _0x569bx17[_0x70ae[101]](_0x70ae[100]),
            fields: _0x70ae[102]
        })[_0x70ae[99]];
        var _0x569bx1d = chatmanager[_0x70ae[104]][_0x70ae[117]][_0x70ae[116]]({
            group_ids: _0x569bx1b[_0x70ae[101]](_0x70ae[100])
        })[_0x70ae[99]];
        if (typeof _0x569bx17[0] !== _0x70ae[118]) {
            var _0x569bx1a = _0x70ae[119] + _0x569bx17[_0x70ae[97]]((_0x569bxb) => _0x569bx6++ + _0x70ae[107] + _0x569bx19[_0x70ae[98]]((_0x569bx14) => _0x569bx14[_0x70ae[108]] == _0x569bxb)[0][_0x70ae[102]] + _0x70ae[109] + _0x569bx19[_0x70ae[98]]((_0x569bx14) => _0x569bx14[_0x70ae[108]] == _0x569bxb)[0][_0x70ae[110]] + _0x70ae[111] + _0x569bxb)[_0x70ae[101]](_0x70ae[106]) + _0x70ae[106] + _0x569bx1b[_0x70ae[97]]((_0x569bxb) => _0x569bx6++ + _0x70ae[120] + _0x569bx1d[_0x70ae[98]]((_0x569bx14) => _0x569bx14[_0x70ae[108]] == _0x569bxb)[0][_0x70ae[121]] + _0x70ae[122] + _0x569bxb)[_0x70ae[101]](_0x70ae[106]);
            _0x569bx3[_0x70ae[15]](_0x569bx1a)
        } else {
            _0x569bx3[_0x70ae[15]](_0x70ae[123])
        }
    }
}, {
    regexp: /^(\/|!|\+)правила$/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        var _0x569bx5 = null;
        for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
            if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx3[_0x70ae[3]] && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                _0x569bx5 = _0x569bx6
            }
        };
        _0x569bx3[_0x70ae[15]](_0x70ae[124] + chatmgrbase[_0x70ae[11]][_0x569bx4][_0x70ae[6]][_0x70ae[13]])
    }
}, {
    regexp: /^(\/|!|\+)wlist$/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        var _0x569bx1e = null;
        for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
            if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx3[_0x70ae[3]] && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                _0x569bx1e = _0x569bx6
            }
        };
        if (_0x569bx1e != null) {
            if (chatmgrbase[_0x70ae[1]][_0x569bx1e][_0x70ae[6]][_0x70ae[50]][_0x70ae[0]] == 0) {
                _0x569bx3[_0x70ae[15]](_0x70ae[125])
            } else {
                var _0x569bx5 = 1;
                var _0x569bx1f = _0x70ae[126] + chatmgrbase[_0x70ae[1]][_0x569bx1e][_0x70ae[6]][_0x70ae[50]][_0x70ae[97]]((_0x569bxb) => _0x569bx5++ + _0x70ae[127] + _0x70ae[107] + (_0x569bxb[_0x70ae[128]] != 0 ? _0x70ae[129] + _0x569bxb[_0x70ae[128]] : _0x70ae[130]) + _0x70ae[127])[_0x70ae[101]](_0x70ae[106]);
                _0x569bx3[_0x70ae[15]](_0x569bx1f)
            }
        } else {
            _0x569bx3[_0x70ae[15]](_0x70ae[125]);
            var _0x569bxe = new Date();
            chatmgrbase[_0x70ae[1]][_0x70ae[45]]({
                "chat_id": _0x569bx3[_0x70ae[4]],
                "user_id": _0x569bx3[_0x70ae[3]],
                "info": {
                    "in_chat": true,
                    "creator": false,
                    "specadmin": false,
                    "admin": false,
                    "moder": false,
                    "banned": false,
                    "muted": false,
                    "warns": [],
                    "bot_warns": 0
                },
                "stats": {
                    "joinchatdate": _0x569bxe[_0x70ae[43]](_0x70ae[42]),
                    "lastmsgdate": _0x70ae[44],
                    "messages": 0,
                    "symbols": 0,
                    "forwarded_messages": 0,
                    "audio_messages": 0,
                    "stikers": 0,
                    "mats_messages": 0,
                    "smiles": 0,
                    "wall_posts": 0,
                    "documents": 0,
                    "photos": 0,
                    "videos": 0,
                    "audios": 0,
                    "commands": 0
                }
            })
        }
    }
}, {
    regexp: /^(\/|!|\+)reference$/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        _0x569bx3[_0x70ae[15]](_0x70ae[131])
    }
}, {
    regexp: /^(\/|!|\+)помощь$/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        _0x569bx3[_0x70ae[15]](_0x70ae[132])
    }
}, {
    regexp: /^(\/|!|\+)ahelp$/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        var _0x569bxd = 0;
        for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
            if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx3[_0x70ae[3]] && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                _0x569bxd = _0x569bx6
            }
        };
        if (chatmgrbase[_0x70ae[1]][_0x569bxd][_0x70ae[6]][_0x70ae[5]] == true) {
            _0x569bx3[_0x70ae[15]](_0x70ae[133])
        } else {
            if (chatmgrbase[_0x70ae[1]][_0x569bxd][_0x70ae[6]][_0x70ae[36]] == true) {
                _0x569bx3[_0x70ae[15]](_0x70ae[134])
            } else {
                if (chatmgrbase[_0x70ae[1]][_0x569bxd][_0x70ae[6]][_0x70ae[20]] == true) {
                    _0x569bx3[_0x70ae[15]](_0x70ae[135])
                }
            }
        }
    }
}, {
    regexp: /^(\/|!|\+)мур$/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        if (_0x569bx3[_0x70ae[4]] > 0) {
            _0x569bx3[_0x70ae[15]](_0x70ae[136])
        }
    }
}, {
    regexp: /^(\/|!|\+)обновить$/i,
    f: function (_0x569bx2, _0x569bx3, _0x569bx4) {
        chatmanager[_0x70ae[35]][_0x70ae[34]][_0x70ae[143]]({
            peer_id: _0x569bx3[_0x70ae[137]],
            cberr: 1
        }, function (_0x569bxb) {
            _0x569bxb[_0x70ae[99]][_0x70ae[142]][_0x70ae[97]](function (_0x569bx20) {
                function _0x569bx21(_0x569bx22) {
                    if (_0x569bx22[_0x70ae[2]] == _0x569bx20[_0x70ae[138]] && _0x569bx22[_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                        return _0x569bx22
                    }
                }

                function _0x569bx23(_0x569bx22) {
                    if (_0x569bx22[_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                        return _0x569bx22
                    }
                }
                var _0x569bx24 = chatmgrbase[_0x70ae[1]][_0x70ae[139]](_0x569bx21);
                var _0x569bx12 = chatmgrbase[_0x70ae[11]][_0x70ae[139]](_0x569bx23);
                if (_0x569bx12 < 0) {
                    return
                };
                if (_0x569bx20[_0x70ae[140]] == true) {
                    chatmgrbase[_0x70ae[1]][_0x569bx24][_0x70ae[6]][_0x70ae[5]] = true;
                    chatmgrbase[_0x70ae[1]][_0x569bx24][_0x70ae[6]][_0x70ae[36]] = true;
                    chatmgrbase[_0x70ae[1]][_0x569bx24][_0x70ae[6]][_0x70ae[20]] = true
                };
                _0x569bx3[_0x70ae[15]](`${_0x70ae[141]}`)
            })
        })
    }
}];

function checkChat(_0x569bx3) {
    var _0x569bxe = new Date();
    chatmanager[_0x70ae[35]][_0x70ae[34]][_0x70ae[143]]({
        peer_id: _0x569bx3[_0x70ae[137]],
        cberr: 1
    }, function (_0x569bxb) {
        if (!_0x569bxb[_0x70ae[23]]) {
            var _0x569bx26 = [];
            _0x569bxb[_0x70ae[99]][_0x70ae[142]][_0x70ae[97]](function (_0x569bx20) {
                _0x569bx26[_0x70ae[45]](_0x569bx20[_0x70ae[138]]);

                function _0x569bx27(_0x569bx22) {
                    if (_0x569bx22[_0x70ae[2]] == _0x569bx20[_0x70ae[138]] && _0x569bx22[_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                        return _0x569bx22
                    }
                }

                function _0x569bx28(_0x569bx22) {
                    if (_0x569bx22[_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                        return _0x569bx22
                    }
                }
                var _0x569bx24 = chatmgrbase[_0x70ae[1]][_0x70ae[139]](_0x569bx27);
                var _0x569bx12 = chatmgrbase[_0x70ae[11]][_0x70ae[139]](_0x569bx28);
                if (_0x569bx12 < 0) {
                    return
                };
                if (_0x569bx20[_0x70ae[144]] == true) {
                    chatmgrbase[_0x70ae[11]][_0x569bx12][_0x70ae[6]][_0x70ae[63]] = _0x569bx20[_0x70ae[138]]
                };
                if (_0x569bx24 < 0) {
                    if (_0x569bx20[_0x70ae[144]] == true) {
                        chatmgrbase[_0x70ae[1]][_0x70ae[45]]({
                            "chat_id": _0x569bx3[_0x70ae[4]],
                            "user_id": _0x569bx20[_0x70ae[138]],
                            "info": {
                                "in_chat": true,
                                "creator": true,
                                "specadmin": true,
                                "admin": true,
                                "moder": true,
                                "banned": false,
                                "muted": false,
                                "warns": [],
                                "bot_warns": 0
                            },
                            "stats": {
                                "joinchatdate": _0x569bxe[_0x70ae[43]](_0x70ae[42]),
                                "lastmsgdate": _0x70ae[44],
                                "messages": 0,
                                "symbols": 0,
                                "forwarded_messages": 0,
                                "audio_messages": 0,
                                "stikers": 0,
                                "mats_messages": 0,
                                "smiles": 0,
                                "wall_posts": 0,
                                "documents": 0,
                                "photos": 0,
                                "videos": 0,
                                "audios": 0,
                                "commands": 0
                            }
                        })
                    } else {
                        if (_0x569bx20[_0x70ae[140]] == true) {
                            chatmgrbase[_0x70ae[1]][_0x70ae[45]]({
                                "chat_id": _0x569bx3[_0x70ae[4]],
                                "user_id": _0x569bx20[_0x70ae[138]],
                                "info": {
                                    "in_chat": true,
                                    "creator": false,
                                    "specadmin": true,
                                    "admin": true,
                                    "moder": true,
                                    "banned": false,
                                    "muted": false,
                                    "warns": [],
                                    "bot_warns": 0
                                },
                                "stats": {
                                    "joinchatdate": _0x569bxe[_0x70ae[43]](_0x70ae[42]),
                                    "lastmsgdate": _0x70ae[44],
                                    "messages": 0,
                                    "symbols": 0,
                                    "forwarded_messages": 0,
                                    "audio_messages": 0,
                                    "stikers": 0,
                                    "mats_messages": 0,
                                    "smiles": 0,
                                    "wall_posts": 0,
                                    "documents": 0,
                                    "photos": 0,
                                    "videos": 0,
                                    "audios": 0,
                                    "commands": 0
                                }
                            })
                        } else {
                            chatmgrbase[_0x70ae[1]][_0x70ae[45]]({
                                "chat_id": _0x569bx3[_0x70ae[4]],
                                "user_id": _0x569bx20[_0x70ae[138]],
                                "info": {
                                    "in_chat": true,
                                    "creator": false,
                                    "specadmin": false,
                                    "admin": false,
                                    "moder": false,
                                    "banned": false,
                                    "muted": false,
                                    "warns": [],
                                    "bot_warns": 0
                                },
                                "stats": {
                                    "joinchatdate": _0x569bxe[_0x70ae[43]](_0x70ae[42]),
                                    "lastmsgdate": _0x70ae[44],
                                    "messages": 0,
                                    "symbols": 0,
                                    "forwarded_messages": 0,
                                    "audio_messages": 0,
                                    "stikers": 0,
                                    "mats_messages": 0,
                                    "smiles": 0,
                                    "wall_posts": 0,
                                    "documents": 0,
                                    "photos": 0,
                                    "videos": 0,
                                    "audios": 0,
                                    "commands": 0
                                }
                            })
                        }
                    }
                } else {
                    if (_0x569bx20[_0x70ae[140]] == true) {
                        chatmgrbase[_0x70ae[1]][_0x569bx24][_0x70ae[6]][_0x70ae[5]] = true;
                        chatmgrbase[_0x70ae[1]][_0x569bx24][_0x70ae[6]][_0x70ae[36]] = true;
                        chatmgrbase[_0x70ae[1]][_0x569bx24][_0x70ae[6]][_0x70ae[20]] = true
                    }
                }
            });
            chatmgrbase[_0x70ae[1]][_0x70ae[97]](function (_0x569bx20) {
                if (_0x569bx20[_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                    if (_0x569bx26[_0x70ae[145]](_0x569bx20[_0x70ae[2]]) == -1) {
                        _0x569bx20[_0x70ae[6]][_0x70ae[22]] = false
                    } else {
                        _0x569bx20[_0x70ae[6]][_0x70ae[22]] = true
                    }
                }
            });
            mgrupd_db();
            _0x569bx3[_0x70ae[15]](_0x70ae[146])
        } else {
            _0x569bx3[_0x70ae[15]](_0x70ae[147])
        }
    })
}

function updChat(_0x569bx3) {
    var _0x569bxe = new Date();
    chatmanager[_0x70ae[35]][_0x70ae[34]][_0x70ae[143]]({
        peer_id: _0x569bx3[_0x70ae[137]],
        cberr: 1
    }, function (_0x569bxb) {
        if (!_0x569bxb[_0x70ae[23]]) {
            var _0x569bx26 = [];
            _0x569bxb[_0x70ae[99]][_0x70ae[142]][_0x70ae[97]](function (_0x569bx20) {
                _0x569bx26[_0x70ae[45]](_0x569bx20[_0x70ae[138]]);

                function _0x569bx27(_0x569bx22) {
                    if (_0x569bx22[_0x70ae[2]] == _0x569bx20[_0x70ae[138]] && _0x569bx22[_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                        return _0x569bx22
                    }
                }

                function _0x569bx28(_0x569bx22) {
                    if (_0x569bx22[_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                        return _0x569bx22
                    }
                }
                var _0x569bx24 = chatmgrbase[_0x70ae[1]][_0x70ae[139]](_0x569bx27);
                var _0x569bx12 = chatmgrbase[_0x70ae[11]][_0x70ae[139]](_0x569bx28);
                if (_0x569bx12 < 0) {
                    return
                };
                if (_0x569bx20[_0x70ae[144]] == true) {
                    chatmgrbase[_0x70ae[11]][_0x569bx12][_0x70ae[6]][_0x70ae[63]] = _0x569bx20[_0x70ae[138]]
                };
                if (_0x569bx24 < 0) {
                    if (_0x569bx20[_0x70ae[144]] == true) {
                        chatmgrbase[_0x70ae[1]][_0x70ae[45]]({
                            "chat_id": _0x569bx3[_0x70ae[4]],
                            "user_id": _0x569bx20[_0x70ae[138]],
                            "info": {
                                "in_chat": true,
                                "creator": true,
                                "specadmin": true,
                                "admin": true,
                                "moder": true,
                                "banned": false,
                                "muted": false,
                                "warns": [],
                                "bot_warns": 0
                            },
                            "stats": {
                                "joinchatdate": _0x569bxe[_0x70ae[43]](_0x70ae[42]),
                                "lastmsgdate": _0x70ae[44],
                                "messages": 0,
                                "symbols": 0,
                                "forwarded_messages": 0,
                                "audio_messages": 0,
                                "stikers": 0,
                                "mats_messages": 0,
                                "smiles": 0,
                                "wall_posts": 0,
                                "documents": 0,
                                "photos": 0,
                                "videos": 0,
                                "audios": 0,
                                "commands": 0
                            }
                        })
                    } else {
                        if (_0x569bx20[_0x70ae[140]] == true) {
                            chatmgrbase[_0x70ae[1]][_0x70ae[45]]({
                                "chat_id": _0x569bx3[_0x70ae[4]],
                                "user_id": _0x569bx20[_0x70ae[138]],
                                "info": {
                                    "in_chat": true,
                                    "creator": false,
                                    "specadmin": true,
                                    "admin": true,
                                    "moder": true,
                                    "banned": false,
                                    "muted": false,
                                    "warns": [],
                                    "bot_warns": 0
                                },
                                "stats": {
                                    "joinchatdate": _0x569bxe[_0x70ae[43]](_0x70ae[42]),
                                    "lastmsgdate": _0x70ae[44],
                                    "messages": 0,
                                    "symbols": 0,
                                    "forwarded_messages": 0,
                                    "audio_messages": 0,
                                    "stikers": 0,
                                    "mats_messages": 0,
                                    "smiles": 0,
                                    "wall_posts": 0,
                                    "documents": 0,
                                    "photos": 0,
                                    "videos": 0,
                                    "audios": 0,
                                    "commands": 0
                                }
                            })
                        } else {
                            chatmgrbase[_0x70ae[1]][_0x70ae[45]]({
                                "chat_id": _0x569bx3[_0x70ae[4]],
                                "user_id": _0x569bx20[_0x70ae[138]],
                                "info": {
                                    "in_chat": true,
                                    "creator": false,
                                    "specadmin": false,
                                    "admin": false,
                                    "moder": false,
                                    "banned": false,
                                    "muted": false,
                                    "warns": [],
                                    "bot_warns": 0
                                },
                                "stats": {
                                    "joinchatdate": _0x569bxe[_0x70ae[43]](_0x70ae[42]),
                                    "lastmsgdate": _0x70ae[44],
                                    "messages": 0,
                                    "symbols": 0,
                                    "forwarded_messages": 0,
                                    "audio_messages": 0,
                                    "stikers": 0,
                                    "mats_messages": 0,
                                    "smiles": 0,
                                    "wall_posts": 0,
                                    "documents": 0,
                                    "photos": 0,
                                    "videos": 0,
                                    "audios": 0,
                                    "commands": 0
                                }
                            })
                        }
                    }
                } else {
                    if (_0x569bx20[_0x70ae[140]] == true) {
                        chatmgrbase[_0x70ae[1]][_0x569bx24][_0x70ae[6]][_0x70ae[5]] = true;
                        chatmgrbase[_0x70ae[1]][_0x569bx24][_0x70ae[6]][_0x70ae[36]] = true;
                        chatmgrbase[_0x70ae[1]][_0x569bx24][_0x70ae[6]][_0x70ae[20]] = true
                    }
                }
            });
            chatmgrbase[_0x70ae[1]][_0x70ae[97]](function (_0x569bx20) {
                if (_0x569bx20[_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
                    if (_0x569bx26[_0x70ae[145]](_0x569bx20[_0x70ae[2]]) == -1) {
                        _0x569bx20[_0x70ae[6]][_0x70ae[22]] = false
                    } else {
                        _0x569bx20[_0x70ae[6]][_0x70ae[22]] = true
                    }
                }
            });
            mgrupd_db()
        }
    })
}

function randomUid() {
    var _0x569bx2b = _0x70ae[148];
    var _0x569bx2c = _0x70ae[127];
    for (var _0x569bx6 = 0; _0x569bx6 < 23; _0x569bx6++) {
        if (_0x569bx6 == 5 || _0x569bx6 == 11 || _0x569bx6 == 17) {
            _0x569bx2c += _0x70ae[149]
        } else {
            var _0x569bx2d = Math[_0x70ae[151]](Math[_0x70ae[150]]() * _0x569bx2b[_0x70ae[0]]);
            _0x569bx2c += _0x569bx2b[_0x70ae[152]](_0x569bx2d, _0x569bx2d + 1)
        }
    };
    return _0x569bx2c
}

function ratingchats(_0x569bx3) {
    var _0x569bx2f = [];
    for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[11]][_0x70ae[0]]; _0x569bx6++) {
        if (chatmgrbase[_0x70ae[11]][_0x569bx6][_0x70ae[6]][_0x70ae[153]] == false) {
            _0x569bx2f[_0x70ae[45]]({
                cid: chatmgrbase[_0x70ae[11]][_0x569bx6][_0x70ae[4]],
                messages: chatmgrbase[_0x70ae[11]][_0x569bx6][_0x70ae[69]][_0x70ae[34]],
                title: chatmgrbase[_0x70ae[11]][_0x569bx6][_0x70ae[6]][_0x70ae[10]],
                creator: chatmgrbase[_0x70ae[11]][_0x569bx6][_0x70ae[6]][_0x70ae[63]]
            })
        }
    };
    _0x569bx2f[_0x70ae[154]](function (_0x569bxb, _0x569bx30) {
        if (_0x569bx30[_0x70ae[34]] > _0x569bxb[_0x70ae[34]]) {
            return 1
        };
        if (_0x569bx30[_0x70ae[34]] < _0x569bxb[_0x70ae[34]]) {
            return -1
        };
        return 0
    });
    var _0x569bx31 = [];
    var _0x569bx32 = 0;
    for (var _0x569bx24 = 0; _0x569bx24 < 10; _0x569bx24++) {
        if (_0x569bx2f[_0x70ae[0]] > _0x569bx24) {
            _0x569bx32++;
            _0x569bx31[_0x70ae[45]]({
                cid: _0x569bx2f[_0x569bx24][_0x70ae[155]],
                messages: _0x569bx2f[_0x569bx24][_0x70ae[34]],
                title: _0x569bx2f[_0x569bx24][_0x70ae[10]],
                creator: _0x569bx2f[_0x569bx24][_0x70ae[63]],
                num: _0x569bx32
            })
        }
    };
    var _0x569bx6 = 1;
    var _0x569bx33 = 1;
    var _0x569bx34 = 0;
    var _0x569bx1f = _0x70ae[156] + _0x569bx31[_0x70ae[97]]((_0x569bxb) => _0x569bx6++ + _0x70ae[107] + (_0x569bxb[_0x70ae[157]] == 1 ? _0x70ae[158] : _0x70ae[127]) + (_0x569bxb[_0x70ae[157]] == 2 ? _0x70ae[159] : _0x70ae[127]) + (_0x569bxb[_0x70ae[157]] == 3 ? _0x70ae[160] : _0x70ae[127]) + _0x70ae[161] + _0x569bxb[_0x70ae[10]] + _0x70ae[162] + _0x70ae[163] + _0x569bxb[_0x70ae[63]])[_0x70ae[101]](_0x70ae[106]);
    _0x569bx3[_0x70ae[15]](_0x569bx1f)
}

function chatstats(_0x569bx3) {
    var _0x569bx2f = [];
    var _0x569bx36 = [];
    for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
        if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]] && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] > 0 && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[6]][_0x70ae[22]] == true) {
            _0x569bx2f[_0x70ae[45]]({
                id: chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]],
                messages: chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[69]][_0x70ae[34]]
            })
        }
    };
    _0x569bx2f[_0x70ae[154]](function (_0x569bxb, _0x569bx30) {
        if (_0x569bx30[_0x70ae[34]] > _0x569bxb[_0x70ae[34]]) {
            return 1
        };
        if (_0x569bx30[_0x70ae[34]] < _0x569bxb[_0x70ae[34]]) {
            return -1
        };
        return 0
    });
    var _0x569bx31 = [];
    for (var _0x569bx24 = 0; _0x569bx24 < 10; _0x569bx24++) {
        if (_0x569bx2f[_0x70ae[0]] > _0x569bx24) {
            _0x569bx36[_0x70ae[45]](_0x569bx2f[_0x569bx24][_0x70ae[108]]);
            _0x569bx31[_0x70ae[45]]({
                id: _0x569bx2f[_0x569bx24][_0x70ae[108]],
                messages: _0x569bx2f[_0x569bx24][_0x70ae[34]]
            })
        }
    };
    var _0x569bx6 = 1;
    var _0x569bx33 = 1;
    var _0x569bx34 = 0;
    var _0x569bx37 = null;
    for (var _0x569bx38 = 0; _0x569bx38 < chatmgrbase[_0x70ae[11]][_0x70ae[0]]; _0x569bx38++) {
        if (chatmgrbase[_0x70ae[11]][_0x569bx38][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
            _0x569bx37 = _0x569bx38
        }
    };
    if (_0x569bx37 != null) {
        var _0x569bx11 = chatmanager[_0x70ae[104]][_0x70ae[1]][_0x70ae[103]]({
            user_ids: _0x569bx36[_0x70ae[101]](_0x70ae[100]),
            fields: _0x70ae[102]
        })[_0x70ae[99]];
        var _0x569bx1f = _0x70ae[164] + _0x569bx31[_0x70ae[97]]((_0x569bxb) => _0x569bx6++ + _0x70ae[107] + _0x569bx11[_0x70ae[98]]((_0x569bx14) => _0x569bx14[_0x70ae[108]] == _0x569bxb[_0x70ae[108]])[0][_0x70ae[102]] + _0x70ae[109] + _0x569bx11[_0x70ae[98]]((_0x569bx14) => _0x569bx14[_0x70ae[108]] == _0x569bxb[_0x70ae[108]])[0][_0x70ae[110]] + _0x70ae[165] + _0x569bxb[_0x70ae[108]] + _0x70ae[166] + _0x569bxb[_0x70ae[34]] + _0x70ae[167])[_0x70ae[101]](_0x70ae[106]);
        _0x569bx3[_0x70ae[15]](_0x70ae[168] + chatmgrbase[_0x70ae[11]][_0x569bx37][_0x70ae[69]][_0x70ae[34]] + _0x70ae[73] + chatmgrbase[_0x70ae[11]][_0x569bx37][_0x70ae[69]][_0x70ae[74]] + _0x70ae[75] + chatmgrbase[_0x70ae[11]][_0x569bx37][_0x70ae[69]][_0x70ae[76]] + _0x70ae[77] + chatmgrbase[_0x70ae[11]][_0x569bx37][_0x70ae[69]][_0x70ae[78]] + _0x70ae[79] + chatmgrbase[_0x70ae[11]][_0x569bx37][_0x70ae[69]][_0x70ae[80]] + _0x70ae[81] + chatmgrbase[_0x70ae[11]][_0x569bx37][_0x70ae[69]][_0x70ae[82]] + _0x70ae[83] + chatmgrbase[_0x70ae[11]][_0x569bx37][_0x70ae[69]][_0x70ae[84]] + _0x70ae[85] + chatmgrbase[_0x70ae[11]][_0x569bx37][_0x70ae[69]][_0x70ae[86]] + _0x70ae[87] + chatmgrbase[_0x70ae[11]][_0x569bx37][_0x70ae[69]][_0x70ae[88]] + _0x70ae[89] + chatmgrbase[_0x70ae[11]][_0x569bx37][_0x70ae[69]][_0x70ae[90]] + _0x70ae[91] + chatmgrbase[_0x70ae[11]][_0x569bx37][_0x70ae[69]][_0x70ae[92]] + _0x70ae[93] + chatmgrbase[_0x70ae[11]][_0x569bx37][_0x70ae[69]][_0x70ae[94]] + _0x70ae[95] + chatmgrbase[_0x70ae[11]][_0x569bx37][_0x70ae[69]][_0x70ae[96]] + _0x569bx1f)
    }
}
String[_0x70ae[170]][_0x70ae[169]] = function () {
    var _0x569bx39 = parseInt(this, 10);
    var _0x569bx3a = Math[_0x70ae[151]](_0x569bx39 / 3600);
    var _0x569bx3b = Math[_0x70ae[151]]((_0x569bx39 - (_0x569bx3a * 3600)) / 60);
    var _0x569bx3c = _0x569bx39 - (_0x569bx3a * 3600) - (_0x569bx3b * 60);
    var _0x569bx3d = Math[_0x70ae[151]](_0x569bx3a / 24, -1);
    if (_0x569bx3a < 10) {
        _0x569bx3a = _0x70ae[171] + _0x569bx3a
    };
    if (_0x569bx3b < 10) {
        _0x569bx3b = _0x70ae[171] + _0x569bx3b
    };
    if (_0x569bx3c < 10) {
        _0x569bx3c = _0x70ae[171] + _0x569bx3c
    };
    var _0x569bx3e = (_0x569bx3d < 10 ? _0x70ae[171] : _0x70ae[127]) + _0x569bx3d + _0x70ae[172] + (_0x569bx3a < 10 ? _0x70ae[171] : _0x70ae[127]) + (_0x569bx3a - (24 * _0x569bx3d)) + _0x70ae[172] + _0x569bx3b + _0x70ae[172] + _0x569bx3c;
    return _0x569bx3e
};

function daydiff(_0x569bx40, _0x569bx41) {
    return Math[_0x70ae[173]]((_0x569bx41 - _0x569bx40) / (1000 * 60 * 60 * 24))
}

function mgrwarnChatUser(_0x569bx43, _0x569bx44) {
    var _0x569bx1e = null;
    for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[11]][_0x70ae[0]]; _0x569bx6++) {
        if (chatmgrbase[_0x70ae[11]][_0x569bx6][_0x70ae[4]] == _0x569bx44) {
            _0x569bx1e = _0x569bx6
        }
    };
    var _0x569bx5 = null;
    for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
        if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx43 && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx44) {
            _0x569bx5 = _0x569bx6
        }
    };
    if (_0x569bx5 != null) {
        chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[50]][_0x70ae[45]]({
            "admin_id": 0
        });
        if (chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[50]][_0x70ae[0]] == 3) {
            chatmanager[_0x70ae[35]][_0x70ae[34]][_0x70ae[33]]({
                member_id: _0x569bx43,
                chat_id: _0x569bx44,
                cberr: 1
            }, function (_0x569bx45) {
                chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[50]] = [];
                chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[22]] = false;
                chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[6]][_0x70ae[38]] = true;
                mgrupd_db();
                chatmanager[_0x70ae[35]][_0x70ae[34]][_0x70ae[15]]({
                    chat_id: _0x569bx44,
                    message: lang[chatmgrbase[_0x70ae[11]][_0x569bx1e][_0x70ae[27]][_0x70ae[26]]][_0x70ae[174]]
                })
            })
        }
    } else {
        var _0x569bxe = new Date();
        chatmgrbase[_0x70ae[1]][_0x70ae[45]]({
            "chat_id": msg[_0x70ae[4]],
            "user_id": c[_0x70ae[138]],
            "info": {
                "in_chat": true,
                "creator": false,
                "specadmin": false,
                "admin": false,
                "moder": false,
                "banned": false,
                "muted": false,
                "warns": [{
                    "admin_id": 0
                }],
                "bot_warns": 0
            },
            "stats": {
                "joinchatdate": _0x569bxe[_0x70ae[43]](_0x70ae[42]),
                "lastmsgdate": _0x70ae[44],
                "messages": 0,
                "symbols": 0,
                "forwarded_messages": 0,
                "audio_messages": 0,
                "stikers": 0,
                "mats_messages": 0,
                "smiles": 0,
                "wall_posts": 0,
                "documents": 0,
                "photos": 0,
                "videos": 0,
                "audios": 0,
                "commands": 0
            }
        });
        mgrupd_db()
    }
}

function findUserInMessage(_0x569bx3, _0x569bx47) {
    var _0x569bx9 = 0;
    if (_0x569bx3[_0x70ae[7]][_0x70ae[16]](/(.*)vk\.com\/(.*)/)) {
        var _0x569bx48 = /(https:\/\/|)vk\.com\/(.*)/;
        var _0x569bx49 = _0x569bx3[_0x70ae[7]][_0x70ae[16]](_0x569bx48);
        chatmanager[_0x70ae[35]][_0x70ae[180]][_0x70ae[179]]({
            screen_name: _0x569bx49[2]
        }, function (_0x569bxb) {
            if (_0x569bxb[_0x70ae[99]][_0x70ae[175]] == _0x70ae[176]) {
                _0x569bxb[_0x70ae[99]][_0x70ae[177]] = parseInt(_0x70ae[149] + _0x569bxb[_0x70ae[99]][_0x70ae[177]]);
                _0x569bx9 = _0x569bxb[_0x70ae[99]][_0x70ae[177]]
            } else {
                if (_0x569bxb[_0x70ae[99]][_0x70ae[175]] == _0x70ae[178]) {
                    _0x569bx9 = _0x569bxb[_0x70ae[99]][_0x70ae[177]]
                }
            };
            _0x569bx47(_0x569bx9)
        })
    } else {
        if (_0x569bx3[_0x70ae[7]][_0x70ae[16]](/\[id(\d+)\|(.*)\]/)) {
            var _0x569bx4a = /\[id(\d+)\|(.*)\]/;
            var _0x569bx9 = _0x569bx3[_0x70ae[7]][_0x70ae[16]](_0x569bx4a);
            _0x569bx9 = parseInt(_0x569bx9[1]);
            _0x569bx47(_0x569bx9)
        } else {
            if (_0x569bx3[_0x70ae[7]][_0x70ae[16]](/\[club(\d+)\|(.*)\]/)) {
                var _0x569bx4b = /\[club(\d+)\|(.*)\]/;
                var _0x569bx4c = _0x569bx3[_0x70ae[7]][_0x70ae[16]](_0x569bx4b);
                _0x569bx9 = parseInt(parseInt(_0x70ae[149] + _0x569bx4c[1]));
                _0x569bx47(_0x569bx9)
            } else {
                if (_0x569bx3[_0x70ae[181]][_0x70ae[0]] != 0) {
                    _0x569bx9 = _0x569bx3[_0x70ae[181]][0][_0x70ae[3]];
                    _0x569bx47(_0x569bx9)
                }
            }
        }
    }
}

function chatmgrAddStats(_0x569bx3) {
    var _0x569bx1e = null;
    for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[11]][_0x70ae[0]]; _0x569bx6++) {
        if (chatmgrbase[_0x70ae[11]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
            _0x569bx1e = _0x569bx6
        }
    };
    var _0x569bx5 = null;
    for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
        if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx3[_0x70ae[3]] && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx3[_0x70ae[4]]) {
            _0x569bx5 = _0x569bx6
        }
    };
    var _0x569bxe = new Date();
    if (_0x569bx1e == null) {
        return
    };
    if (_0x569bx5 == null) {
        _0x569bx5 = chatmgrbase[_0x70ae[1]][_0x70ae[0]];
        chatmgrbase[_0x70ae[1]][_0x70ae[45]]({
            "chat_id": _0x569bx3[_0x70ae[4]],
            "user_id": _0x569bx3[_0x70ae[3]],
            "info": {
                "in_chat": true,
                "creator": false,
                "specadmin": false,
                "admin": false,
                "moder": false,
                "banned": false,
                "muted": false,
                "warns": [],
                "bot_warns": 0
            },
            "stats": {
                "joinchatdate": _0x569bxe[_0x70ae[43]](_0x70ae[42]),
                "lastmsgdate": _0x70ae[44],
                "messages": 0,
                "symbols": 0,
                "forwarded_messages": 0,
                "audio_messages": 0,
                "stikers": 0,
                "mats_messages": 0,
                "smiles": 0,
                "wall_posts": 0,
                "documents": 0,
                "photos": 0,
                "videos": 0,
                "audios": 0,
                "commands": 0
            }
        })
    } else {
        _0x569bx5 = _0x569bx5
    };
    chatmgrbase[_0x70ae[11]][_0x569bx1e][_0x70ae[69]][_0x70ae[34]] += 1;
    chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[34]] += 1;
    if (_0x569bx3[_0x70ae[7]]) {
        chatmgrbase[_0x70ae[11]][_0x569bx1e][_0x70ae[69]][_0x70ae[74]] += _0x569bx3[_0x70ae[7]][_0x70ae[0]];
        chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[74]] += _0x569bx3[_0x70ae[7]][_0x70ae[0]];
        var _0x569bx4e = _0x569bx3[_0x70ae[7]][_0x70ae[16]](/([\uD800-\uDBFF][\uDC00-\uDFFF])/g);
        if (_0x569bx4e != null) {
            chatmgrbase[_0x70ae[11]][_0x569bx1e][_0x70ae[69]][_0x70ae[90]] += _0x569bx4e[_0x70ae[0]];
            chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[90]] += _0x569bx4e[_0x70ae[0]]
        };
        if (_0x569bx3[_0x70ae[7]][_0x70ae[16]](/(6ля|6лядь|6лять|b3ъeб|cock|cunt|e6aль|ebal|eblan|eбaл|eбaть|eбyч|eбать|eбёт|eблантий|fuck|fucker|fucking|xyёв|xyй|xyя|xуе|xуй|xую|zaeb|zaebal|zaebali|zaebat|архипиздрит|ахуел|ахуеть|бздение|бздеть|бздех|бздецы|бздит|бздицы|бздло|бзднуть|бздун|бздунья|бздюха|бздюшка|бздюшко|бля|блябу|блябуду|бляд|бляди|блядина|блядище|блядки|блядовать|блядство|блядун|блядуны|блядунья|блядь|блядюга|блять|вафел|вафлёр|взъебка|взьебка|взьебывать|въеб|въебался|въебенн|въебусь|въебывать|выблядок|выблядыш|выеб|выебать|выебен|выебнулся|выебон|выебываться|выпердеть|высраться|выссаться|вьебен|гавно|гавнюк|гавнючка|гамно|гандон|гнид|гнида|гниды|говенка|говенный|говешка|говназия|говнецо|говнище|говно|говноед|говнолинк|говночист|говнюк|говнюха|говнядина|говняк|говняный|говнять|гондон|доебываться|долбоеб|долбоёб|долбоящер|дота|дрисня|дрист|дристануть|дристать|дристун|дристуха|дрочелло|дрочена|дрочила|дрочилка|дрочистый|дрочить|дрочка|дрочун|е6ал|е6ут|еб твою мать|ёб твою мать|ёбaн|ебaть|ебyч|ебал|ебало|ебальник|ебан|ебанамать|ебанат|ебаная|ёбаная|ебанический|ебанный|ебанныйврот|ебаное|ебануть|ебануться|ёбаную|ебаный|ебанько|ебарь|ебат|ёбат|ебатория|ебать|ебать-копать|ебаться|ебашить|ебёна|ебет|ебёт|ебец|ебик|ебин|ебись|ебическая|ебки|ебла|еблан|ебливый|еблище|ебло|еблысть|ебля|ёбн|ебнуть|ебнуться|ебня|ебошить|ебская|ебский|ебтвоюмать|ебун|ебут|ебуч|ебуче|ебучее|ебучий|ебучим|ебущ|ебырь|елда|елдак|елдачить|жопа|жопу|заговнять|задрачивать|задристать|задрота|зае6|заё6|заеб|заёб|заеба|заебал|заебанец|заебастая|заебастый|заебать|заебаться|заебашить|заебистое|заёбистое|заебистые|заёбистые|заебистый|заёбистый|заебись|заебошить|заебываться|залуп|залупа|залупаться|залупить|залупиться|замудохаться|запиздячить|засерать|засерун|засеря|засирать|засрун|захуячить|заябестая|злоеб|злоебучая|злоебучее|злоебучий|ибанамат|ибонех|изговнять|изговняться|изъебнуться|ипать|ипаться|ипаццо|какдвапальцаобоссать|конча|курва|курвятник|лох|лошарa|лошара|лошары|лошок|лярва|малафья|манда|мандавошек|мандавошка|мандавошки|мандей|мандень|мандеть|мандища|мандой|манду|мандюк|минет|минетчик|минетчица|млять|мокрощелка|мокрощёлка|мразь|мудak|мудaк|мудаг|мудак|муде|мудель|мудеть|муди|мудил|мудила|мудистый|мудня|мудоеб|мудозвон|мудоклюй|на хер|на хуй|набздел|набздеть|наговнять|надристать|надрочить|наебать|наебет|наебнуть|наебнуться|наебывать|напиздел|напиздели|напиздело|напиздили|насрать|настопиздить|нахер|нахрен|нахуй|нахуйник|не ебет|не ебёт|невротебучий|невъебенно|нехира|нехрен|нехуй|нехуйственно|ниибацо|ниипацца|ниипаццо|ниипет|никуя|нихера|нихуя|обдристаться|обосранец|обосрать|обосцать|обосцаться|обсирать|объебос|обьебать|обьебос|однохуйственно|опездал|опизде|опизденивающе|остоебенить|остопиздеть|отмудохать|отпиздить|отпиздячить|отпороть|отъебись|охуевательский|охуевать|охуевающий|охуел|охуенно|охуеньчик|охуеть|охуительно|охуительный|охуяньчик|охуячивать|охуячить|очкун|падла|падонки|падонок|паскуда|педерас|педик|педрик|педрила|педрилло|педрило|педрилы|пездень|пездит|пездишь|пездо|пездят|пердануть|пердеж|пердение|пердеть|пердильник|перднуть|пёрднуть|пердун|пердунец|пердунина|пердунья|пердуха|пердь|переёбок|пернуть|пёрнуть|пи3д|пи3де|пи3ду|пиzдец|пидар|пидарaс|пидарас|пидарасы|пидары|пидор|пидорасы|пидорка|пидорок|пидоры|пидрас|пизда|пиздануть|пиздануться|пиздарваньчик|пиздато|пиздатое|пиздатый|пизденка|пизденыш|пиздёныш|пиздеть|пиздец|пиздит|пиздить|пиздиться|пиздишь|пиздища|пиздище|пиздобол|пиздоболы|пиздобратия|пиздоватая|пиздоватый|пиздолиз|пиздонутые|пиздорванец|пиздорванка|пиздострадатель|пизду|пиздуй|пиздун|пиздунья|пизды|пиздюга|пиздюк|пиздюлина|пиздюля|пиздят|пиздячить|писбшки|писька|писькострадатель|писюн|писюшка|по хуй|по хую|подговнять|подонки|подонок|подъебнуть|подъебнуться|поебать|поебень|поёбываает|поскуда|посрать|потаскуха|потаскушка|похер|похерил|похерила|похерили|похеру|похрен|похрену|похуй|похуист|похуистка|похую|придурок|приебаться|припиздень|припизднутый|припиздюлина|пробзделся|проблядь|проеб|проебанка|проебать|промандеть|промудеть|пропизделся|пропиздеть|пропиздячить|раздолбай|разхуячить|разъеб|разъеба|разъебай|разъебать|распиздай|распиздеться|распиздяй|распиздяйство|распроеть|сволота|сволочь|сговнять|секель|серун|серька|сестроеб|сикель|сила|сирать|сирывать|соси|спиздел|спиздеть|спиздил|спиздила|спиздили|спиздит|спиздить|срака|сраку|сраный|сранье|срать|срун|ссака|ссышь|стерва|страхопиздище|сука|суки|суходрочка|сучара|сучий|сучка|сучко|сучонок|сучье|сцание|сцать|сцука|сцуки|сцуконах|сцуль|сцыха|сцышь|съебаться|сыкун|трахае6|трахаеб|трахаёб|трахатель|ублюдок|уебать|уёбища|уебище|уёбище|уебищное|уёбищное|уебк|уебки|уёбки|уебок|уёбок|урюк|усраться|ушлепок|х_у_я_р_а|хyё|хyй|хyйня|хамло|хер|херня|херовато|херовина|херовый|хитровыебанный|хитрожопый|хуeм|хуе|хуё|хуевато|хуёвенький|хуевина|хуево|хуевый|хуёвый|хуек|хуёк|хуел|хуем|хуенч|хуеныш|хуенький|хуеплет|хуеплёт|хуепромышленник|хуерик|хуерыло|хуесос|хуесоска|хуета|хуетень|хуею|хуи|хуй|хуйком|хуйло|хуйня|хуйрик|хуище|хуля|хую|хуюл|хуя|хуяк|хуякать|хуякнуть|хуяра|хуясе|хуячить|целка|чмо|чмошник|чмырь|шалава|шалавой|шараёбиться|шлюха|шлюхой|шлюшка|ябывает)/i)) {
            chatmgrbase[_0x70ae[11]][_0x569bx1e][_0x70ae[69]][_0x70ae[88]] += 1;
            chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[88]] += 1
        };
        var _0x569bx4f = false;
        for (var _0x569bx6 = 0; _0x569bx6 < chatmgr_chat[_0x70ae[0]]; _0x569bx6++) {
            if (_0x569bx3[_0x70ae[7]][_0x70ae[16]](chatmgr_chat[_0x569bx6][_0x70ae[182]])) {
                _0x569bx4f = true
            }
        };
        if (_0x569bx4f == true) {
            chatmgrbase[_0x70ae[11]][_0x569bx1e][_0x70ae[69]][_0x70ae[84]] += 1;
            chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[84]] += 1
        }
    };
    _0x569bx3[_0x70ae[190]][_0x70ae[97]](function (_0x569bxb) {
        if (_0x569bxb[_0x70ae[175]] == _0x70ae[183]) {
            chatmgrbase[_0x70ae[11]][_0x569bx1e][_0x70ae[69]][_0x70ae[78]] += 1;
            chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[78]] += 1
        } else {
            if (_0x569bxb[_0x70ae[175]] == _0x70ae[184]) {
                chatmgrbase[_0x70ae[11]][_0x569bx1e][_0x70ae[69]][_0x70ae[86]] += 1;
                chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[86]] += 1
            } else {
                if (_0x569bxb[_0x70ae[175]] == _0x70ae[185]) {
                    chatmgrbase[_0x70ae[11]][_0x569bx1e][_0x70ae[69]][_0x70ae[80]] += 1;
                    chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[80]] += 1
                } else {
                    if (_0x569bxb[_0x70ae[175]] == _0x70ae[186]) {
                        chatmgrbase[_0x70ae[11]][_0x569bx1e][_0x70ae[69]][_0x70ae[82]] += 1;
                        chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[82]] += 1
                    } else {
                        if (_0x569bxb[_0x70ae[175]] == _0x70ae[187]) {
                            chatmgrbase[_0x70ae[11]][_0x569bx1e][_0x70ae[69]][_0x70ae[92]] += 1;
                            chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[92]] += 1
                        } else {
                            if (_0x569bxb[_0x70ae[175]] == _0x70ae[188]) {
                                chatmgrbase[_0x70ae[11]][_0x569bx1e][_0x70ae[69]][_0x70ae[94]] += 1;
                                chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[94]] += 1
                            } else {
                                if (_0x569bxb[_0x70ae[175]] == _0x70ae[189]) {
                                    chatmgrbase[_0x70ae[11]][_0x569bx1e][_0x70ae[69]][_0x70ae[96]] += 1;
                                    chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[96]] += 1
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    if (_0x569bx3[_0x70ae[181]][_0x70ae[0]] > 0) {
        chatmgrbase[_0x70ae[11]][_0x569bx1e][_0x70ae[69]][_0x70ae[76]] += _0x569bx3[_0x70ae[181]][_0x70ae[0]];
        chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[76]] += _0x569bx3[_0x70ae[181]][_0x70ae[0]]
    };
    chatmgrbase[_0x70ae[1]][_0x569bx5][_0x70ae[69]][_0x70ae[71]] = new Date();
    mgrupd_db()
}

function statsRole(_0x569bx43, _0x569bx44) {
    var _0x569bx51 = _0x70ae[191];
    var _0x569bx52 = {};
    var _0x569bx1e = 1;
    for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
        if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx43 && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx44) {
            _0x569bx1e = _0x569bx6
        }
    };
    if (_0x569bx1e != null) {
        _0x569bx52[_0x70ae[63]] = chatmgrbase[_0x70ae[1]][_0x569bx1e][_0x70ae[63]];
        _0x569bx52[_0x70ae[5]] = chatmgrbase[_0x70ae[1]][_0x569bx1e][_0x70ae[5]];
        _0x569bx52[_0x70ae[36]] = chatmgrbase[_0x70ae[1]][_0x569bx1e][_0x70ae[36]];
        _0x569bx52[_0x70ae[20]] = chatmgrbase[_0x70ae[1]][_0x569bx1e][_0x70ae[20]]
    } else {
        if (_0x569bx1e == null) {
            _0x569bx52[_0x70ae[63]] = false;
            _0x569bx52[_0x70ae[5]] = false;
            _0x569bx52[_0x70ae[36]] = false;
            _0x569bx52[_0x70ae[20]] = false
        }
    };
    if (_0x569bx52[_0x70ae[63]] == true) {
        _0x569bx51 = _0x70ae[64]
    } else {
        if (_0x569bx52[_0x70ae[5]] == true) {
            _0x569bx51 = _0x70ae[192]
        } else {
            if (_0x569bx52[_0x70ae[36]] == true) {
                _0x569bx51 + _0x70ae[61]
            } else {
                if (_0x569bx52[_0x70ae[20]] == true) {
                    _0x569bx51 = _0x70ae[193]
                } else {
                    _0x569bx51 = _0x70ae[191]
                }
            }
        }
    };
    return _0x569bx51
}

function chatmgrCheckStaff(_0x569bx43, _0x569bx44, _0x569bx54) {
    var _0x569bx52 = {};
    var _0x569bx1e = 1;
    for (var _0x569bx6 = 0; _0x569bx6 < chatmgrbase[_0x70ae[1]][_0x70ae[0]]; _0x569bx6++) {
        if (chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[2]] == _0x569bx43 && chatmgrbase[_0x70ae[1]][_0x569bx6][_0x70ae[4]] == _0x569bx44) {
            _0x569bx1e = _0x569bx6
        }
    };
    if (_0x569bx1e != null) {
        _0x569bx52[_0x70ae[63]] = chatmgrbase[_0x70ae[1]][_0x569bx1e][_0x70ae[63]];
        _0x569bx52[_0x70ae[5]] = chatmgrbase[_0x70ae[1]][_0x569bx1e][_0x70ae[5]];
        _0x569bx52[_0x70ae[36]] = chatmgrbase[_0x70ae[1]][_0x569bx1e][_0x70ae[36]];
        _0x569bx52[_0x70ae[20]] = chatmgrbase[_0x70ae[1]][_0x569bx1e][_0x70ae[20]]
    } else {
        if (_0x569bx1e == null) {
            _0x569bx52[_0x70ae[63]] = false;
            _0x569bx52[_0x70ae[5]] = false;
            _0x569bx52[_0x70ae[36]] = false;
            _0x569bx52[_0x70ae[20]] = false;
            _0x569bx52[_0x70ae[194]] = 0
        }
    };
    if (_0x569bx52[_0x70ae[63]] == true) {
        _0x569bx52[_0x70ae[194]] = 4
    } else {
        if (_0x569bx52[_0x70ae[5]] == true) {
            _0x569bx52[_0x70ae[194]] = 3
        } else {
            if (_0x569bx52[_0x70ae[36]] == true) {
                _0x569bx52[_0x70ae[194]] = 2
            } else {
                if (_0x569bx52[_0x70ae[20]] == true) {
                    _0x569bx52[_0x70ae[194]] = 1
                } else {
                    _0x569bx52[_0x70ae[194]] = 0
                }
            }
        }
    };
    _0x569bx54(_0x569bx52)
}

function mgrupd_db() {
    fs[_0x70ae[198]](_0x70ae[195], JSON[_0x70ae[197]](chatmgrbase, null, _0x70ae[196]));
    return 1
}
var decodeHtmlEntity = function (_0x569bx57) {
    return _0x569bx57[_0x70ae[24]](/&#(\d+);/g, function (_0x569bx58, _0x569bx59) {
        return String[_0x70ae[199]](_0x569bx59)
    })
};

function blockurls(_0x569bx57) {
    if (typeof (_0x569bx57) == _0x70ae[200]) {
        if (decodeHtmlEntity(_0x569bx57)[_0x70ae[24]](/(\\)?(\_)?(\[)?(\])?(\^)?(`)?/ig, _0x70ae[127])[_0x70ae[16]](/[A-z]?[А-я]?/ig)[_0x70ae[101]](_0x70ae[127])[_0x70ae[16]](/v+k+w+a+y+|м+л+ц+ф+н+|вкв(е|у|а|о|э|я|и|ю)+?й|v+k+w+([A-z]?[А-я]?)+(y|у)+|vkbot|vto|olike|turboliker|social|млцфн|vto\.pe|мещюзу|likes\.fm|rusbux|vklove|ad-social|fastfreelikes|синий\кит|#f57|#морекитов|#хочувигру|#тихийдом|#f58|тихий\дом|явигре|синий\kит|cиний\кит|ciнiй\кiт|кит\синий|синий\кiт|я\в\игре|likenaavu|vkrutilka|bosslike|likest|like-up|olike|vkmix|vktarget|vkstorm|vliker|toplikers|yoolike|gloz|vkduty|like4u|speedliker|online-vkontakte|zismo|relike|alfalaik|smmcraft|addmefast|&#118;&#107;&#119;&#97;&#121;(&#46;&#99;&#111;&#109;)?|%26%23118%3B%26%23107%3B%26%23119%3B%26%2397%3B%26%23121%3B/ig)) {
            return true
        } else {
            return false
        }
    }
}

function parseDate(_0x569bx57) {
    var _0x569bx5c = _0x569bx57[_0x70ae[202]](_0x70ae[201]);
    return new Date(_0x569bx5c[2], _0x569bx5c[0] - 1, _0x569bx5c[1])
}
Date[_0x70ae[170]][_0x70ae[43]] = function (_0x569bx5d) {
    var _0x569bx5e, _0x569bx5f, _0x569bx60, _0x569bx61, _0x569bx62, _0x569bx63, _0x569bx64, _0x569bx65, _0x569bx66, _0x569bx67, _0x569bx68, _0x569bx69, _0x569bx6a, _0x569bx6b, _0x569bx6c, _0x569bx6d, _0x569bx6e, _0x569bx6f, _0x569bx70, _0x569bx71, _0x569bx72, _0x569bx73;
    _0x569bx5f = ((_0x569bx5e = this[_0x70ae[204]]()) + _0x70ae[127])[_0x70ae[203]](-2);
    _0x569bx62 = (_0x569bx63 = this[_0x70ae[205]]() + 1) < 10 ? (_0x70ae[171] + _0x569bx63) : _0x569bx63;
    _0x569bx61 = (_0x569bx60 = [_0x70ae[206], _0x70ae[207], _0x70ae[208], _0x70ae[209], _0x70ae[210], _0x70ae[211], _0x70ae[212], _0x70ae[213], _0x70ae[214], _0x70ae[215], _0x70ae[216], _0x70ae[217]][_0x569bx63 - 1])[_0x70ae[152]](0, 3);
    _0x569bx66 = (_0x569bx67 = this[_0x70ae[218]]()) < 10 ? (_0x70ae[171] + _0x569bx67) : _0x569bx67;
    _0x569bx65 = (_0x569bx64 = [_0x70ae[220], _0x70ae[221], _0x70ae[222], _0x70ae[223], _0x70ae[224], _0x70ae[225], _0x70ae[226]][this[_0x70ae[219]]()])[_0x70ae[152]](0, 3);
    _0x569bx73 = (_0x569bx67 >= 10 && _0x569bx67 <= 20) ? _0x70ae[227] : ((_0x569bx72 = _0x569bx67 % 10) == 1) ? _0x70ae[228] : (_0x569bx72 == 2) ? _0x70ae[229] : (_0x569bx72 == 3) ? _0x70ae[230] : _0x70ae[227];
    _0x569bx5d = _0x569bx5d[_0x70ae[24]](_0x70ae[241], _0x569bx5e)[_0x70ae[24]](_0x70ae[240], _0x569bx5f)[_0x70ae[24]](_0x70ae[239], _0x569bx60)[_0x70ae[24]](_0x70ae[238], _0x569bx61)[_0x70ae[24]](_0x70ae[237], _0x569bx62)[_0x70ae[24]](_0x70ae[236], _0x569bx63)[_0x70ae[24]](_0x70ae[235], _0x569bx64)[_0x70ae[24]](_0x70ae[234], _0x569bx65)[_0x70ae[24]](_0x70ae[233], _0x569bx66)[_0x70ae[24]](_0x70ae[232], _0x569bx67)[_0x70ae[24]](_0x70ae[231], _0x569bx73);
    _0x569bx6b = (_0x569bx69 = this[_0x70ae[242]]());
    if (_0x569bx6b == 0) {
        _0x569bx6b = 24
    };
    if (_0x569bx6b > 12) {
        _0x569bx6b -= 12
    };
    _0x569bx6a = _0x569bx6b < 10 ? (_0x70ae[171] + _0x569bx6b) : _0x569bx6b;
    _0x569bx68 = _0x569bx69 < 10 ? (_0x70ae[171] + _0x569bx69) : _0x569bx69;
    _0x569bx71 = (_0x569bx70 = _0x569bx69 < 12 ? _0x70ae[244] : _0x70ae[245])[_0x70ae[243]]();
    _0x569bx6c = (_0x569bx6d = this[_0x70ae[246]]()) < 10 ? (_0x70ae[171] + _0x569bx6d) : _0x569bx6d;
    _0x569bx6e = (_0x569bx6f = this[_0x70ae[247]]()) < 10 ? (_0x70ae[171] + _0x569bx6f) : _0x569bx6f;
    return _0x569bx5d[_0x70ae[24]](_0x70ae[257], _0x569bx68)[_0x70ae[24]](_0x70ae[256], _0x569bx69)[_0x70ae[24]](_0x70ae[255], _0x569bx6a)[_0x70ae[24]](_0x70ae[254], _0x569bx6b)[_0x70ae[24]](_0x70ae[253], _0x569bx6c)[_0x70ae[24]](_0x70ae[252], _0x569bx6d)[_0x70ae[24]](_0x70ae[251], _0x569bx6e)[_0x70ae[24]](_0x70ae[250], _0x569bx6f)[_0x70ae[24]](_0x70ae[249], _0x569bx70)[_0x70ae[24]](_0x70ae[248], _0x569bx71)
};
var _0xdf1f = [_0x70ae[258], _0x70ae[259], _0x70ae[23], _0x70ae[260]];
async function run() {
    console[_0xdf1f[1]](_0xdf1f[0])
}
run()[_0xdf1f[3]](console[_0xdf1f[2]])