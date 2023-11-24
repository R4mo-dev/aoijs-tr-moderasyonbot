module.exports = {
  name: "ban",
  code: `
$yasakla[$sunucuID;$mentioned[1]]
$tanimlama[<@$mentioned[1]> Kullanıcısı Sunucudan Başarıyla Yasaklandı.]
$onlyIf[$noMentionMessage!=;{newEmbed:{title:Hata!}{description:Bir Sebep Girmelisin}{color:#FF0000}}]
$onlyIf[$mentioned[1]!=;{newEmbed:{title:Hata!}{description:Yasaklamak İstediğin Kullanıcıyı Etiketle!}{color:#FF0000}}]
$onlyPerms[banmembers;{newEmbed:{title:Hata!}{description:Bu Komutu Kullanabilmek İçin **Üyeleri Yasakla** Yetkisine Sahip Olmalısın!}{color:#FF0000}}]
  `
}
