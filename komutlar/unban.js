module.exports = {
  name: "unban",
  code: `
$yasaklamakaldir[$sunucuID;$mesaj[1]]
$tanimlama[<@$mesaj[1]> Kullanıcısının Yasağı Başarıyla Kaldırıldı.]
$renk[#008000]
$onlyIf[$mesaj[2]!=;{newEmbed:{title:Hata!}{description:Bir Sebep Girmelisin}{color:#FF0000}}]
$onlyIf[$mesaj[1]!=;{newEmbed: {title:Hata!}{description:Yasaklamasını Kaldırmak İstediğin Kullanıcının IDsini Gir!}{color:#FF0000}}]
$onlyPerms[banmembers;{newEmbed:{title:Hata!}{description:Bu Komutu Kullanabilmek İçin **Üyeleri Yasakla** Yetkisine Sahip Olmalısın!}{color:#FF0000}}]
  `
}
