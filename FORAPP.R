# If not already installed
# install.packages("dunn.test")

library(dunn.test)

# Updated data
data <- data.frame(
  Sedentary = c(517,269,5027,232,578,252,450,145,177,183,454,627,308,325,239,92,269,203,184,207,946,0,289,685,298,138),
  Trained = c(113,99,632,44,169,289,57,238,215,59,109,209,30,93,0,21,43,38,521,316,137,359,67,502,201,489),
  HighlyTrained = c(0,0,0,10,0,0,0,0,0,26,0,0,98,0,0,0,0,0,0,28,37,0,0,0,65,75),
  Elite = c(0,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,28),
  WorldClass = c(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5)
)

# Flatten to long format
participants <- c(data$Sedentary, data$Trained, data$HighlyTrained, data$Elite, data$WorldClass)
group <- c(
  rep("Sedentary", nrow(data)),
  rep("Trained", nrow(data)),
  rep("HighlyTrained", nrow(data)),
  rep("Elite", nrow(data)),
  rep("WorldClass", nrow(data))
)

# Kruskal-Wallis test
kruskal.test(participants ~ group)

# Dunn's post-hoc test with Bonferroni correction
dunn.test(participants, group, method = "bonferroni")

