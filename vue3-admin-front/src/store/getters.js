export const getStageInfo = state => {
    const { stageConfig } = state
    const cache = {}
    const findStage = (stages, name) => {
      let result
      if (Array.isArray(stages)) {
        for (let i = 0; i < stages.length; i += 1) {
          result = findStage(stages[i], name)
          if (result) {
            break
          }
        }
        return result
      }
  
      if (stages.children && stages.children.length) {
        result = findStage(stages.children, name)
        if (result) {
          result.unshift(stages)
        }
        return result
      }
  
      if (stages.name === name) {
        return [stages]
      }
      return false
    }
    return name => {
      if (cache[name]) {
        return cache[name]
      }
      const stageInfo = findStage(stageConfig, name)
      if (stageInfo) {
        cache[name] = stageInfo
      }
      return stageInfo
    }
  }