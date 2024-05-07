class ConfigKeys {
  deleteKey(key: string) {
    if (key) {
      return "OK";
    } else {
      return "Error";
    }
  }
}
class registry {
  deleteReference(page: PageName) {
    if (page.name) {
      return "OK";
    } else {
      return "Error";
    }
  }
}

class PageName {
  key: string;
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeKey() {
    if (this.key) {
      throw new Error("Key is already set");
    } else {
      this.key = Math.random().toString();
      return "OK";
    }
  }
}
class Page {
  name: PageName;
  constructor(name: string) {
    this.name = new PageName(name);
  }
}
{
  // AS-IS
  class PageManager {
    constructor(private registry: registry, private configKeys: ConfigKeys) {
      this.registry = registry;
      this.configKeys = configKeys;
    }

    delete(page: Page) {
      if (this.deletePage(page) === "OK") {
        if (this.registry.deleteReference(page.name) === "OK") {
          if (this.configKeys.deleteKey(page.name.makeKey()) === "OK") {
            console.log("Page Initialized");
          } else {
            console.error("delete Failed");
          }
        }
      } else {
        console.error("delete Failed");
        return "Error";
      }
    }

    deletePage(page: Page) {
      if (page.name.key) {
        return "OK";
      } else {
        return "Error";
      }
    }
  }
}

{
  // TO-BE
  class PageManager {
    constructor(private registry: registry, private configKeys: ConfigKeys) {
      this.registry = registry;
      this.configKeys = configKeys;
    }

    delete(page: Page) {
      try {
        this.deletePage(page);
        this.registry.deleteReference(page.name);
        this.configKeys.deleteKey(page.name.makeKey());
      } catch (e) {
        console.error("delete Failed");
        return "Error";
      }
    }

    deletePage(page: Page) {
      if (page.name.key) {
        return "OK";
      } else {
        return "Error";
      }
    }
  }
}

{
  // TO-BE (Refactoring)

  class PageManager {
    constructor(private registry: registry, private configKeys: ConfigKeys) {
      this.registry = registry;
      this.configKeys = configKeys;
    }

    delete(page: Page) {
      try {
        this.deletePageAndAllReferences(page);
      } catch (e) {
        console.error("delete Failed");
        return "Error";
      }
    }

    deletePageAndAllReferences(page: Page) {
      this.deletePage(page);
      this.registry.deleteReference(page.name);
      this.configKeys.deleteKey(page.name.makeKey());
    }

    deletePage(page: Page) {
      if (page.name.key) {
        return "OK";
      } else {
        return "Error";
      }
    }
  }
}
