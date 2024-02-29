# Flight API

### ERD:

![ERD](./erdFlightAPI.png)

### Folder/File Structure:

```
    logs/
    src/
        configs/
            dbConnection.js
            swagger.json
        controllers/
            user.js
        helpers/
            passwordEncrypt.js
            sendMail.js
            sync.js
        middlewares/
            authentication.js
            errorHandler.js
            findSearchSortPage.js
            logger.js
            permissions.js
        models/
            token.js
            user.js
        routes/
            auth.js
            document.js
            token.js
            user.js
    .env
    .gitignore
    index.js
    package.json
    readme.md
    swaggerAutogen.js

```

- admin aşağıdakilerin hepsini gerçekleştirebilir
- herhangi bir kullanıcı siteme kayıt olabilir
- admin user staff / admin oluşturuabilir veya bir user ı staff / admin olarak değiştirebilir
- staff user bir veya birden fazla flight oluşturabilir
- user birden fazla rezervasyon yapabilir
- user birden fazla passenger oluşturabilir
- bir flight ta birden fazla rezervasyon olabilir
-
- her user kendi rezervasyonunu görebilir / değiştirebilir
- uçuşlar listelenirken gelecekteki uçuşlar listelensin
- bir uçuştaki yolcular listelenebilsin
- her bir yolcunun yaptığı uçuşlar listelenebilsin
- zamanı gelmiş veya geçmiş rezervasyonlarda değişiklik yapılamasın
-
- proje yapılan seçime göre simple token veya jwt ile token konrolü yapsın
