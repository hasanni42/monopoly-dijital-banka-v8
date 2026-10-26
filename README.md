# Monopoly Dijital Banka V8

Mobil tarayıcıda çalışan Node.js + Socket.IO tabanlı çok oyunculu Monopoly yardımcı uygulaması.

## Yerelde çalıştırma

Node.js **22.13+** kurun. Proje klasöründe:

```bash
npm install
npm start
```

`http://localhost:3000` adresini açın. Aynı yerel ağdaki telefonlar bilgisayarın LAN IP'si üzerinden bağlanabilir. Testler: `npm test`.

## GitHub

Depo oluşturun; `server.js`, `game.js`, `package.json`, `render.yaml`, `public/`, `test/`, `README.md`, `.gitignore` dosyalarını aynı klasör yapısıyla yükleyin. `data/` ve `node_modules/` yüklemeyin.

## Render

1. GitHub deponuzu Render'a bağlayın.
2. **New > Blueprint** ile `render.yaml` dosyasını kullanın veya Web Service oluşturun.
3. Node 22+ ortamında `npm install --omit=dev` ve `npm start` kullanın.
4. **Kalıcı disk gereklidir:** `DATA_DIR=/var/data`, disk mount `/var/data`. `render.yaml` Starter plan ve 1 GB disk tanımlar; **ücretli olabilir**. Ücretsiz geçici dosya sisteminde kayıtlar yeniden dağıtımda silinebilir.
5. Render URL'sini arkadaşlarınıza gönderin; oda koduyla katılsınlar.

## Özellikler

6 haneli oda kodu, 8 oyuncu, avatar, hazır olma, 4 oyun modu, 40 kare tahta, zar/sıra, otomatik maaş/vergi/kira, tapu/ev/otel/ipotek, transfer, toplu banka, ticaret/karşı teklif, borç, iflas, canlı müzayede, sohbet, istatistik, başarılar, ses, rapor, yeniden bağlanma, SQLite kalıcı kayıt.

## Bilinen sınırlar

- Oyun kuralları sadeleştirilmiştir: hapishane, kart desteleri, resmi oyun tahtası ve bazı ev/otel dengesi kuralları tam Monopoly uygulaması değildir. Tahta ve fiyatlar örnektir.
- Ticarette karşı teklif yalnızca para tutarını değiştirebilir; mülk seçimi değişmez.
- Oyuncu oturumları tarayıcı localStorage'ında tutulur. Hesap/şifre sistemi ve çok cihazlı kimlik aktarımı yoktur.
- Müzayede süresi 60 saniyedir; yönetici süre dolduktan sonra sonuçlandırır.
- Otomatik kira yetersiz bakiye varsa mevcut nakit kadar tahsil edilir; kalan borç ayrıca kaydedilmez.
- SQLite tek sunucu örneği içindir; yatay ölçekleme desteklenmez.
- Oda sohbeti sunucuda saklanır; kullanıcılar arası içerik moderasyonu yoktur.
- Tarayıcı sekmesi açıkken çalışır; çok oyunculu kullanım için internet ve çalışan sunucu gerekir. Çevrimdışı V6 ayrı uygulamadır.
