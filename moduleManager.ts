class ModuleManager {
  addSingleton<T>(singleton: any, ...dependencies: Array<any>): T {
    const dependenciesInstances = dependencies.map((dependency) => {
      // Se a dependencia não estiver instanciada, instancie
      if (typeof dependency === "function") {
        return new dependency();
      }
      // Se a dependencia estiver instanciada, retorne a instância
      return dependency;
    });

    // Array de instâncias
    return new singleton(...dependenciesInstances);
  }
}

export const moduleManager = new ModuleManager();
