# Graph Report - franch-calculator  (2026-09-10)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 118 nodes · 125 edges · 16 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `367f1cc4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Navigation.vue
- App.vue
- package.json
- devDependencies
- FourStep.vue
- successResult.vue
- FiveStep.vue
- SecondStep.vue
- SixStep.vue
- more-features.js

## God Nodes (most connected - your core abstractions)
1. `calculator()` - 4 edges
2. `scripts` - 4 edges
3. `checkDifference()` - 2 edges
4. `initResultStep()` - 2 edges
5. `commit()` - 2 edges
6. `commit()` - 2 edges
7. `commit()` - 2 edges
8. `commit()` - 2 edges
9. `rent` - 2 edges
10. `element-plus` - 2 edges

## Surprising Connections (you probably didn't know these)
- `initResultStep()` --calls--> `calculator()`  [EXTRACTED]
  src/components/Navigation.vue → src/calculator.js

## Import Cycles
- None detected.

## Communities (16 total, 0 thin omitted)

### Community 0 - "Navigation.vue"
Cohesion: 0.13
Nodes (12): calculator(), checkDifference(), immutable, rent, salary, counter, initResultStep(), inputValue (+4 more)

### Community 1 - "App.vue"
Cohesion: 0.12
Nodes (11): calculation_result, input_filled, ok_or_not, params, show_result, steps_arr, steps_counter, get_result (+3 more)

### Community 2 - "package.json"
Cohesion: 0.12
Nodes (15): element-plus, dependencies, element-plus, sass, vue, name, private, scripts (+7 more)

### Community 3 - "devDependencies"
Cohesion: 0.18
Nodes (11): less, devDependencies, less, unplugin-auto-import, unplugin-vue-components, vite, @vitejs/plugin-vue, unplugin-auto-import (+3 more)

### Community 4 - "FourStep.vue"
Cohesion: 0.20
Nodes (8): advance, commit(), inputValue, isDisabled, params, rent_cost_BC, rent_cost_SR, rent_cost_TC

### Community 5 - "successResult.vue"
Cohesion: 0.22
Nodes (7): get_result, orderCallback, params, profit_diff, success_beyond_18, success_in_9, success_in_between_10_and_18

### Community 6 - "FiveStep.vue"
Cohesion: 0.33
Nodes (4): advance, commit(), inputValue, params

### Community 7 - "SecondStep.vue"
Cohesion: 0.33
Nodes (4): advance, commit(), inputValue, params

### Community 8 - "SixStep.vue"
Cohesion: 0.33
Nodes (4): advance, commit(), inputValue, params

### Community 9 - "more-features.js"
Cohesion: 0.40
Nodes (4): calcAppEl, calcScriptEl, calcStylesEl, injectCalculatorBeforeEL

## Knowledge Gaps
- **57 isolated node(s):** `immutable`, `salary`, `counter`, `inputValue`, `result_obj` (+52 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **What connects `immutable`, `salary`, `counter` to the rest of the system?**
  _57 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Navigation.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.13071895424836602 - nodes in this community are weakly interconnected._
- **Should `App.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._